import React, { useEffect } from "react";
import Button from "../../UI/Button/Button";
import styles from "./MagnetnaRezonanca.module.css";
import x from "../../../assets/back.png";
import { magnetnaPitanja } from "../../../konstante/konstante";

const MagnetPitanja = ({
  trenutnaStranica,
  setTrenutnaStranica,
  korisnik,
  setKorak,
  sacuvaj,
  ocisti,
  posebniNaslov,
  odjava,
  tokKoraka,
  setTokKoraka,
  ocistiVrijednosti,
}) => {
  const trenutnaPitanja = magnetnaPitanja[trenutnaStranica];

  useEffect(() => {
    if (
      trenutnaPitanja.uslov.pol !== undefined &&
      korisnik.pol !== trenutnaPitanja.uslov.pol
    )
      setTrenutnaStranica(trenutnaPitanja.uslov.akoNije);
  }, []);

  const vratiNaPocetnu = () => {
    setKorak(1);
    setTrenutnaStranica(0);
    ocisti(74158, 74159);
  };

  // const ocistiVrijednosti = () => {
  //   const prethodnaPitanja = magnetnaPitanja[tokKoraka[tokKoraka.length - 1]];
  //   const neModul = prethodnaPitanja.ne.odgovor,
  //     daModul = prethodnaPitanja.da.odgovor;

  //   if (daModul !== undefined || neModul !== undefined)
  //     ocisti(daModul, neModul);
  // };

  // const uslovnoVracanjeNaOdabirPola = () => {
  //   if (korisnik.pol === 1) {
  //     if (trenutnaPitanja.nazad.akoMusko.tip === "korak") vratiNaPocetnu();
  //     else setTrenutnaStranica(trenutnaPitanja.nazad.akoMusko.broj);
  //   } else {
  //     if (!trenutnaPitanja.nazad.akoZensko) vratiNaPocetnu();
  //     else {
  //       ocistiVrijednosti();
  //       if (trenutnaPitanja.nazad.akoZensko.tip === "korak")
  //         setKorak(trenutnaPitanja.nazad.akoZensko.broj);
  //       else setTrenutnaStranica(trenutnaPitanja.nazad.akoZensko.broj);
  //     }
  //   }
  // };
  //
  // const mapaZaNazad = {
  //   korak: () => {
  //     setKorak(trenutnaPitanja.nazad.broj);
  //     // setPrehodniKorak(magnetnaPitanja[trenutnaPitanja.nazad.broj].nazad.broj);
  //     setTokKoraka(prevState => prevState.slice(0, -1));
  //     if (tokKoraka[tokKoraka.length - 1] !== null) ocistiVrijednosti();
  //   },
  //   stranica: () => {
  //     setTrenutnaStranica(tokKoraka[tokKoraka.length - 1]);
  //     // setPrehodniKorak(magnetnaPitanja[prethodna].nazad.broj);
  //     setTokKoraka(prevState => prevState.slice(0, -1));
  //     if (tokKoraka[tokKoraka.length - 1] !== null) ocistiVrijednosti();
  //   },
  //   pol: () => uslovnoVracanjeNaOdabirPola(),
  // };

  const daFunkcija = () => {
    setTokKoraka((prevState) => [...prevState, trenutnaStranica]);
    setTrenutnaStranica(trenutnaPitanja.da.akcija);
    if (trenutnaPitanja.da.odgovor !== undefined)
      sacuvaj(trenutnaPitanja.da.odgovor);
  };

  const neFunkcija = () => {
    if (trenutnaStranica === 35) return odjava();
    setTrenutnaStranica(trenutnaPitanja.ne.akcija);
    setTokKoraka((prevState) => [...prevState, trenutnaStranica]);
    if (trenutnaPitanja.ne.odgovor !== undefined)
      sacuvaj(trenutnaPitanja.ne.odgovor);
  };

  const vratiNazad = () => {
    if (
      trenutnaStranica === 0 ||
      (trenutnaStranica === 5 && korisnik.pol === 1)
    )
      vratiNaPocetnu();
    else {
      setTrenutnaStranica(tokKoraka[tokKoraka.length - 1]);
      setTokKoraka((prevState) => prevState.slice(0, -1));
      if (tokKoraka.length > 0) ocistiVrijednosti();
    }
  };

  return (
    <div>
      <Button
        text={<img alt="x" src={`${x}`} />}
        back
        alt
        buttonBack
        disabled={!trenutnaPitanja.nazad.ima}
        onClick={vratiNazad}
      />
      {trenutnaPitanja.uslov.pol === undefined ||
      korisnik.pol === trenutnaPitanja.uslov.pol ? (
        <div className={styles.main_div}>
          {!trenutnaPitanja.posebniNaslov ? (
            <h1 className={styles.h1_pitanje}>{trenutnaPitanja.pitanje}</h1>
          ) : (
            posebniNaslov
          )}
          <div className={styles.buttons}>
            <Button
              text={trenutnaPitanja.ne.tekst}
              back
              disabled={!trenutnaPitanja.ne.ima}
              onClick={trenutnaPitanja.ne.ima ? neFunkcija : () => {}}
            />
            <Button
              text={trenutnaPitanja.da.tekst}
              next
              disabled={!trenutnaPitanja.da.ima}
              onClick={trenutnaPitanja.da.ima ? daFunkcija : () => {}}
            />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default MagnetPitanja;
