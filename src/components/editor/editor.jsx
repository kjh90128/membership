import React from "react";
import CardAddForm from "../card_add_form/card_add_form";
import CardEditForm from "../card_edit_form/card_edit_form";

import styles from "./editor.module.css";

const Editor = ({
  FileInput,
  cards,
  addCard,
  updateCard,
  deleteCard,
  previewCard,
}) => (
  <section className={styles.editor}>
    <div className={styles.subHeader}>
      <h1 className={styles.title}>Staff Info</h1>
    </div>
    {Object.keys(cards).map((key) => (
      <CardEditForm
        key={key}
        FileInput={FileInput}
        card={cards[key]}
        updateCard={updateCard}
        deleteCard={deleteCard}
        previewCard={previewCard}
      />
    ))}
    <CardAddForm FileInput={FileInput} onAdd={addCard} />
  </section>
);

export default Editor;
