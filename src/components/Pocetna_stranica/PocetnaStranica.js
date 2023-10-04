import React, { useEffect, useState } from "react";
import styles from "./PocetnaStranica.module.css";
import Button from "../UI/Button/Button";
import PotvrdaPol from "../Potvrdi_pol/Potvrdi_pol";
// import ListaPregleda from "../ListaPregleda/ListaPregleda";
import InformacijeOPregledu from "../InformacijeOPregledu/InformacijeOPregledu";
import RadioloskiPregled from "../Pregledi/Radioloski_pregled/RadioloskiPregled";
import kartica from "../../assets/184262-removebg-preview.png";
import HotToast from "../HotToast/HotToast";
import { toast } from "react-hot-toast";

const PocetnaStranica = ({ korisnik, setUser, pol, setKorisnik }) => {
  const [korak, setKorak] = useState(0); // Dodajemo stanje za praćenje koraka (stranica)

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
      <HotToast />
      <div className={styles.mainDiv}>
        {!korisnik ? (
          <>
            <h1 className={styles.h1}>DOBRODOŠLI</h1>

            <h2 className={styles.ucitajKarticu}>Učitajte karticu...</h2>

            <div className={styles.divKartica}>
              <img className={styles.karica} src={kartica} alt="kartica" />
            </div>

            <input
              id="myInput"
              className={styles.inputUcitajKarticu}
              autoFocus
              autoComplete="off"
              onChange={(e) => {
                setUser(e.target.value);
              }}
            />
          </>
        ) : korak === 0 ? ( // Prikazuje se samo na prvom koraku
          <>
            <h1 className={styles.h1Zavod}>
              Dobro došli na zavod za kliničku radiologiju UKC RS
            </h1>

            <h2 className={styles.podaciOKorisniku}>
              {korisnik.ime} {korisnik.prezime}
            </h2>
            <div className={styles.dat_rodAdresa}>
              <p>{korisnik.dat_rod}</p>
              <h3>Zakazani ste danas za radiološki pregled</h3>
            </div>
            <div className={styles.buttons}>
              <Button
                back
                onClick={() => {
                  setUser("");
                  setTimeout(() => {
                    toast.success("Uspjesno ste se odjavili!", {
                      duration: 3000,
                    });
                  }, 1000);
                }}
              >
                NAZAD NA POČETAK
              </Button>
              <Button next onClick={sledeciKorak}>
                POTVRDI PREGLED
              </Button>
            </div>
          </>
        ) : korak === 1 ? ( // Prikazuje se samo na drugom koraku
          <>
            <h2 className={styles.podaciOKorisniku}>
              {korisnik.ime} {korisnik.prezime}
            </h2>
            {pol === "M" && (
              <PotvrdaPol
                pol="Muškog"
                polAlt="Ženskog"
                korak={korak}
                korisnik={korisnik}
                setKorisnik={setKorisnik}
                setKorak={setKorak}
              />
            )}

            {pol === "F" && (
              <PotvrdaPol
                pol="Ženskog"
                polAlt="Muškog"
                korak={korak}
                korisnik={korisnik}
                setKorisnik={setKorisnik}
                setKorak={setKorak}
              />
            )}
          </>
        ) : korak === 2 ? (
          // <ListaPregleda
          //   korisnik={korisnik}
          //   setKorisnik={setKorisnik}
          //   setKorak={setKorak}
          // />
          <RadioloskiPregled
            korak={korak}
            korisnik={korisnik}
            setKorak={setKorak}
            setKorisnik={setKorisnik}
          />
        ) : korak === 3 ? (
          <InformacijeOPregledu setKorak={setKorak} setKorisnik={setKorisnik} />
        ) : null}
      </div>
    </>
  );
};

export default PocetnaStranica;
