import styles from "./image_file_input.module.css";
import React, { memo, useRef, useState } from "react";

const ImageFileInput = memo(({ imageUploader, name, onFileChange }) => {
  const [loading, setLoading] = useState(false);
  const inputRef = useRef();
  const onButtonClick = (e) => {
    e.preventDefault();
    inputRef.current.click();
  };
  const onChange = async (e) => {
    setLoading(true);
    const uploaded = await imageUploader.upload(e.target.files[0]);
    setLoading(false);
    onFileChange({
      name: uploaded.original_filename,
      url: uploaded.url,
    });
  };
  return (
    <div className={styles.container}>
      <input
        ref={inputRef}
        className={styles.input}
        onChange={onChange}
        type="file"
        accept="image/*"
        name="file"
      />
      {!loading && (
        <button
          className={`${styles.button} ${name ? styles.pink : styles.grey}`}
          onClick={onButtonClick}
        >
          {name || "No image file"}
        </button>
      )}
      {loading && <div className={styles.loading}></div>}
    </div>
  );
});

export default ImageFileInput;
