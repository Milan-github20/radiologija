import React from "react";
import logo from "../../../assets/ukc.png";
import styles from "./Header.module.css";

const Header = ({ korisnik }) => {
  const imeKorisnika = korisnik ? `${korisnik.ime} ${korisnik.prezime}` : null;
  return (
    <div className={styles.header}>
      <img src={logo} alt="logo" />
      <h1>{imeKorisnika}</h1>
    </div>
  );
};

export default Header;
