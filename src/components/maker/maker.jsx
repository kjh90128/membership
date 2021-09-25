import React, { useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Editor from "../editor/editor";
import Footer from "../footer/footer";
import Header from "../header/header";
import Preview from "../preview/preview";
import Search from "../search/search";
import styles from "./maker.module.css";

const Maker = ({ FileInput, authService, memberRepository }) => {
  const historyState = useHistory().state;
  const history = useHistory();
  const [cards, setCards] = useState({});
  const [result, setResult] = useState({});
  const [userId, setUserId] = useState(historyState && historyState.id);

  const onLogout = useCallback(() => {
    authService.logout();
  }, [authService]);

  useEffect(() => {
    if (!userId) {
      return;
    }
    const stopSync = memberRepository.syncMember(userId, (cards) => {
      setCards(cards);
      setResult(cards);
    });
    return () => stopSync();
  }, [memberRepository, userId]);

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (user) {
        setUserId(user.uid);
      } else {
        history.push("/");
      }
    });
  }, [authService, userId, history]);

  const createOrupdateCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
    memberRepository.saveMember(userId, card);
  };

  const deleteCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      delete updated[card.id];
      if (Object.keys(updated).length === 0) {
        setResult(() => {
          return {};
        });
      }

      return updated;
    });
    memberRepository.removeMember(userId, card);
  };

  const previewCard = (card) => {
    setResult(() => {
      const updated = {};
      updated[card.id] = card;
      return updated;
    });
  };

  const onAllList = () => {
    const stopSync = memberRepository.syncMember(userId, (cards) => {
      setCards(cards);
      setResult(cards);
    });
    return () => stopSync();
  };

  const onSearch = (kind, keyword) => {
    memberRepository.search(userId, kind, keyword, (cards) => {
      setCards(cards);
      setResult(cards);
    });
  };

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.search}>
        <Search onSearch={onSearch} />
      </div>
      <div className={styles.container}>
        <Editor
          FileInput={FileInput}
          cards={cards}
          addCard={createOrupdateCard}
          updateCard={createOrupdateCard}
          deleteCard={deleteCard}
          previewCard={previewCard}
        />
        <Preview cards={result} onAllList={onAllList} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
