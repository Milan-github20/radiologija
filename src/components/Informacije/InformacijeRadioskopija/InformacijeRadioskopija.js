import React, { useState } from "react";
import Button from "../../UI/Button/Button";
import styles from "./InformacijeRadioskopija.module.css";
import naprijed from "../../../assets/right-arrow.png";
import nazad from "../../../assets/backward.png";
import x from "../../../assets/close.png";
import toast from "react-hot-toast";
import HeaderInformacije from "../../UI/Header_Informacije/Header_Informacije";

const InformacijeRadioskopija = ({
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
                VAŠ TRAŽENI PREGLED SPADA U GRUPU RADIOSKOPSKIH PREGLEDA.
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
              <div>
                <p className={styles.p1}>
                  <strong>·</strong> Radioskopija je vrsta medicinskog snimanja
                  uz pomoć uz pomoću rentgenskih zrakova i koji omogućava
                  doktorima da prikažu šuplje organe, patološke šupljine i
                  komunikacije sa drugim organima. <br /> <strong>·</strong>{" "}
                  Koristi se kao dinamička pretraga u dijagnostikovanju
                  patologije gastrointestinalnog trakta, urogenitalnog trakta,
                  fistula i apscesa.
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
                  <strong>·</strong> Većina radioskopski pregleda ne traži
                  posebnu pripremu.
                  <br /> <strong>·</strong> Savjetuje se pregled natašte.
                  <br /> <strong>·</strong> Ukoliko je potrebna posebna priprema
                  bićete informisani prilikom naručivanja.
                  <br /> <strong>·</strong> Radiološkom tehnologu trebate
                  napomenuti prisustvo metalnog stranog tijela u regiji koja se
                  snima. Takođe trebate napomenuti ako ste 4 dana unazad radili
                  neku od kontrastnih pretraga (EGD, irigografiju, KT sa
                  kontrastom itd..).
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
              {/* <div className={styles.slikaDrugaVarijanta}>
              <img src={bol} style={{ height: "720px" }} alt="bol" />
            </div> */}
              <div className={styles.tekst}>
                <p className={styles.p1}>
                  <strong>·</strong> Snimanje radioskopije obično traje od 15-30
                  min
                  <br />
                  <strong>·</strong> Nakon što Vas medicinska sestra prozove,
                  ulazite u kabinu za presvlačenje gdje se raspremate i
                  pripremate za pregled. <br />
                  <strong>·</strong> Nakon toga ulazite u prostoriju sa
                  radioskopskim aparatom. <br />
                  <strong>·</strong> Pregled se radi ležeći na stolu koji je
                  pomičan. <br />
                  <strong>·</strong> Nekada će osoblje tražiti promjenu pozicije
                  tijela na stolu npr. na bok ili na stomak, a sve instrukcije
                  ćete dobijati putem audio veze.
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
                  <strong>·</strong> Radiolog je doktor školovan za izvođenje
                  radioloških pretraga, postaviće Vas u položaj koji je
                  optimalan za snimanje željenog dijela tijela
                  <br />
                  <strong>·</strong> Ukoliko je potrebno medicinska sestra će
                  zaštitnom keceljom koja sadrži olovo zaštititi dio vašeg
                  tijela koje se ne snima (dojke i vrat, ponekad testisi i mala
                  karlica) od zračenja <br /> <strong>·</strong> U toku
                  pregleda, bitno je da mirujete i sarađujete sa specijalistom
                  radiologije, koji će od Vas tražiti da zauzmete određeni
                  položaj, a komande ćete čuti preko zvučnika. Možda će se od
                  Vas tražiti da zadržite dah ili da gutate kako bi dobijeni
                  snimak bio precizan
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
                  <strong>·</strong> U jednom trenutku pregleda će se od vas
                  tražiti da progutate barijumsko kontrastno sredstvo ili će Vam
                  medicinska sestra u određeni plasirani kateter dati kontrast.
                  <br /> <strong>·</strong> Jedan dio tijela snima se obično iz
                  više projekcija, pa su dvije ili tri snimke istog dijela
                  tijela uobičajene.
                  <br /> <strong>·</strong> Nakon završetka snimanja bićete
                  zamoljeni da pričekate dok inženjer medicinske radiologije
                  provjeri da li učinjeni snimak dobra i da li su učinjene sve
                  potrebne snimke
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
                  <strong>·</strong> Radioskopsko snimanje je bezbolna
                  dijagnostička metoda.
                  <br /> <strong>·</strong> Pacijent može osjetiti nelagodu
                  prilikom gutanja barijumskog kontrastnog sredstva zbog njegove
                  gustine.
                  <br /> <strong>·</strong> Možete osjetiti nelagodu zbog niže
                  temperature u prostoriji gdje se snimanje obavlja ( s obzirom
                  da ista treba biti hlađena zbog ispravnog rada uređaja).
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
                  <strong>·</strong> Također, neugodnost može izazvati i ležanje
                  na tvrdom stolu uređaja ili neudoban položaj pregledavanog
                  dijela tijela pri snimanju.
                  <br /> <strong>·</strong> Inženjer medicinske radiologije
                  pomoći će vam u pronalaženju optimalnog položaja tijela s
                  obzirom na vaše stanje i potreban položaj tijela zbog snimanja
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
              <Button
                onClick={() => {
                  setTrenutnaStranica(7);
                }}
              >
                <img src={naprijed} alt="naprijed" />
              </Button>
            </div>
          </div>
        </>
      );

    case 7:
      return (
        <>
          <div className={styles.mainDivInformacije}>
            <div className={styles.divBtn}>
              <HeaderInformacije>
                DA LI JE SNIMANJE RADIOSKOPIJA ŠTETNO ZA PACIJENTA?
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
                  <strong>·</strong> Obzirom na moguće štetno djelovanje
                  rentgenskog zračenja na plod, žene u generativnoj dobi trebaju
                  OBAVEZNO obavijestiti radiološko osoblje o eventualno mogućoj
                  trudnoći. Tada će se, u koliko je to moguće, rendgensko
                  snimanje zamijeniti nekom drugom radiološkom metodom koja ne
                  koristi ionizirajuće zračenje (ultrazvuk, magnetna
                  rezonancija).
                  <br /> <strong>·</strong> Postoji vrlo mali rizik od razvoja
                  oboljenja uzrokovanog većim izlaganjima rendgenskom zračenju.
                  Međutim, korist dobivena rendgenskim snimanjem višestruko
                  nadmašuje spomenuti rizik.
                </p>
              </div>
            </div>
            <div className={styles.buttons}>
              <Button
                onClick={() => {
                  setTrenutnaStranica(6);
                }}
              >
                <img src={nazad} alt="nazad" />
              </Button>
              <Button
                onClick={() => {
                  setTrenutnaStranica(8);
                }}
              >
                <img src={naprijed} alt="naprijed" />
              </Button>
            </div>
          </div>
        </>
      );

    case 8:
      return (
        <>
          <div className={styles.mainDivInformacije}>
            <div className={styles.divBtn}>
              <HeaderInformacije>
                DA LI JE SNIMANJE RADIOSKOPIJA ŠTETNO ZA PACIJENTA?
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
                  <strong>·</strong> Pri radioskopskom snimanju pacijent će biti
                  zamoljen da popijem određenu količinu kontrasta ili će se
                  kontrast aplicirat preko određenog katetera što kod pacijenta
                  može izazvati nelagodu.
                  <br /> <strong>·</strong> Kao i kod drugih medicinskih
                  postupaka, upotreba rendgenskog zračenja sigurna je kada se
                  koristi s pažnjom i stručno. <br /> <strong>·</strong>{" "}
                  Radiološko osoblje obučeno je da upotrijebi što manju dozu
                  zračenja da bi se postigao potrebni rezultat – kvalitetan
                  radiskopski nalaz.
                </p>
              </div>
            </div>
            <div className={styles.buttons}>
              <Button
                onClick={() => {
                  setTrenutnaStranica(7);
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

export default InformacijeRadioskopija;
