import React, { memo, useRef, useState } from "react";
import Button from "../button/button";
import styles from "./card_add_form.module.css";

const CardAddForm = memo(({ FileInput, onAdd }) => {
  const formRef = useRef();
  const nameRef = useRef();
  const departmentRef = useRef();
  const statusRef = useRef();
  const positionRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();
  const hiredateRef = useRef();
  const phoneRef = useRef();

  const [file, setFile] = useState({ fileName: null, fileURL: null });
  const onFileChange = (file) => {
    setFile({
      fileName: file.name,
      fileURL: file.url,
    });
  };
  const validateInput = (card) => {
    if (card.name === "") {
      nameRef.current.focus();
      return false;
    } else {
      return true;
    }
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const card = {
      id: Date.now(), //uuid
      name: nameRef.current.value,
      department: departmentRef.current.value || "",
      status: statusRef.current.value,
      position: positionRef.current.value || "",
      email: emailRef.current.value || "",
      hiredate: hiredateRef.current.value || "",
      phone: phoneRef.current.value || "",
      message: messageRef.current.value || "",
      fileName: file.fileName || "",
      fileURL: file.fileURL || "",
    };
    const validate = validateInput(card);
    if (!validate) {
      return;
    }

    formRef.current.reset();
    setFile({ fileName: null, fileURL: null });
    onAdd(card);
  };
  const onFocus = (e) => {
    e.currentTarget.type = "date";
  };
  const onBlur = (e) => {
    e.currentTarget.type = "text";
    e.currentTarget.placeholder = "Effective date";
  };
  return (
    <form className={styles.form} ref={formRef}>
      <input
        ref={nameRef}
        className={styles.input}
        type="text"
        name="name"
        placeholder="Name"
      />
      <input
        ref={departmentRef}
        className={styles.input}
        type="text"
        name="department"
        placeholder="Department"
      />
      <select
        ref={statusRef}
        name="status"
        placeholder="Status"
        className={styles.select}
      >
        <option placeholder="incumbent">incumbent</option>
        <option placeholder="quit">quit</option>
        <option placeholder="get fired">get fired</option>
      </select>
      <input
        ref={positionRef}
        className={styles.info}
        type="text"
        name="position"
        placeholder="Position"
      />
      <input
        ref={hiredateRef}
        className={styles.info}
        type="text"
        name="hiredate"
        placeholder="Effective date"
        onFocus={onFocus}
        onBlur={onBlur}
      />
      <input
        ref={phoneRef}
        className={styles.info}
        type="text"
        name="phone"
        placeholder="010-1234-5678"
        pattern="(010)-\d{3,4}-\d{4}"
      />
      <input
        ref={emailRef}
        className={styles.info}
        type="email"
        name="email"
        placeholder="Email"
      />
      <textarea
        ref={messageRef}
        className={styles.textarea}
        name="message"
        placeholder="Message"
      ></textarea>
      <div className={styles.fileInput}>
        <FileInput name={file.fileName} onFileChange={onFileChange} />
      </div>
      <Button name="Add" onClick={onSubmit} />
    </form>
  );
});

export default CardAddForm;
