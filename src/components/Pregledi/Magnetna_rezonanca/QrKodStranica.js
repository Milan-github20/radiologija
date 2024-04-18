import React from "react";
import Button from "../../UI/Button/Button";
import styles from "./MagnetnaRezonanca.module.css";
import x from "../../../assets/back.png";
import info from "../../../assets/info.png";
import qrCode from "../../../assets/Untitled 1.png";

const QrKodStranica = ({ setTrenutnaStranica, setKorak, odjava }) => {
  return (
    <div>
      <Button
        back
        alt
        buttonBack
        onClick={() => {
          odjava();
          // setTrenutnaStranica(34);
        }}
        text={<img alt="x" src={`${x}`} />}
      />
      <div className={styles.main_div}>
        <div className={styles.div_qr_kod_pregled}>
          <div className={styles.qr_kod}>
            <div className={styles.qr_kod_div}>
              <h1>Skenirajte QR KOD</h1>

              <div className={styles.qr_kod_alt}>
                <img src={qrCode} alt="QR kod" />
              </div>
            </div>
          </div>
          <div className={styles.ili}>
            <h1>ILI</h1>
          </div>
          <div
            className={styles.pregled}
            onClick={() => {
              setKorak(7);
            }}
          >
            <div className={styles.pregledDiv}>
              <h1>Dodirnite ovdje za više informacija</h1>

              <div className={styles.info}>
                <img src={`${info}`} alt="info" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QrKodStranica;
