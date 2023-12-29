import React, { useEffect, useState, useRef } from "react";
import Button from "../../UI/Button/Button";
import styles from "./KT.module.css";
import toast from "react-hot-toast";
import x from "../../../assets/back.png";
import info from "../../../assets/info.png";
import SalterNotifikacija from "../../SalterNotifikacija/SalterNotifikacija";
import { format, parse } from "date-fns";
import { Slider } from "@mui/material";
import minus from "../../../assets/minus.png";
import plus from "../../../assets/plus.png";

const Kt = ({
  korisnik,
  setKorak,
  setKorisnik,
  setUser,
  setTrenutnaStranicaApp,
}) => {
  const [trenutnaStranica, setTrenutnaStranica] = useState(0);
  const [buduceVrijeme, setBuduceVrijeme] = useState(null);
  const [sliderValue, setSliderValue] = useState(100);

  const [eGFR, setEGFR] = useState(null);

  const eGFRformatedRef = useRef();

  function racunanjeGodina(dateOfBirth) {
    const birthDate = new Date(dateOfBirth);
    const currentDate = new Date();
    const age = currentDate.getFullYear() - birthDate.getFullYear();

    // Proverite da li je osoba već napunila godine ove godine
    if (
      currentDate.getMonth() < birthDate.getMonth() ||
      (currentDate.getMonth() === birthDate.getMonth() &&
        currentDate.getDate() < birthDate.getDate())
    ) {
      // Osoba još nije napunila godine ove godine, smanjite starost za 1
      return age - 1;
    }

    return age;
  }

  const formatiranDatumRodjenja = format(
    parse(korisnik.dat_rod, "dd.MM.yyyy", new Date()),
    "yyyy-MM-dd"
  );

  const godine = racunanjeGodina(formatiranDatumRodjenja);

  // Dodajemo funkciju za izračun eGFR-a
  const calculateEGFR = () => {
    const creatinine = sliderValue * 0.011312;
    let result = 175 * creatinine ** -1.154 * godine ** -0.203;

    if (korisnik.pol === "F") {
      result *= 0.742;
    }

    setEGFR(result);
  };

  const handleSliderChange = (e) => {
    setSliderValue(parseInt(e.target.value, 10));
  };

  const handleMinusClick = () => {
    if (sliderValue > 0) {
      setSliderValue(sliderValue - 1);
    }
  };

  const handlePlusClick = () => {
    if (sliderValue < 200) {
      setSliderValue(sliderValue + 1);
    }
  };

  const handleNastaviClick = () => {
    if (sliderValue === 0) {
      return;
    }
    setTrenutnaStranica(22);
  };

  useEffect(() => {
    const danas = new Date();
    danas.setDate(danas.getDate() + 2);

    setBuduceVrijeme(danas);

    if (eGFR !== null) {
      eGFRformatedRef.current = parseFloat(eGFR.toFixed(0));
    } else {
      return;
    }
  }, [eGFR]);

  const formatDate = (dateTime) => {
    const dan = String(dateTime.getDate()).padStart(2, "0");
    const mjesec = String(dateTime.getMonth() + 1).padStart(2, "0");
    const godina = dateTime.getFullYear();

    const sat = String(dateTime.getHours()).padStart(2, "0");
    const minut = String(dateTime.getMinutes()).padStart(2, "0");

    return `${dan}.${mjesec}.${godina} ${sat}:${minut}`;
  };

  const formattedDate = buduceVrijeme ? formatDate(buduceVrijeme) : "";

  useEffect(() => {
    if (trenutnaStranica === 24) {
      const timeoutId = setTimeout(() => {
        setTrenutnaStranicaApp(0);
        setKorisnik(null);
        setUser("");
        setTimeout(() => {
          toast.success("Uspjesno ste se odjavili!", {
            duration: 3000,
          });
        }, 1000);
      }, 20000);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [trenutnaStranica, setKorisnik, setTrenutnaStranicaApp, setUser]);

  useEffect(() => {
    if (trenutnaStranica === 6) {
      const timeoutId = setTimeout(() => {
        setTrenutnaStranicaApp(0);
        setKorisnik(null);
        setUser("");
        setTimeout(() => {
          toast.success("Uspjesno ste se odjavili!", {
            duration: 3000,
          });
        }, 1000);
      }, 20000);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [trenutnaStranica, setKorisnik, setTrenutnaStranicaApp, setUser]);

  console.log(korisnik);

  switch (trenutnaStranica) {
    case 0:
      return (
        <div>
          <Button
            back
            alt
            buttonBack
            disabled2
            className={styles.buttonBack}
            // onClick={() => {
            //   setKorak(1);
            // }}
          >
            <img alt="x" src={x} />
          </Button>
          {korisnik.pol === "F" ? (
            <div className={styles.mainDiv}>
              <h1 className={styles.h1Pitanje}>Da li ste trudni?</h1>
              <div className={styles.buttons}>
                <Button
                  back
                  onClick={() => {
                    setTrenutnaStranica(2);
                  }}
                >
                  NE
                </Button>
                <Button
                  next
                  onClick={() => {
                    setTrenutnaStranica(1);
                  }}
                >
                  DA
                </Button>
              </div>
            </div>
          ) : korisnik.pol === "M" ? (
            setTrenutnaStranica(2)
          ) : (
            ""
          )}
        </div>
      );

    case 1:
      return (
        <SalterNotifikacija
          setKorak={setKorak}
          setUser={setUser}
          setKorisnik={setKorisnik}
          setTrenutnaStranicaApp={setTrenutnaStranicaApp}
        />
      );
    case 2:
      return (
        <div>
          <Button
            back
            alt
            buttonBack
            className={styles.buttonBack}
            onClick={() => {
              setKorak(0);
            }}
          >
            <img alt="x" src={x} />
          </Button>
          <div className={styles.mainDiv}>
            <h1 className={styles.h1Pitanje}>
              Jeste li već imali neki pregled koji je zahtijevao upotrebu
              kontrastnih sredstava?
            </h1>
            <div className={styles.buttons}>
              <Button
                back
                onClick={() => {
                  setTrenutnaStranica(11);
                }}
              >
                NE
              </Button>
              <Button
                next
                onClick={() => {
                  setTrenutnaStranica(4);
                }}
              >
                DA
              </Button>
            </div>
          </div>
        </div>
      );

    case 4:
      return (
        <div>
          <Button
            back
            alt
            buttonBack
            className={styles.buttonBack}
            onClick={() => {
              setTrenutnaStranica(2);
            }}
          >
            <img alt="x" src={x} />
          </Button>
          <div className={styles.mainDiv}>
            <h1 className={styles.h1Rezerva}>
              Da li ste imali neki od slijedećih problema prilikom prethodnog
              pregleda:
              <br /> <br />
              Alergijsku reakciju na jodno kontrastno sredstvo?
            </h1>
            {/* <h1 className={styles.h1Pitanje}>Šećerna bolest?</h1> */}
            <div className={styles.buttons}>
              <Button
                back
                onClick={() => {
                  setTrenutnaStranica(5);
                }}
              >
                NE
              </Button>
              <Button
                next
                onClick={() => {
                  setTrenutnaStranica(5);
                }}
              >
                DA
              </Button>
            </div>
          </div>
        </div>
      );

    case 5:
      return (
        <div>
          <Button
            back
            alt
            buttonBack
            className={styles.buttonBack}
            onClick={() => {
              setTrenutnaStranica(4);
            }}
          >
            <img alt="x" src={x} />
          </Button>
          <div className={styles.mainDiv}>
            <h1 className={styles.h1Rezerva}>
              Da li ste nakon primanja kontrasta imali neku od sljedećih tegoba:
              <br /> <br />
              Mučnina?
            </h1>
            {/* <h1>Mučnina?</h1> */}
            <div className={styles.buttons}>
              <Button
                back
                onClick={() => {
                  setTrenutnaStranica(6);
                }}
              >
                NE
              </Button>
              <Button
                next
                onClick={() => {
                  setTrenutnaStranica(6);
                }}
              >
                DA
              </Button>
            </div>
          </div>
        </div>
      );

    // case 5:
    //   return (
    //     <div>
    //       <Button
    //         back
    //         alt
    //         buttonBack
    //         className={styles.buttonBack}
    //         onClick={() => {
    //           setTrenutnaStranica(4);
    //         }}
    //       >
    //         <img alt="x" src={x} />
    //       </Button>
    //       <div className={styles.mainDiv}>
    //         <HeaderInformacije>
    //           Da li ste nakon primanja kontrasta imali neku od sljedećih tegoba:
    //         </HeaderInformacije>
    //         <h1 className={styles.h1Pitanje}>Mučnina?</h1>
    //         <div className={styles.buttons}>
    //           <Button
    //             back
    //             onClick={() => {
    //               setTrenutnaStranica(6);
    //             }}
    //           >
    //             NE
    //           </Button>
    //           <Button
    //             next
    //             onClick={() => {
    //               setTrenutnaStranica(6);
    //             }}
    //           >
    //             DA
    //           </Button>
    //         </div>
    //       </div>
    //     </div>
    //   );

    case 6:
      return (
        <div>
          <Button
            back
            alt
            buttonBack
            className={styles.buttonBack}
            onClick={() => {
              setTrenutnaStranica(5);
            }}
          >
            <img alt="x" src={x} />
          </Button>
          <div className={styles.mainDiv}>
            <h1 className={styles.h1Rezerva}>
              Da li ste nakon primanja kontrasta imali neku od sljedećih tegoba:
              <br /> <br />
              Povraćanje?
            </h1>
            {/* <h1 className={styles.h1Pitanje}>Povraćanje?</h1> */}
            <div className={styles.buttons}>
              <Button
                back
                onClick={() => {
                  setTrenutnaStranica(7);
                }}
              >
                NE
              </Button>
              <Button
                next
                onClick={() => {
                  setTrenutnaStranica(7);
                }}
              >
                DA
              </Button>
            </div>
          </div>
        </div>
      );

    case 7:
      return (
        <div>
          <Button
            back
            alt
            buttonBack
            className={styles.buttonBack}
            onClick={() => {
              setTrenutnaStranica(6);
            }}
          >
            <img alt="x" src={x} />
          </Button>
          <div className={styles.mainDiv}>
            <h1 className={styles.h1Rezerva}>
              Da li ste nakon primanja kontrasta imali neku od sljedećih tegoba:
              <br /> <br />
              Osjećaj davljenja/gušenje?
            </h1>
            {/* <h1 className={styles.h1Pitanje}>Osjećaj davljenja/gušenje?</h1> */}
            <div className={styles.buttons}>
              <Button
                back
                onClick={() => {
                  setTrenutnaStranica(8);
                }}
              >
                NE
              </Button>
              <Button
                next
                onClick={() => {
                  setTrenutnaStranica(8);
                }}
              >
                DA
              </Button>
            </div>
          </div>
        </div>
      );

    case 8:
      return (
        <div>
          <Button
            back
            alt
            buttonBack
            className={styles.buttonBack}
            onClick={() => {
              setTrenutnaStranica(7);
            }}
          >
            <img alt="x" src={x} />
          </Button>
          <div className={styles.mainDiv}>
            <h1 className={styles.h1Rezerva}>
              Da li ste nakon primanja kontrasta imali neku od sljedećih tegoba:
              <br /> <br />
              Osip?
            </h1>
            {/* <h1 className={styles.h1Pitanje}>Osip?</h1> */}
            <div className={styles.buttons}>
              <Button
                back
                onClick={() => {
                  setTrenutnaStranica(9);
                }}
              >
                NE
              </Button>
              <Button
                next
                onClick={() => {
                  setTrenutnaStranica(9);
                }}
              >
                DA
              </Button>
            </div>
          </div>
        </div>
      );

    case 9:
      return (
        <div>
          <Button
            back
            alt
            buttonBack
            className={styles.buttonBack}
            onClick={() => {
              setTrenutnaStranica(8);
            }}
          >
            <img alt="x" src={x} />
          </Button>
          <div className={styles.mainDiv}>
            <h1 className={styles.h1Rezerva}>
              Da li ste nakon primanja kontrasta imali neku od sljedećih tegoba:
              <br /> <br />
              Grčevi?
            </h1>
            {/* <h1 className={styles.h1Pitanje}>Grčevi?</h1> */}
            <div className={styles.buttons}>
              <Button
                back
                onClick={() => {
                  setTrenutnaStranica(10);
                }}
              >
                NE
              </Button>
              <Button
                next
                onClick={() => {
                  setTrenutnaStranica(10);
                }}
              >
                DA
              </Button>
            </div>
          </div>
        </div>
      );

    case 10:
      return (
        <div>
          <Button
            back
            alt
            buttonBack
            className={styles.buttonBack}
            onClick={() => {
              setTrenutnaStranica(9);
            }}
          >
            <img alt="x" src={x} />
          </Button>
          <div className={styles.mainDiv}>
            <h1 className={styles.h1Rezerva}>
              Da li ste nakon primanja kontrasta imali neku od sljedećih tegoba:
              <br /> <br />
              Nesvjestica?
            </h1>
            {/* <h1 className={styles.h1Pitanje}>Nesvjestica?</h1> */}
            <div className={styles.buttons}>
              <Button
                back
                onClick={() => {
                  setTrenutnaStranica(11);
                }}
              >
                NE
              </Button>
              <Button
                next
                onClick={() => {
                  setTrenutnaStranica(11);
                }}
              >
                DA
              </Button>
            </div>
          </div>
        </div>
      );

    case 11:
      return (
        <div>
          <Button
            back
            alt
            buttonBack
            className={styles.buttonBack}
            onClick={() => {
              setTrenutnaStranica(10);
            }}
          >
            <img alt="x" src={x} />
          </Button>
          <div className={styles.mainDiv}>
            {/* <h1 className={styles.h1Pitanje}>
              Da li bolujete od neke od slijedećih bolesti:
            </h1> */}
            <h1 className={styles.h1Rezerva}>
              Da li bolujete od neke od slijedećih bolesti:
              <br /> <br />
              Astma?
            </h1>
            <div className={styles.buttons}>
              <Button
                back
                onClick={() => {
                  setTrenutnaStranica(13);
                }}
              >
                NE
              </Button>
              <Button
                next
                onClick={() => {
                  setTrenutnaStranica(13);
                }}
              >
                DA
              </Button>
            </div>
          </div>
        </div>
      );

    // case 12:
    //   return (
    //     <div>
    //       <Button
    //         back
    //         alt
    //         buttonBack
    //         className={styles.buttonBack}
    //         onClick={() => {
    //           setTrenutnaStranica(11);
    //         }}
    //       >
    //         <img alt="x" src={x} />
    //       </Button>
    //       <div className={styles.mainDiv}>
    //         <HeaderInformacije>
    //           Da li bolujete od neke od slijedećih bolesti:
    //         </HeaderInformacije>
    //         <h1 className={styles.h1Pitanje}>Astma?</h1>
    //         <div className={styles.buttons}>
    //           <Button
    //             back
    //             onClick={() => {
    //               setTrenutnaStranica(13);
    //             }}
    //           >
    //             NE
    //           </Button>
    //           <Button
    //             next
    //             onClick={() => {
    //               setTrenutnaStranica(13);
    //             }}
    //           >
    //             DA
    //           </Button>
    //         </div>
    //       </div>
    //     </div>
    //   );

    case 13:
      return (
        <div>
          <Button
            back
            alt
            buttonBack
            className={styles.buttonBack}
            onClick={() => {
              setTrenutnaStranica(11);
            }}
          >
            <img alt="x" src={x} />
          </Button>
          <div className={styles.mainDiv}>
            <h1 className={styles.h1Rezerva}>
              Da li bolujete od neke od slijedećih bolesti:
              <br /> <br />
              Alergija koju morate liječiti?
            </h1>
            {/* <h1 className={styles.h1Pitanje}>Alergija koju morate liječiti?</h1> */}
            <div className={styles.buttons}>
              <Button
                back
                onClick={() => {
                  setTrenutnaStranica(14);
                }}
              >
                NE
              </Button>
              <Button
                next
                onClick={() => {
                  setTrenutnaStranica(14);
                }}
              >
                DA
              </Button>
            </div>
          </div>
        </div>
      );

    case 14:
      return (
        <div>
          <Button
            back
            alt
            buttonBack
            className={styles.buttonBack}
            onClick={() => {
              setTrenutnaStranica(13);
            }}
          >
            <img alt="x" src={x} />
          </Button>
          <div className={styles.mainDiv}>
            <h1 className={styles.h1Rezerva}>
              Da li bolujete od neke od slijedećih bolesti:
              <br /> <br />
              Bolesti bubrega ili nadbubrežnih žlijezda?
            </h1>
            {/* <h1 className={styles.h1Pitanje}>
              Bolesti bubrega ili nadbubrežnih žlijezda?
            </h1> */}
            <div className={styles.buttons}>
              <Button
                back
                onClick={() => {
                  setTrenutnaStranica(15);
                }}
              >
                NE
              </Button>
              <Button
                next
                onClick={() => {
                  setTrenutnaStranica(15);
                }}
              >
                DA
              </Button>
            </div>
          </div>
        </div>
      );

    case 15:
      return (
        <div>
          <Button
            back
            alt
            buttonBack
            className={styles.buttonBack}
            onClick={() => {
              setTrenutnaStranica(14);
            }}
          >
            <img alt="x" src={x} />
          </Button>
          <div className={styles.mainDiv}>
            <h1 className={styles.h1Rezerva}>
              Da li bolujete od neke od slijedećih bolesti:
              <br /> <br />
              Bolesti štitne žlijezde?
            </h1>
            {/* <h1 className={styles.h1Pitanje}>Bolesti štitne žlijezde?</h1> */}
            <div className={styles.buttons}>
              <Button
                back
                onClick={() => {
                  setTrenutnaStranica(16);
                }}
              >
                NE
              </Button>
              <Button
                next
                onClick={() => {
                  setTrenutnaStranica(16);
                }}
              >
                DA
              </Button>
            </div>
          </div>
        </div>
      );

    case 16:
      return (
        <div>
          <Button
            back
            alt
            buttonBack
            className={styles.buttonBack}
            onClick={() => {
              setTrenutnaStranica(15);
            }}
          >
            <img alt="x" src={x} />
          </Button>
          <div className={styles.mainDiv}>
            <h1 className={styles.h1Rezerva}>
              Da li bolujete od neke od slijedećih bolesti:
              <br /> <br />
              Šećerna bolest?
            </h1>
            {/* <h1 className={styles.h1Pitanje}>Šećerna bolest?</h1> */}
            <div className={styles.buttons}>
              <Button
                back
                onClick={() => {
                  setTrenutnaStranica(17);
                }}
              >
                NE
              </Button>
              <Button
                next
                onClick={() => {
                  setTrenutnaStranica(17);
                }}
              >
                DA
              </Button>
            </div>
          </div>
        </div>
      );

    case 17:
      return (
        <div>
          <Button
            back
            alt
            buttonBack
            className={styles.buttonBack}
            onClick={() => {
              setTrenutnaStranica(16);
            }}
          >
            <img alt="x" src={x} />
          </Button>
          <div className={styles.mainDiv}>
            <h1 className={styles.h1Pitanje}>Da li uzimate metformin?</h1>
            <div className={styles.buttons}>
              <Button
                back
                onClick={() => {
                  setTrenutnaStranica(19);
                }}
              >
                NE
              </Button>
              <Button
                next
                onClick={() => {
                  setTrenutnaStranica(18);
                }}
              >
                DA
              </Button>
            </div>
          </div>
        </div>
      );

    case 18:
      return (
        <div>
          <Button
            back
            alt
            buttonBack
            className={styles.buttonBack}
            onClick={() => {
              setTrenutnaStranica(17);
            }}
          >
            <img alt="x" src={x} />
          </Button>
          <div className={styles.mainDiv}>
            <h1 className={styles.h1Rezerva}>
              Pošto uzimate metformin, nakon primanja intravenskog kontrasta
              morate prestati uzimati metformin u periodu od 2 dana nakon
              radiološkog pregleda. <br /> <br />
              Počnite ponovo uzimati metformin {formattedDate}
            </h1>
            <div className={styles.buttons}>
              <Button
                back
                disabled2
                // onClick={() => {
                //   setTrenutnaStranica(19);
                // }}
              >
                NE
              </Button>
              <Button
                next
                onClick={() => {
                  setTrenutnaStranica(19);
                }}
              >
                NASTAVI
              </Button>
            </div>
          </div>
        </div>
      );

    case 19:
      return (
        <div>
          <Button
            back
            alt
            buttonBack
            className={styles.buttonBack}
            onClick={() => {
              setTrenutnaStranica(18);
            }}
          >
            <img alt="x" src={x} />
          </Button>
          <div className={styles.mainDiv}>
            <h1 className={styles.h1Pitanje}>
              Da li ste imali operativne zahvate?
            </h1>
            <div className={styles.buttons}>
              <Button
                back
                onClick={() => {
                  setTrenutnaStranica(21);
                }}
              >
                NE
              </Button>
              <Button
                next
                onClick={() => {
                  setTrenutnaStranica(20);
                }}
              >
                DA
              </Button>
            </div>
          </div>
        </div>
      );

    case 20:
      return (
        <div>
          <Button
            back
            alt
            buttonBack
            className={styles.buttonBack}
            onClick={() => {
              setTrenutnaStranica(19);
            }}
          >
            <img alt="x" src={x} />
          </Button>
          <div className={styles.mainDiv}>
            <h1 className={styles.h1Pitanje}>
              Molimo Vas da kad budete prozvani obavijestite osoblje na šalteru
              koje ste operativne zahvate imali.
            </h1>
            <div className={styles.buttons}>
              <Button
                back
                disabled2
                // onClick={() => {
                //   setTrenutnaStranica(20);
                // }}
              >
                NE
              </Button>
              <Button
                next
                onClick={() => {
                  setTrenutnaStranica(21);
                }}
              >
                NASTAVI
              </Button>
            </div>
          </div>
        </div>
      );

    case 21:
      return (
        <div>
          <Button
            back
            alt
            buttonBack
            className={styles.buttonBack}
            onClick={() => {
              setTrenutnaStranica(20);
            }}
          >
            <img alt="x" src={x} />
          </Button>
          <div className={styles.mainDiv}>
            <h1 className={styles.h1Rezerva2}>
              Molimo Vas odaberite vrijednost serumskog kreatinina
            </h1>
            <div className={styles.slider}>
              <button onClick={handleMinusClick}>
                <img alt="minus" src={minus} />
              </button>

              <Slider
                min={0}
                max={200}
                value={sliderValue}
                onChange={handleSliderChange}
                className={styles.sliderPrevuci}
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
              <button onClick={handlePlusClick}>
                <img alt="minus" src={plus} />
              </button>
            </div>
            <p className={styles.sliderP}>{sliderValue} μmol/l </p>

            <div className={styles.buttons}>
              <Button
                back
                disabled2
                onClick={() => {
                  setTrenutnaStranica(20);
                }}
              >
                NE
              </Button>
              <Button
                next
                onClick={() => {
                  calculateEGFR();
                  handleNastaviClick();
                }}
                disabled2={sliderValue === 0}
              >
                NASTAVI
              </Button>
            </div>
          </div>
        </div>
      );

    case 22:
      let message = "";
      let message2 = "";

      if (eGFR > 60) {
        message =
          "Imate veoma nizak rizik za razvoj kontrastom indikovane nefropatije. ";
        message2 = "Nisu potrebne nikakve mjere prevencije.";
      } else if (eGFR >= 45 && eGFR <= 60) {
        message =
          "Imate nizak rizik za razvoj kontrastom indikovane nefropatije.";
        message2 = "Na dan pregleda popijte veću količinu tečnosti ";
      } else if (eGFR < 45) {
        message =
          "Imate  umjreno visok rizik za razvoj kontrastom indikovane nefropatije.";
        message2 =
          "Neophodna je intravenska hidratacija. Obratite se osoblju na šalteru.";
      } else if (eGFR < 30) {
        message =
          "Imate  visok rizik za razvoj kontrastom indikovane nefropatije";
        message2 = "Obratite se osoblju na šalteru";
      }

      return (
        <div>
          <Button
            back
            alt
            buttonBack
            className={styles.buttonBack}
            onClick={() => {
              setTrenutnaStranica(21);
            }}
          >
            <img alt="x" src={x} />
          </Button>
          <div className={styles.mainDiv}>
            <h1 className={styles.h1Rezerva}>
              <span>
                Vaš eGFR iznosi {eGFRformatedRef.current} ml/min (1,73m
                <sup style={{ fontSize: "0.5em" }}>2</sup>)
              </span>
              {message} <br /> <br /> {message2}
            </h1>
            <div className={styles.buttons}>
              <Button
                back
                disabled2
                // onClick={() => {
                //   setTrenutnaStranica(21);
                // }}
              >
                NE
              </Button>
              <Button
                next
                onClick={() => {
                  setTrenutnaStranica(24);
                }}
              >
                NASTAVI
              </Button>
            </div>
          </div>
        </div>
      );

    // case 23:
    //   return (
    //     <div>
    //       <Button
    //         back
    //         alt
    //         buttonBack
    //         className={styles.buttonBack}
    //         onClick={() => {
    //           setTrenutnaStranica(22);
    //         }}
    //       >
    //         <img alt="x" src={x} />
    //       </Button>
    //       <div className={styles.mainDiv}>
    //         <h1 className={styles.h1Rezerva}>
    //           Da li ste imali neki od slijedećih problema prilikom prethodnog
    //           pregleda:
    //           <br /> <br />
    //           Alergijsku reakciju na jodno kontrastno sredstvo?
    //         </h1>
    //         {/* <h1 className={styles.h1Pitanje}>Šećerna bolest?</h1> */}
    //         <div className={styles.buttons}>
    //           <Button
    //             back
    //             onClick={() => {
    //               setTrenutnaStranica(24);
    //             }}
    //           >
    //             NE
    //           </Button>
    //           <Button
    //             next
    //             onClick={() => {
    //               setTrenutnaStranica(24);
    //             }}
    //           >
    //             DA
    //           </Button>
    //         </div>
    //       </div>
    //     </div>
    //   );

    case 24:
      return (
        <>
          <div>
            <Button
              back
              alt
              buttonBack
              className={styles.buttonBack}
              onClick={() => {
                setTrenutnaStranica(22);
              }}
            >
              <img alt="x" src={x} />
            </Button>
            <div className={styles.mainDiv}>
              <h1 className={styles.h1}>
                USPJEŠNO STE PRIJAVLJENI NA PREGLED, SAČEKAJTE DA VAS PROZOVEMO
              </h1>
              <h3 className={styles.h3}>
                Da li želite više informacija o pregledu koji ćete danas raditi?
              </h3>

              <div className={styles.buttons}>
                <Button
                  back
                  onClick={() => {
                    setTrenutnaStranicaApp(0);
                    setKorisnik(null);
                    setUser("");
                    setTimeout(() => {
                      toast.success("Uspjesno ste se odjavili!", {
                        duration: 3000,
                      });
                    }, 1000);
                  }}
                >
                  NE
                </Button>
                <Button
                  next
                  onClick={() => {
                    setTrenutnaStranica(25);
                  }}
                >
                  DA
                </Button>
              </div>
            </div>
          </div>
        </>
      );

    case 25:
      return (
        <>
          <div>
            <Button
              back
              alt
              buttonBack
              className={styles.buttonBack}
              onClick={() => {
                setTrenutnaStranica(24);
              }}
            >
              <img alt="x" src={x} />
            </Button>
            <div className={styles.mainDiv}>
              <div className={styles.divQrKodPregled}>
                <div className={styles.qrkod}>
                  <div className={styles.qrkodDiv}>
                    <h1>Skenirajte QR KOD</h1>

                    <div className={styles.qrCode}>
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
                    setKorak(10);
                  }}
                >
                  <div className={styles.pregledDiv}>
                    <h1>Dodirnite ovdje za više informacija</h1>

                    <div className={styles.info}>
                      <img src={info} alt="info" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      );

    default:
      return null;
  }
};

export default Kt;
