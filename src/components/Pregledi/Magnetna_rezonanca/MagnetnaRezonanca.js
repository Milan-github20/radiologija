import React, { useEffect, useState } from "react";
import styles from "./MagnetnaRezonanca.module.css";
import MagnetPitanja from "./MagnetPitanja";
import MagnetSlider from "./MagnetSlider";
import QrKodStranica from "./QrKodStranica";

const MagnetnaRezonanca = ({
  odjava,
  korisnik,
  setKorak,
  setOdgovoriMR,
  setTrenutnaStranica,
  trenutnaStranica,
}) => {
  const [eGFR, setEGFR] = useState(null);
  const [eGFRPrikaz, setEGFRPrikaz] = useState(null);
  const [prethodniKorak, setPrethodniKorak] = useState(null);

  useEffect(() => {
    postaviOdgovor(korisnik.pol === 0 ? 74159 : 74158);
  }, []);

  useEffect(() => {
    if (eGFR === null) return;
    const mapaPoruka = {
      "eGFR > 60": [
        "Imate veoma nizak rizik za razvoj kontrastom indikovane nefropatije. ",
        "Nisu potrebne nikakve mjere prevencije.",
      ],
      "eGFR >= 45 && eGFR <= 60": [
        "Imate nizak rizik za razvoj kontrastom indikovane nefropatije.",
        "Na dan pregleda popijte veću količinu tečnosti ",
      ],
      "eGFR < 45 && eGFR >= 30": [
        "Imate umjreno visok rizik za razvoj kontrastom indikovane nefropatije.",
        "Neophodna je intravenska hidratacija. Obratite se osoblju na šalteru.",
      ],
      "eGFR < 30": [
        "Imate visok rizik za razvoj kontrastom indikovane nefropatije",
        "Obratite se osoblju na šalteru",
      ],
    };
    let message = [];

    for (const condition in mapaPoruka) {
      if (eval(condition)) {
        message = mapaPoruka[condition];
        break;
      }
    }

    setEGFRPrikaz(
      <h1 className={styles.h1_slajder}>
        <span>
          Vaš eGFR iznosi {eGFR.toFixed(2)} ml/min (1,73m
          <sup style={{ fontSize: "0.5em" }}>2</sup>)
        </span>
        {message[0]} <br /> <br /> {message[1]}
      </h1>
    );
  }, [eGFR]);

  //postavi odgovor za modul
  const postaviOdgovor = (id) => {
    setOdgovoriMR((prethodnaVrijednost) => {
      const trenutniModul = prethodnaVrijednost.modul.findIndex(
        (modul) => modul.id === id
      );
      prethodnaVrijednost.modul[trenutniModul].vrijednost = 1;

      return prethodnaVrijednost;
    });
  };

  //poništi odgovor za oba modula vezana za pitanje
  const ponistiVrijednosti = (daId, neId) => {
    setOdgovoriMR((prethodnaVrijednost) => {
      const daModulIndex = prethodnaVrijednost.modul.findIndex(
        (modul) => modul.id === daId
      );
      const neModulIndex = prethodnaVrijednost.modul.findIndex(
        (modul) => modul.id === neId
      );

      if (daModulIndex !== -1)
        prethodnaVrijednost.modul[daModulIndex].vrijednost = "";
      if (neModulIndex !== -1)
        prethodnaVrijednost.modul[neModulIndex].vrijednost = "";

      return prethodnaVrijednost;
    });
  };

  const posebniNaslov33Pitanje = (
    <>
      <h1 className={styles.h1}>
        USPJEŠNO STE PRIJAVLJENI NA PREGLED, SAČEKAJTE DA VAS PROZOVEMO
      </h1>
      <h3 className={styles.h3}>
        Da li želite više informacija o pregledu koji ćete danas raditi?
      </h3>
    </>
  );

  return trenutnaStranica === 21 ? (
    <MagnetSlider
      setTrenutnaStranica={setTrenutnaStranica}
      korisnik={korisnik}
      setEGFR={setEGFR}
    />
  ) : trenutnaStranica === 34 ? (
    <QrKodStranica
      setTrenutnaStranica={setTrenutnaStranica}
      setKorak={setKorak}
    />
  ) : (
    <MagnetPitanja
      setPrehodniKorak={setPrethodniKorak}
      trenutnaStranica={trenutnaStranica}
      odjava={odjava}
      posebniNaslov={
        trenutnaStranica === 22 ? eGFRPrikaz : posebniNaslov33Pitanje
      }
      ocisti={ponistiVrijednosti}
      sacuvaj={postaviOdgovor}
      setTrenutnaStranica={setTrenutnaStranica}
      korisnik={korisnik}
      setKorak={setKorak}
      prethodna={prethodniKorak}
    />
  );
};

export default MagnetnaRezonanca;
