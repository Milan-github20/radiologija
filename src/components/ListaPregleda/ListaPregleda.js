import React, { useState } from "react";
import styles from "./ListaPregleda.module.css";
import back from "../../assets/back.png";
import RadioloskiPregled from "../Pregledi/Radioloski_pregled/RadioloskiPregled";
import CT from "../Pregledi/CT/CT";

const ListaPregleda = ({ korisnik, setKorak, setKorisnik }) => {
  const [trenutniKorak, setTrenutniKorak] = useState(0);

  console.log(korisnik);

  switch (trenutniKorak) {
    case 0:
      return (
        <div className={styles.pocetniDiv}>
          <div>
            <button
              onClick={() => {
                setKorak(0);
              }}
              className={styles.nazad}
            >
              <img src={back} alt="back" />
            </button>
          </div>
          <div>
            <h2 className={styles.izaberiPregled}>IZABERITE PREGLED</h2>

            <div className={styles.pregledi}>
              <div
                onClick={() => {
                  setTrenutniKorak(1);
                }}
              >
                Radiološki pregled
              </div>
              <div
              // onClick={() => {
              //   setTrenutniKorak(2);
              // }}
              >
                CT
              </div>
            </div>
          </div>
        </div>
      );

    case 1:
      return (
        <RadioloskiPregled
          korisnik={korisnik}
          setKorak={setKorak}
          setKorisnik={setKorisnik}
        />
      );

    case 2:
      return <CT />;
    // Dodajte case-ove za druge korake ako ih imate
    default:
      return null;
  }
};

export default ListaPregleda;
