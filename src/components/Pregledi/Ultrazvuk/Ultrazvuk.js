import React, { useEffect } from "react";
import Button from "../../UI/Button/Button";
import styles from "./Ultrazvuk.module.css";
import toast from "react-hot-toast";
import x from "../../../assets/back.png";
import info from "../../../assets/info.png";

const Ultrazvuk = ({
  setKorak,
  setKorisnik,
  setUser,
  setTrenutnaStranicaApp,
  setOdgovoriUltrazvuk,
  posaljiPodatke,
  setTrenutnaStranica,
  trenutnaStranica,
}) => {
  // const [trenutnaStranica, setTrenutnaStranica] = useState(0);
  // const [odgovoriUltrazvuk, setOdgovoriUltrazvuk] = useState({
  //   modul: [
  //     {
  //       id: 73958,
  //       vrijednost: "",
  //     },
  //     {
  //       id: 73959,
  //       vrijednost: "",
  //     },
  //     {
  //       id: 73960,
  //       vrijednost: "",
  //     },
  //     {
  //       id: 73961,
  //       vrijednost: "",
  //     },
  //     {
  //       id: 73962,
  //       vrijednost: "",
  //     },
  //     {
  //       id: 73963,
  //       vrijednost: "",
  //     },
  //   ],
  // });

  // const posaljiPodatke = async () => {
  //   const newData = new URLSearchParams();

  //   const filteredModuli = odgovoriUltrazvuk.modul.filter(
  //     (odgovor) => odgovor.vrijednost !== ""
  //   );
  //   newData.append("id_forme", 810);
  //   newData.append("id_pacijenta", 465820);
  //   newData.append("moduli", JSON.stringify({ modul: filteredModuli }));

  //   const response = await fetch(
  //     `http://10.8.0.14:8080/kis/rpc/radiologija.cfc?method=napravi_dokument`,
  //     {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/x-www-form-urlencoded",
  //       },
  //       body: newData,
  //     }
  //   );

  //   if (response.ok) {
  //     console.log(response);
  //     console.log("Podaci uspešno poslati!");
  //   } else {
  //     console.error("Došlo je do greške pri slanju podataka.");
  //   }
  // };
  // console.log(odgovoriUltrazvuk);

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

      posaljiPodatke('ultrazvuk');

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

          <div className={styles.mainDiv}>
            <h1 className={styles.h1Pitanje}>
              Da li ste jeli u poslednjih 6 sati?
            </h1>
            <div className={styles.buttons}>
              <Button
                back
                onClick={() => {
                  setTrenutnaStranica(2);
                  setOdgovoriUltrazvuk((prevOdgovori) => ({
                    ...prevOdgovori,
                    modul: prevOdgovori.modul.map((odgovor) =>
                      odgovor.id === 73959
                        ? { ...odgovor, vrijednost: 1 }
                        : odgovor
                    ),
                  }));
                }}
              >
                NE
              </Button>
              <Button
                next
                onClick={() => {
                  setTrenutnaStranica(1);
                  setOdgovoriUltrazvuk((prevOdgovori) => ({
                    ...prevOdgovori,
                    modul: prevOdgovori.modul.map((odgovor) =>
                      odgovor.id === 73958
                        ? { ...odgovor, vrijednost: 1 }
                        : odgovor
                    ),
                  }));
                }}
              >
                DA
              </Button>
            </div>
          </div>
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
              // setKorak(0);
              setTrenutnaStranica(0);
              setOdgovoriUltrazvuk((prevOdgovori) => ({
                ...prevOdgovori,
                modul: prevOdgovori.modul.map((odgovor) =>
                  odgovor.id === 73958
                    ? { ...odgovor, vrijednost: "" }
                    : odgovor
                ),
              }));
            }}
          >
            <img alt="x" src={x} />
          </Button>
          <div className={styles.mainDiv}>
            <>
              <h1 className={styles.h1Pitanje}>
                S obzirom da ste jeli u poslednjih 6 sati postoji mogućnost
                otežanog prikazivanja organa.
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
              setOdgovoriUltrazvuk((prevOdgovori) => ({
                ...prevOdgovori,
                modul: prevOdgovori.modul.map((odgovor) =>
                  odgovor.id === 73959 || odgovor.id === 73958
                    ? { ...odgovor, vrijednost: "" }
                    : odgovor
                ),
              }));
            }}
          >
            <img alt="x" src={x} />
          </Button>
          <div className={styles.mainDiv}>
            <>
              <h1 className={styles.h1Pitanje}>
                Da li Vam je mokraćna bešika puna?
              </h1>
              <div className={styles.buttons}>
                <Button
                  back
                  onClick={() => {
                    setTrenutnaStranica(3);
                    setOdgovoriUltrazvuk((prevOdgovori) => ({
                      ...prevOdgovori,
                      modul: prevOdgovori.modul.map((odgovor) =>
                        odgovor.id === 73961
                          ? { ...odgovor, vrijednost: 1 }
                          : odgovor
                      ),
                    }));
                  }}
                >
                  NE
                </Button>
                <Button
                  next
                  onClick={() => {
                    setTrenutnaStranica(4);
                    setOdgovoriUltrazvuk((prevOdgovori) => ({
                      ...prevOdgovori,
                      modul: prevOdgovori.modul.map((odgovor) =>
                        odgovor.id === 73960
                          ? { ...odgovor, vrijednost: 1 }
                          : odgovor
                      ),
                    }));
                  }}
                >
                  DA
                </Button>
              </div>
            </>
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
              setOdgovoriUltrazvuk((prevOdgovori) => ({
                ...prevOdgovori,
                modul: prevOdgovori.modul.map((odgovor) =>
                  odgovor.id === 73961
                    ? { ...odgovor, vrijednost: "" }
                    : odgovor
                ),
              }));
            }}
          >
            <img alt="x" src={x} />
          </Button>
          <div className={styles.mainDiv}>
            <h1 className={styles.h1Pitanje}>
              Počnite unositi tečnost do momenta pregleda.
            </h1>
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
              setTrenutnaStranica(2);
              setOdgovoriUltrazvuk((prevOdgovori) => ({
                ...prevOdgovori,
                modul: prevOdgovori.modul.map((odgovor) =>
                  odgovor.id === 73960 || odgovor.id === 73961
                    ? { ...odgovor, vrijednost: "" }
                    : odgovor
                ),
              }));
            }}
          >
            <img alt="x" src={x} />
          </Button>
          <div className={styles.mainDiv}>
            <h1 className={styles.h1Pitanje}>
              Da li imate plasiran urinarni kateter?
            </h1>
            <div className={styles.buttons}>
              <Button
                back
                onClick={() => {
                  setTrenutnaStranica(6);
                  setOdgovoriUltrazvuk((prevOdgovori) => ({
                    ...prevOdgovori,
                    modul: prevOdgovori.modul.map((odgovor) =>
                      odgovor.id === 73963
                        ? { ...odgovor, vrijednost: 1 }
                        : odgovor
                    ),
                  }));
                }}
              >
                NE
              </Button>
              <Button
                next
                onClick={() => {
                  setTrenutnaStranica(5);
                  setOdgovoriUltrazvuk((prevOdgovori) => ({
                    ...prevOdgovori,
                    modul: prevOdgovori.modul.map((odgovor) =>
                      odgovor.id === 73962
                        ? { ...odgovor, vrijednost: 1 }
                        : odgovor
                    ),
                  }));
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
              setOdgovoriUltrazvuk((prevOdgovori) => ({
                ...prevOdgovori,
                modul: prevOdgovori.modul.map((odgovor) =>
                  odgovor.id === 73962
                    ? { ...odgovor, vrijednost: "" }
                    : odgovor
                ),
              }));
            }}
          >
            <img alt="x" src={x} />
          </Button>
          <div className={styles.mainDiv}>
            <h1 className={styles.h1Pitanje}>
              Molimo Vas da obavijestite osoblje na šalteru.
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
                  setTrenutnaStranica(6);
                }}
              >
                NASTAVI
              </Button>
            </div>
          </div>
        </div>
      );

    case 6:
      return (
        <>
          <div>
            <Button
              back
              alt
              buttonBack
              className={styles.buttonBack}
              disabled2
              // onClick={() => {
              //   setTrenutnaStranica(5);
              // }}
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
                  info
                  onClick={() => {
                    setTrenutnaStranicaApp(2);
                  }}
                >
                  POTPIS
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
        </>
      );
    case 7:
      return (
        <>
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
                    setKorak(8);
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

export default Ultrazvuk;
