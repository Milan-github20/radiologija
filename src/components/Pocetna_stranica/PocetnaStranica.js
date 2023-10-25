import React, { useEffect, useState } from "react";
import styles from "./PocetnaStranica.module.css";
import Button from "../UI/Button/Button";
import PotvrdaPol from "../Potvrdi_pol/Potvrdi_pol";
import InformacijeOPregledu from "../InformacijeOPregledu/InformacijeOPregledu";
import RadioloskiPregled from "../Pregledi/Radioloski_pregled/RadioloskiPregled";
import kartica from "../../assets/184262-removebg-preview.png";
import logo from "../../assets/ukc_logo_faktura-removebg-preview.png";
import { toast } from "react-hot-toast";
import Header from "../UI/Header/Header";
import back from "../../assets/back.png";

const PocetnaStranica = ({
  korisnik,
  setUser,
  pol,
  setKorisnik,
  setTrenutnaStranicaApp,
}) => {
  const [korak, setKorak] = useState(0);
  const [showBackdrop, setShowBackdrop] = useState(false);
  const [showCountdownBackdrop, setShowCountdownBackdrop] = useState(false);
  const [countdown, setCountdown] = useState(30);

  const imeKorisnika = korisnik ? `${korisnik.ime} ${korisnik.prezime}` : null;

  useEffect(() => {
    let inactivityTimeout;
    let autoCloseTimeout;

    const showBackdropAfterInactivity = () => {
      setShowBackdrop(true);

      autoCloseTimeout = setTimeout(() => {
        setTimeout(() => {
          setShowBackdrop(false);
        }, 3000);
        clearTimeout(inactivityTimeout);
      }, 30000);
    };

    inactivityTimeout = setTimeout(showBackdropAfterInactivity, 30000);

    const handleUserInteraction = () => {
      clearTimeout(inactivityTimeout);
      inactivityTimeout = setTimeout(showBackdropAfterInactivity, 30000);
      clearTimeout(autoCloseTimeout);

      if (showCountdownBackdrop) {
        setCountdown(30);
        setShowCountdownBackdrop(true);
      } else {
        setTimeout(() => {
          setShowBackdrop(false);
        }, 3000);
      }
    };

    window.addEventListener("touchstart", handleUserInteraction);

    return () => {
      clearTimeout(inactivityTimeout);
      window.removeEventListener("touchstart", handleUserInteraction);
      clearTimeout(autoCloseTimeout);
    };
  }, [setKorisnik, setTrenutnaStranicaApp, setUser, showCountdownBackdrop]);

  useEffect(() => {
    let interval;

    if (showBackdrop) {
      interval = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);

      if (countdown === 0) {
        setShowCountdownBackdrop(false);
        setShowBackdrop(false);
        setTrenutnaStranicaApp(0);
        setTimeout(() => {
          setKorisnik(null);
          toast.success("Uspješno ste se odjavili!", {
            duration: 3000,
          });
          setUser("");
        }, 1000);
      }
    }

    return () => {
      clearInterval(interval);
    };
  }, [
    showBackdrop,
    countdown,
    setKorisnik,
    setTrenutnaStranicaApp,
    setUser,
    showCountdownBackdrop,
  ]);

  const focusInput = () => {
    const inputElement = document.getElementById("myInput");
    if (inputElement) {
      inputElement.focus();
    }
  };

  const sledeciKorak = () => {
    setKorak(korak + 1);
  };

  useEffect(() => {
    const intervalId = setInterval(focusInput, 2000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    const enterNumberPeriodically = () => {
      setUser("3121299108");
    };

    const numberInterval = setInterval(enterNumberPeriodically, 5000);

    return () => {
      clearInterval(numberInterval);
    };
  }, [setUser]);

  return (
    <>
      <div className={styles.mainDiv}>
        {showBackdrop && (
          <div className={styles.backdrop}>
            <div className={styles.poruka}>
              <p>Automatsko vraćanje na početak za {countdown} sekundi</p>
              <h1>Bili ste neaktivni, nastavite unos?</h1>
            </div>
            <div className={styles.buttons2}>
              <Button
                back
                onClick={() => {
                  setShowBackdrop(false);
                  setTrenutnaStranicaApp(0);
                  setTimeout(() => {
                    setKorisnik(null);
                    toast.success("Uspješno ste se odjavili!", {
                      duration: 3000,
                    });
                    setUser("");
                  }, 1000);
                }}
              >
                Ne
              </Button>
              <Button
                next
                onClick={() => {
                  setShowBackdrop(false);
                  setShowCountdownBackdrop(true);
                  setCountdown(30);
                }}
              >
                Da
              </Button>
            </div>
          </div>
        )}

        <div className={styles.mainDiv}>
          {!korisnik ? (
            <>
              <div className={styles.nazadDiv}>
                <Button
                  back
                  alt
                  onClick={() => {
                    setTrenutnaStranicaApp(0);
                  }}
                >
                  <img src={back} alt="back" />
                </Button>
              </div>
              <img className={styles.logo} src={logo} alt="logo UKC" />

              <h2 className={styles.ucitajKarticu}>
                Učitajte zdravstvenu karticu...
              </h2>

              <input
                id="myInput"
                className={styles.inputUcitajKarticu}
                autoFocus
                autoComplete="off"
                value={korisnik ? "3121299108" : ""}
                readOnly
                // onChange={dodajUser}
                // onChange={(e) => {
                //   setUser(e.target.value);
                // }}
                // onFocus={dodajUser}
              />
              <div className={styles.divKartica}>
                <img className={styles.karica} src={kartica} alt="kartica" />
              </div>
            </>
          ) : korak === 0 ? ( // Prikazuje se samo na prvom koraku
            <>
              {/* <Header korisnik={korisnik} /> */}

              <h1 className={styles.h1Zavod}>
                Dobro došli na Zavod za kliničku radiologiju UKC RS
              </h1>

              <h2
                className={`${styles.podaciOKorisniku} ${
                  imeKorisnika.length > 25 ? styles.podaciOKorisniku__alt : ""
                }`}
              >
                {imeKorisnika}
              </h2>
              <div className={styles.dat_rodAdresa}>
                <p>{korisnik.dat_rod}</p>
                <h3>Danas ste zakazani za radiološki pregled?</h3>
                {/* <span>RADIOLOŠKI PREGLED?</span> */}
              </div>
              <div className={styles.buttons}>
                <Button
                  back
                  onClick={() => {
                    setTrenutnaStranicaApp(0);
                    setTimeout(() => {
                      toast.success("Uspjesno ste se odjavili!", {
                        duration: 3000,
                      });
                      setUser("");
                    }, 1000);
                  }}
                >
                  NE
                </Button>
                <Button next onClick={sledeciKorak}>
                  DA
                </Button>
              </div>
            </>
          ) : korak === 1 ? ( // Prikazuje se samo na drugom koraku
            <>
              <Header korisnik={korisnik} headerAlt />
              {pol === "M" && (
                <PotvrdaPol
                  pol="muškog"
                  polAlt="ženskog"
                  korak={korak}
                  korisnik={korisnik}
                  setKorisnik={setKorisnik}
                  setKorak={setKorak}
                />
              )}

              {pol === "F" && (
                <PotvrdaPol
                  pol="ženskog"
                  polAlt="muškog"
                  korak={korak}
                  korisnik={korisnik}
                  setKorisnik={setKorisnik}
                  setKorak={setKorak}
                />
              )}
            </>
          ) : korak === 2 ? (
            <>
              <Header korisnik={korisnik} />
              <RadioloskiPregled
                korak={korak}
                setUser={setUser}
                korisnik={korisnik}
                setKorak={setKorak}
                setKorisnik={setKorisnik}
                setTrenutnaStranicaApp={setTrenutnaStranicaApp}
              />
            </>
          ) : korak === 3 ? (
            <InformacijeOPregledu
              setKorak={setKorak}
              setUser={setUser}
              setKorisnik={setKorisnik}
              korak={korak}
              setTrenutnaStranicaApp={setTrenutnaStranicaApp}
            />
          ) : null}
        </div>
      </div>
    </>
  );
};

export default PocetnaStranica;
