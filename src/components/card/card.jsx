import React, { memo } from "react";
import styles from "./card.module.css";

const DEFAULT_IMAGE = "/images/user.png";
const Card = memo(({ card }) => {
  const {
    name,
    department,
    position,
    email,
    message,
    status,
    fileURL,
    phone,
    hiredate,
  } = card;
  const url = fileURL || DEFAULT_IMAGE;

  return (
    <li className={`${styles.card} ${getStyles(status)}`}>
      <img src={url} alt={`${name} profile`} className={styles.avatar} />
      <div className={styles.info}>
        <div className={styles.default}>
          <h1 className={styles.name}>{name}</h1>
          <p className={styles.hiredate}>{hiredate}</p>
        </div>
        <div className={styles.company}>
          <p className={styles.department}>{department}</p>
          <p className={styles.position}>({position})</p>
        </div>
        <div className={styles.border}></div>
        <p className={styles.phone}>
          <span className={styles.label}>전화번호</span> {phone}
        </p>
        <p className={styles.email}>
          <span className={styles.label}>이메일</span> {email}
        </p>
        <p className={styles.message}>{message}</p>
      </div>
    </li>
  );
});

function getStyles(status) {
  switch (status) {
    case "quit":
      return styles.quit;
    case "incumbent":
      return styles.incumbent;
    case "get fired":
      return styles.fired;
    default:
      throw new Error(`unknown status: ${status}`);
  }
}
export default Card;
