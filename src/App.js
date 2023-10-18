import React, { useCallback } from "react";
import "./App.css";
import { useState } from "react";
import { useEffect } from "react";
import PocetnaStranica from "./components/Pocetna_stranica/PocetnaStranica";
import Button from "./components/UI/Button/Button";
import logo from "./assets/Logo UKC RS.png";
import HotToast from "./components/HotToast/HotToast";

function App() {
  const [user, setUser] = useState("");
  const [pol, setPol] = useState(null);
  const [korisnik, setKorisnik] = useState(null);
  const [trenutnaStranicaApp, setTrenutnaStranicaApp] = useState(0);

  const fetchData = useCallback(async () => {
    try {
      if (user.trim() === "") {
        // Ako je user prazan ili samo bijeli prostor, ne izvršavaj zahtjev
        setKorisnik(null); // Resetuj korisnika na null
        return;
      }
      console.log(user);

      const response = await fetch(
        `http://10.166.115.3:9999/apex/ehcr/IzisSif/OsiguranikUID/${user}`,
        {
          method: "GET",
        }
      );

      const responseData = await response.json();

      if (responseData.items) {
        setKorisnik(responseData.items[0]);
        setPol(responseData.items[0].pol);
      }
    } catch (error) {
      console.log(error);
    }
  }, [user]);

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchData();
    }, 1000);

    return () => clearTimeout(timer);
  }, [fetchData]);

  switch (trenutnaStranicaApp) {
    case 0:
      return (
        <>
          <HotToast />
          <div className="divApp">
            <div className="bodyDiv">
              <img className="logo" src={logo} alt="logo UKC" />
              <h1 className="divApp_h1">
                Danas ste zakazani za radiološki pregled?
              </h1>
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
          />
        </div>
      );
    default:
      return null;
  }
}

export default App;
