import React, { useCallback, useEffect } from "react";
import "./App.css";
import { useState } from "react";
import PocetnaStranica from "./components/Pocetna_stranica/PocetnaStranica";
import Button from "./components/UI/Button/Button";
import logo from "./assets/ukcrs-removebg-preview.png";
import HotToast from "./components/HotToast/HotToast";
import {
  mrPocetnaPolja,
  ultrazvukPocetnaPolja,
  ktPocetnaPolja,
} from "./konstante/konstante";
import toast from "react-hot-toast";

function App() {
  const [user, setUser] = useState("");
  const [pol, setPol] = useState(null);
  const [korisnik, setKorisnik] = useState(null);
  const [uputnica, setUputnica] = useState(null);
  const [trenutnaStranicaApp, setTrenutnaStranicaApp] = useState(0);
  // const [idDokumenta, setIdDokumenta] = useState();

  const [trenutnaStranica, setTrenutnaStranica] = useState(0);

  const [odgovoriUltrazvuk, setOdgovoriUltrazvuk] = useState(
    ultrazvukPocetnaPolja
  );
  const [odgovoriMR, setOdgovoriMR] = useState(
    JSON.parse(JSON.stringify(mrPocetnaPolja))
  );
  const [odgovoriKT, setOdgovoriKT] = useState(
    JSON.parse(JSON.stringify(ktPocetnaPolja))
  );

  const [pokreniOdjavu, setPokreniOdjavu] = useState(false);

  const [sign, setSign] = useState();

  const povuciPodatke = useCallback(async (url, metod, data = null) => {
    const response = await fetch(
      `http://10.8.0.14:8080/kis/rpc/radiologija_lokal.cfc?method=${url}`,
      // `../rpc/radiologija.cfc?method=${url}`,
      {
        method: metod,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: data,
        // mode: "no-cors",
      }
    );

    return { ok: response.ok, data: await response.json() };
  }, []);

  const prikaziUputnicu = async (korisnikId) => {
    // newData.append("id_pacijenta", korisnik.id)
    // newData.append("id_pacijenta", 106647);

    const response = await povuciPodatke(
      `povuci_uputnicu&id_pacijenta=${korisnikId}`,
      "GET"
    );

    if (response.ok) {
      setUputnica(response.data["lista"]);
    }
  };

  // useEffect(() => {
  //   prikaziUputnicu();
  // }, []);

  const dodajPotpis = async (dokumentId) => {
    const potpisUrl = sign.toDataURL("image/png");

    const newData = new URLSearchParams();
    newData.append("id_dokumenta", dokumentId);
    // newData.append("id_pacijenta", korisnik.id);
    newData.append("id_pacijenta", 465820);
    newData.append("potpis", JSON.stringify(potpisUrl));

    const response = await povuciPodatke("dodaj_potpis", "POST", newData);

    if (response.ok) {
      console.log("Podaci uspešno poslati!");
    } else {
      console.error("Došlo je do greške pri slanju podataka.");
    }
  };

  const posaljiPodatke = async (vrsta) => {
    let podaci = {};

    if (vrsta === "ultrazvuk") {
      podaci = { ...odgovoriUltrazvuk };
      setOdgovoriUltrazvuk(ultrazvukPocetnaPolja);
    }
    if (vrsta === "mr") {
      podaci = JSON.parse(JSON.stringify(odgovoriMR));
      setOdgovoriMR(JSON.parse(JSON.stringify(mrPocetnaPolja)));
    }
    if (vrsta === "kt") {
      podaci = JSON.parse(JSON.stringify(odgovoriKT));
      setOdgovoriKT(JSON.parse(JSON.stringify(ktPocetnaPolja)));
    }

    const newData = new URLSearchParams();

    const filteredModuli = podaci.modul.filter(
      (odgovor) => odgovor.vrijednost !== ""
    );
    newData.append("id_forme", podaci.id_forme);
    //korisnik.id
    // newData.append("id_pacijenta", korisnik.id);
    newData.append("id_pacijenta", 465820);
    newData.append("moduli", JSON.stringify({ modul: filteredModuli }));

    const response = await povuciPodatke("napravi_dokument", "POST", newData);

    if (response.ok) {
      await dodajPotpis(response.data.id["id_dokumenta"]);
    } else {
      console.error("Došlo je do greške pri slanju podataka.");
    }
  };

  const fetchDataPacijent = async (jmbg) => {
    const response = await povuciPodatke(
      `povuci_pacijenta&jmbg=${jmbg}`,
      "GET"
    );

    if (response.ok) {
      prikaziUputnicu(response.data["lista"][0].id);
      if (response.data["lista"] && response.data["lista"].length > 0) {
        setKorisnik(response.data["lista"][0]);
        setPol(response.data["lista"][0].pol);
      } else {
        toast.error("Ne postoji karton pacijenta!");
      }
    }
  };

  const odjaviSe = (vrsta) => {
    setTrenutnaStranicaApp(0);
    setTrenutnaStranica(0);
    setKorisnik(null);
    if (vrsta === "mr") {
      setOdgovoriMR(JSON.parse(JSON.stringify(mrPocetnaPolja)));
    }
    if (vrsta === "kt") {
      setOdgovoriKT(JSON.parse(JSON.stringify(ktPocetnaPolja)));
    }

    setTimeout(() => {
      toast.success("Uspjesno ste se odjavili!", {
        duration: 3000,
      });
    }, 100);
  };

  const automatskaOdjava = (pregled) => {
    const timeoutIdSecond = setTimeout(() => {
      posaljiPodatke(pregled).then();
    }, 200);

    if (pregled === "kt") setPokreniOdjavu(true);
    if (pregled === "mr") setPokreniOdjavu(true);

    return () => {
      clearTimeout(timeoutIdSecond);
    };
  };

  // useEffect(() => {
  //   if (!pokreniOdjavu) return;
  //   const timeoutId = setTimeout(() => {
  //     if (trenutnaStranica === 35) odjaviSe();
  //     else setPokreniOdjavu(false);
  //   }, 20000);

  //   return () => {
  //     clearTimeout(timeoutId);
  //   };
  // }, [pokreniOdjavu, trenutnaStranica]);

  switch (trenutnaStranicaApp) {
    case 0:
      return (
        <>
          <HotToast />
          <div className="verzija">3.0</div>
          <div className="divApp">
            <div className="bodyDiv">
              <div className="divLogo">
                <img className="logo" src={`${logo}`} alt="logo UKC" />
              </div>
              <div className="divTekst">
                <h1 className="divApp_h1">
                  Danas ste zakazani za radiološki pregled?
                </h1>
              </div>
            </div>
            <div className="buttons">
              <Button
                next
                onClick={() => {
                  setTrenutnaStranicaApp(1);
                }}
                text={"PRIJAVITE SE OVDJE"}
              />
            </div>
          </div>
        </>
      );
    case 1:
      return (
        <div className="App">
          <PocetnaStranica
            povuciKorisnika={fetchDataPacijent}
            povuciPodatke={povuciPodatke}
            korisnik={korisnik}
            setUser={setUser}
            pol={pol}
            odjava={odjaviSe}
            automatskaOdjava={automatskaOdjava}
            setKorisnik={setKorisnik}
            setTrenutnaStranicaApp={setTrenutnaStranicaApp}
            setOdgovoriUltrazvuk={setOdgovoriUltrazvuk}
            posaljiPodatke={posaljiPodatke}
            setTrenutnaStranica={setTrenutnaStranica}
            trenutnaStranica={trenutnaStranica}
            setOdgovoriMR={setOdgovoriMR}
            setOdgovoriKT={setOdgovoriKT}
            // idDokumenta={idDokumenta}
            setSign={setSign}
            sign={sign}
            pokreniOdjavu={pokreniOdjavu}
            setPokreniOdjavu={setPokreniOdjavu}
            uputnica={uputnica}
          />
        </div>
      );
    case 2:
      return (
        <div className="App">
          <HotToast />
          {/* <Potpis
            setTrenutnaStranicaApp={setTrenutnaStranicaApp}
            idDokumenta={idDokumenta}
            setKorisnik={setKorisnik}
            setTrenutnaStranica={setTrenutnaStranica}
          /> */}
        </div>
      );
    default:
      return null;
  }
}

export default App;
