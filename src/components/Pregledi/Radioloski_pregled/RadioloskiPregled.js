import React, { useEffect, useState } from "react";
import Button from "../../UI/Button/Button";
import styles from "./RadioloskiPregled.module.css";
import SalterNotifikacija from "../../SalterNotifikacija/SalterNotifikacija";
import toast from "react-hot-toast";

const RadioloskiPregled = ({
  korisnik,
  setKorak,
  setKorisnik,
  setTrenutnaStranicaApp,
}) => {
  const [trenutnaStranica, setTrenutnaStranica] = useState(0);

  useEffect(() => {
    if (trenutnaStranica === 2) {
      const timeoutId = setTimeout(() => {
        setTrenutnaStranicaApp(0);
        setKorisnik(null);
        setTimeout(() => {
          toast.success("Uspjesno ste se odjavili!", {
            duration: 3000,
          });
        }, 1000);
      }, 10000000);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [trenutnaStranica, setKorisnik, setTrenutnaStranicaApp]);

  switch (trenutnaStranica) {
    case 0:
      return (
        <div>
          {korisnik.pol === "F" ? (
            <div className={styles.mainDiv}>
              <h1 className={styles.h1}>Da li ste trudni?</h1>
              <div className={styles.buttons}>
                <Button
                  back
                  onClick={() => {
                    setTrenutnaStranica(2);
                  }}
                >
                  NE
                </Button>
                <Button
                  next
                  onClick={() => {
                    setTrenutnaStranica(1);
                  }}
                >
                  DA
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
        <SalterNotifikacija
          setKorak={setKorak}
          setKorisnik={setKorisnik}
          setTrenutnaStranicaApp={setTrenutnaStranicaApp}
        />
      );
    case 2:
      return (
        <div className={styles.mainDiv}>
          <h1 className={styles.h1}>
            USPJEŠNO STE PRIJAVLJENI NA PREGLED, SAČEKAJTE DA VAS PROZOVEMO
          </h1>
          <h3 className={styles.h3}>
            Da li želite više informacija o pregledu koji ćete danas raditi?
          </h3>

          <div className={styles.buttons}>
            <Button
              back
              onClick={() => {
                setTrenutnaStranicaApp(0);
                setKorisnik(null);
                setTimeout(() => {
                  toast.success("Uspjesno ste se odjavili!", {
                    duration: 3000,
                  });
                }, 1000);
              }}
            >
              NE
            </Button>
            <Button
              next
              onClick={() => {
                setKorak(3);
              }}
            >
              DA
            </Button>
          </div>
        </div>
      );

    default:
      return null;
  }
};

export default RadioloskiPregled;
