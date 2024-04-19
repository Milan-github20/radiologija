import React, { useCallback, useEffect } from "react";
import "./App.css";
import { useState } from "react";
import PocetnaStranica from "./components/Pocetna_stranica/PocetnaStranica";
import Button from "./components/UI/Button/Button";
import logo from "./assets/ukcrs-removebg-preview.png";
import HotToast from "./components/HotToast/HotToast";
import Potpis from "./potpis/Potpis";
import { mrPocetnaPolja, ultrazvukPocetnaPolja } from "./konstante/konstante";
import toast from "react-hot-toast";

function App() {
  const [user, setUser] = useState("");
  const [pol, setPol] = useState(null);
  const [korisnik, setKorisnik] = useState(null);
  const [trenutnaStranicaApp, setTrenutnaStranicaApp] = useState(0);
  const [idDokumenta, setIdDokumenta] = useState();

  const [trenutnaStranica, setTrenutnaStranica] = useState(0);

  const [odgovoriUltrazvuk, setOdgovoriUltrazvuk] = useState(
    ultrazvukPocetnaPolja
  );
  const [odgovoriMR, setOdgovoriMR] = useState(
    JSON.parse(JSON.stringify(mrPocetnaPolja))
  );

  console.log(odgovoriMR.modul);

  const [pokreniOdjavu, setPokreniOdjavu] = useState(false);

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

  const posaljiPodatke = async (vrsta) => {
    let podaci = {};

    if (vrsta === "ultrazvuk") {
      podaci = { ...odgovoriUltrazvuk };
      setOdgovoriUltrazvuk(ultrazvukPocetnaPolja);
    }
    if (vrsta === "mr") {
      podaci = JSON.parse(JSON.stringify(odgovoriMR));
      setOdgovoriMR(mrPocetnaPolja);
    }

    // const newData = new URLSearchParams();

    const filteredModuli = podaci.modul.filter(
      (odgovor) => odgovor.vrijednost !== ""
    );
    console.log(filteredModuli);
    // newData.append("id_forme", podaci.id_forme);
    // //korisnik.id
    // // newData.append("id_pacijenta", korisnik.id);
    // newData.append("id_pacijenta", "465820");
    // newData.append("moduli", JSON.stringify({ modul: filteredModuli }));
    //
    // const response = await povuciPodatke("napravi_dokument", "POST", newData);
    //
    // if (response.ok) {
    //   setIdDokumenta(response.data.id["id_dokumenta"]);
    // } else {
    //   console.error("Došlo je do greške pri slanju podataka.");
    // }
  };

  const fetchDataPacijent = async (jmbg) => {
    const response = await povuciPodatke(
      `povuci_pacijenta&jmbg=${jmbg}`,
      "GET"
    );

    if (response.ok) {
      setKorisnik(response.data["lista"][0]);
      setPol(response.data["lista"][0].pol);
    }
  };

  const odjaviSe = () => {
    setTrenutnaStranicaApp(0);
    setTrenutnaStranica(0);
    setKorisnik(null);
    setOdgovoriMR(mrPocetnaPolja);
    setTimeout(() => {
      toast.success("Uspjesno ste se odjavili!", {
        duration: 3000,
      });
    }, 100);
  };

  const automatskaOdjava = (pregled) => {
    console.log("Uradio sam");
    const timeoutIdSecond = setTimeout(() => {
      posaljiPodatke(pregled).then();
    }, 200);

    if (pregled === "mr") setPokreniOdjavu(true);

    return () => {
      clearTimeout(timeoutIdSecond);
    };
  };

  useEffect(() => {
    if (!pokreniOdjavu) return;
    const timeoutId = setTimeout(() => {
      if (trenutnaStranica === 34) odjaviSe();
      else setPokreniOdjavu(false);
    }, 20000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [pokreniOdjavu, trenutnaStranica]);

  switch (trenutnaStranicaApp) {
    case 0:
      return (
        <>
          <HotToast />
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
            idDokumenta={idDokumenta}
          />
        </div>
      );
    case 2:
      return (
        <div className="App">
          <HotToast />
          <Potpis
            setTrenutnaStranicaApp={setTrenutnaStranicaApp}
            idDokumenta={idDokumenta}
            setKorisnik={setKorisnik}
            setTrenutnaStranica={setTrenutnaStranica}
          />
        </div>
      );
    default:
      return null;
  }
}

export default App;
