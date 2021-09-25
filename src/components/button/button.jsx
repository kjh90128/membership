import React, { memo } from "react";
import styles from "./button.module.css";

const Button = memo(({ name, onClick, btnStyle }) => {
  let temp = btnStyle ? styles.btnStyle : styles.default;
  temp = name === "Delete" ? styles.delete : temp;

  return (
    <button className={`${styles.button} ${temp} `} onClick={onClick}>
      {name}
    </button>
  );
});
export default Button;
