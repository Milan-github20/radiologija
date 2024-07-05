import React from "react";
import Button from "../../UI/Button/Button";
import styles from "../Magnetna_rezonanca/MagnetnaRezonanca.module.css";
import x from "../../../assets/back.png";
// import SignatureCanvas from "react-signature-canvas";
// import toast from "react-hot-toast";
import Potpis from "../../../potpis/Potpis";

const KTPotpis = ({
  setTrenutnaStranica,
  setSign,
  sign,
  automatskaOdjava,
  tokKoraka,
  setTokKoraka,
  ocistiVrijednosti,
  selectedOption,
}) => {
  const nazad = () => {
    setTrenutnaStranica(tokKoraka[tokKoraka.length - 1]);
    setTokKoraka((prevState) => prevState.slice(0, -1));
    if (tokKoraka.length > 0) ocistiVrijednosti();
  };

  return (
    <div>
      <Button
        back
        alt
        buttonBack
        onClick={nazad}
        text={<img alt="x" src={`${x}`} />}
      />
      <div className={styles.main_div}>
        <h1 className={styles.potpis_magnet}>
          DA BI DOKUMENT BIO POTPUN POTPISITE SE OVDJE
        </h1>

        <Potpis
          setTrenutnaStranica={setTrenutnaStranica}
          setSign={setSign}
          sign={sign}
          automatskaOdjava={automatskaOdjava}
          selectedOption={selectedOption}
        />
      </div>
    </div>
  );
};

export default KTPotpis;
