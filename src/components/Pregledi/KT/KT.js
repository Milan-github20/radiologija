import React, { useEffect, useState } from "react";
import styles from "../Magnetna_rezonanca/MagnetnaRezonanca.module.css";
// import QrKodStranica from "./QrKodStranica";
// import MagnetPotpis from "./MagnetPotpis";
import KTPitanja from "./KTPitanja";
import KTSlider from "./KTSlider";
import { ktPitanja } from "../../../konstante/konstante";
import KTPotpis from "./KTPotpis";
import QrKodStranica from "../Magnetna_rezonanca/QrKodStranica";
import BrojTelefona from "./Broj_telefona";

const Kt = ({
  odjava,
  korisnik,
  setKorak,
  setOdgovoriKT,
  setTrenutnaStranica,
  trenutnaStranica,
  automatskaOdjava,
  idDokumenta,
  setSign,
  sign,
  selectedOption,
}) => {
  // const [trenutnaStranica, setTrenutnaStranica] = useState(0);
  // const [buduceVrijeme, setBuduceVrijeme] = useState(null);
  // const [sliderValue, setSliderValue] = useState(100);

  const [eGFR, setEGFR] = useState(null);
  const [eGFRPrikaz, setEGFRPrikaz] = useState(null);
  const [eGFRTekst, setEGFRTekst] = useState(null);
  const [tokKoraka, setTokKoraka] = useState([]);
  const [brojTelefona, setBrojTelefona] = useState("");

  useEffect(() => {
    postaviOdgovor(korisnik.pol === 0 ? 74247 : 74246);
  }, []);

  useEffect(() => {
    if (eGFR === null) return;
    const mapaPoruka = {
      "eGFR > 60": [
        "Imate veoma nizak rizik za razvoj kontrastom indikovane nefropatije.",
        "Nisu potrebne nikakve mjere prevencije.",
      ],
      "eGFR >= 45 && eGFR <= 60": [
        "Imate nizak rizik za razvoj kontrastom indikovane nefropatije.",
        "Na dan pregleda popijte veću količinu tečnosti.",
      ],
      "eGFR < 45 && eGFR >= 30": [
        "Imate umjreno visok rizik za razvoj kontrastom indikovane nefropatije.",
        "Neophodna je intravenska hidratacija. Obratite se osoblju na šalteru.",
      ],
      "eGFR < 30": [
        "Imate visok rizik za razvoj kontrastom indikovane nefropatije.",
        "Obratite se osoblju na šalteru.",
      ],
    };
    let message = [];

    for (const condition in mapaPoruka) {
      if (eval(condition)) {
        message = mapaPoruka[condition];
        break;
      }
    }

    setEGFRTekst(`Vrijednost eGFR-a iznosi: ${eGFR.toFixed(2)}
${message[0]} ${message[1]}`);

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
    setOdgovoriKT((prethodnaVrijednost) => {
      const trenutniModul = prethodnaVrijednost.modul.findIndex(
        (modul) => modul.id === id
      );
      if (id === 74251) {
        prethodnaVrijednost.modul[trenutniModul].vrijednost = brojTelefona;
      } else if (id === 74287)
        prethodnaVrijednost.modul[trenutniModul].vrijednost = eGFRTekst;
      else prethodnaVrijednost.modul[trenutniModul].vrijednost = 1;

      return prethodnaVrijednost;
    });

    // if (id === 74240 || id === 74241) automatskaOdjava("mr");
  };

  //poništi odgovor za oba modula vezana za pitanje
  const ponistiVrijednosti = (daId, neId) => {
    setOdgovoriKT((prethodnaVrijednost) => {
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

  const posebniNaslov34Pitanje = (
    <>
      <h1 className={styles.h1}>
        USPJEŠNO STE PRIJAVLJENI NA PREGLED, SAČEKAJTE DA VAS PROZOVEMO
      </h1>
      <h3 className={styles.h3}>
        Da li želite više informacija o pregledu koji ćete danas raditi?
      </h3>
    </>
  );

  const ocistiVrijednosti = () => {
    const prethodnaPitanja = ktPitanja[tokKoraka[tokKoraka.length - 1]];
    const neModul = prethodnaPitanja.ne.odgovor,
      daModul = prethodnaPitanja.da.odgovor;

    if (daModul !== undefined || neModul !== undefined)
      ponistiVrijednosti(daModul, neModul);
  };

  return trenutnaStranica === 20 ? (
    <KTSlider
      setTrenutnaStranica={setTrenutnaStranica}
      korisnik={korisnik}
      setEGFR={setEGFR}
      setTokKoraka={setTokKoraka}
      tokKoraka={tokKoraka}
      ocisti={ponistiVrijednosti}
      ocistiVrijednosti={ocistiVrijednosti}
      trenutnaStranica={trenutnaStranica}
      sacuvaj={postaviOdgovor}
    />
  ) : trenutnaStranica === 23 ? (
    <KTPotpis
      setTrenutnaStranica={setTrenutnaStranica}
      setKorak={setKorak}
      idDokumenta={idDokumenta}
      korisnik={korisnik}
      setSign={setSign}
      sign={sign}
      automatskaOdjava={automatskaOdjava}
      tokKoraka={tokKoraka}
      setTokKoraka={setTokKoraka}
      ocistiVrijednosti={ocistiVrijednosti}
      selectedOption={selectedOption}
    />
  ) : trenutnaStranica === 25 ? (
    <QrKodStranica
      setTrenutnaStranica={setTrenutnaStranica}
      setKorak={setKorak}
      odjava={odjava}
      selectedOption={selectedOption}
    />
  ) : trenutnaStranica === 22 ? (
    <BrojTelefona
      setTrenutnaStranica={setTrenutnaStranica}
      korisnik={korisnik}
      setTokKoraka={setTokKoraka}
      tokKoraka={tokKoraka}
      ocistiVrijednosti={ocistiVrijednosti}
      trenutnaStranica={trenutnaStranica}
      setBrojTelefona={setBrojTelefona}
      brojTelefona={brojTelefona}
      sacuvaj={postaviOdgovor}
    />
  ) : (
    <KTPitanja
      trenutnaStranica={trenutnaStranica}
      odjava={odjava}
      posebniNaslov={
        trenutnaStranica === 21 ? eGFRPrikaz : posebniNaslov34Pitanje
      }
      ocisti={ponistiVrijednosti}
      sacuvaj={postaviOdgovor}
      setTrenutnaStranica={setTrenutnaStranica}
      korisnik={korisnik}
      setKorak={setKorak}
      tokKoraka={tokKoraka}
      setTokKoraka={setTokKoraka}
      ocistiVrijednosti={ocistiVrijednosti}
    />
  );
};

export default Kt;
