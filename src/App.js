import React, { useCallback } from "react";
import "./App.css";
import { useState } from "react";
import { useEffect } from "react";
import PocetnaStranica from "./components/Pocetna_stranica/PocetnaStranica";
import Button from "./components/UI/Button/Button";
import logo from "./assets/ukcrs-removebg-preview.png";
import HotToast from "./components/HotToast/HotToast";
import Potpis from "./potpis/Potpis";
import {ultrazvukPocetnaPolja} from "./konstante/konstante";

function App() {
  const [user, setUser] = useState("");
  const [pol, setPol] = useState(null);
  const [korisnik, setKorisnik] = useState(null);
  const [trenutnaStranicaApp, setTrenutnaStranicaApp] = useState(0);
  const [idDokumenta, setIdDokumenta] = useState();

  const [trenutnaStranica, setTrenutnaStranica] = useState(0);

  const [odgovoriUltrazvuk, setOdgovoriUltrazvuk] = useState(ultrazvukPocetnaPolja);

  const posaljiPodatke = async (vrsta) => {
    let podaci = {};
    if (vrsta === 'ultrazvuk') podaci = {...odgovoriUltrazvuk};
    if (vrsta === 'mr') podaci = {...odgovoriUltrazvuk};
    const newData = new URLSearchParams();

    const filteredModuli = podaci.modul.filter(
      (odgovor) => odgovor.vrijednost !== ""
    );
    newData.append("id_forme", podaci.id_forme);
    //korisnik.nesto
    newData.append("id_pacijenta", 465820);
    newData.append("moduli", JSON.stringify({ modul: filteredModuli }));

    const response = await fetch(
      `http://10.8.0.14:8080/kis/rpc/radiologija.cfc?method=napravi_dokument`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: newData,
      }
    );

    if (response.ok) {
      const data = await response.json();
      setIdDokumenta(data.id.id_dokumenta);
      console.log("Podaci uspešno poslati!");
    } else {
      console.error("Došlo je do greške pri slanju podataka.");
    }
  };

  //IZIS KARTICA UNOS PACIJENTA

  // const fetchData = useCallback(async () => {
  //   try {
  //     if (user.trim() === "") {
  //       setKorisnik(null);
  //       return;
  //     }
  //     console.log(user);

  //     const response = await fetch(
  //       `../rpc/izis_rs.cfc?method=OsiguranikUID2&id=${user}&__BDRETURNFORMAT=json`,
  //       {
  //         method: "GET",
  //         headers: {
  //           "Content-Type": "application/x-www-form-urlencoded",
  //         },
  //         mode: "no-cors",
  //       }
  //     );

  //     const responseData = await response.json();

  //     setKorisnik({
  //       ime: "Milan",
  //       prezime: "Jagodic",
  //       pol: "M",
  //       dat_rod: "20.02.2002",
  //       jmbg: 2002002100045,
  //     });

  //     setPol("M");

  //     if (responseData.items) {
  //       // setKorisnik(responseData.items[0]);
  //       // setPol(responseData.items[0].pol);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }, [user]);

  const fetchDataPacijent = useCallback(async () => {
    try {
      if (user.trim() === "") {
        setKorisnik(null);
        return;
      }

      const response = await fetch(
        `http://10.8.0.14:8080/kis/rpc/radiologija.cfc?method=povuci_pacijenta&jmbg=${user}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          // mode: "no-cors",
        }
      );

      const responseData = await response.json();

      if (responseData.lista) {
        setKorisnik(responseData.lista[0]);
        setPol(responseData.lista[0].pol);
      }
    } catch (error) {
      console.log(error);
    }
  }, [user]);

  useEffect(() => {
    const timer = setTimeout(() => {
      // fetchData();
      fetchDataPacijent().then();
    }, 1000);

    return () => clearTimeout(timer);
  }, [fetchDataPacijent]);

  switch (trenutnaStranicaApp) {
    case 0:
      return (
        <>
          <HotToast />
          <div className="divApp">
            <div className="bodyDiv">
              <div className="divLogo">
                <img className="logo" src={logo} alt="logo UKC" />
              </div>
              {/* <Button
                potpisButton
                onClick={() => {
                  setTrenutnaStranicaApp(2);
                }}
              >
                Potpis
              </Button> */}
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
              >
                PRIJAVITE SE OVDJE
              </Button>
            </div>
          </div>
        </>
      );
    case 1:
      return (
        <div className="App">
          <PocetnaStranica
            korisnik={korisnik}
            setUser={setUser}
            pol={pol}
            setPol={setPol}
            setKorisnik={setKorisnik}
            setTrenutnaStranicaApp={setTrenutnaStranicaApp}
            setOdgovoriUltrazvuk={setOdgovoriUltrazvuk}
            posaljiPodatke={posaljiPodatke}
            setTrenutnaStranica={setTrenutnaStranica}
            trenutnaStranica={trenutnaStranica}
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
            setUser={setUser}
            setKorisnik={setKorisnik}
          />
        </div>
      );
    default:
      return null;
  }
}

export default App;
