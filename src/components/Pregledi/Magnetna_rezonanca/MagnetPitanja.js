import React, { useEffect } from "react";
import Button from "../../UI/Button/Button";
import styles from "./MagnetnaRezonanca.module.css";
import x from "../../../assets/back.png";
import { magnetnaPitanja } from "../../../konstante/konstante";
// 1008994103258
const MagnetPitanja = ({
  trenutnaStranica,
  setTrenutnaStranica,
  korisnik,
  setKorak,
  sacuvaj,
  ocisti,
  setPrehodniKorak,
  prethodna,
  posebniNaslov,
  odjava,
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
    setKorak(trenutnaPitanja.nazad.akoMusko.broj);
    setTrenutnaStranica(0);
  };

  const ocistiVrijednosti = () => {
    const prethodnaPitanja =
      prethodna !== null ? magnetnaPitanja[prethodna] : null;
    const neModul = prethodnaPitanja.ne.odgovor,
      daModul = prethodnaPitanja.da.odgovor;

    if (daModul !== undefined || neModul !== undefined)
      ocisti(daModul, neModul);
  };

  const mapaZaNazad = {
    korak: () => {
      setKorak(trenutnaPitanja.nazad.broj);
      if (prethodna !== null) ocistiVrijednosti();
    },
    stranica: () => {
      setTrenutnaStranica(trenutnaPitanja.nazad.broj);
      if (prethodna !== null) ocistiVrijednosti();
    },
    pol:
      trenutnaPitanja.nazad.tip === "pol"
        ? korisnik.pol === 1
          ? trenutnaPitanja.nazad.akoMusko.tip === "korak"
            ? vratiNaPocetnu
            : () => setTrenutnaStranica(trenutnaPitanja.nazad.akoMusko.broj)
          : trenutnaPitanja.nazad.akoZensko.tip === "korak"
          ? () => setKorak(trenutnaPitanja.nazad.akoZensko.broj)
          : () => setTrenutnaStranica(trenutnaPitanja.nazad.akoZensko.broj)
        : () => {},
  };

  const daFunkcija = () => {
    setPrehodniKorak(trenutnaStranica);
    setTrenutnaStranica(trenutnaPitanja.da.akcija);
    if (trenutnaPitanja.da.odgovor !== undefined)
      sacuvaj(trenutnaPitanja.da.odgovor);
  };

  const neFunkcija = () => {
    if (trenutnaStranica === 33) return odjava();
    setPrehodniKorak(trenutnaStranica);
    setTrenutnaStranica(trenutnaPitanja.ne.akcija);
    if (trenutnaPitanja.ne.odgovor !== undefined)
      sacuvaj(trenutnaPitanja.ne.odgovor);
  };

  return (
    <div>
      <Button
        text={<img alt="x" src={`${x}`} />}
        back
        alt
        buttonBack
        disabled={!trenutnaPitanja.nazad.ima}
        onClick={
          trenutnaPitanja.nazad.ima
            ? mapaZaNazad[trenutnaPitanja.nazad.tip]
            : () => {}
        }
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
