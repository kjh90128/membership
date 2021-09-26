import React, { useRef } from "react";
import Button from "../button/button";
import styles from "./card_edit_form.module.css";

const CardEditForm = ({
  FileInput,
  card,
  updateCard,
  deleteCard,
  previewCard,
}) => {
  const nameRef = useRef();
  const departmentRef = useRef();
  const statusRef = useRef();
  const positionRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();
  const hiredateRef = useRef();
  const phoneRef = useRef();

  const {
    name,
    department,
    status,
    position,
    email,
    message,
    hiredate,
    phone,
    fileName,
  } = card;

  const onFileChange = (file) => {
    updateCard({
      ...card,
      fileName: file.name,
      fileURL: file.url,
    });
  };

  const onChange = (e) => {
    if (e.currentTarget == null) {
      return;
    }
    e.preventDefault();
    updateCard({ ...card, [e.currentTarget.name]: e.currentTarget.value });
  };

  const onSubmit = () => {
    deleteCard(card);
  };

  const onPreview = (e) => {
    e.preventDefault();
    previewCard(card);
  };

  const onFocus = (e) => {
    e.currentTarget.type = "date";
  };

  const onBlur = (e) => {
    e.currentTarget.type = "text";
    e.currentTarget.placeholder = "Effective date";
  };

  return (
    <form className={styles.form}>
      <input
        className={styles.input}
        type="text"
        name="name"
        value={name}
        ref={nameRef}
        onChange={onChange}
      />
      <input
        className={styles.input}
        type="text"
        name="department"
        value={department}
        ref={departmentRef}
        onChange={onChange}
      />
      <select
        name="status"
        value={status}
        ref={statusRef}
        className={styles.select}
        onChange={onChange}
      >
        <option placeholder="incumbent">incumbent</option>
        <option placeholder="quit">quit</option>
        <option placeholder="get fired">get fired</option>
      </select>
      <input
        className={styles.info}
        type="text"
        name="position"
        value={position}
        ref={positionRef}
        onChange={onChange}
      />
      <input
        ref={hiredateRef}
        value={hiredate}
        name="hiredate"
        className={styles.info}
        type="text"
        placeholder="Effective date"
        onFocus={onFocus}
        onBlur={onBlur}
        onChange={onChange}
      />
      <input
        ref={phoneRef}
        value={phone}
        name="phone"
        className={styles.info}
        type="text"
        onChange={onChange}
      />
      <input
        className={styles.info}
        type="text"
        name="email"
        value={email}
        ref={emailRef}
        onChange={onChange}
      />
      <textarea
        className={styles.textarea}
        name="message"
        value={message}
        ref={messageRef}
        onChange={onChange}
      ></textarea>
      <div className={styles.fileInput}>
        <FileInput name={fileName} onFileChange={onFileChange} />
      </div>
      <Button name="Delete" onClick={onSubmit} />
      <Button name="Preview" onClick={onPreview} />
    </form>
  );
};

export default CardEditForm;
