import React from "react";
import Button from "../UI/Button/Button";
import styles from "./Potvrdi_pol.module.css";

const PotvrdaPol = ({ pol, setKorak, setKorisnik, polAlt }) => {
  return (
    <>
      <h2 className={styles.potvrdiPol}>Vi ste {pol} pola?</h2>
      <div className={styles.buttons}>
        <Button
          back
          onClick={() => {
            setKorak(2);
            setKorisnik((prev) => {
              if (pol === "muškog") {
                const noviKorisnikMusko = { ...prev };
                noviKorisnikMusko.pol = "F";
                return noviKorisnikMusko;
              } else if (pol === "ženskog") {
                const noviKorisnikZensko = { ...prev };
                noviKorisnikZensko.pol = "M";
                return noviKorisnikZensko;
              }
            });
          }}
        >
          NE, {polAlt} pola sam
        </Button>
        <Button
          next
          onClick={() => {
            setKorak(2);
          }}
        >
          DA
        </Button>
      </div>
    </>
  );
};

export default PotvrdaPol;
