import React, { useState } from "react";
import Button from "../../UI/Button/Button";
import styles from "./InformacijeMR.module.css";
import naprijed from "../../../assets/right-arrow.png";
import nazad from "../../../assets/backward.png";
import x from "../../../assets/close.png";
import toast from "react-hot-toast";
import HeaderInformacije from "../../UI/Header_Informacije/Header_Informacije";

const InformacijeMR = ({ setKorisnik, setTrenutnaStranicaApp, setUser }) => {
  const [trenutnaStranica, setTrenutnaStranica] = useState(0);

  switch (trenutnaStranica) {
    case 0:
      return (
        <>
          <div className={styles.mainDivInformacije}>
            <div className={styles.divBtn}>
              <HeaderInformacije>
                VAŠ TRAŽENI PREGLED SPADA U GRUPU MR PREGLEDA
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
                  text={<img src={x} alt="x" />}
                />
              </div>
            </div>
            <div className={styles.informacijeDivDrugaVarijanta}>
              {/* <div className={styles.slika}>
                <img src={radiologija} alt="radiologija" />
              </div> */}
              <div>
                <p className={styles.p1}>
                  <strong>·</strong> Magnetna rezonanca je savremena,
                  neinvazivna i bezbolna dijagnostička metoda koja koristi jaka
                  magnetna polja i radiotalase za dobijanje detaljnih slika
                  organa i tkiva, a u svrhu lakšeg postavljanja dijagnoze i
                  samim tim efikasnijeg liječenja različitih oboljenja. <br />{" "}
                  <strong>·</strong> Umjesto radioaktivnih (X) zraka koji se
                  upotrebljavaju pri kompjuterizovanoj tomografiji, MR se
                  koristi magnetnim i radio-talasima koji nisu štetni po vaše
                  zdravlje.
                  <br /> <strong>·</strong> Dio tijela se stavlja u područje
                  jakog magnetnog polja koje poravnava vodonikove atome u
                  tijelu.
                </p>
              </div>
            </div>
            <div className={styles.buttons}>
              <Button disabled text={<img src={nazad} alt="nazad" />} />
              <Button
                onClick={() => {
                  setTrenutnaStranica(1);
                }}
                text={<img src={naprijed} alt="naprijed" />}
              />
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
                VAŠ TRAŽENI PREGLED SPADA U GRUPU MR PREGLEDA
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
                  text={<img src={x} alt="x" />}
                />
              </div>
            </div>
            <div className={styles.informacijeDivDrugaVarijanta}>
              <div>
                <p className={styles.p1}>
                  <strong>·</strong> Nakon određenog vremena se puštaju
                  radiofrekventni talasi radi kratkotrajnih promjena u magnetnom
                  polju koje dovodi do privremenog pomjeranja atoma vodonika
                  koji otpuštaju radiotalase koje aparat detektuje pomoću
                  antena. <br /> <strong>·</strong> Kompleksan računarski sistem
                  obrađuje ove signale i pretvara ih u detaljnu sliku snimalnog
                  dijela tela.
                  <br /> <strong>·</strong> Naknadno se koriste softverska
                  rješenja za poboljšanje i manipulisanje dobijenih snimaka
                  tijela.
                </p>
              </div>
            </div>
            <div className={styles.buttons}>
              <Button
                onClick={() => {
                  setTrenutnaStranica(0);
                }}
                text={<img src={nazad} alt="nazad" />}
              />
              <Button
                onClick={() => {
                  setTrenutnaStranica(2);
                }}
                text={<img src={naprijed} alt="naprijed" />}
              />
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
                  text={<img src={x} alt="x" />}
                />
              </div>
            </div>
            <div className={styles.informacijeDivDrugaVarijanta}>
              {/* <div className={styles.slikaDrugaVarijanta}>
              <img src={bol} style={{ height: "720px" }} alt="bol" />
            </div> */}
              <div className={styles.tekst}>
                <p className={styles.p1}>
                  <strong>·</strong> Većina pregleda magnetnom rezonancom ne
                  traži posebnu pripremu
                  <br />
                  <strong>·</strong> Potrebno je da ponesete sa sobom skorašnji
                  nalaz kreatinina (ne stariji od mjesec dana), ukoliko je
                  potrebna aplikacija paramagnetnog kontrastnog sredstva. <br />
                  <strong>·</strong> Sa sobom obavezno ponesite važeću uputnicu,
                  kao i prethodne medicinske nalaze i snimke koji imaju veze sa
                  MR pregledom koji trebate obaviti. <br />
                  <strong>·</strong> Savjetuje se da ne jedete nekoliko sati
                  prije pregleda u slučaju da snimate abdomen I malu karlicu
                </p>
              </div>
            </div>
            <div className={styles.buttons}>
              <Button
                onClick={() => {
                  setTrenutnaStranica(1);
                }}
                text={<img src={nazad} alt="nazad" />}
              />
              <Button
                onClick={() => {
                  setTrenutnaStranica(3);
                }}
                text={<img src={naprijed} alt="naprijed" />}
              />
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
                  text={<img src={x} alt="x" />}
                />
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
                  <strong>·</strong> U slučaju da radite pregled MR
                  enterografije (snimanje tankog crijeva) ili MR kolonografije
                  (snimanje debelog crijeva) potrebna je posebna priprema.
                  <br />
                  <strong>·</strong> Na šalteru Zavoda za kliničku radiologiju
                  možete uzeti detaljna uputstva za pripremu traženih pregleda
                  ili pozivom na broj 051/ 342-697.
                  <br />
                  <strong>·</strong> Radiološkom tehnologu trebate napomenuti
                  prisustvo metalnog stranog tijela u tijelu. Takođe trebate
                  napomenuti ako ste 4 dana unazad radili neku od kontrastnih
                  pretraga (EGD, irigografiju...).
                </p>
              </div>
            </div>
            <div className={styles.buttons}>
              <Button
                onClick={() => {
                  setTrenutnaStranica(2);
                }}
                text={<img src={nazad} alt="nazad" />}
              />
              <Button
                onClick={() => {
                  setTrenutnaStranica(4);
                }}
                text={<img src={naprijed} alt="naprijed" />}
              />
            </div>
          </div>
        </>
      );
    case 4:
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
                  text={<img src={x} alt="x" />}
                />
              </div>
            </div>
            <div className={styles.informacijeDivDrugaVarijanta}>
              {/* <div className={styles.slika}>
              <img
                src={pacijent}
                style={{ width: "550px", height: "450px" }}
                alt="radiologija"
              />
            </div> */}
              <div className={styles.tekst}>
                <p className={styles.p1}>
                  <strong>·</strong> Snimanje magnetne rezonance je bezbolna
                  dijagnostička metoda.
                  <br /> <strong>·</strong> Neugodnosti pri pregledu magnetnom
                  rezonancom jesu dužina trajanja pregleda (30-60 min). Tokom
                  pregleda pacijent ne smije da pomijera tijelo.
                  <br /> <strong>·</strong> Osobe koje osjećaju nelagodu u uskom
                  prostoru ili imaju klaustrofobiju potrebni su obavjestiti
                  radiološkog tehnologa i doktora.
                  <br /> <strong>·</strong> Magnetna rezonanca proizvodi bučne
                  zvukove koji mogu stvarati neugodnost kod pacijenta- pacijent
                  na zahtjev može dobiti audio zaštitu.
                </p>
              </div>
            </div>
            <div className={styles.buttons}>
              <Button
                onClick={() => {
                  setTrenutnaStranica(3);
                }}
                text={<img src={nazad} alt="nazad" />}
              />
              <Button
                onClick={() => {
                  setTrenutnaStranica(5);
                }}
                text={<img src={naprijed} alt="naprijed" />}
              />
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
                  text={<img src={x} alt="x" />}
                />
              </div>
            </div>
            <div className={styles.informacijeDivDrugaVarijanta}>
              {/* <div className={styles.slika}>
              <img
                src={srce}
                style={{ width: "500px", height: "500px" }}
                alt="radiologija"
              />
            </div> */}
              <div className={styles.tekst}>
                <p className={styles.p1}>
                  <strong>·</strong> Možete osjetiti nelagodu zbog niže
                  temperature u prostoriji gdje se snimanje obavlja ( s obzirom
                  da ista treba biti hlađena zbog ispravnog rada uređaja).
                  <br /> <strong>·</strong> Neugodnost može izazvati i ležanje
                  na stolu uređaja ili neudoban položaj pregledavanog dijela
                  tijela pri snimanju. Inženjer medicinske radiologije pomoći će
                  vam u pronalaženju optimalnog položaja tijela s obzirom na
                  vaše stanje i potreban položaj tijela zbog snimanja
                  <br /> <strong>·</strong> Prilikom određenih pregleda je
                  potrebno da uneste veliku količinu tečnosti (do 1,5L vode) kod
                  npr. enterografije ili da se debelo crijevo ispuni tečnošću
                  kod kolonografije.
                </p>
              </div>
            </div>
            <div className={styles.buttons}>
              <Button
                onClick={() => {
                  setTrenutnaStranica(4);
                }}
                text={<img src={nazad} alt="nazad" />}
              />
              <Button
                onClick={() => {
                  setTrenutnaStranica(6);
                }}
                text={<img src={naprijed} alt="naprijed" />}
              />
            </div>
          </div>
        </>
      );
    case 6:
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
                  text={<img src={x} alt="x" />}
                />
              </div>
            </div>
            <div className={styles.informacijeDivDrugaVarijanta}>
              {/* <div className={styles.slikaCetvrtaVarijanta}>
                <img
                  src={doktor}
                  style={{ width: "450px", height: "450px" }}
                  alt="radiologija"
                />
              </div> */}
              <div className={styles.tekst}>
                <p className={styles.p1}>
                  <strong>·</strong> Snimanje magnetnom rezonancom može trajati
                  od 30 minuta do sat vremena.
                  <br /> <strong>·</strong> Nakon što Vas medicinska sestra
                  prozove, ulazite u kabinu za presvlačenje gdje se raspremate i
                  pripremate za pregled. <br /> <strong>·</strong> Izuzetno je
                  važno da odstranite sve metalne predmete sa tijela (nakit,
                  grudnjak, kaiš, sat, mobilni aparat, novčanik, kovanice itd.
                  ), a u slučaju da imate ugrađen metalni material u tijelu
                  potrebno je i usmjeno obavijestiti radiološkog tehnologa i
                  doktora.
                </p>
              </div>
            </div>
            <div className={styles.buttons}>
              <Button
                onClick={() => {
                  setTrenutnaStranica(5);
                }}
                text={<img src={nazad} alt="nazad" />}
              />
              <Button
                onClick={() => {
                  setTrenutnaStranica(7);
                }}
                text={<img src={naprijed} alt="naprijed" />}
              />
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
                  text={<img src={x} alt="x" />}
                />
              </div>
            </div>
            <div className={styles.informacijeDivDrugaVarijanta}>
              <div className={styles.tekst}>
                <p className={styles.p1}>
                  <strong>·</strong> U slučaju da je potrebno davanje
                  paramagnetnog kontrastnog sredstva, medicinska sestra će vam
                  plasirati braunilu u venski krvni sud preko kojeg ćete primiti
                  kontrastno sredstvo u toku pregleda.
                  <br /> <strong>·</strong> Nakon toga ulazite u prostoriju sa
                  MR aparatom. <br /> <strong>·</strong> Pregled se obavlja
                  ležeći na pokretnom stolu za snimanje koji se nalazi unutar MR
                  aparata.
                  <br /> <strong>·</strong> Postavlja se odgovarajući kalem na
                  dio tijela koji se snima da bi se dobila bolja rezolucija i
                  kvalitet slike.
                </p>
              </div>
            </div>
            <div className={styles.buttons}>
              <Button
                onClick={() => {
                  setTrenutnaStranica(6);
                }}
                text={<img src={nazad} alt="nazad" />}
              />
              <Button
                onClick={() => {
                  setTrenutnaStranica(8);
                }}
                text={<img src={naprijed} alt="naprijed" />}
              />
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
                  text={<img src={x} alt="x" />}
                />
              </div>
            </div>
            <div className={styles.informacijeDivDrugaVarijanta}>
              <div className={styles.tekst}>
                <p className={styles.p1}>
                  <strong>·</strong> Inženjer medicinske radiologije, postaviće
                  Vas u položaj koji je optimalan za snimanje željenog dijela
                  tijela. <br /> <strong>·</strong> Ukoliko je potrebno,
                  postaviće vrećice sa pijeskom, različite trake ili jastuke oko
                  pregledavanog dijela tijela radi postizanja pravilnog položaja
                  za snimanje.
                  <br /> <strong>·</strong> U toku pregleda, bitno je da u
                  potpunosti mirujete i ne činite nikakve pokrete, sarađujete sa
                  radiološkim tehnologom sa kojim ćete biti u kontaktu radio
                  vezom.
                </p>
              </div>
            </div>
            <div className={styles.buttons}>
              <Button
                onClick={() => {
                  setTrenutnaStranica(7);
                }}
                text={<img src={nazad} alt="nazad" />}
              />
              <Button
                onClick={() => {
                  setTrenutnaStranica(9);
                }}
                text={<img src={naprijed} alt="naprijed" />}
              />
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
                  text={<img src={x} alt="x" />}
                />
              </div>
            </div>
            <div className={styles.informacijeDivDrugaVarijanta}>
              <div className={styles.tekst}>
                <p className={styles.p1}>
                  <strong>·</strong> Za vrijeme snimanja osoblje se nalazi izvan
                  prostorije u kojoj se bolesnik snima, ali kroz otvor sa
                  zaštitnim staklom sve vrijeme posmatra bolesnika. <br />{" "}
                  <strong>·</strong> Takođe MR kabina je opremljena video
                  kamerom preko koje radiološki tehnolog ima uvid u tok snimanja
                  i pacijenta i audio sisteom preko kojeg vas može čuti ukoliko
                  je to potrebno.
                  <br /> <strong>·</strong> U toku ili nakon završetka snimanja
                  bićete zamoljeni da sarađujete sa inženjerom medicinske
                  radiologije koji provjerava da li je učinjeni snimak
                  zadovoljavajuće kvaliteta i da li su učinjene sve potrebne
                  snimke.
                </p>
              </div>
            </div>
            <div className={styles.buttons}>
              <Button
                onClick={() => {
                  setTrenutnaStranica(8);
                }}
                text={<img src={nazad} alt="nazad" />}
              />
              <Button
                onClick={() => {
                  setTrenutnaStranica(10);
                }}
                text={<img src={naprijed} alt="naprijed" />}
              />
            </div>
          </div>
        </>
      );

    case 10:
      return (
        <>
          <div className={styles.mainDivInformacije}>
            <div className={styles.divBtn}>
              <HeaderInformacije>
                DA LI JE SNIMANJE MAGNETNOM REZONANCOM ŠTETNO ZA PACIJENTA?
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
                  text={<img src={x} alt="x" />}
                />
              </div>
            </div>
            <div className={styles.informacijeDivDrugaVarijanta}>
              <div className={styles.tekst}>
                <p className={styles.p1}>
                  <strong>·</strong> Pregled magnetnom rezonancom se smatra
                  bezbjednim pregledom ukoliko se prate sve upute medicinskog
                  osoblja koje učestvuje u snimanju. <br /> <strong>·</strong>{" "}
                  Ona se može primijeniti kod svih starosnih grupa i ponavljati
                  više puta.
                  <br /> <strong>·</strong> Prije svakog pregleda pacijent
                  ispunjava bezbjedonosni upitnik, koji provjerava medicinski
                  tehničar i ljekar, te ukoliko ne postoje kontraindikacije
                  odobravaju sprovođenje pregleda.
                  <br /> <strong>·</strong> Ne smijete biti pregledani magnetnom
                  rezonancom ukoliko u organizmu imate metalno tijelo (geler,
                  metalni opiljci,...).
                </p>
              </div>
            </div>
            <div className={styles.buttons}>
              <Button
                onClick={() => {
                  setTrenutnaStranica(9);
                }}
                text={<img src={nazad} alt="nazad" />}
              />
              <Button
                onClick={() => {
                  setTrenutnaStranica(11);
                }}
                text={<img src={naprijed} alt="naprijed" />}
              />
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
                DA LI JE SNIMANJE MAGNETNOM REZONANCOM ŠTETNO ZA PACIJENTA?
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
                  text={<img src={x} alt="x" />}
                />
              </div>
            </div>
            <div className={styles.informacijeDivDrugaVarijanta}>
              <div className={styles.tekst}>
                <p className={styles.p1}>
                  <strong>·</strong> Ukoliko ste imali bilo kakvu operaciju u
                  toku života potrebno je da naglasite to ljekaru koji Vas
                  upućuje na pregled radi provjere i adekvatne pripreme. <br />{" "}
                  <strong>·</strong> U slučaju da Vam je ugrađena endoproteza
                  ili osteosintetski materijal, treba posebno da skrenete pažnju
                  ukoliko na tijelu imate pirsing, tetovažu, ili koristite
                  terapijske pumpe, ugrađenu endoprotezu ili drugi metalni
                  materijal
                </p>
              </div>
            </div>
            <div className={styles.buttons}>
              <Button
                onClick={() => {
                  setTrenutnaStranica(10);
                }}
                text={<img src={nazad} alt="nazad" />}
              />

              <Button disabled text={<img src={naprijed} alt="naprijed" />} />
            </div>
          </div>
        </>
      );
    default:
      return null;
  }
};

export default InformacijeMR;
