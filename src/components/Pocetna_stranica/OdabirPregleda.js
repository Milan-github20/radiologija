import React from "react";
import styles from "./PocetnaStranica.module.css";

const OdabirPregleda = ({ setSelectedOption, selectedOption }) => {
  const opcije = [
    // { value: "", label: "Odaberite pregled" },
    { value: "1", label: "Magnetna rezonanca" },
    // { value: "2", label: "Radioskopija" },
    // { value: "3", label: "Radiografija" },
    // { value: "4", label: "Ultrazvuk" },
    // { value: "5", label: "KT" },
    // { value: "6", label: "IVU" },
  ];

  return (
    // <select
    //   className={styles.selected_option}
    //   value={selectedOption}
    //   onChange={(e) => setSelectedOption(e.target.value)}
    // >
    //   {opcije.map((opcija) => (
    //     <option key={opcija.value} value="1">
    //       {opcija.label}
    //     </option>
    //   ))}
    // </select>
    <p
      value={selectedOption}
      style={{ margin: 0, height: "67px", marginLeft: 20, fontSize: "4rem" }}
      className={styles.selected_option_magnet}
    >
      MR Pregled?
    </p>
  );
};

export default OdabirPregleda;
