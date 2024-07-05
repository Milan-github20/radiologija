import React from "react";
import SignatureCanvas from "react-signature-canvas";
import styles from "./Potpis.module.css";
import Button from "../components/UI/Button/Button";
import toast from "react-hot-toast";

const Potpis = ({
  setTrenutnaStranica,
  setSign,
  sign,
  automatskaOdjava,
  selectedOption,
}) => {
  const handleOcisti = () => {
    sign.clear();
  };

  const handleSacuvaj = async () => {
    if (sign.isEmpty()) {
      toast.error("Polje za potpis ne smije biti prazno!");
    } else {
      if (selectedOption === "5") {
        await automatskaOdjava("mr");
        setTrenutnaStranica(35);
      } else if (selectedOption === "3") {
        await automatskaOdjava("kt");
        setTrenutnaStranica(23);
      } else {
        //nesto drugo umjesto toga ispod
        await automatskaOdjava("kt");
        setTrenutnaStranica(23);
      }
    }
  };

  return (
    <div className={styles.mainPotpis}>
      <div>
        <SignatureCanvas
          canvasProps={{
            width: 1000,
            height: 500,
            className: styles.sigCanvas,
          }}
          ref={(data) => setSign(data)}
        />
      </div>
      <div className={styles.buttons_potpis}>
        <Button text={"OCISTI"} back onClick={handleOcisti} />
        <Button text={"NASTAVI"} next onClick={handleSacuvaj} />
      </div>
    </div>
  );
};

export default Potpis;
