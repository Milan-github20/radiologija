import React from "react";
import Button from "../UI/Button/Button";
import styles from "./Potvrdi_pol.module.css";

const PotvrdaPol = ({ pol, setKorak, korisnik, setKorisnik, polAlt }) => {
  console.log(korisnik);
  console.log(pol);
  return (
    <>
      <h2 className={styles.potvrdiPol}>Vi ste {pol} pola? Potvrdite.</h2>
      <div className={styles.buttons}>
        <Button
          next
          onClick={() => {
            setKorak(2);
          }}
        >
          DA
        </Button>
        <Button
          back
          onClick={() => {
            setKorak(2);
            setKorisnik((prev) => {
              if (pol === "Muškog") {
                const noviKorisnikMusko = { ...prev };
                noviKorisnikMusko.pol = "F";
                return noviKorisnikMusko;
              } else if (pol === "Ženskog") {
                const noviKorisnikZensko = { ...prev };
                noviKorisnikZensko.pol = "M";
                return noviKorisnikZensko;
              }
            });
          }}
        >
          NE, {polAlt} pola sam
        </Button>
      </div>
    </>
  );
};

export default PotvrdaPol;
