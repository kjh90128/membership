import styles from "./search.module.css";
import React, { useRef } from "react";
import Button from "../button/button";

const Search = ({ onSearch }) => {
  const keywordRef = useRef();
  const kindRef = useRef();
  const formRef = useRef();

  const onChange = (e) => {
    e.preventDefault();
    const kind = kindRef.current.value;
    const keyword = keywordRef.current.value;

    onSearch(kind, keyword);
  };

  return (
    <form className={styles.form} ref={formRef}>
      <select ref={kindRef} name="keyword" className={styles.select}>
        <option placeholder="department">department</option>
        <option placeholder="name">name</option>
        <option placeholder="position">position</option>
      </select>
      <input
        type="search"
        placeholder="search"
        name="search"
        className={styles.search}
        ref={keywordRef}
      />
      <Button name="Search" onClick={onChange} />
    </form>
  );
};

export default Search;
