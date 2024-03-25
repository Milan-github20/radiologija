import React, { useState } from "react";
import Button from "../../UI/Button/Button";
import styles from "./InformacijeKT.module.css";
import naprijed from "../../../assets/right-arrow.png";
import nazad from "../../../assets/backward.png";
import x from "../../../assets/close.png";
import toast from "react-hot-toast";
import HeaderInformacije from "../../UI/Header_Informacije/Header_Informacije";

const InformacijeKT = ({ setKorisnik, setTrenutnaStranicaApp, setUser }) => {
  const [trenutnaStranica, setTrenutnaStranica] = useState(0);

  switch (trenutnaStranica) {
    case 0:
      return (
        <>
          <div className={styles.mainDivInformacije}>
            <div className={styles.divBtn}>
              <HeaderInformacije>
                VAŠ TRAŽENI PREGLED SPADA U GRUPU KT PREGLEDA.
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
                  <strong>·</strong> Kompjuterizovana tomografija je savremena,
                  neinvazivna i bezbolna dijagnostička metoda koja koristi
                  rentgensko zračenje za dobijanje detaljnih slika organa i
                  tkiva, a u svrhu lakšeg postavljanja dijagnoze i samim tim
                  efikasnijeg liječenja različitih oboljenja. <br />{" "}
                  <strong>·</strong> Snimci koje nastanu KT pregledom zovu se
                  tomogrami. Samo nekoliko sekundi dovoljno je za dobijanje
                  mnogostrukih slika presjeka pojedinih organa u tijelu.
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
                VAŠ TRAŽENI PREGLED SPADA U GRUPU KT PREGLEDA.
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
                  <strong>·</strong> KT koristi rendgenske zrake za dobijanje
                  slika. Zagrijana katoda oslobađa elektrone visoke energije,
                  koji pak oslobađaju njihovu energiju kao rendgensko zračenje
                  <br /> <strong>·</strong> X-zrake prolaze kroz tkiva i udaraju
                  u detektor na drugoj strani, koje potom kompjuter posebnim
                  matematičkim i programskim algoritmimam pretvara u sliku.{" "}
                  <br /> <strong>·</strong> Što je tkivo gušće, to je više
                  rendgenskih zraka koje upija
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
              <div className={styles.tekst}>
                <p className={styles.p1}>
                  <strong>·</strong> Većina KT pregleda ne traži posebnu
                  pripremu
                  <br />
                  <strong>·</strong> Ako planirate trudnoću, najbolje bi bilo
                  obaviti pregled u prvih 10 dana menstrualnog ciklusa da bi se
                  izbjeglo štetno zračenje u ranoj trudnoći.
                  <br />
                  <strong>·</strong> Potrebno je da ponesete sa sobom nalaz
                  kreatinina (ne stariji od mjesec dana) ukoliko je potrebno
                  snimanje sa kontrastom. <br />
                  <strong>·</strong> Sa sobom obavezno ponesite važeću uputnicu,
                  kao i prethodne medicinske nalaze i snimke koji imaju veze sa
                  KT pregledom koji trebate obaviti.
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
              {/* <div className={styles.slikaTrecaVarijanta}>
              <img
                src={radiologija3}
                style={{ width: "700px", height: "600px" }}
                alt="radiologija"
              />
            </div> */}
              <div className={styles.tekst}>
                <p className={styles.p1}>
                  <strong>·</strong> U slučaju da se snima abdomen i mala
                  karlica, savjetuje se da ne jedete nekoliko sati prije
                  pregleda.
                  <br />
                  <strong>·</strong> U slučaju da radite pregled KT
                  enterografije (snimanje tankog crijeva) ili KT kolonografije
                  (snimanje debelog crijeva) potrebna je posebna priprema, koja
                  se obavlja po uputstvima koja možete dobiti na broj telefona
                  051/342-697 ili lično na šalteru Zavoda za kliničku
                  radiologiju UKC RS.
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
              <div className={styles.tekst}>
                <p className={styles.p1}>
                  <strong>·</strong> Radiološkom tehnologu trebate napomenuti
                  prisustvo metalnog stranog tijela u regiji koja se snima.
                  <br /> <strong>·</strong> Takođe trebate napomenuti ako ste 4
                  dana unazad radili neku od kontrastnih pretraga (EGD,
                  irigografiju...).
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
                  <strong>·</strong> Snimanje putemkompjuterizovane tomografije
                  je bezbolna dijagnostička metoda
                  <br /> <strong>·</strong> Kod nekih osoba nakon davanja
                  konstrasta u venu, javlja se osjećaj intezivne topline u
                  tijelu te metalnog okusa u ustima što je bezopasno. Ovaj
                  osjećaj je uobičajen i veoma brzo se povlači.
                  <br /> <strong>·</strong> U slučaju da osjetite lupanje srca,
                  otežano disanje, gušenje ili obilno preznojavanje, dajte znak
                  tehničaru ili doktoru da se pregled prekine
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
                  <strong>·</strong> Možete osjetiti nelagodu zbog niže
                  temperature u prostoriji gdje se snimanje obavlja ( s obzirom
                  da ista treba biti hlađena zbog ispravnog rada uređaja).
                  <br /> <strong>·</strong> Neugodnost može izazvati i ležanje
                  na stolu uređaja ili neudoban položaj pregledavanog dijela
                  tijela pri snimanju <br /> <strong>·</strong> Inženjer
                  medicinske radiologije pomoći će vam u pronalaženju optimalnog
                  položaja tijela s obzirom na vaše stanje i potreban položaj
                  tijela zbog snimanja.
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
                  <strong>·</strong> Snimanje kompjuterizovanom tomografijom
                  može trajati od 5 do 20 minuta.
                  <br /> <strong>·</strong> Nakon što Vas medicinska sestra
                  prozove, ulazite u kabinu za presvlačenje gdje se raspremate i
                  pripremate za pregled.
                  <br /> <strong>·</strong> U slučaju da je potrebno plasirati
                  jodno kontrastno sredstvo medicinska sestra će vam plasirati
                  braunilu u venski krvni sud preko kojeg ćete primiti
                  kontrastno sredstvo u toku pregleda.
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
                  <strong>·</strong> Usmeno će vam biti postavljen niz pitanja u
                  vezi vašeg zdravstvenog stanja
                  <br /> <strong>·</strong> Izuzetno je važno da odstranite sve
                  metalne predmete sa tijela (nakit, grudnjak, kaiš, sat,
                  mobilni aparat, novčanik, kovanice, naočale, odjeću sa
                  metalnim dugmadima itd. ), a u slučaju da imate ugrađen
                  metalni material u tijelu potrebno je i usmeno obavijestiti
                  radiološkog tehničara i doktora.
                  <br /> <strong>·</strong> Nakon toga ulazite u prostoriju sa
                  KT aparatom
                  <br /> <strong>·</strong> Pregled se obavlja ležeći na
                  pokretnom stolu za snimanje koji se nalazi unutar KT aparata
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
              <Button
                onClick={() => {
                  setTrenutnaStranica(9);
                }}
              >
                <img src={naprijed} alt="naprijed" />
              </Button>
            </div>
          </div>
        </>
      );

    case 9:
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
                  <strong>·</strong> Inženjer medicinske radiologije, osoba
                  školovana za izvođenje radioloških pretraga, postaviće Vas u
                  položaj koji je optimalan za snimanje željenog dijela tijela.
                  <br /> <strong>·</strong> U toku pregleda, bitno je da u
                  potpunosti mirujete i ne činite nikakve pokrete, sarađujete sa
                  radiološkim tehnologom sa kojim ćete biti u kontaktu audio
                  vezom.
                  <br /> <strong>·</strong> U toku samog snimanja važno je
                  zadražati dah na zadanu komandu koja se čuje iz zvučnika
                  ukoliko je to potrebno.
                </p>
              </div>
            </div>
            <div className={styles.buttons}>
              <Button
                onClick={() => {
                  setTrenutnaStranica(8);
                }}
              >
                <img src={nazad} alt="nazad" />
              </Button>
              <Button
                onClick={() => {
                  setTrenutnaStranica(10);
                }}
              >
                <img src={naprijed} alt="naprijed" />
              </Button>
            </div>
          </div>
        </>
      );

    case 10:
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
                  <strong>·</strong> Za vrijeme snimanja osoblje se nalazi izvan
                  prostorije u kojoj se bolesnik snima, ali kroz otvor sa
                  zaštitnim staklom sve vrijeme posmatra bolesnika.
                  <br /> <strong>·</strong> Ponekad je potrebno ponoviti
                  određenu sekvencu snimanja u slučaju da kvalitet snimka nije
                  zadovoljavajući stoga se snimanje može odužiti.
                  <br /> <strong>·</strong> Pri pregledu male djece, zatim kod
                  nemirnih pacijenata te kod pacijenata sa strahom od zatvorenog
                  prostora, pregled se vrši u anesteziji i pod kontrolom
                  anesteziološkog tima
                </p>
              </div>
            </div>
            <div className={styles.buttons}>
              <Button
                onClick={() => {
                  setTrenutnaStranica(9);
                }}
              >
                <img src={nazad} alt="nazad" />
              </Button>
              <Button
                onClick={() => {
                  setTrenutnaStranica(11);
                }}
              >
                <img src={naprijed} alt="naprijed" />
              </Button>
            </div>
          </div>
        </>
      );

    case 11:
      return (
        <>
          <div className={styles.mainDivInformacije}>
            <div className={styles.divBtn}>
              <HeaderInformacije>
                DA LI JE SNIMANJE KT ŠTETNO ZA PACIJENTA?
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
                  <strong>·</strong> Tokom KT pregleda stepen zračenjaje veći
                  nego pri klasičnom rendgenskom snimanju, ali je i dalje
                  bezbjedna dijagnostička metoda.
                  <br /> <strong>·</strong> Ona se može primijeniti kod svih
                  starosnih grupa i ponavljati više puta, ali se treba
                  izbjegavati kod beba, male djece, trudnica i majki dojilja
                  <br /> <strong>·</strong> KT pregled se ne preporučuje
                  trudnicama zbog rizika koje bi zračenje moglo izazavati kod
                  ploda i indikovano je samo u slučajevima kada je ugrožen život
                  pacijenta.
                </p>
              </div>
            </div>
            <div className={styles.buttons}>
              <Button
                onClick={() => {
                  setTrenutnaStranica(10);
                }}
              >
                <img src={nazad} alt="nazad" />
              </Button>
              <Button
                onClick={() => {
                  setTrenutnaStranica(12);
                }}
              >
                <img src={naprijed} alt="naprijed" />
              </Button>
            </div>
          </div>
        </>
      );

    case 12:
      return (
        <>
          <div className={styles.mainDivInformacije}>
            <div className={styles.divBtn}>
              <HeaderInformacije>
                DA LI JE SNIMANJE KT ŠTETNO ZA PACIJENTA?
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
                  <strong>·</strong> U zavisnosti od dijela tijela i metode KT
                  snimanja zavisiće i količina primljenog jonizujućeg zračenja
                  <br /> <strong>·</strong> Osobe sa oštećenim ili usporenim
                  radom jetre i bubrega imaju povećanu šansu za nastanak
                  komplikacija vezanih za aplikaciju kontrastnog sredstva.
                  <br /> <strong>·</strong> Pacijenti koji imaju od ranije
                  poznatu alergiju na jodna kontrastna sredstva mogu učiniti KT
                  snimanje samo u nativnoj (bez kontrasta) seriji ili uz
                  određenu premedikaciju i eventualno pratnju anesteziologa.
                </p>
              </div>
            </div>
            <div className={styles.buttons}>
              <Button
                onClick={() => {
                  setTrenutnaStranica(11);
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

export default InformacijeKT;
