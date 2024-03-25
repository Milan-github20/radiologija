import React from "react";
import logo from "../../../assets/ukcrs-removebg-preview.png";
import styles from "./HeaderKontrast.module.css";

const HeaderKontrastInfo = (props) => {
  const imeKorisnika = props.korisnik
    ? `${props.korisnik.ime} ${props.korisnik.prezime}`
    : null;
  return (
    <div
      className={`${styles.header} ${
        props.headerAlt ? styles["header-alt"] : ""
      } `}
    >
      <img src={logo} alt="logo" />
      <h1>{imeKorisnika}</h1>
    </div>
  );
};

export default HeaderKontrastInfo;
