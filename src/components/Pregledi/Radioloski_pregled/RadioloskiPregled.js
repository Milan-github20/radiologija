import React, { useEffect, useState } from "react";
import Button from "../../UI/Button/Button";
import styles from "./RadioloskiPregled.module.css";
import SalterNotifikacija from "../../SalterNotifikacija/SalterNotifikacija";
import toast from "react-hot-toast";
import x from "../../../assets/back.png";
import info from "../../../assets/info.png";

const RadioloskiPregled = ({
  korisnik,
  setKorak,
  setKorisnik,
  setUser,
  setTrenutnaStranicaApp,
  setTrenutnaStranica,
  trenutnaStranica,
}) => {
  // const [trenutnaStranica, setTrenutnaStranica] = useState(0);
  const [odgovoriRadioloskiPregled, setOdgovoriRadioloskiPregled] =
    useState("");

  const posaljiPodatke = async () => {
    const newData = new URLSearchParams();

    if (korisnik.pol === 0) {
      if (trenutnaStranica === 1) {
        newData.append("id_forme", 818);
      }

      if (trenutnaStranica === 2) {
        newData.append("id_forme", 817);
      }
      newData.append("id_pacijenta", 465820);

      const response = await fetch(
        `../rpc/radiologija.cfc?method=napravi_dokument`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: newData,
        }
      );

      if (response.ok) {
        console.log("Podaci uspešno poslati!");
      } else {
        console.error("Došlo je do greške pri slanju podataka.");
      }
    }
  };

  useEffect(() => {
    if (trenutnaStranica === 2) {
      const timeoutId = setTimeout(() => {
        setTrenutnaStranicaApp(0);
        setKorisnik(null);
        setUser("");
        setTimeout(() => {
          toast.success("Uspjesno ste se odjavili!", {
            duration: 3000,
          });
        }, 1000);
      }, 20000);

      posaljiPodatke();

      return () => {
        clearTimeout(timeoutId);
      };
    }

    if (trenutnaStranica === 1) {
      posaljiPodatke();
    }
  }, [trenutnaStranica, setKorisnik, setTrenutnaStranicaApp, setUser]);

  switch (trenutnaStranica) {
    case 0:
      return (
        <div>
          <Button
            back
            alt
            buttonBack
            disabled2
            className={styles.buttonBack}
            // onClick={() => {
            //   setKorak(1);
            // }}
          >
            <img alt="x" src={x} />
          </Button>
          {korisnik.pol === 0 ? (
            <div className={styles.mainDiv}>
              <h1 className={styles.h1Pitanje}>Da li ste trudni?</h1>
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
          ) : korisnik.pol === 1 ? (
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
          setUser={setUser}
          setKorisnik={setKorisnik}
          setTrenutnaStranicaApp={setTrenutnaStranicaApp}
        />
      );
    case 2:
      return (
        <>
          <div>
            <Button
              back
              alt
              buttonBack
              className={styles.buttonBack}
              // onClick={() => {
              //   setTrenutnaStranica(5);
              // }}
              disabled2
            >
              <img alt="x" src={x} />
            </Button>
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
                    setUser("");
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
                    setTrenutnaStranica(3);
                  }}
                >
                  DA
                </Button>
              </div>
            </div>
          </div>
        </>
      );
    case 3:
      return (
        <>
          <div>
            <Button
              back
              alt
              buttonBack
              className={styles.buttonBack}
              onClick={() => {
                setTrenutnaStranica(2);
              }}
            >
              <img alt="x" src={x} />
            </Button>
            <div className={styles.mainDiv}>
              <div className={styles.divQrKodPregled}>
                <div className={styles.qrkod}>
                  <div className={styles.qrkodDiv}>
                    <h1>Skenirajte QR KOD</h1>

                    <div className={styles.qrCode}>
                      <img
                        src="https://chart.googleapis.com/chart?cht=qr&chl=https%3A%2F%2Fwww.kc-bl.com%2FEn%2F&chs=180x180&choe=UTF-8&chld=L|2"
                        alt="QR kod"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.ili}>
                  <h1>ILI</h1>
                </div>
                <div
                  className={styles.pregled}
                  onClick={() => {
                    setKorak(3);
                  }}
                >
                  <div className={styles.pregledDiv}>
                    <h1>Dodirnite ovdje za više informacija</h1>

                    <div className={styles.info}>
                      <img src={info} alt="info" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      );

    default:
      return null;
  }
};

export default RadioloskiPregled;
