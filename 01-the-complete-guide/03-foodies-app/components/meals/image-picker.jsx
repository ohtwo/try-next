"use client";

import { useRef } from "react";

import styles from "./image-picker.module.css";

export default function ImagePicker({ label, name }) {
  const imageInput = useRef();

  function handlePickButton() {
    imageInput.current.click();
  }

  return (
    <div className={styles.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={styles.controls}>
        <input
          className={styles.input}
          type="file"
          id={name}
          accept="image/png, image/jpg"
          name={name}
          ref={imageInput}
        />
        <button
          className={styles.button}
          type="button"
          onClick={handlePickButton}
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
}
