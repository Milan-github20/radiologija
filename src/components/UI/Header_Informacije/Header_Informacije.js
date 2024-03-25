import React from "react";
import logo from "../../../assets/ukcrs-removebg-preview.png";
import styles from "./Header_Informacije.module.css";

const Header = (props) => {
  //   const imeKorisnika = korisnik ? `${korisnik.ime} ${korisnik.prezime}` : null;
  return (
    <>
      <div className={styles.header}>
        <img src={logo} alt="logo" />
      </div>
      <div className={styles.children}>
        <h1>{props.children}</h1>
      </div>
    </>
  );
};

export default Header;
