import React, { useEffect } from "react";
import styles from "./SalterNotifikacija.module.css";

const SalterNotifikacija = ({
  setKorak,
  setKorisnik,
  setTrenutnaStranicaApp,
  setUser,
}) => {
  useEffect(() => {
    setTimeout(() => {
      setKorisnik(null);
      setUser("");
      setTrenutnaStranicaApp(0);
    }, 10000);
  }, [setKorak, setKorisnik, setTrenutnaStranicaApp, setUser]);
  return (
    <div className={styles.mainDiv}>
      <h2 className={styles.h2}>JAVITE SE OSOBLJU NA ŠALTERU</h2>
    </div>
  );
};

export default SalterNotifikacija;
