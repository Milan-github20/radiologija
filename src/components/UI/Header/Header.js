import React from "react";
import logo from "../../../assets/ukcrs-removebg-preview.png";
import styles from "./Header.module.css";
import Button from "../Button/Button";
import x from "../../../assets/close.png";

const Header = ({ odjava, korisnik, headerAlt }) => {
  // const imeKorisnika = korisnik ? `${korisnik.ime} ${korisnik.prezime}` : null;
  return (
    <div
      className={`${styles.header} ${headerAlt ? styles["header-alt"] : ""} `}
    >
      <img src={logo} alt="logo" />
      {/* <h1>{imeKorisnika}</h1> */}
      <div className={styles.button}>
        <Button
          alt
          back
          onClick={odjava}
          text={<img style={{ width: "40%", height: "50%" }} src={x} alt="x" />}
        />
      </div>
    </div>
  );
};

export default Header;
