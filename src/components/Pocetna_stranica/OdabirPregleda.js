import React from 'react';
import styles from "./PocetnaStranica.module.css";

const OdabirPregleda = ({setSelectedOption, selectedOption}) => {
  const opcije = [
    {value: '', label: 'Odaberite pregled'},
    {value: '1', label: 'Magnetna rezonanca'},
    {value: '2', label: 'Radioskopija'},
    {value: '3', label: 'Radiografija'},
    {value: '4', label: 'Ultrazvuk'},
    {value: '5', label: 'KT'},
    {value: '6', label: 'IVU'}
  ];

  return (
    <select
      className={styles.selected_option}
      value={selectedOption}
      onChange={(e) => setSelectedOption(e.target.value)}
    >
      {opcije.map(opcija => <option key={opcija.value} value={opcija.value}>
        {opcija.label}</option>)}
    </select>
  );
};

export default OdabirPregleda;