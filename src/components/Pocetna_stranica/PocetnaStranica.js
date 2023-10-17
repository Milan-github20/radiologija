import React, { useEffect, useState } from "react";
import styles from "./PocetnaStranica.module.css";
import Button from "../UI/Button/Button";
import PotvrdaPol from "../Potvrdi_pol/Potvrdi_pol";
// import ListaPregleda from "../ListaPregleda/ListaPregleda";
import InformacijeOPregledu from "../InformacijeOPregledu/InformacijeOPregledu";
import RadioloskiPregled from "../Pregledi/Radioloski_pregled/RadioloskiPregled";
// import kartica from "../../assets/skeniranje_kartice.png";
import kartica from "../../assets/184262-removebg-preview.png";
import logo from "../../assets/Logo UKC RS.png";
// import HotToast from "../HotToast/HotToast";
import { toast } from "react-hot-toast";
import Header from "../UI/Header/Header";
import back from "../../assets/back.png";
// import HotToast from "../HotToast/HotToast";
// import Footer from "../UI/Footer/Footer";

const PocetnaStranica = ({
  korisnik,
  setUser,
  pol,
  setKorisnik,
  setTrenutnaStranicaApp,
}) => {
  const [korak, setKorak] = useState(0); // Dodajemo stanje za praćenje koraka (stranica)

  const imeKorisnika = korisnik ? `${korisnik.ime} ${korisnik.prezime}` : null;

  const focusInput = () => {
    const inputElement = document.getElementById("myInput");
    if (inputElement) {
      inputElement.focus();
    }
  };

  useEffect(() => {
    const intervalId = setInterval(focusInput, 2000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const sledeciKorak = () => {
    setKorak(korak + 1);
  };

  return (
    <>
      {/* <HotToast /> */}
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
              onChange={(e) => {
                setUser(e.target.value);
              }}
            />
            <div className={styles.divKartica}>
              <img className={styles.karica} src={kartica} alt="kartica" />
            </div>
          </>
        ) : korak === 0 ? ( // Prikazuje se samo na prvom koraku
          <>
            {/* <Header korisnik={korisnik} /> */}

            <h1 className={styles.h1Zavod}>
              Dobro došli na zavod za kliničku radiologiju UKC RS
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
              <h3>Danas ste zakazani za</h3>
              <span>RADIOLOŠKI PREGLED?</span>
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
            <Header korisnik={korisnik} />
            {/* <h2 className={styles.podaciOKorisniku}>
              {korisnik.ime} {korisnik.prezime}
            </h2> */}
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
              korisnik={korisnik}
              setKorak={setKorak}
              setKorisnik={setKorisnik}
              setTrenutnaStranicaApp={setTrenutnaStranicaApp}
            />
          </>
        ) : korak === 3 ? (
          <InformacijeOPregledu
            setKorak={setKorak}
            setKorisnik={setKorisnik}
            korak={korak}
            setTrenutnaStranicaApp={setTrenutnaStranicaApp}
          />
        ) : null}
      </div>
    </>
  );
};

export default PocetnaStranica;
