import React, { useEffect, useState, useCallback, useRef } from "react";
import styles from "./PocetnaStranica.module.css";
import Button from "../UI/Button/Button";
import PotvrdaPol from "../Potvrdi_pol/Potvrdi_pol";
import InformacijeOPregledu from "../Informacije/InformacijeRadiografija/InformacijeOPregledu";
import RadioloskiPregled from "../Pregledi/Radioloski_pregled/RadioloskiPregled";
import kartica from "../../assets/184262-removebg-preview.png";
import logo from "../../assets/ukcrs-removebg-preview.png";
import { toast } from "react-hot-toast";
import Header from "../UI/Header/Header";
import back from "../../assets/back.png";
// import RadioloskiPregledKontrast from "../Pregledi/Radioloski_pregled_kontrast/RadioloskiPregledKontrast";
import HeaderKontrastInfo from "../UI/Header_kontrast/HeaderKontrast";
import MagnetnaRezonanca from "../Pregledi/Magnetna_rezonanca/MagnetnaRezonanca";
import Ultrazvuk from "../Pregledi/Ultrazvuk/Ultrazvuk";
import InformacijeMR from "../Informacije/InformacijeMR/InformacijeMR";
import InformacijeUltrazvuk from "../Informacije/InformacijeUltrazvuk/InformacijeUltrazvuk";
import Kt from "../Pregledi/KT/KT";
import InformacijeKT from "../Informacije/InformacijeKT/InformacijeKT";
import Radioskopija from "../Pregledi/Radioskopija/Radioskopija";
import InformacijeRadioskopija from "../Informacije/InformacijeRadioskopija/InformacijeRadioskopija";
// import Timer from "../Timer/timer";
import Ivu from "../Pregledi/IVU/IVU";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";
import { format } from "date-fns";

const PocetnaStranica = ({
  korisnik,
  setUser,
  pol,
  setKorisnik,
  setTrenutnaStranicaApp,
  setOdgovoriUltrazvuk,
  posaljiPodatke,
  setTrenutnaStranica,
  trenutnaStranica,
  setOdgovoriMR,
  odgovoriMR,
}) => {
  const [korak, setKorak] = useState(0);
  const [showBackdrop, setShowBackdrop] = useState(false);
  const [showCountdownBackdrop, setShowCountdownBackdrop] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [epizoda, setEpizoda] = useState([]);
  const [pacijent, setPacijent] = useState([]);

  const [input, setInput] = useState("");
  const [layout, setLayout] = useState("default");
  const keyboard = useRef();

  const brojeviLayout = {
    default: ["1 2 3", "4 5 6", "7 8 9", "{bksp} 0 {enter}"],
  };

  const onChange = (input) => {
    setInput(input);
    // console.log("Input changed", input);
  };

  const handleShift = () => {
    const newLayoutName = layout === "default" ? "shift" : "default";
    setLayout(newLayoutName);
  };

  const onKeyPress = (button) => {
    // console.log("Button pressed", button);

    if (button === "{shift}" || button === "{lock}") handleShift();
    if (button === "{enter}" && input.trim().length === 13) {
      potvrdiUnos();
    }
  };

  const onChangeInput = (event) => {
    const input = event.target.value;
    setInput(input);
    keyboard.current.setInput(input);
  };

  const potvrdiUnos = () => {
    setUser(input);
  };

  const imeKorisnika = korisnik ? `${korisnik.ime} ${korisnik.prezime}` : null;

  // useEffect(() => {
  const povuciEpizodu = useCallback(async () => {
    if (korisnik) {
      const response = await fetch(
        // `../rpc/radiologija.cfc?method=povuci_epizodu&jmbg=${korisnik.jmbg}`,
        `http://10.8.0.14:8080/kis/rpc/radiologija.cfc?method=povuci_epizodu&jmbg=3107018100555`,
        {
          method: "GET",
        }
      );
      const data = await response.json();
      setEpizoda(data);
    }
  }, [korisnik]);
  // }, [korisnik]);

  useEffect(() => {
    povuciEpizodu();
  }, [povuciEpizodu]);

  // console.log(epizoda);

  // useEffect(() => {
  //   if (korisnik) {
  //     const povuciEpizodu = async () => {
  //       const response = await fetch(
  //         `../rpc/radiologija.cfc?method=povuci_epizodu&jmbg=${korisnik.jmbg}`,
  //         {
  //           method: "GET",
  //           headers: {
  //             "Content-Type": "application/x-www-form-urlencoded",
  //           },
  //           mode: "no-cors",
  //         }
  //       );
  //       return await response.json();
  //     };
  //     povuciEpizodu().then((r) => setPacijent(r));
  //   }
  // }, [korisnik]);

  // console.log(pacijent);

  const izadjiIzPregleda = () => {
    setShowCountdownBackdrop(false);
    setShowBackdrop(false);
    setTrenutnaStranicaApp(0);
    setTimeout(() => {
      setKorisnik(null);
      toast.success("Uspješno ste se odjavili!", {
        duration: 3000,
      });
      setUser("");
    }, 1000);
  };

  // const focusInput = () => {
  //   const inputElement = document.getElementById("myInput");
  //   if (inputElement) {
  //     inputElement.focus();
  //   }
  // };

  // useEffect(() => {
  //   const intervalId = setInterval(focusInput, 2000);

  //   return () => {
  //     clearInterval(intervalId);
  //   };
  // }, []);

  // useEffect(() => {
  //   const enterNumberPeriodically = () => {
  //     setUser("3121299108");
  //   };

  //   const numberInterval = setInterval(enterNumberPeriodically, 5000);

  //   return () => {
  //     clearInterval(numberInterval);
  //   };
  // }, [setUser]);

  // console.log(pol);
  // console.log(selectedOption);
  // console.log(korak);

  return (
    <>
      {/* <Timer
        showBackdrop={showBackdrop}
        setShowBackdrop={setShowBackdrop}
        setTrenutnaStranicaApp={setTrenutnaStranicaApp}
        setKorisnik={setKorisnik}
        setUser={setUser}
        setShowCountdownBackdrop={setShowCountdownBackdrop}
        showCountdownBackdrop={showCountdownBackdrop}
        izadjiIzPregleda={izadjiIzPregleda}
      /> */}
      <div className={styles.mainDiv}>
        {/* {showBackdrop && (
          <div className={styles.backdrop}>
            <div className={styles.poruka}>
              <p>Automatsko vraćanje na početak za {countdown} sekundi</p>
              <h1>Bili ste neaktivni, nastavite unos?</h1>
            </div>
            <div className={styles.buttons2}>
              <Button
                back
                onClick={() => {
                  setShowBackdrop(false);
                  setTrenutnaStranicaApp(0);
                  setTimeout(() => {
                    setKorisnik(null);
                    toast.success("Uspješno ste se odjavili!", {
                      duration: 3000,
                    });
                    setUser("");
                  }, 1000);
                }}
              >
                Ne
              </Button>
              <Button
                next
                onClick={() => {
                  setShowBackdrop(false);
                  setShowCountdownBackdrop(true);
                  setCountdown(30);
                }}
              >
                Da
              </Button>
            </div>
          </div>
        )} */}

        <div className={styles.mainDiv}>
          {!korisnik ? (
            <>
              <div className={styles.nazadDiv}>
                <Button
                  back
                  alt
                  onClick={() => {
                    setTrenutnaStranicaApp(0);
                  }}
                >
                  <img src={back} alt="back" />
                </Button>
              </div>

              <div className={styles.bodyDiv}>
                <div className={styles.divLogo}>
                  <img className={styles.logo} src={logo} alt="logo UKC" />
                </div>
                <div className={styles.divTekst}>
                  <h1 className={styles.divApp_h1}>
                    {/* Učitajte zdravstvenu karticu... */}
                    Unesite matični broj...
                  </h1>
                </div>
              </div>

              <input
                id="myInput"
                className={styles.inputUcitajKarticu}
                autoFocus
                autoComplete="off"
                // value={korisnik ? "3121299108" : ""}
                // readOnly
                // onChange={dodajUser}
                // onChange={(e) => {
                //   setUser(e.target.value);
                // }}
                // onFocus={dodajUser}
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
              {/* <div className={styles.divKartica}>
                <img className={styles.karica} src={kartica} alt="kartica" />
              </div> */}
            </>
          ) : korak === 0 ? ( // Prikazuje se samo na prvom koraku
            <>
              {/* <Header korisnik={korisnik} /> */}

              <h1 className={styles.h1Zavod}>
                Dobro došli na Zavod za kliničku radiologiju UKC RS
              </h1>

              <h2
                className={`${styles.podaciOKorisniku} ${
                  imeKorisnika.length > 25 ? styles.podaciOKorisniku__alt : ""
                }`}
              >
                {imeKorisnika}
              </h2>
              <div className={styles.dat_rodAdresa}>
                <p>
                  {korisnik
                    ? format(new Date(korisnik.datum_rodjenja), "dd.MM.yyyy")
                    : ""}
                </p>
                <h3>
                  Danas ste zakazani za
                  <select
                    className={styles.selectOption}
                    value={selectedOption}
                    onChange={(e) => setSelectedOption(e.target.value)}
                  >
                    <option value="">Odaberite pregled</option>
                    <option value="Magnetna rezonanca">
                      Magnetna rezonanca
                    </option>
                    <option value="Radioskopija">Radioskopija</option>
                    <option value="Radiografija">Radiografija</option>
                    <option value="Ultrazvuk">Ultrazvuk</option>
                    <option value="KT">KT</option>
                    <option value="IVU">IVU</option>
                  </select>
                </h3>
                {/* <span>RADIOLOŠKI PREGLED?</span> */}
              </div>
              <div className={styles.buttons}>
                <Button
                  back
                  onClick={() => {
                    setTrenutnaStranicaApp(0);
                    setTimeout(() => {
                      toast.success("Uspjesno ste se odjavili!", {
                        duration: 3000,
                      });
                      setUser("");
                    }, 1000);
                  }}
                >
                  NE
                </Button>
                <Button
                  next
                  disabled2={!selectedOption}
                  onClick={() => {
                    if (selectedOption === "Magnetna rezonanca") {
                      setKorak(1);
                    } else if (selectedOption === "Radioskopija") {
                      setKorak(1);
                    } else if (selectedOption === "Radiografija") {
                      setKorak(1);
                    } else if (selectedOption === "Ultrazvuk") {
                      setKorak(6);
                    } else if (selectedOption === "KT") {
                      setKorak(1);
                    } else if (selectedOption === "IVU") {
                      setKorak(1);
                    }
                  }}
                >
                  DA
                </Button>
              </div>
            </>
          ) : korak === 1 ? ( // Prikazuje se samo na drugom koraku
            <>
              <Header korisnik={korisnik} headerAlt />
              {pol === 1 && (
                <PotvrdaPol
                  pol="muškog"
                  polAlt="ženskog"
                  korak={korak}
                  korisnik={korisnik}
                  setKorisnik={setKorisnik}
                  setKorak={setKorak}
                  selectedOption={selectedOption}
                />
              )}

              {pol === 0 && (
                <PotvrdaPol
                  pol="ženskog"
                  polAlt="muškog"
                  korak={korak}
                  korisnik={korisnik}
                  setKorisnik={setKorisnik}
                  setKorak={setKorak}
                  selectedOption={selectedOption}
                />
              )}
            </>
          ) : korak === 2 ? (
            <>
              <HeaderKontrastInfo korisnik={korisnik} />
              <RadioloskiPregled
                korak={korak}
                setUser={setUser}
                korisnik={korisnik}
                setKorak={setKorak}
                setKorisnik={setKorisnik}
                setTrenutnaStranicaApp={setTrenutnaStranicaApp}
                setTrenutnaStranica={setTrenutnaStranica}
                trenutnaStranica={trenutnaStranica}
              />
            </>
          ) : korak === 3 ? (
            <InformacijeOPregledu
              setKorak={setKorak}
              setUser={setUser}
              setKorisnik={setKorisnik}
              korak={korak}
              setTrenutnaStranicaApp={setTrenutnaStranicaApp}
            />
          ) : korak === 4 ? (
            <>
              {/* <Header korisnik={korisnik} /> */}
              <HeaderKontrastInfo korisnik={korisnik} />
              <Ivu
                epizoda={epizoda}
                korak={korak}
                setUser={setUser}
                korisnik={korisnik}
                setKorak={setKorak}
                setKorisnik={setKorisnik}
                setTrenutnaStranicaApp={setTrenutnaStranicaApp}
              />
            </>
          ) : korak === 5 ? (
            <>
              <HeaderKontrastInfo korisnik={korisnik} />
              <MagnetnaRezonanca
                epizoda={epizoda}
                korak={korak}
                setUser={setUser}
                korisnik={korisnik}
                setKorak={setKorak}
                setKorisnik={setKorisnik}
                setTrenutnaStranicaApp={setTrenutnaStranicaApp}
                posaljiPodatke={posaljiPodatke}
                setOdgovoriMR={setOdgovoriMR}
                odgovoriMR={odgovoriMR}
                setTrenutnaStranica={setTrenutnaStranica}
                trenutnaStranica={trenutnaStranica}
              />
            </>
          ) : korak === 6 ? (
            <>
              <HeaderKontrastInfo korisnik={korisnik} />
              <Ultrazvuk
                povuciEpizodu={povuciEpizodu}
                epizoda={epizoda}
                korak={korak}
                setUser={setUser}
                korisnik={korisnik}
                setKorak={setKorak}
                setKorisnik={setKorisnik}
                setTrenutnaStranicaApp={setTrenutnaStranicaApp}
                setOdgovoriUltrazvuk={setOdgovoriUltrazvuk}
                posaljiPodatke={posaljiPodatke}
                setTrenutnaStranica={setTrenutnaStranica}
                trenutnaStranica={trenutnaStranica}
              />
            </>
          ) : korak === 7 ? (
            <InformacijeMR
              setKorak={setKorak}
              setUser={setUser}
              setKorisnik={setKorisnik}
              korak={korak}
              setTrenutnaStranicaApp={setTrenutnaStranicaApp}
            />
          ) : korak === 8 ? (
            <InformacijeUltrazvuk
              setKorak={setKorak}
              setUser={setUser}
              setKorisnik={setKorisnik}
              korak={korak}
              setTrenutnaStranicaApp={setTrenutnaStranicaApp}
            />
          ) : korak === 9 ? (
            <>
              <HeaderKontrastInfo korisnik={korisnik} />
              <Kt
                epizoda={epizoda}
                korak={korak}
                setUser={setUser}
                korisnik={korisnik}
                setKorak={setKorak}
                setKorisnik={setKorisnik}
                setTrenutnaStranicaApp={setTrenutnaStranicaApp}
              />
            </>
          ) : korak === 10 ? (
            <InformacijeKT
              setKorak={setKorak}
              setUser={setUser}
              setKorisnik={setKorisnik}
              korak={korak}
              setTrenutnaStranicaApp={setTrenutnaStranicaApp}
            />
          ) : korak === 11 ? (
            <>
              <HeaderKontrastInfo korisnik={korisnik} />
              <Radioskopija
                epizoda={epizoda}
                korak={korak}
                setUser={setUser}
                korisnik={korisnik}
                setKorak={setKorak}
                setKorisnik={setKorisnik}
                setTrenutnaStranicaApp={setTrenutnaStranicaApp}
              />
            </>
          ) : korak === 12 ? (
            <InformacijeRadioskopija
              setKorak={setKorak}
              setUser={setUser}
              setKorisnik={setKorisnik}
              korak={korak}
              setTrenutnaStranicaApp={setTrenutnaStranicaApp}
            />
          ) : null}
        </div>
      </div>
    </>
  );
};

export default PocetnaStranica;
