import React, { useState } from "react";
import Button from "../../UI/Button/Button";
import x from "../../../assets/back.png";
import styles from "./MagnetnaRezonanca.module.css";
import minus from "../../../assets/minus.png";
import { Slider } from "@mui/material";
import plus from "../../../assets/plus.png";
import dayjs from "dayjs";

const MagnetSlider = ({
  setTrenutnaStranica,
  korisnik,
  setEGFR,
  setTokKoraka,
  tokKoraka,
  ocistiVrijednosti,
}) => {
  const [sliderValue, setSliderValue] = useState(100);

  const dodajOduzmi = (val) => {
    if (val === 1 && sliderValue < 200)
      setSliderValue((prevState) => prevState + 1);
    if (val === -1 && sliderValue > 0)
      setSliderValue((prevState) => prevState - 1);
  };

  const calculateEGFR = () => {
    const godine =
      korisnik && korisnik["datum_rodjenja"]
        ? dayjs().diff(dayjs(korisnik["datum_rodjenja"]), "y")
        : null;
    const creatinine = sliderValue * 0.011312;
    let vrijednostEGFR = 175 * creatinine ** -1.154 * godine ** -0.203;

    if (korisnik.pol === 0) {
      vrijednostEGFR *= 0.742;
    }

    setEGFR(vrijednostEGFR);
  };

  const handleNastaviClick = () => {
    if (sliderValue !== 0) setTrenutnaStranica(23);
  };

  const daFunkcija = () => {
    calculateEGFR();
    handleNastaviClick();
  };

  // const ocistiVrijednosti = () => {
  //   const prethodnaPitanja = magnetnaPitanja[tokKoraka[tokKoraka.length - 1]];
  //   const neModul = prethodnaPitanja.ne.odgovor,
  //     daModul = prethodnaPitanja.da.odgovor;

  //   if (daModul !== undefined || neModul !== undefined)
  //     ocisti(daModul, neModul);
  // };

  const nazad = () => {
    // setTrenutnaStranica(19);
    setTrenutnaStranica(tokKoraka[tokKoraka.length - 1]);
    setTokKoraka((prevState) => prevState.slice(0, -1));
    if (tokKoraka.length > 0) ocistiVrijednosti();
  };

  return (
    <div>
      <Button
        text={<img alt="x" src={`${x}`} />}
        back
        alt
        buttonBack
        onClick={nazad}
      />
      <div className={styles.main_div}>
        <h1 className={styles.h1_slajder}>
          Molimo Vas odaberite vrijednost serumskog kreatinina
        </h1>
        <div className={styles.slider}>
          <button onClick={() => dodajOduzmi(-1)}>
            <img alt="minus" src={`${minus}`} />
          </button>

          <Slider
            min={0}
            max={200}
            value={sliderValue}
            onChange={(ev) => setSliderValue(+ev.target.value)}
            className={styles.slider_prevuci}
            sx={{
              "& .MuiSlider-thumb": {
                width: 50,
                height: 50,
                backgroundColor: "#3fa0ff",
                border: "5px solid #3498db",
                borderRadius: "50%",
              },
              width: "60%",
              height: "20px",
              color: "white",
            }}
          />
          <button onClick={() => dodajOduzmi(1)}>
            <img alt="minus" src={`${plus}`} />
          </button>
        </div>
        <p className={styles.slider_p}>{sliderValue} μmol/l </p>

        <div className={styles.buttons}>
          <Button text={"NE"} back disabled />
          <Button
            text={"NASTAVI"}
            next
            disabled={sliderValue === 0}
            onClick={sliderValue > 0 ? daFunkcija : () => {}}
          />
        </div>
      </div>
    </div>
  );
};

export default MagnetSlider;
