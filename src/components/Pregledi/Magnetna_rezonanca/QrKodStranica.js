import React from 'react';
import Button from "../../UI/Button/Button";
import styles from "./MagnetnaRezonanca.module.css";
import x from "../../../assets/back.png";
import info from "../../../assets/info.png";

const QrKodStranica = ({setTrenutnaStranica, setKorak}) => {
  return (
    <div>
      <Button
        back
        alt
        buttonBack
        onClick={() => {
          setTrenutnaStranica(33);
        }}
      >
        <img alt="x" src={`${x}`}/>
      </Button>
      <div className={styles.main_div}>
        <div className={styles.div_qr_kod_pregled}>
          <div className={styles.qr_kod}>
            <div className={styles.qr_kod_div}>
              <h1>Skenirajte QR KOD</h1>

              <div className={styles.qr_kod_alt}>
                <img
                  src="https://chart.googleapis.com/chart?cht=qr&chl=https%3A%2F%2Fwww.kc-bl.com%2FEn%2F&chs=180x180&choe=UTF-8&chld=L|2"
                  alt="QR kod"
                />
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
                <img src={`${info}`} alt="info"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QrKodStranica;