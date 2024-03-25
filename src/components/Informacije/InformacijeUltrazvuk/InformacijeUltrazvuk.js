import React, { useState } from "react";
import Button from "../../UI/Button/Button";
import styles from "./InformacijeUltrazvuk.module.css";
import naprijed from "../../../assets/right-arrow.png";
import nazad from "../../../assets/backward.png";
import x from "../../../assets/close.png";
import toast from "react-hot-toast";
import HeaderInformacije from "../../UI/Header_Informacije/Header_Informacije";

const InformacijeUltrazvuk = ({
  setKorisnik,
  setTrenutnaStranicaApp,
  setUser,
}) => {
  const [trenutnaStranica, setTrenutnaStranica] = useState(0);

  switch (trenutnaStranica) {
    case 0:
      return (
        <>
          <div className={styles.mainDivInformacije}>
            <div className={styles.divBtn}>
              <HeaderInformacije>
                VAŠ TRAŽENI PREGLED SPADA U GRUPU ULTRAZVUK PREGLEDA.
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
                      setUser("");
                    }, 1000);
                  }}
                >
                  <img src={x} alt="x" />
                </Button>
              </div>
            </div>
            <div className={styles.informacijeDivDrugaVarijanta}>
              {/* <div className={styles.slika}>
                <img src={radiologija} alt="radiologija" />
              </div> */}
              <div>
                <p className={styles.p1}>
                  <strong>·</strong> Ultrazvuk je zvuk frekvencije veće od 20
                  000 Hz, koji ljudsko uho ne čuje. <br /> <strong>·</strong> U
                  savremenoj medicini, ultrazvuk je jedna od osnovnih,
                  nezaobilaznih i neinvazivnih metoda koja pruža informacije o
                  stanju unutrašnjih organa gornjeg i donjeg abdomena: jetre,
                  žučne kese i žučnih puteva, gušterače, slezene, bubrega,
                  nadbubrežnih žlijezda, mokradne bešike, prostate i krvnih
                  sudova (Doppler ultrazvučna pretraga), kao i organa i
                  struktura vrata i dojki te mekih tkiva uopšte.
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
          </div>
        </>
      );

    case 1:
      return (
        <>
          <div className={styles.mainDivInformacije}>
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
                      setUser("");
                    }, 1000);
                  }}
                >
                  <img src={x} alt="x" />
                </Button>
              </div>
            </div>
            <div className={styles.informacijeDivDrugaVarijanta}>
              {/* <div className={styles.slika}>
              <img src={radiologija2} alt="radiologija" />
            </div> */}
              <div>
                <p className={styles.p1}>
                  <strong>·</strong> Obucite se komotno kako bi ste se lakše
                  mogli skinuti za potrebe pregleda i osloboditi regiju koja se
                  posmatra. Često će se od Vas zahtijevati i skidanje nakita sa
                  regija koje se posmatraju.
                  <br /> <strong>·</strong> Ukoliko treba da uradite ultrazvučni
                  pregled abdomena ili karlice poželjno je da dan prije pregleda
                  jedite hranu koja ne nadima (palenta, dvopek, kuhano meso...),
                  jer hrana koja nadima dovodi do nakupljanja vazduha u želucu i
                  crijevima, što otežava odgovarajući prikaz abdominalnih
                  organa.
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
          </div>
        </>
      );

    case 2:
      return (
        <>
          <div className={styles.mainDivInformacije}>
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
                      setUser("");
                    }, 1000);
                  }}
                >
                  <img src={x} alt="x" />
                </Button>
              </div>
            </div>
            <div className={styles.informacijeDivDrugaVarijanta}>
              {/* <div className={styles.slikaDrugaVarijanta}>
              <img src={bol} style={{ height: "720px" }} alt="bol" />
            </div> */}
              <div className={styles.tekst}>
                <p className={styles.p1}>
                  <strong>·</strong> Ukoliko pregledate abdominalne organe, noć
                  prije pregleda, uzimajte hranu koja ne sadrži masnoće, a 5-6
                  sati prije pregleda trebate gladovati. Ako se vrši pregled
                  mokraćne bešike i male karlice, morate na pregled doći
                  napunjene bešike.
                  <br />
                  <strong>·</strong> Ljekaru trebate napomenuti prisustvo
                  metalnog stranog tijela u regiji koja se posmatra. Takođe
                  trebate napomenuti ako ste 4 dana unazad radili neku od
                  kontrastnih pretraga (EGD, irigografiju...).
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
          </div>
        </>
      );
    case 3:
      return (
        <>
          <div className={styles.mainDivInformacije}>
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
                      setUser("");
                    }, 1000);
                  }}
                >
                  <img src={x} alt="x" />
                </Button>
              </div>
            </div>
            <div className={styles.informacijeDivDrugaVarijanta}>
              <div className={styles.tekst}>
                <p className={styles.p1}>
                  <strong>·</strong> Ultrazvučni pregled obično traje od 20- 30
                  minuta uključujući i pripremu pacijenta
                  <br />
                  <strong>·</strong> Nakon što Vas medicinska sestra prozove,
                  ulazite u kabinu za presvlačenje gdje se raspremate i
                  pripremate za pregled. Nakon toga ulazite u prostoriju sa
                  UZV-aparatom <br /> <strong>·</strong> Pregled se radi ležeći
                  na stolu za snimanje, ali se može raditi stojeći kao i
                  sjedeći, u zavisnosti od dijela tijela koji se snima i od
                  stanja pacijenta.
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
          </div>
        </>
      );
    case 4:
      return (
        <>
          <div className={styles.mainDivInformacije}>
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
                      setUser("");
                    }, 1000);
                  }}
                >
                  <img src={x} alt="x" />
                </Button>
              </div>
            </div>
            <div className={styles.informacijeDivDrugaVarijanta}>
              <div className={styles.tekst}>
                <p className={styles.p1}>
                  <strong>·</strong> U toku pregleda, bitno je da mirujete i
                  sarađujete sa ljekarom, koji de od Vas tražiti da zauzmete
                  određeni položaj, ili da zadržite dah tokom par sekundi
                  <br /> <strong>·</strong> Radiolog interpretira pregled koji
                  je obavio tako što analizira slike koje je napravio u toku
                  pregleda, a u nekim slučajevima može i da prodiskutuje sa Vama
                  o zaključcima koji je donio u toku pregleda.
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
          </div>
        </>
      );
    case 5:
      return (
        <>
          <div className={styles.mainDivInformacije}>
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
                      setUser("");
                    }, 1000);
                  }}
                >
                  <img src={x} alt="x" />
                </Button>
              </div>
            </div>
            <div className={styles.informacijeDivDrugaVarijanta}>
              <div className={styles.tekst}>
                <p className={styles.p1}>
                  <strong>·</strong> Većina ultrazvučnih pregleda je bezbolna,
                  brza i laka. Prilikom pritiska sonde na područja sa većom
                  osjetljivošću možete osjetiti nelagodu ili manju bol.
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
          </div>
        </>
      );
    case 6:
      return (
        <>
          <div className={styles.mainDivInformacije}>
            <div className={styles.divBtn}>
              <HeaderInformacije>
                DA LI JE SNIMANJE ULTRAZVUKA ŠTETNO ZA PACIJENTA?
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
                      setUser("");
                    }, 1000);
                  }}
                >
                  <img src={x} alt="x" />
                </Button>
              </div>
            </div>
            <div className={styles.informacijeDivDrugaVarijanta}>
              <div className={styles.tekst}>
                <p className={styles.p1}>
                  <strong>·</strong> Na osnovu dugogodišnjih ispitivanja,
                  Svjetska zdravstvena organizacija je dokazala da ne postoji
                  štetno dejstvo na pacijenta, jer se u medicinske svrhe koristi
                  ultrazvuk male snage.
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
          </div>
        </>
      );
    default:
      return null;
  }
};

export default InformacijeUltrazvuk;
