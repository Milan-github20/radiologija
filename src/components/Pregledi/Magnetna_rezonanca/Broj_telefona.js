import React, { useState, useRef } from "react";
import Button from "../../UI/Button/Button";
import x from "../../../assets/back.png";
import styles from "../Magnetna_rezonanca/MagnetnaRezonanca.module.css";
import { magnetnaPitanja } from "../../../konstante/konstante";
import Keyboard from "react-simple-keyboard";

const BrojTelefona = ({
  setTrenutnaStranica,
  setTokKoraka,
  tokKoraka,
  ocistiVrijednosti,
  trenutnaStranica,
  brojTelefona,
  setBrojTelefona,
  sacuvaj,
}) => {
  const trenutnaPitanja = magnetnaPitanja[trenutnaStranica];

  const handleNastaviClick = () => {
    setTokKoraka((prevState) => [...prevState, trenutnaStranica]);
    setTrenutnaStranica(trenutnaPitanja.da.akcija);
    sacuvaj(74163);
  };

  const daFunkcija = () => {
    handleNastaviClick();
  };

  const nazad = () => {
    setTrenutnaStranica(tokKoraka[tokKoraka.length - 1]);
    setTokKoraka((prevState) => prevState.slice(0, -1));
    if (tokKoraka.length > 0) ocistiVrijednosti();
  };

  const [layout, setLayout] = useState("default");
  //   const [input, setInput] = useState("");
  const keyboard = useRef();

  const brojeviLayout = {
    default: ["1 2 3", "4 5 6", "7 8 9", "{bksp} 0 {enter}"],
  };

  const onChange = (brojTelefona) => {
    setBrojTelefona(brojTelefona);
  };

  const onKeyPress = (button) => {
    if (button === "{shift}" || button === "{lock}") handleShift();
    if (button === "{enter}") potvrdiUnos();
  };

  const onChangeInput = (event) => {
    const input = event.target.value;
    setBrojTelefona(input.trim());
    keyboard.current["setInput"](input);
  };

  const potvrdiUnos = () => {
    daFunkcija();
  };

  const handleShift = () => {
    const newLayoutName = layout === "default" ? "shift" : "default";
    setLayout(newLayoutName);
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
        <div>
          <input
            placeholder="Broj Telefona"
            onChange={onChangeInput}
            value={brojTelefona}
            autoFocus
            autoComplete="off"
          />
        </div>

        {/* <input
          id="myInput"
          className={styles.inputUcitajKarticu}
          autoFocus
          autoComplete="off"
          value={input}
          onChange={onChangeInput}
        /> */}
        <div className={styles.divKartica}>
          <Keyboard
            className={styles.simple_keyboard}
            keyboardRef={(r) => (keyboard.current = r)}
            layoutName={layout}
            display={{
              "{bksp}": "Obrisi",
              "{enter}": "Potvrdi",
            }}
            onChange={onChange}
            onKeyPress={onKeyPress}
            layout={brojeviLayout}
          />
        </div>
      </div>
    </div>
  );
};

export default BrojTelefona;
