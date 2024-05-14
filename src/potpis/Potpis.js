import React from "react";
import SignatureCanvas from "react-signature-canvas";
import styles from "./Potpis.module.css";
import Button from "../components/UI/Button/Button";
import toast from "react-hot-toast";

const Potpis = ({ setTrenutnaStranica, setSign, sign, automatskaOdjava }) => {
  const handleOcisti = () => {
    sign.clear();
  };

  const handleSacuvaj = async () => {
    if (sign.isEmpty()) {
      toast.error("Polje za potpis ne smije biti prazno!");
    } else {
      await automatskaOdjava("mr");
      setTrenutnaStranica(35);
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
