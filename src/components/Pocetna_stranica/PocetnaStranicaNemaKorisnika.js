import React, {useRef, useState} from 'react';
import styles from "./PocetnaStranica.module.css";
import Button from "../UI/Button/Button";
import back from "../../assets/back.png";
import logo from "../../assets/ukcrs-removebg-preview.png";
import Keyboard from "react-simple-keyboard";

const PocetnaStranicaNemaKorisnika = ({setTrenutnaStranicaApp, povuciKorisnika}) => {
  const [layout, setLayout] = useState("default");
  const [input, setInput] = useState("");
  const keyboard = useRef();

  const brojeviLayout = {
    default: ["1 2 3", "4 5 6", "7 8 9", "{bksp} 0 {enter}"],
  };

  const onChange = (input) => {
    setInput(input);
  };

  const onKeyPress = (button) => {
    if (button === "{shift}" || button === "{lock}") handleShift();
    if (button === "{enter}" && input.trim().length === 13) {
      potvrdiUnos();
    }
  };

  const onChangeInput = (event) => {
    const input = event.target.value;
    setInput(input.trim());
    keyboard.current['setInput'](input);
  };

  const potvrdiUnos = () => {
    povuciKorisnika(input);
  };

  const handleShift = () => {
    const newLayoutName = layout === "default" ? "shift" : "default";
    setLayout(newLayoutName);
  };

  return (
    <>
      <div className={styles.nazadDiv}>
        <Button
          back
          alt
          onClick={() => setTrenutnaStranicaApp(0)}
          text={<img src={`${back}`} alt="back"/>}
        />
      </div>

      <div className={styles.bodyDiv}>
        <div className={styles.divLogo}>
          <img className={styles.logo} src={`${logo}`} alt="logo UKC"/>
        </div>
        <div className={styles.divTekst}>
          <h1 className={styles.divApp_h1}>
            Unesite matični broj...
          </h1>
        </div>
      </div>

      <input
        id="myInput"
        className={styles.inputUcitajKarticu}
        autoFocus
        autoComplete="off"
        value={input}
        onChange={onChangeInput}
      />
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
    </>
  );
};

export default PocetnaStranicaNemaKorisnika;