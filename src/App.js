import React, { useCallback } from "react";
import "./App.css";
import { useState } from "react";
import { useEffect } from "react";
import PocetnaStranica from "./components/Pocetna_stranica/PocetnaStranica";
import PotvrdaPol from "./components/Potvrdi_pol/Potvrdi_pol";

function App() {
  const [user, setUser] = useState("");
  const [pol, setPol] = useState(null);
  const [korisnik, setKorisnik] = useState(null);
  const [currentComponent, setCurrentComponent] = useState("PocetnaStranica");

  const fetchData = useCallback(async () => {
    try {
      if (user.trim() === "") {
        // Ako je user prazan ili samo bijeli prostor, ne izvršavaj zahtjev
        setKorisnik(null); // Resetuj korisnika na null
        return;
      }

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

  return (
    <div className="App">
      {currentComponent === "PocetnaStranica" && (
        <PocetnaStranica
          setCurrentComponent={setCurrentComponent}
          korisnik={korisnik}
          setUser={setUser}
          pol={pol}
          setPol={setPol}
          setKorisnik={setKorisnik}
        />
      )}

      {currentComponent === "PotvrdaPol" && <PotvrdaPol />}
    </div>
  );
}

export default App;
