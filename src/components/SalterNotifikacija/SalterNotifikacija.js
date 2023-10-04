import React, { useEffect } from "react";
import styles from "./SalterNotifikacija.module.css";

const SalterNotifikacija = ({ setKorak, setKorisnik }) => {
  useEffect(() => {
    setTimeout(() => {
      setKorisnik(null);
      setKorak(0);
    }, 5000);
  }, [setKorak, setKorisnik]);
  return (
    <div className={styles.mainDiv}>
      <h2 className={styles.h2}>MOLIMO VAS DA SE JAVITE NA ŠALTER</h2>
    </div>
  );
};

export default SalterNotifikacija;
