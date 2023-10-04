import React, { useEffect, useState } from "react";
import Button from "../../UI/Button/Button";
import styles from "./RadioloskiPregled.module.css";
import SalterNotifikacija from "../../SalterNotifikacija/SalterNotifikacija";

const RadioloskiPregled = ({ korisnik, setKorak, setKorisnik }) => {
  const [trenutnaStranica, setTrenutnaStranica] = useState(0);

  useEffect(() => {
    if (trenutnaStranica === 2) {
      const timeoutId = setTimeout(() => {
        setKorak(0);
        setKorisnik(null);
      }, 10000);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [trenutnaStranica, setKorak, setKorisnik]);

  console.log(korisnik);
  switch (trenutnaStranica) {
    case 0:
      return (
        <div>
          {korisnik.pol === "F" ? (
            <div className={styles.mainDiv}>
              <h1 className={styles.h1}>DA LI STE TRUDNI?</h1>
              <div className={styles.buttons}>
                <Button
                  next
                  onClick={() => {
                    setTrenutnaStranica(1);
                  }}
                >
                  DA
                </Button>
                <Button
                  back
                  onClick={() => {
                    setTrenutnaStranica(2);
                  }}
                >
                  NE
                </Button>
              </div>
            </div>
          ) : korisnik.pol === "M" ? (
            setTrenutnaStranica(2)
          ) : (
            ""
          )}
        </div>
      );

    case 1:
      return (
        <SalterNotifikacija setKorak={setKorak} setKorisnik={setKorisnik} />
      );
    case 2:
      return (
        <div className={styles.mainDiv}>
          <h1 className={styles.h1}>SAČEKAJTE DA VAS PROZOVEMO</h1>
          <div className={styles.buttons}>
            <Button
              info
              onClick={() => {
                setKorak(3);
              }}
            >
              VIŠE INFORMACIJA O PREGLEDU
            </Button>
          </div>
        </div>
      );

    default:
      return null;
  }
};

export default RadioloskiPregled;
