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
            if (selectedOption === "5") {
              setKorak(5);
            } else if (selectedOption === "7") {
              setKorak(11);
            } else if (selectedOption === "6") {
              setKorak(2);
            } else if (selectedOption === "8") {
              setKorak(6);
            } else if (selectedOption === "3") {
              setKorak(9);
            } else if (selectedOption === "9") {
              setKorak(4);
            }

            setKorisnik((prev) => {
              if (pol === "muškog") {
                const noviKorisnikMusko = { ...prev };
                noviKorisnikMusko.pol = 0;
                return noviKorisnikMusko;
              } else if (pol === "ženskog") {
                const noviKorisnikZensko = { ...prev };
                noviKorisnikZensko.pol = 1;
                return noviKorisnikZensko;
              }
            });
          }}
          text={`NE, ${polAlt} pola sam`}
        />
        <Button
          next
          onClick={() => {
            if (selectedOption === "5") {
              setKorak(5);
            } else if (selectedOption === "7") {
              setKorak(11);
            } else if (selectedOption === "6") {
              setKorak(2);
            } else if (selectedOption === "8") {
              setKorak(6);
            } else if (selectedOption === "3") {
              setKorak(9);
            } else if (selectedOption === "9") {
              setKorak(4);
            }

            setKorisnik((prev) => {
              if (pol === "muškog") {
                const noviKorisnikMusko = { ...prev };
                noviKorisnikMusko.pol = 1;
                return noviKorisnikMusko;
              } else if (pol === "ženskog") {
                const noviKorisnikZensko = { ...prev };
                noviKorisnikZensko.pol = 0;
                return noviKorisnikZensko;
              }
            });
          }}
          text={"DA"}
        />
      </div>
    </>
  );
};

export default PotvrdaPol;
