import React from "react";
import styles from "./Button.module.css";

const Button = ({
                  alt,
                  disabled,
                  buttonBack,
                  back,
                  potpisButtonNazad,
                  potpisButton,
                  onClick,
                  style,
                  next,
                  info,
                  disabled2,
                  text
                }) => {
  return (
    <button
      className={`
        ${styles.btn}
        ${alt ? styles.btn_alt : ""}
        ${disabled ? styles.btn_disabled : ""}
        ${next ? styles.btn_next : ""} 
        ${back ? styles.btn_back : ""}
        ${info ? styles.btn_info : ""}
        ${disabled2 ? styles.btn_disabled2 : ""}
        ${buttonBack ? styles.btn_buttonBack : ""}
        ${potpisButton ? styles.btn_potpis : ""} 
        ${potpisButtonNazad ? styles.btn_potpis_nazad : ""}
      `}
      onClick={onClick}
      style={style}
    >
      {text}
    </button>
  );
};

export default Button;
