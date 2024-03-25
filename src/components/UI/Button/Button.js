import React from "react";
import styles from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      className={`${styles.btn} ${props.alt ? styles["btn-alt"] : ""} ${
        props.disabled ? styles["btn-disabled"] : ""
      } ${props.next ? styles["btn-next"] : ""} ${
        props.back ? styles["btn-back"] : ""
      } ${props.info ? styles["btn-info"] : ""} ${
        props.disabled2 ? styles["btn-disabled2"] : ""
      } ${props.buttonBack ? styles["btn-buttonBack"] : ""}`}
      onClick={props.onClick}
      style={props.style}
    >
      {props.children}
    </button>
  );
};

export default Button;
