import React, { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import Preview from '../preview/preview';
import styles from './maker.module.css';

const Maker = ({FileInput, authService, memberRepository}) => {
  const historyState = useHistory().state;
  const history = useHistory();
  const [cards, setCards] = useState({});
  const [userId, setUserId] = useState(historyState && historyState.id);

  const onLogout = useCallback(() =>{
    authService.logout();
  },[authService]);

  useEffect(()=>{
    if(!userId){
      return;
    }
    const stopSync = memberRepository.syncMember(userId, cards=>{
      setCards(cards);
    })
    return () => stopSync();
  },[userId, memberRepository]);

  useEffect(()=>{
    authService.onAuthChange(user=>{
      if(user){
        setUserId(user.uid);
      }else{
        history.push('/');
      }
    })
  },[authService, userId, history]);

  const createOrupdateCard = (card)=>{
    setCards(cards =>{
      const updated = {...cards};
      updated[card.id]=card;
      return updated;
    });
    memberRepository.saveMember(userId, card);
  }

  const deleteCard = (card)=>{
    setCards(cards =>{
      const updated = {...cards};
      delete updated[card.id];
      return updated;
    });
    memberRepository.removeMember(userId, card);
  }
  return(
    <section className={styles.maker}>
      <Header onLogout={onLogout}/>
      <div className={styles.container}>
        <Editor FileInput={FileInput} cards={cards} addCard={createOrupdateCard} updateCard={createOrupdateCard} deleteCard={deleteCard} />
        <Preview cards={cards}/>
      </div>
      <Footer />
    </section>
  );
}

export default Maker;