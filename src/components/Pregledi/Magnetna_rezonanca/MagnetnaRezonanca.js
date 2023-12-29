import React, { useEffect, useState } from "react";
import Button from "../../UI/Button/Button";
import styles from "./MagnetnaRezonanca.module.css";
import toast from "react-hot-toast";
import x from "../../../assets/back.png";
import info from "../../../assets/info.png";
import RadioloskiPregledKontrast from "../Radioloski_pregled_kontrast/RadioloskiPregledKontrast";

const MagnetnaRezonanca = ({
  korisnik,
  setKorak,
  setKorisnik,
  setUser,
  setTrenutnaStranicaApp,
}) => {
  const [trenutnaStranica, setTrenutnaStranica] = useState(0);
  const [buduceVrijeme, setBuduceVrijeme] = useState(null);

  useEffect(() => {
    const danas = new Date();
    danas.setDate(danas.getDate() + 1);

    setBuduceVrijeme(danas);
  }, []);

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
    if (trenutnaStranica === 20) {
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
            {korisnik.pol === "F" ? (
              <>
                <h1 className={styles.h1Pitanje}>
                  Pregled će se uraditi bez davanja injekcije kontrasta.
                </h1>
                <div className={styles.buttons}>
                  <Button
                    back
                    disabled2
                    // onClick={() => {
                    //   setTrenutnaStranica(11);
                    // }}
                  >
                    NE
                  </Button>
                  <Button
                    next
                    onClick={() => {
                      setTrenutnaStranica(2);
                    }}
                  >
                    NASTAVI
                  </Button>
                </div>
              </>
            ) : (
              setTrenutnaStranica(5)
            )}
          </div>
        </div>
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
              setTrenutnaStranica(0);
            }}
          >
            <img alt="x" src={x} />
          </Button>
          <div className={styles.mainDiv}>
            {korisnik.pol === "F" ? (
              <>
                <h1 className={styles.h1Pitanje}>Da li ste dojilja?</h1>
                <div className={styles.buttons}>
                  <Button
                    back
                    onClick={() => {
                      setTrenutnaStranica(4);
                    }}
                  >
                    NE
                  </Button>
                  <Button
                    next
                    onClick={() => {
                      setTrenutnaStranica(3);
                    }}
                  >
                    DA
                  </Button>
                </div>
              </>
            ) : (
              setTrenutnaStranica(5)
            )}
          </div>
        </div>
      );

    case 3:
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
            <h1 className={styles.h1Pitanje}>
              Ukoliko primite kontrastno sredstvo morate da prestanete da dojite
              Vaše dijete do {formattedDate}
            </h1>
            {/* <h1>Mučnina?</h1> */}
            <div className={styles.buttons}>
              <Button
                back
                disabled2
                // onClick={() => {
                //   setTrenutnaStranica(6);
                // }}
              >
                NE
              </Button>
              <Button
                next
                onClick={() => {
                  setTrenutnaStranica(4);
                }}
              >
                NASTAVI
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
              setTrenutnaStranica(3);
            }}
          >
            <img alt="x" src={x} />
          </Button>
          <div className={styles.mainDiv}>
            <h1 className={styles.h1Pitanje}>
              Da li imate kontracepcijski uložak (spiralu)?
            </h1>
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
              if (korisnik.pol === "M") {
                setKorak(1);
              } else if (korisnik.pol === "F") {
                setTrenutnaStranica(4);
              }
            }}
          >
            <img alt="x" src={x} />
          </Button>
          <div className={styles.mainDiv}>
            <h1 className={styles.h1Pitanje}>
              Da li ste već imali MR pregled?
            </h1>
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
              setTrenutnaStranica(5);
            }}
          >
            <img alt="x" src={x} />
          </Button>
          <div className={styles.mainDiv}>
            <h1 className={styles.h1Rezerva}>
              Da li ste imali neki od slijedećih problema prilikom prethodnog
              pregleda:
              <br /> <br />
              Strah od zatvorenog prostora?
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
        // <div>
        //   <Button
        //     back
        //     alt
        //     buttonBack
        //     className={styles.buttonBack}
        //     onClick={() => {
        //       setTrenutnaStranica(6);
        //     }}
        //   >
        //     <img alt="x" src={x} />
        //   </Button>
        //   <div className={styles.mainDiv}>
        //     <h1 className={styles.h1Rezerva}>
        //       Da li ste imali neki od slijedećih problema prilikom prethodnog
        //       pregleda:
        //       <br /> <br />
        //       Alergijsku reakciju na kontrastno sredstvo?
        //     </h1>
        //     {/* <h1 className={styles.h1Pitanje}>Osjećaj davljenja/gušenje?</h1> */}
        //     <div className={styles.buttons}>
        //       <Button
        //         back
        //         onClick={() => {
        //           setTrenutnaStranica(8);
        //         }}
        //       >
        //         NE
        //       </Button>
        //       <Button
        //         next
        //         onClick={() => {
        //           setTrenutnaStranica(8);
        //         }}
        //       >
        //         DA
        //       </Button>
        //     </div>
        //   </div>
        // </div>
        <>
          <RadioloskiPregledKontrast
            setUser={setUser}
            korisnik={korisnik}
            setKorak={setKorak}
            setKorisnik={setKorisnik}
            setTrenutnaStranicaApp={setTrenutnaStranicaApp}
            setTrenutnaStranicaMagnet={setTrenutnaStranica}
          />
        </>
      );

    case 10:
      return (
        <div>
          <Button
            back
            alt
            buttonBack
            className={styles.buttonBack}
            // onClick={() => {
            //   setTrenutnaStranica(9);
            // }}
            disabled2
          >
            <img alt="x" src={x} />
          </Button>
          <div className={styles.mainDiv}>
            <h1 className={styles.h1Rezerva}>
              Da li imate ugrađen:
              <br /> <br />
              Pejsmejker (srčani stimulator)?
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
            <h1 className={styles.h1Rezerva}>
              Da li imate ugrađen:
              <br /> <br />
              Defibrilator?
            </h1>
            <div className={styles.buttons}>
              <Button
                back
                onClick={() => {
                  setTrenutnaStranica(12);
                }}
              >
                NE
              </Button>
              <Button
                next
                onClick={() => {
                  setTrenutnaStranica(12);
                }}
              >
                DA
              </Button>
            </div>
          </div>
        </div>
      );

    case 12:
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
              Da li imate ugrađen:
              <br /> <br />
              Vještački srčani zalistak?
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
              setTrenutnaStranica(12);
            }}
          >
            <img alt="x" src={x} />
          </Button>
          <div className={styles.mainDiv}>
            <h1 className={styles.h1Rezerva}>
              Da li imate ugrađen:
              <br /> <br />
              Slušni implant?
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
              Da li imate ugrađen:
              <br /> <br />
              Vještački kuk , koljeno ili druge metalne zglobne proteze?
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
              Da li imate ugrađen:
              <br /> <br />
              Bilo kakav drugi implant, metalne pločice, šipke ili zavrtnje?
            </h1>
            {/* <h1 className={styles.h1Pitanje}>Bolesti štitne žlijezde?</h1> */}
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
            <h1 className={styles.h1Pitanje}>
              Molimo Vas da kada budete prozvani obavijestite osoblje na šalteru
              da imate ugrađen materijal.
            </h1>
            {/* <h1>Mučnina?</h1> */}
            <div className={styles.buttons}>
              <Button
                back
                disabled2
                // onClick={() => {
                //   setTrenutnaStranica(6);
                // }}
              >
                NE
              </Button>
              <Button
                next
                onClick={() => {
                  setTrenutnaStranica(17);
                }}
              >
                NASTAVI
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
              setTrenutnaStranica(14);
            }}
          >
            <img alt="x" src={x} />
          </Button>
          <div className={styles.mainDiv}>
            <h1 className={styles.h1Pitanje}>
              Da li ste imali povredu oka metalnim predmetom?
            </h1>
            <div className={styles.buttons}>
              <Button
                back
                onClick={() => {
                  setTrenutnaStranica(18);
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
            <h1 className={styles.h1Pitanje}>
              Da li u svom tijelu imate metalna strana tijela (metak , geler…)?
            </h1>
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
            <h1 className={styles.h1Pitanje}>Da li ste tetovirani?</h1>
            <div className={styles.buttons}>
              <Button
                back
                onClick={() => {
                  setTrenutnaStranica(20);
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
        <>
          <div>
            <Button
              back
              alt
              buttonBack
              className={styles.buttonBack}
              // onClick={() => {
              //   setTrenutnaStranica(5);
              // }}
              disabled2
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
                    setTrenutnaStranica(21);
                  }}
                >
                  DA
                </Button>
              </div>
            </div>
          </div>
        </>
      );

    case 21:
      return (
        <>
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
                    setKorak(7);
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

export default MagnetnaRezonanca;
