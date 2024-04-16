import React, { useEffect, useState, useCallback } from "react";
import styles from "./PocetnaStranica.module.css";
import Button from "../UI/Button/Button";
import PotvrdaPol from "../Potvrdi_pol/Potvrdi_pol";
import InformacijeOPregledu from "../Informacije/InformacijeRadiografija/InformacijeOPregledu";
import RadioloskiPregled from "../Pregledi/Radioloski_pregled/RadioloskiPregled";
import Header from "../UI/Header/Header";
import HeaderKontrastInfo from "../UI/Header_kontrast/HeaderKontrast";
import MagnetnaRezonanca from "../Pregledi/Magnetna_rezonanca/MagnetnaRezonanca";
import Ultrazvuk from "../Pregledi/Ultrazvuk/Ultrazvuk";
import InformacijeMR from "../Informacije/InformacijeMR/InformacijeMR";
import InformacijeUltrazvuk from "../Informacije/InformacijeUltrazvuk/InformacijeUltrazvuk";
import Kt from "../Pregledi/KT/KT";
import InformacijeKT from "../Informacije/InformacijeKT/InformacijeKT";
import Radioskopija from "../Pregledi/Radioskopija/Radioskopija";
import InformacijeRadioskopija from "../Informacije/InformacijeRadioskopija/InformacijeRadioskopija";
import Ivu from "../Pregledi/IVU/IVU";
import "react-simple-keyboard/build/css/index.css";
import { format } from "date-fns";
import PocetnaStranicaNemaKorisnika from "./PocetnaStranicaNemaKorisnika";
import OdabirPregleda from "./OdabirPregleda";
import Timer from "../Timer/Timer";
import { toast } from "react-hot-toast";

//1008994103258

const PocetnaStranica = ({
  korisnik,
  setUser,
  pol,
  setKorisnik,
  setTrenutnaStranicaApp,
  setOdgovoriUltrazvuk,
  posaljiPodatke,
  setTrenutnaStranica,
  trenutnaStranica,
  setOdgovoriMR,
  odjava,
  povuciPodatke,
  povuciKorisnika,
  automatskaOdjava,
}) => {
  const [korak, setKorak] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [epizoda, setEpizoda] = useState([]);

  const [showBackdrop, setShowBackdrop] = useState(false);
  const [showCountdownBackdrop, setShowCountdownBackdrop] = useState(false);

  const imeKorisnika = korisnik
    ? `${korisnik["ime"]} ${korisnik["prezime"]}`
    : null;

  const povuciEpizodu = useCallback(async () => {
    if (korisnik) {
      const response = povuciPodatke(
        `povuci_epizodu&jmbg=3107018100555`,
        "GET"
      );

      setEpizoda(response.data);
    }
  }, [korisnik]);

  useEffect(() => {
    povuciEpizodu().then();
  }, [povuciEpizodu]);

  return (
    <>
      <Timer
        showBackdrop={showBackdrop}
        setShowBackdrop={setShowBackdrop}
        setTrenutnaStranicaApp={setTrenutnaStranicaApp}
        setKorisnik={setKorisnik}
        setUser={setUser}
        setShowCountdownBackdrop={setShowCountdownBackdrop}
        showCountdownBackdrop={showCountdownBackdrop}
        odjava={odjava}
      />

      <div className={styles.mainDiv}>
        {!korisnik ? (
          <PocetnaStranicaNemaKorisnika
            setTrenutnaStranicaApp={setTrenutnaStranicaApp}
            povuciKorisnika={povuciKorisnika}
          />
        ) : korak === 0 ? ( // Prikazuje se samo na prvom koraku
          <>
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
              <p>
                {korisnik
                  ? format(new Date(korisnik["datum_rodjenja"]), "dd.MM.yyyy")
                  : ""}
              </p>
              <h3>
                Danas ste zakazani za
                <OdabirPregleda
                  selectedOption={selectedOption}
                  setSelectedOption={setSelectedOption}
                />
              </h3>
            </div>
            <div className={styles.buttons}>
              <Button back onClick={odjava} text={"NE"} />

              <Button
                next
                disabled={!selectedOption}
                onClick={() =>
                  selectedOption === "4" ? setKorak(6) : setKorak(1)
                }
                text={"DA"}
              />
            </div>
          </>
        ) : korak === 1 ? ( // Prikazuje se samo na drugom koraku
          <>
            <Header korisnik={korisnik} headerAlt />
            <PotvrdaPol
              pol={pol === 1 ? "muškog" : "ženskog"}
              polAlt={pol === 1 ? "ženskog" : "muškog"}
              korak={korak}
              korisnik={korisnik}
              setKorisnik={setKorisnik}
              setKorak={setKorak}
              selectedOption={selectedOption}
            />
          </>
        ) : korak === 2 ? (
          <>
            <HeaderKontrastInfo korisnik={korisnik} />
            <RadioloskiPregled
              korak={korak}
              setUser={setUser}
              korisnik={korisnik}
              setKorak={setKorak}
              setKorisnik={setKorisnik}
              setTrenutnaStranicaApp={setTrenutnaStranicaApp}
              setTrenutnaStranica={setTrenutnaStranica}
              trenutnaStranica={trenutnaStranica}
            />
          </>
        ) : korak === 3 ? (
          <InformacijeOPregledu
            setKorak={setKorak}
            setUser={setUser}
            odjava={odjava}
            setKorisnik={setKorisnik}
            korak={korak}
            setTrenutnaStranicaApp={setTrenutnaStranicaApp}
          />
        ) : korak === 4 ? (
          <>
            <HeaderKontrastInfo korisnik={korisnik} />
            <Ivu
              epizoda={epizoda}
              korak={korak}
              setUser={setUser}
              korisnik={korisnik}
              setKorak={setKorak}
              setKorisnik={setKorisnik}
              setTrenutnaStranicaApp={setTrenutnaStranicaApp}
            />
          </>
        ) : korak === 5 ? (
          <>
            <HeaderKontrastInfo korisnik={korisnik} />
            <MagnetnaRezonanca
              odjava={odjava}
              korisnik={korisnik}
              setKorak={setKorak}
              setOdgovoriMR={setOdgovoriMR}
              setTrenutnaStranica={setTrenutnaStranica}
              trenutnaStranica={trenutnaStranica}
              automatskaOdjava={automatskaOdjava}
            />
          </>
        ) : korak === 6 ? (
          <>
            <HeaderKontrastInfo korisnik={korisnik} />
            <Ultrazvuk
              povuciEpizodu={povuciEpizodu}
              epizoda={epizoda}
              korak={korak}
              setUser={setUser}
              korisnik={korisnik}
              setKorak={setKorak}
              setKorisnik={setKorisnik}
              setTrenutnaStranicaApp={setTrenutnaStranicaApp}
              setOdgovoriUltrazvuk={setOdgovoriUltrazvuk}
              posaljiPodatke={posaljiPodatke}
              setTrenutnaStranica={setTrenutnaStranica}
              trenutnaStranica={trenutnaStranica}
            />
          </>
        ) : korak === 7 ? (
          <InformacijeMR
            setKorak={setKorak}
            setUser={setUser}
            setKorisnik={setKorisnik}
            korak={korak}
            setTrenutnaStranicaApp={setTrenutnaStranicaApp}
          />
        ) : korak === 8 ? (
          <InformacijeUltrazvuk
            setKorak={setKorak}
            setUser={setUser}
            setKorisnik={setKorisnik}
            korak={korak}
            setTrenutnaStranicaApp={setTrenutnaStranicaApp}
          />
        ) : korak === 9 ? (
          <>
            <HeaderKontrastInfo korisnik={korisnik} />
            <Kt
              epizoda={epizoda}
              korak={korak}
              setUser={setUser}
              korisnik={korisnik}
              setKorak={setKorak}
              setKorisnik={setKorisnik}
              setTrenutnaStranicaApp={setTrenutnaStranicaApp}
            />
          </>
        ) : korak === 10 ? (
          <InformacijeKT
            setKorak={setKorak}
            setUser={setUser}
            setKorisnik={setKorisnik}
            korak={korak}
            setTrenutnaStranicaApp={setTrenutnaStranicaApp}
          />
        ) : korak === 11 ? (
          <>
            <HeaderKontrastInfo korisnik={korisnik} />
            <Radioskopija
              epizoda={epizoda}
              korak={korak}
              setUser={setUser}
              korisnik={korisnik}
              setKorak={setKorak}
              setKorisnik={setKorisnik}
              setTrenutnaStranicaApp={setTrenutnaStranicaApp}
            />
          </>
        ) : korak === 12 ? (
          <InformacijeRadioskopija
            setKorak={setKorak}
            setUser={setUser}
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
