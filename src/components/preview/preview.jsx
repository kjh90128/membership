import React, { memo } from "react";
import Card from "../card/card";
import styles from "./preview.module.css";
import Button from "../button/button";

const Preview = memo(({ cards, onAllList }) => {
  const onSubmit = () => {
    onAllList();
  };

  return (
    <section className={styles.preview}>
      <div className={styles.subHeader}>
        <h1 className={styles.title}>Staff Preview</h1>
        <Button name="All List" onClick={onSubmit} btnStyle="btnStyle" />
      </div>

      <ul className={styles.cards}>
        {Object.keys(cards).length > 0 ? (
          Object.keys(cards).map((key) => <Card card={cards[key]} key={key} />)
        ) : (
          <li>- No Data -</li>
        )}
      </ul>
    </section>
  );
});
export default Preview;
