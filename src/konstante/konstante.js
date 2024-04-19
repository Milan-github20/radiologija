import dayjs from "dayjs";
import React from "react";

export const ultrazvukPocetnaPolja = {
  id_forme: 810,
  modul: [
    {
      id: 73958,
      vrijednost: "",
    },
    {
      id: 73959,
      vrijednost: "",
    },
    {
      id: 73960,
      vrijednost: "",
    },
    {
      id: 73961,
      vrijednost: "",
    },
    {
      id: 73962,
      vrijednost: "",
    },
    {
      id: 73963,
      vrijednost: "",
    },
  ],
};

export const mrPocetnaPolja = {
  id_forme: 815,
  modul: [
    {
      id: 74173,
      vrijednost: "",
      odgovor: "Trudna",
    },
    {
      id: 74174,
      vrijednost: "",
      odgovor: "Nije trudna",
    },
    {
      id: 74175,
      vrijednost: "",
      odgovor: "Dojilja",
    },
    {
      id: 74176,
      vrijednost: "",
      odgovor: "Nije dojilja",
    },
    {
      id: 74177,
      vrijednost: "",
      odgovor: "Spirala",
    },
    {
      id: 74178,
      vrijednost: "",
      odgovor: "Nije spirala",
    },
    {
      id: 74194,
      vrijednost: "",
      odgovor: "MR pregled",
    },
    {
      id: 74195,
      vrijednost: "",
      odgovor: "Nije MR pregled",
    },
    {
      id: 74196,
      vrijednost: "",
      odgovor: "Strah",
    },
    {
      id: 74197,
      vrijednost: "",
      odgovor: "Nema Straha",
    },
    {
      id: 74198,
      vrijednost: "",
      odgovor: "Kontrast",
    },
    {
      id: 74199,
      vrijednost: "",
      odgovor: "Nema kontrasta",
    },
    {
      id: 74200,
      vrijednost: "",
      odgovor: "Mucnina",
    },
    {
      id: 74201,
      vrijednost: "",
      odgovor: "Nije mucnina",
    },
    {
      id: 74202,
      vrijednost: "",
      odgovor: "Povracanje",
    },
    {
      id: 74203,
      vrijednost: "",
      odgovor: "Nije povracanje",
    },
    {
      id: 74204,
      vrijednost: "",
    },
    {
      id: 74205,
      vrijednost: "",
    },
    {
      id: 74206,
      vrijednost: "",
    },
    {
      id: 74207,
      vrijednost: "",
    },
    {
      id: 74208,
      vrijednost: "",
    },
    {
      id: 74209,
      vrijednost: "",
    },
    {
      id: 74210,
      vrijednost: "",
    },
    {
      id: 74211,
      vrijednost: "",
    },
    {
      id: 74212,
      vrijednost: "",
    },
    {
      id: 74213,
      vrijednost: "",
    },
    {
      id: 74214,
      vrijednost: "",
    },
    {
      id: 74215,
      vrijednost: "",
    },
    {
      id: 74216,
      vrijednost: "",
    },
    {
      id: 74217,
      vrijednost: "",
    },
    {
      id: 74218,
      vrijednost: "",
    },
    {
      id: 74219,
      vrijednost: "",
    },
    {
      id: 74220,
      vrijednost: "",
    },
    {
      id: 74221,
      vrijednost: "",
    },
    {
      id: 74222,
      vrijednost: "",
    },
    {
      id: 74223,
      vrijednost: "",
    },
    {
      id: 74169,
      vrijednost: "",
      odgovor: "EGFR",
    },
    {
      id: 74224,
      vrijednost: "",
    },
    {
      id: 74225,
      vrijednost: "",
    },
    {
      id: 74226,
      vrijednost: "",
    },
    {
      id: 74227,
      vrijednost: "",
    },
    {
      id: 74228,
      vrijednost: "",
    },
    {
      id: 74229,
      vrijednost: "",
    },
    {
      id: 74230,
      vrijednost: "",
    },
    {
      id: 74231,
      vrijednost: "",
    },
    {
      id: 74232,
      vrijednost: "",
    },
    {
      id: 74233,
      vrijednost: "",
    },
    {
      id: 74234,
      vrijednost: "",
      odgovor: "implant",
    },
    {
      id: 74235,
      vrijednost: "",
      odgovor: "nema implant",
    },
    {
      id: 74236,
      vrijednost: "",
    },
    {
      id: 74237,
      vrijednost: "",
    },
    {
      id: 74238,
      vrijednost: "",
    },
    {
      id: 74239,
      vrijednost: "",
    },
    {
      id: 74240,
      vrijednost: "",
      odgovor: "Tetoviran",
    },
    {
      id: 74241,
      vrijednost: "",
      odgovor: "Nije tetoviran",
    },

    {
      id: 74158,
      vrijednost: "",
      odgovor: "Musko",
    },
    {
      id: 74159,
      vrijednost: "",
      odgovor: "Zensko",
    },
  ],
};

export const magnetnaPitanja = [
  {
    id: 0,
    uslov: { pol: 0, akoNije: 5 },
    pitanje: "Da li ste trudni?",
    da: { ima: true, tekst: "DA", akcija: 1, odgovor: 74173 },
    ne: { ima: true, tekst: "NE", akcija: 2, odgovor: 74174 },
    nazad: { ima: true, tip: "korak", broj: 1 },
  },
  {
    id: 1,
    uslov: { pol: 0, akoNije: 5 },
    pitanje: "Pregled će se uraditi bez davanja injekcije kontrasta.",
    da: { ima: true, tekst: "NASTAVI", akcija: 2 },
    ne: { ima: false, tekst: "NE", akcija: undefined },
    nazad: { ima: true, tip: "stranica", broj: 0 },
  },
  {
    id: 2,
    uslov: { pol: 0, akoNije: 5 },
    pitanje: "Da li ste dojilja?",
    da: { ima: true, tekst: "DA", akcija: 3, odgovor: 74175 },
    ne: { ima: true, tekst: "NE", akcija: 4, odgovor: 74176 },
    nazad: { ima: true, tip: "stranica", broj: 0 },
  },
  {
    id: 3,
    uslov: {},
    pitanje: (
      <>
        Ukoliko primite kontrastno sredstvo morate da prestanete da dojite Vaše
        dijete do {dayjs().add(2, "d").format("DD.MM.YYYY")}
      </>
    ),
    da: { ima: true, tekst: "NASTAVI", akcija: 4 },
    ne: { ima: false, tekst: "NE", akcija: undefined },
    nazad: { ima: true, tip: "stranica", broj: 2 },
  },
  {
    id: 4,
    uslov: {},
    pitanje: "Da li imate kontracepcijski uložak (spiralu)?",
    da: { ima: true, tekst: "DA", akcija: 5, odgovor: 74177 },
    ne: { ima: true, tekst: "NE", akcija: 5, odgovor: 74178 },
    nazad: { ima: true, tip: "stranica", broj: 2 },
  },
  {
    id: 5,
    uslov: {},
    pitanje: "Da li ste već imali MR pregled?",
    da: { ima: true, tekst: "DA", akcija: 6, odgovor: 74194 },
    ne: { ima: true, tekst: "NE", akcija: 7, odgovor: 74195 },
    nazad: {
      ima: true,
      tip: "pol",
      akoMusko: { tip: "korak", broj: 1 },
      akoZensko: { tip: "stranica", broj: 4 },
    },
  },
  {
    id: 6,
    uslov: {},
    pitanje: (
      <>
        Da li ste imali neki od slijedećih problema prilikom prethodnog
        pregleda:
        <br /> <br />
        Strah od zatvorenog prostora?
      </>
    ),
    da: { ima: true, tekst: "DA", akcija: 7, odgovor: 74196 },
    ne: { ima: true, tekst: "NE", akcija: 7, odgovor: 74197 },
    nazad: { ima: true, tip: "stranica", broj: 5 },
  },
  {
    id: 7,
    uslov: {},
    pitanje: (
      <>
        Jeste li već imali neki radiološki pregled koji je zahtijevao upotrebu
        kontrastnih sredstava?
      </>
    ),
    da: { ima: true, tekst: "DA", akcija: 8, odgovor: 74198 },
    ne: { ima: true, tekst: "NE", akcija: 14, odgovor: 74199 },
    nazad: { ima: true, tip: "stranica", broj: 6 },
  },
  {
    id: 19,
    uslov: {},
    pitanje: <>Da li ste imali operativne zahvate?</>,
    da: { ima: true, tekst: "DA", akcija: 20, odgovor: 74222 },
    ne: { ima: true, tekst: "NE", akcija: 21, odgovor: 74223 },
    nazad: { ima: true, tip: "stranica", broj: 18 },
  },
  {
    id: 20,
    uslov: {},
    pitanje: (
      <>
        Molimo Vas da kad budete prozvani obavijestite osoblje na šalteru koje
        ste operativne zahvate imali.
      </>
    ),
    da: { ima: true, tekst: "NASTAVI", akcija: 21 },
    ne: { ima: false, tekst: "NE", akcija: undefined },
    nazad: { ima: true, tip: "stranica", broj: 19 },
  },
  {
    id: 21,
    ne: { odgovor: 74169 },
    da: {},
    nazad: { broj: 19 },
  },
  {
    id: 22,
    uslov: {},
    da: { ima: true, tekst: "NASTAVI", akcija: 23, odgovor: 74169 },
    ne: { ima: false, tekst: "NE", akcija: undefined },
    nazad: { ima: true, tip: "stranica", broj: 21 },
    posebniNaslov: true,
  },
  {
    id: 29,
    uslov: {},
    pitanje: (
      <>
        Molimo Vas da kada budete prozvani obavijestite osoblje na šalteru da
        imate ugrađen materijal.
      </>
    ),
    da: { ima: true, tekst: "NASTAVI", akcija: 30 },
    ne: { ima: false, tekst: "NE", akcija: undefined },
    nazad: { ima: true, tip: "stranica", broj: 28 },
  },
  {
    id: 30,
    uslov: {},
    pitanje: <>Da li ste imali povredu oka metalnim predmetom?</>,
    da: { ima: true, tekst: "DA", akcija: 31, odgovor: 74236 },
    ne: { ima: true, tekst: "NE", akcija: 31, odgovor: 74237 },
    nazad: { ima: true, tip: "stranica", broj: 28 },
  },
  {
    id: 31,
    uslov: {},
    pitanje: (
      <>Da li u svom tijelu imate metalna strana tijela (metak , geler…)?</>
    ),
    da: { ima: true, tekst: "DA", akcija: 32, odgovor: 74238 },
    ne: { ima: true, tekst: "NE", akcija: 32, odgovor: 74239 },
    nazad: { ima: true, tip: "stranica", broj: 30 },
  },
  {
    id: 32,
    uslov: {},
    pitanje: <>Da li ste tetovirani?</>,
    da: { ima: true, tekst: "DA", akcija: 33, odgovor: 74240 },
    ne: { ima: true, tekst: "NE", akcija: 33, odgovor: 74241 },
    nazad: { ima: true, tip: "stranica", broj: 31 },
  },
  {
    id: 33,
    ne: {},
    da: { ima: true, tekst: "NASTAVI", akcija: 34 },
    nazad: { ima: true, tip: "stranica", broj: 32 },
  },
  {
    id: 34,
    uslov: {},
    da: { ima: true, tekst: "DA", akcija: 35 },
    ne: { ima: true, tekst: "NE" },
    nazad: { ima: false },
    posebniNaslov: true,
  },
];

const kontrastPitanja = [
  "Mučnina?",
  "Povraćanje?",
  "Osjećaj davljenja/gušenje?",
  "Osip?",
  "Grčevi?",
  "Nesvjestica?",
];

for (let i = 8, j = 0; i < 14; i++, j++) {
  magnetnaPitanja.push({
    id: i,
    uslov: {},
    pitanje: (
      <>
        Da li ste nakon primanja kontrasta imali neku od sljedećih tegoba:
        <br /> <br />
        {kontrastPitanja[j]}
      </>
    ),
    da: { ima: true, tekst: "DA", akcija: i + 1, odgovor: 74200 + j * 2 },
    ne: { ima: true, tekst: "NE", akcija: i + 1, odgovor: 74201 + j * 2 },
    nazad: { ima: true, tip: "stranica", broj: i - 1 },
  });
}

const bolestiPitanja = [
  "Astma?",
  "Alergija koju morate liječiti?",
  "Bolesti bubrega ili nadbubrežnih žlijezda?",
  "Bolesti štitne žlijezde?",
  "Šećerna bolest?",
];

for (let i = 14, j = 0; i < 19; i++, j++) {
  magnetnaPitanja.push({
    id: i,
    uslov: {},
    pitanje: (
      <>
        Da li bolujete od neke od slijedećih bolesti:
        <br /> <br />
        {bolestiPitanja[j]}
      </>
    ),
    da: { ima: true, tekst: "DA", akcija: i + 1, odgovor: 74212 + j * 2 },
    ne: { ima: true, tekst: "NE", akcija: i + 1, odgovor: 74213 + j * 2 },
    nazad: { ima: true, tip: "stranica", broj: i - 1 },
  });
}

const ugradjenPitanja = [
  "Pejsmejker (srčani stimulator)?",
  "Defibrilator?",
  "Vještački srčani zalistak?",
  "Slušni implant?",
  "Vještački kuk , koljeno ili druge metalne zglobne proteze?",
  "Bilo kakav drugi implant, metalne pločice, šipke ili zavrtnje?",
];

for (let i = 23, j = 0; i < 29; i++, j++) {
  magnetnaPitanja.push({
    id: i,
    uslov: {},
    pitanje: (
      <>
        Da li imate ugrađen:
        <br /> <br />
        {ugradjenPitanja[j]}
      </>
    ),
    da: {
      ima: true,
      tekst: "DA",
      akcija: i + 1,
      odgovor: 74224 + j * 2,
    },
    ne: {
      ima: true,
      tekst: "NE",
      akcija: i === 28 ? i + 2 : i + 1,
      odgovor: 74225 + j * 2,
    },
    nazad: { ima: true, tip: "stranica", broj: i - 1 },
  });
}

magnetnaPitanja.sort((a, b) => (a.id > b.id ? 1 : -1));
