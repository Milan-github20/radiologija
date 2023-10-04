import React, { useState } from "react";
import Button from "../UI/Button/Button";
import styles from "./InfromacijeOPregledu.module.css";
import naprijed from "../../assets/right-arrow.png";
import nazad from "../../assets/backward.png";
import x from "../../assets/close.png";
import radiologija from "../../assets/radiologija.png";

const InformacijeOPregledu = ({ setKorak, setKorisnik }) => {
  const [trenutnaStranica, setTrenutnaStranica] = useState(0);

  switch (trenutnaStranica) {
    case 0:
      return (
        <>
          <div className={styles.divBtn}>
            <Button
              alt
              back
              onClick={() => {
                setKorak(0);
                setKorisnik(null);
              }}
            >
              <img src={x} alt="x" />
            </Button>
          </div>
          <div className={styles.informacijeDiv}>
            <div className={styles.divSlika}>
              <div>
                <img src={radiologija} alt="radiologija" />
                <h4>
                  VAŠ TRAŽENI PREGLED SPADA U GRUPU RADIOGRAFSKIH PREGLEDA.
                </h4>
              </div>
            </div>

            <div className={styles.InformacijeOPregleduDiv}>
              <div>
                <p className={styles.p1}>
                  Radiografija je medicinski snimak koji se dobija uz pomoć
                  rentgenskih zrakova i koji omogućava doktorima da vide kosti i
                  druge strukture ljudskog tijela. Koristi se u početnoj
                  dijagnostici koštano-zglobnog sistema, oboljenja pluća i srca,
                  bubrega, digestivnog i urinarnog sistema.
                </p>

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
            </div>
          </div>
        </>
      );
    case 1:
      return (
        <>
          <div className={styles.divBtn}>
            <Button
              alt
              back
              onClick={() => {
                setKorak(0);
                setKorisnik(null);
              }}
            >
              <img src={x} alt="x" />
            </Button>
          </div>
          <div className={styles.informacijeDiv}>
            <strong>Kako se pripremiti za pregled?</strong> <br /> <br />
            <strong>· Za ovaj pregled nije potrebna posebna priprema.</strong>
            <br /> <br />
            <strong>·</strong> Inžinjeru medicinske radiologije trebate
            napomenuti prisustvo metalnog stranog tijela u regiji koja se snima.
            Takođe trebate napomenuti ako ste 4 dana unazad radili neku od
            kontrastnih pretraga (EGD, irigografiju...)
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
            <Button
              alt
              back
              onClick={() => {
                setKorak(0);
                setKorisnik(null);
              }}
            >
              <img src={x} alt="x" />
            </Button>
          </div>
          <div className={styles.informacijeDiv}>
            <strong>Da li je pregled bolan?</strong>
            <br /> <br />
            <strong>·</strong> Snimanje radiografija je bezbolna dijagnostička
            metoda.
            <br /> <br /> Možete osjetiti nelagodu zbog niže temperature u
            prostoriji gdje se snimanje obavlja ( s obzirom da ista treba biti
            hlađena zbog ispravnog rada uređaja). Takođe, neugodnost može
            izazvati i ležanje na tvrdom stolu uređaja ili neudoban položaj
            pregledavanog dijela tijela pri snimanju. Inženjer medicinske
            radiologije pomoći će vam u pronalaženju optimalnog položaja tijela
            s obzirom na vaše stanje i potreban položaj tijela zbog snimanja
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
            <Button
              alt
              back
              onClick={() => {
                setKorak(0);
                setKorisnik(null);
              }}
            >
              <img src={x} alt="x" />
            </Button>
          </div>
          <div className={styles.informacijeDiv}>
            <strong>Tok pregleda</strong> <br /> <strong>·</strong> Snimanje
            radiografije obično traje do 15 minuta.
            <br /> <strong>·</strong> Nakon što Vas medicinska sestra prozove,
            ulazite u kabinu za presvlačenje gdje se raspremate i pripremate za
            pregled. Nakon toga ulazite u prostoriju sa RTG aparatom.
            <br /> <strong>·</strong> Pregled se radi stojeći, sjedeći ili
            ležeći na stolu za snimanje, u zavisnosti od dijela tijela koji se
            snima i od stanja pacijenta.
            <br /> <strong>·</strong> Inženjer medicinske radiologije, osoba
            školovana za izvođenje radioloških pretraga, postaviće Vas u položaj
            koji je optimalan za snimanje željenog dijela tijela. Ukoliko je
            potrebno, postaviće vrećice sa pijeskom, različite trake ili jastuke
            oko pregledavanog dijela tijela radi postizanja pravilnog položaja
            za snimanje.
            <br /> <strong>·</strong> U toku pregleda, bitno je da mirujete i
            sarađujete sa inžinjerom medicinske radiologije, koji će od Vas
            tražiti da zauzmete određeni položaj. Možda će se od Vas tražiti da
            zadržite dah na kratko kako bi dobijeni snimak bio oštar
            <br /> <strong>·</strong> Za vrijeme snimanja osoblje se nalazi
            izvan prostorije u kojoj se bolesnik snima, ali kroz otvor sa
            zaštitnim staklom sve vrijeme posmatra bolesnika.
            <br /> <strong>·</strong> Nakon završetka snimanja bićete zamoljeni
            da pričekate dok inženjer medicinske radiologije provjeri da li
            učinjeni snimak dobra i da li su učinjene sve potrebne snimke
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
            <Button
              alt
              back
              onClick={() => {
                setKorak(0);
                setKorisnik(null);
              }}
            >
              <img src={x} alt="x" />
            </Button>
          </div>
          <div className={styles.informacijeDiv}>
            <strong>Da li je snimanje radiografija štetno za pacijenta?</strong>
            <br /> <br />
            <strong>·</strong> Postoji vrlo mali rizik od razvoja oboljenja
            uzrokovanog većim izlaganjima rendgenskom zračenju. Međutim, korist
            dobijena rendgenskim snimanjem višestruko nadmašuje spomenuti rizik
            <br /> <br /> <strong>·</strong> Obzirom na moguće štetno djelovanje
            rentgenskog zračenja na plod, žene u generativnoj dobi trebaju
            OBAVEZNO obavijestiti radiološko osoblje o eventualno mogućoj
            trudnoći. Tada će se, u koliko je to moguće, rendgensko snimanje
            zamijeniti nekom drugom radiološkom metodom koja ne koristi
            jonizujuće zračenje (ultrazvuk, magnetna rezonancija).
            <br /> <br /> Kao i kod drugih medicinskih postupaka, upotreba
            rendgenskog zračenja sigurna je kada se koristi s pažnjom i stručno.
            Radiološko osoblje obučeno je da upotrijebi što manju dozu zračenja
            da bi se postigao potrebni rezultat kvalitetna radiografija.
          </div>
          <div className={styles.buttons}>
            <Button
              onClick={() => {
                setTrenutnaStranica(3);
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
