import React, { useState } from "react";
import SignatureCanvas from "react-signature-canvas";
import styles from "./Potpis.module.css";
import Button from "../components/UI/Button/Button";
import toast from "react-hot-toast";

const Potpis = ({
  setTrenutnaStranicaApp,
  idDokumenta,
  setUser,
  setKorisnik,
}) => {
  const [sign, setSign] = useState();

  const dodajPotpis = async () => {
    const potpisUrl = sign.getTrimmedCanvas().toDataURL("image/png");

    const newData = new URLSearchParams();
    newData.append("id_dokumenta", idDokumenta);
    newData.append("id_pacijenta", 465820);
    newData.append("potpis", JSON.stringify(potpisUrl));

    try {
      const response = await fetch(
        `http://10.8.0.14:8080/kis/rpc/radiologija.cfc?method=dodaj_potpis`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: newData,
        }
      );

      if (response.ok) {
        console.log("Podaci uspešno poslati!");
      } else {
        console.error("Došlo je do greške pri slanju podataka.");
      }
    } catch (error) {
      console.error("Došlo je do greške pri slanju podataka:", error);
    }
  };

  const handleOcisti = () => {
    sign.clear();
  };

  const handleSacuvaj = async () => {
    if (sign.isEmpty()) {
      toast.error("Polje za potpis ne smije biti prazno!");
    } else {
      await dodajPotpis();
      setUser("");
      setKorisnik(null);
      setTimeout(() => {
        toast.success("Uspjesno ste se odjavili i sačuvali potpis!", {
          duration: 3000,
        });
      }, 1000);
      setTrenutnaStranicaApp(0);
    }
  };

  return (
    <div className={styles.mainPotpis}>
      <Button onClick={() => setTrenutnaStranicaApp(0)} potpisButtonNazad>
        Nazad
      </Button>
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
      <div className={styles.buttons}>
        <button onClick={handleOcisti} className={styles.ocisti}>
          Ocisti
        </button>
        <button onClick={handleSacuvaj} className={styles.sacuvaj}>
          Sacuvaj potpis
        </button>
      </div>
    </div>
  );
};

export default Potpis;
