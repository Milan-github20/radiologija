import React, { useState, useEffect } from "react";
import Button from "../UI/Button/Button";
import styles from "./InfromacijeOPregledu.module.css";
import naprijed from "../../assets/right-arrow.png";
import nazad from "../../assets/backward.png";
import x from "../../assets/close.png";
import radiologija from "../../assets/radiologija.png";
import radiologija2 from "../../assets/istockphoto-1270388365-612x612.png";
import bol from "../../assets/pain-5149164_1280.png";
import radiologija3 from "../../assets/pregled.png";
import srce from "../../assets/first-aid-2789562_1280.png";
import pacijent from "../../assets/ehr-1476525_1280.png";
import doktor from "../../assets/medical-5459654_1280.png";
import toast from "react-hot-toast";
import HeaderInformacije from "../UI/Header_Informacije/Header_Informacije";

const InformacijeOPregledu = ({ setKorisnik, setTrenutnaStranicaApp }) => {
  const [trenutnaStranica, setTrenutnaStranica] = useState(0);

  useEffect(() => {
    if (trenutnaStranica >= 0) {
      document.body.style.setProperty("--before-opacity", "0.4");
    } else {
      document.body.style.setProperty("--before-opacity", "0.6");
    }
    return () => {
      document.body.style.removeProperty("--before-opacity");
    };
  }, [trenutnaStranica]);

  switch (trenutnaStranica) {
    case 0:
      return (
        <>
          <div className={styles.divBtn}>
            <HeaderInformacije>
              VAŠ TRAŽENI PREGLED SPADA U GRUPU RADIOGRAFSKIH PREGLEDA.
            </HeaderInformacije>
            <div className={styles.button}>
              <Button
                alt
                back
                onClick={() => {
                  setTrenutnaStranicaApp(0);
                  setTimeout(() => {
                    toast.success("Uspjesno ste se odjavili!", {
                      duration: 3000,
                    });
                    setKorisnik(null);
                  }, 1000);
                }}
              >
                <img src={x} alt="x" />
              </Button>
            </div>
          </div>
          <div className={styles.informacijeDiv}>
            <div className={styles.slika}>
              <img src={radiologija} alt="radiologija" />
            </div>
            <div>
              <p className={styles.p1}>
                <strong>·</strong> Radiografija je medicinski snimak koji se
                dobija uz pomoć rentgenskih zrakova i koji omogućava doktorima
                da vide kosti i druge strukture ljudskog tijela. <br />{" "}
                <strong>·</strong> Koristi se u početnoj dijagnostici
                koštano-zglobnog sistema, oboljenja pluća i srca, bubrega,
                digestivnog i urinarnog sistema.
              </p>
            </div>
          </div>
          <div className={styles.buttons}>
            <Button disabled>
              <img src={nazad} alt="nazad" />
            </Button>
            <Button
              onClick={() => {
                setTrenutnaStranica(1);
              }}
            >
              <img src={naprijed} alt="naprijed" />
            </Button>
          </div>
        </>
      );

    case 1:
      return (
        <>
          <div className={styles.divBtn}>
            <HeaderInformacije>
              KAKO SE PRIPREMITI ZA PREGLED?
            </HeaderInformacije>
            <div className={styles.button}>
              <Button
                alt
                back
                onClick={() => {
                  setTrenutnaStranicaApp(0);
                  setTimeout(() => {
                    toast.success("Uspjesno ste se odjavili!", {
                      duration: 3000,
                    });
                    setKorisnik(null);
                  }, 1000);
                }}
              >
                <img src={x} alt="x" />
              </Button>
            </div>
          </div>
          <div className={styles.informacijeDiv}>
            <div className={styles.slika}>
              <img src={radiologija2} alt="radiologija" />
            </div>
            <div>
              <p className={styles.p1}>
                <strong>·</strong> Inžinjeru medicinske radiologije trebate
                napomenuti prisustvo metalnog stranog tijela u regiji koja se
                snima.
                <br /> <strong>·</strong> Takođe trebate napomenuti ako ste 4
                dana unazad radili neku od kontrastnih pretraga (EGD,
                irigografiju...)
              </p>
            </div>
          </div>
          <div className={styles.buttons}>
            <Button
              onClick={() => {
                setTrenutnaStranica(0);
              }}
            >
              <img src={nazad} alt="nazad" />
            </Button>
            <Button
              onClick={() => {
                setTrenutnaStranica(2);
              }}
            >
              <img src={naprijed} alt="naprijed" />
            </Button>
          </div>
        </>
      );

    case 2:
      return (
        <>
          <div className={styles.divBtn}>
            <HeaderInformacije>DA LI JE PREGLED BOLAN?</HeaderInformacije>
            <div className={styles.button}>
              <Button
                alt
                back
                onClick={() => {
                  setTrenutnaStranicaApp(0);
                  setTimeout(() => {
                    toast.success("Uspjesno ste se odjavili!", {
                      duration: 3000,
                    });
                    setKorisnik(null);
                  }, 1000);
                }}
              >
                <img src={x} alt="x" />
              </Button>
            </div>
          </div>
          <div className={styles.informacijeDivDrugaVarijanta}>
            <div className={styles.slikaDrugaVarijanta}>
              <img src={bol} style={{ height: "720px" }} alt="bol" />
            </div>
            <div className={styles.tekst}>
              <p className={styles.p1DrugaVarijanta}>
                <strong>·</strong> Snimanje radiografija je bezbolna
                dijagnostička metoda.
                <br />
                <strong>·</strong> Možete osjetiti nelagodu zbog niže
                temperature u prostoriji gdje se snimanje obavlja ( s obzirom da
                ista treba biti hlađena zbog ispravnog rada uređaja). <br />
                <strong>·</strong> Takođe, neugodnost može izazvati i ležanje na
                tvrdom stolu uređaja ili neudoban položaj pregledavanog dijela
                tijela pri snimanju. <br />
                <strong>·</strong> Inženjer medicinske radiologije pomoći će vam
                u pronalaženju optimalnog položaja tijela s obzirom na vaše
                stanje i potreban položaj tijela zbog snimanja.
              </p>
            </div>
          </div>
          <div className={styles.buttons}>
            <Button
              onClick={() => {
                setTrenutnaStranica(1);
              }}
            >
              <img src={nazad} alt="nazad" />
            </Button>
            <Button
              onClick={() => {
                setTrenutnaStranica(3);
              }}
            >
              <img src={naprijed} alt="naprijed" />
            </Button>
          </div>
        </>
      );
    case 3:
      return (
        <>
          <div className={styles.divBtn}>
            <HeaderInformacije>TOK PREGLEDA</HeaderInformacije>
            <div className={styles.button}>
              <Button
                alt
                back
                onClick={() => {
                  setTrenutnaStranicaApp(0);
                  setTimeout(() => {
                    toast.success("Uspjesno ste se odjavili!", {
                      duration: 3000,
                    });
                    setKorisnik(null);
                  }, 1000);
                }}
              >
                <img src={x} alt="x" />
              </Button>
            </div>
          </div>
          <div className={styles.informacijeDivDrugaVarijanta}>
            <div className={styles.slikaTrecaVarijanta}>
              <img
                src={radiologija3}
                style={{ width: "700px", height: "600px" }}
                alt="radiologija"
              />
            </div>
            <div className={styles.tekst}>
              <p className={styles.p1}>
                <strong>·</strong> Snimanje radiografije obično traje do 15
                minuta.
                <br />
                <strong>·</strong> Nakon što Vas medicinska sestra prozove,
                ulazite u kabinu za presvlačenje gdje se raspremate i pripremate
                za pregled. <br /> <strong>·</strong> Nakon toga ulazite u
                prostoriju sa RTG aparatom.
                <strong>·</strong> Pregled se radi stojeći, sjedeći ili ležeći
                na stolu za snimanje, u zavisnosti od dijela tijela koji se
                snima i od stanja pacijenta.
              </p>
            </div>
          </div>
          <div className={styles.buttons}>
            <Button
              onClick={() => {
                setTrenutnaStranica(2);
              }}
            >
              <img src={nazad} alt="nazad" />
            </Button>
            <Button
              onClick={() => {
                setTrenutnaStranica(4);
              }}
            >
              <img src={naprijed} alt="naprijed" />
            </Button>
          </div>
        </>
      );
    case 4:
      return (
        <>
          <div className={styles.divBtn}>
            <HeaderInformacije>TOK PREGLEDA</HeaderInformacije>
            <div className={styles.button}>
              <Button
                alt
                back
                onClick={() => {
                  setTrenutnaStranicaApp(0);
                  setTimeout(() => {
                    toast.success("Uspjesno ste se odjavili!", {
                      duration: 3000,
                    });
                    setKorisnik(null);
                  }, 1000);
                }}
              >
                <img src={x} alt="x" />
              </Button>
            </div>
          </div>
          <div className={styles.informacijeDivDrugaVarijanta}>
            <div className={styles.slika}>
              <img
                src={pacijent}
                style={{ width: "550px", height: "450px" }}
                alt="radiologija"
              />
            </div>
            <div className={styles.tekst}>
              <p className={styles.p1TrecaVarijanta}>
                <strong>·</strong> Inženjer medicinske radiologije, osoba
                školovana za izvođenje radioloških pretraga, postaviće Vas u
                položaj koji je optimalan za snimanje željenog dijela tijela.
                <br /> <strong>·</strong> Ukoliko je potrebno, postaviće vrećice
                sa pijeskom, različite trake ili jastuke oko pregledavanog
                dijela tijela radi postizanja pravilnog položaja za snimanje.
              </p>
            </div>
          </div>
          <div className={styles.buttons}>
            <Button
              onClick={() => {
                setTrenutnaStranica(3);
              }}
            >
              <img src={nazad} alt="nazad" />
            </Button>
            <Button
              onClick={() => {
                setTrenutnaStranica(5);
              }}
            >
              <img src={naprijed} alt="naprijed" />
            </Button>
          </div>
        </>
      );
    case 5:
      return (
        <>
          <div className={styles.divBtn}>
            <HeaderInformacije>TOK PREGLEDA</HeaderInformacije>
            <div className={styles.button}>
              <Button
                alt
                back
                onClick={() => {
                  setTrenutnaStranicaApp(0);
                  setTimeout(() => {
                    toast.success("Uspjesno ste se odjavili!", {
                      duration: 3000,
                    });
                    setKorisnik(null);
                  }, 1000);
                }}
              >
                <img src={x} alt="x" />
              </Button>
            </div>
          </div>
          <div className={styles.informacijeDivDrugaVarijanta}>
            <div className={styles.slika}>
              <img
                src={srce}
                style={{ width: "500px", height: "500px" }}
                alt="radiologija"
              />
            </div>
            <div className={styles.tekst}>
              <p className={styles.p1TrecaVarijanta}>
                <strong>·</strong> U toku pregleda, bitno je da mirujete i
                sarađujete sa inžinjerom medicinske radiologije, koji će od Vas
                tražiti da zauzmete određeni položaj.
                <br /> <strong>·</strong> Za vrijeme snimanja osoblje se nalazi
                izvan prostorije u kojoj se bolesnik snima, ali kroz otvor sa
                zaštitnim staklom sve vrijeme posmatra bolesnika.
                <br /> <strong>·</strong> Nakon završetka snimanja bićete
                zamoljeni da pričekate dok inženjer medicinske radiologije
                provjeri da li učinjeni snimak dobar.
              </p>
            </div>
          </div>
          <div className={styles.buttons}>
            <Button
              onClick={() => {
                setTrenutnaStranica(4);
              }}
            >
              <img src={nazad} alt="nazad" />
            </Button>
            <Button
              onClick={() => {
                setTrenutnaStranica(6);
              }}
            >
              <img src={naprijed} alt="naprijed" />
            </Button>
          </div>
        </>
      );
    case 6:
      return (
        <>
          <div className={styles.divBtn}>
            <HeaderInformacije>
              DA LI JE SNIMANJE RADIOGRAFIJA ŠTETNO ZA PACIJENTA?
            </HeaderInformacije>
            <div className={styles.button}>
              <Button
                alt
                back
                onClick={() => {
                  setTrenutnaStranicaApp(0);
                  setTimeout(() => {
                    toast.success("Uspjesno ste se odjavili!", {
                      duration: 3000,
                    });
                    setKorisnik(null);
                  }, 1000);
                }}
              >
                <img src={x} alt="x" />
              </Button>
            </div>
          </div>
          <div className={styles.informacijeDivDrugaVarijanta}>
            <div className={styles.slikaCetvrtaVarijanta}>
              <img
                src={doktor}
                style={{ width: "450px", height: "450px" }}
                alt="radiologija"
              />
            </div>
            <div className={styles.tekst}>
              <p className={styles.p1TrecaVarijanta}>
                <strong>·</strong> Postoji vrlo mali rizik od razvoja oboljenja
                uzrokovanog većim izlaganjima rendgenskom zračenju.
                <br /> <strong>·</strong> Obzirom na moguće štetno djelovanje
                rentgenskog zračenja na plod, žene u generativnoj dobi trebaju
                OBAVEZNO obavijestiti radiološko osoblje o eventualno mogućoj
                trudnoći. <br /> <strong>·</strong> Tada će se, u koliko je to
                moguće, rendgensko snimanje zamijeniti nekom drugom radiološkom
                metodom koja ne koristi jonizujuće zračenje.
              </p>
            </div>
          </div>
          <div className={styles.buttons}>
            <Button
              onClick={() => {
                setTrenutnaStranica(5);
              }}
            >
              <img src={nazad} alt="nazad" />
            </Button>
            <Button disabled>
              <img src={naprijed} alt="naprijed" />
            </Button>
          </div>
        </>
      );
    default:
      return null;
  }
};

export default InformacijeOPregledu;
