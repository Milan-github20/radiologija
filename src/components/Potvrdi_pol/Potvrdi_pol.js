import React from "react";
import Button from "../UI/Button/Button";
import styles from "./Potvrdi_pol.module.css";

const PotvrdaPol = ({ pol, setKorak, setKorisnik, polAlt, selectedOption }) => {
  return (
    <>
      <h2 className={styles.potvrdiPol}>Vi ste {pol} pola?</h2>
      <div className={styles.buttons}>
        <Button
          back
          onClick={() => {
            if (selectedOption === "Magnetna rezonanca") {
              setKorak(5);
            } else if (selectedOption === "Radioskopija") {
              setKorak(11);
            } else if (selectedOption === "Radiografija") {
              setKorak(2);
            } else if (selectedOption === "Ultrazvuk") {
              setKorak(6);
            } else if (selectedOption === "KT") {
              setKorak(9);
            }

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
            if (selectedOption === "Magnetna rezonanca") {
              setKorak(5);
            } else if (selectedOption === "Radioskopija") {
              setKorak(11);
            } else if (selectedOption === "Radiografija") {
              setKorak(2);
            } else if (selectedOption === "Ultrazvuk") {
              setKorak(6);
            } else if (selectedOption === "KT") {
              setKorak(9);
            }
          }}
        >
          DA
        </Button>
      </div>
    </>
  );
};

export default PotvrdaPol;
