import React, { useEffect } from "react";
import styles from "./PocetnaStranica.module.css";

const OdabirPregleda = ({ setSelectedOption, selectedOption, uputnica }) => {
  const opcije = [
    { value: "", label: "Odaberite pregled" },
    { value: "3", label: "KT" },
    { value: "5", label: "MR pregled" },
    { value: "6", label: "Radiografija" },
    { value: "7", label: "Radioskopija" },
    { value: "8", label: "Ultrazvuk" },
    { value: "9", label: "IVU" },
  ];

  //0106960106949 vise opcija

  //2508958100001 jedna vrijednost

  useEffect(() => {
    if (uputnica && uputnica.length === 1) {
      const vrijednosti = uputnica[0].vrijednost;
      setSelectedOption(vrijednosti[0]);
    }
  }, [uputnica, setSelectedOption]);

  if (!uputnica) {
    return null;
  }

  if (uputnica.length === 0) {
    return (
      <select
        className={styles.selected_option}
        value={selectedOption}
        onChange={(e) => setSelectedOption(e.target.value)}
      >
        {opcije.map((opcija, index) => (
          <option key={index} value={opcija.value}>
            {opcija.label}
          </option>
        ))}
      </select>
    );
  }

  // Ako postoji tačno jedan objekat u nizu
  if (uputnica.length === 1) {
    const vrijednosti = uputnica[0].vrijednost;
    console.log(vrijednosti);
    const matchedOption = opcije.find((opt) => opt.value === vrijednosti[0]);
    return (
      <p
        value={selectedOption}
        style={{ margin: 0, height: "67px", marginLeft: 20, fontSize: "4rem" }}
        className={styles.selected_option_magnet}
      >
        {matchedOption ? matchedOption.label : vrijednosti[0]}
      </p>
    );
  }

  // Ako postoji više od jednog objekta u nizu
  return (
    <select
      className={styles.selected_option}
      value={selectedOption || ""}
      onChange={(e) => setSelectedOption(e.target.value)}
    >
      <option value="">Odaberite pregled</option>
      {uputnica.map((opcija, index) => {
        const vrijednosti = opcija.vrijednost;
        const matchedOption = opcije.find(
          (opt) => opt.value === vrijednosti[0]
        );
        return (
          <option key={index} value={vrijednosti[0]}>
            {matchedOption ? matchedOption.label : vrijednosti[0]}
          </option>
        );
      })}
    </select>
  );
};

export default OdabirPregleda;
