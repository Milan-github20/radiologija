import React, { useEffect } from "react";
import styles from "./SalterNotifikacija.module.css";

const SalterNotifikacija = ({
  setKorak,
  setKorisnik,
  setTrenutnaStranicaApp,
}) => {
  useEffect(() => {
    setTimeout(() => {
      setKorisnik(null);
      setTrenutnaStranicaApp(0);
    }, 5000);
  }, [setKorak, setKorisnik, setTrenutnaStranicaApp]);
  return (
    <div className={styles.mainDiv}>
      <h2 className={styles.h2}>JAVITE SE OSOBLJU NA ŠALTERU</h2>
    </div>
  );
};

export default SalterNotifikacija;
