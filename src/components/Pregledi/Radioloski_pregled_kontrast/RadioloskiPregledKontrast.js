import React, { useEffect, useRef, useState } from "react";
import Button from "../../UI/Button/Button";
import styles from "./RadioloskiPregledKontrast.module.css";
import SalterNotifikacija from "../../SalterNotifikacija/SalterNotifikacija";
import toast from "react-hot-toast";
// import HeaderInformacije from "../../UI/Header_informacije_kontrast/Header_informacije_kontrast";
import { format, parse } from "date-fns";
import { Slider } from "@mui/material";
import minus from "../../../assets/minus.png";
import plus from "../../../assets/plus.png";
import x from "../../../assets/back.png";

const RadioloskiPregledKontrast = ({
  korisnik,
  setKorak,
  setKorisnik,
  setUser,
  setTrenutnaStranicaApp,
  setTrenutnaStranicaMagnet,
}) => {
  console.log(korisnik);
  const [trenutnaStranica, setTrenutnaStranica] = useState(2);
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
    if (trenutnaStranica === 23) {
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

  switch (trenutnaStranica) {
    // case 0:
    //   return (
    //     <div>
    //       <Button
    //         back
    //         alt
    //         buttonBack
    //         disabled2
    //         className={styles.buttonBack}
    //         // onClick={() => {
    //         //   setKorak(1);
    //         // }}
    //       >
    //         <img alt="x" src={x} />
    //       </Button>
    //       {korisnik.pol === "F" ? (
    //         <div className={styles.mainDiv}>
    //           <h1 className={styles.h1Pitanje}>Da li ste trudni?</h1>
    //           <div className={styles.buttons}>
    //             <Button
    //               back
    //               onClick={() => {
    //                 setTrenutnaStranica(2);
    //               }}
    //             >
    //               NE
    //             </Button>
    //             <Button
    //               next
    //               onClick={() => {
    //                 setTrenutnaStranica(1);
    //               }}
    //             >
    //               DA
    //             </Button>
    //           </div>
    //         </div>
    //       ) : korisnik.pol === "M" ? (
    //         setTrenutnaStranica(2)
    //       ) : (
    //         ""
    //       )}
    //     </div>
    //   );

    // case 1:
    //   return (
    //     <SalterNotifikacija
    //       setKorak={setKorak}
    //       setUser={setUser}
    //       setKorisnik={setKorisnik}
    //       setTrenutnaStranicaApp={setTrenutnaStranicaApp}
    //     />
    //   );
    case 2:
      return (
        <div>
          <Button
            back
            alt
            buttonBack
            className={styles.buttonBack}
            onClick={() => {
              setTrenutnaStranicaMagnet(5);
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

    case 6:
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
              setTrenutnaStranica(2);
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
                  setTrenutnaStranica(19);
                }}
              >
                NE
              </Button>
              <Button
                next
                onClick={() => {
                  setTrenutnaStranica(19);
                }}
              >
                DA
              </Button>
            </div>
          </div>
        </div>
      );

    // case 17:
    //   return (
    //     <div>
    //       <Button
    //         back
    //         alt
    //         buttonBack
    //         className={styles.buttonBack}
    //         onClick={() => {
    //           setTrenutnaStranica(16);
    //         }}
    //       >
    //         <img alt="x" src={x} />
    //       </Button>
    //       <div className={styles.mainDiv}>
    //         <h1 className={styles.h1Pitanje}>Da li uzimate metformin?</h1>
    //         <div className={styles.buttons}>
    //           <Button
    //             back
    //             onClick={() => {
    //               setTrenutnaStranica(19);
    //             }}
    //           >
    //             NE
    //           </Button>
    //           <Button
    //             next
    //             onClick={() => {
    //               setTrenutnaStranica(18);
    //             }}
    //           >
    //             DA
    //           </Button>
    //         </div>
    //       </div>
    //     </div>
    //   );

    // case 18:
    //   return (
    //     <div>
    //       <Button
    //         back
    //         alt
    //         buttonBack
    //         className={styles.buttonBack}
    //         onClick={() => {
    //           setTrenutnaStranica(17);
    //         }}
    //       >
    //         <img alt="x" src={x} />
    //       </Button>
    //       <div className={styles.mainDiv}>
    //         <h1 className={styles.h1Rezerva}>
    //           Pošto uzimate metformin, nakon primanja intravenskog kontrasta
    //           morate prestati uzimati metformin u periodu od 2 dana nakon
    //           radiološkog pregleda. <br /> <br />
    //           Počnite ponovo uzimati metformin {formattedDate}
    //         </h1>
    //         <div className={styles.buttons}>
    //           <Button
    //             back
    //             disabled2
    //             // onClick={() => {
    //             //   setTrenutnaStranica(19);
    //             // }}
    //           >
    //             NE
    //           </Button>
    //           <Button
    //             next
    //             onClick={() => {
    //               setTrenutnaStranica(19);
    //             }}
    //           >
    //             NASTAVI
    //           </Button>
    //         </div>
    //       </div>
    //     </div>
    //   );

    case 19:
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
              setTrenutnaStranica(19);
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
                  // setTrenutnaStranica(23);
                  setTrenutnaStranicaMagnet(10);
                }}
              >
                NASTAVI
              </Button>
            </div>
          </div>
        </div>
      );

    case 23:
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

              <div className={styles.qrCode}>
                <h1>Pregled možete pogledati i skeniranjem qr koda</h1>
                <img
                  src="https://chart.googleapis.com/chart?cht=qr&chl=https%3A%2F%2Fwww.kc-bl.com%2FEn%2F&chs=180x180&choe=UTF-8&chld=L|2"
                  alt="QR kod"
                />
              </div>

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
                    setKorak(3);
                  }}
                >
                  DA
                </Button>
              </div>
            </div>
          </div>
        </>
      );

    default:
      return null;
  }
};

export default RadioloskiPregledKontrast;
