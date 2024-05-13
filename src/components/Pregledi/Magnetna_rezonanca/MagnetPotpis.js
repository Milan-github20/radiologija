import React from "react";
import Button from "../../UI/Button/Button";
import styles from "./MagnetnaRezonanca.module.css";
import x from "../../../assets/back.png";
import info from "../../../assets/info.png";
import Potpis from "../../../potpis/Potpis";

const MagnetPotpis = ({
  setTrenutnaStranica,
  idDokumenta,
  korisnik,
  setSign,
  sign,
  automatskaOdjava,
}) => {
  return (
    <div>
      <Button
        back
        alt
        buttonBack
        disabled2
        // onClick={() => {
        //   setTrenutnaStranica(32);
        // }}
        text={<img alt="x" src={`${x}`} />}
      />
      <div className={styles.main_div}>
        <h1 className={styles.potpis_magnet}>
          DA BI DOKUMENT BIO POTPUN POTPISITE SE OVDJE
        </h1>

        <Potpis
          setTrenutnaStranica={setTrenutnaStranica}
          idDokumenta={idDokumenta}
          korisnik={korisnik}
          setSign={setSign}
          sign={sign}
          automatskaOdjava={automatskaOdjava}
        />
      </div>
    </div>
  );
};

export default MagnetPotpis;
