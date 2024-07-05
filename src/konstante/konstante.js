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

export const ktPocetnaPolja = {
  id_forme: 816,
  modul: [
    {
      id: 74251,
      vrijednost: "",
      odgovor: "broj telefona",
    },
    {
      id: 74307,
      vrijednost: "",
      odgovor: "trudna",
    },
    {
      id: 74308,
      vrijednost: "",
      odgovor: "nije trudna",
    },
    {
      id: 74257,
      vrijednost: "",
      odgovor: "kontrast",
    },
    {
      id: 74258,
      vrijednost: "",
      odgovor: "nema kontrast",
    },
    {
      id: 74259,
      vrijednost: "",
      odgovor: "alergija na kontrast",
    },
    {
      id: 74260,
      vrijednost: "",
      odgovor: "nema alergije na kontrast",
    },
    {
      id: 74261,
      vrijednost: "",
      odgovor: "mucnina",
    },
    {
      id: 74262,
      vrijednost: "",
      odgovor: "nije mucnina",
    },
    {
      id: 74263,
      vrijednost: "",
      odgovor: "povracanje",
    },
    {
      id: 74264,
      vrijednost: "",
      odgovor: "nije povracanje",
    },
    {
      id: 74265,
      vrijednost: "",
    },
    {
      id: 74266,
      vrijednost: "",
    },
    {
      id: 74267,
      vrijednost: "",
    },
    {
      id: 74268,
      vrijednost: "",
    },
    {
      id: 74269,
      vrijednost: "",
    },
    {
      id: 74270,
      vrijednost: "",
    },
    {
      id: 74271,
      vrijednost: "",
    },
    {
      id: 74272,
      vrijednost: "",
    },
    {
      id: 74273,
      vrijednost: "",
    },
    {
      id: 74274,
      vrijednost: "",
    },
    {
      id: 74275,
      vrijednost: "",
    },
    {
      id: 74276,
      vrijednost: "",
    },
    {
      id: 74277,
      vrijednost: "",
    },
    {
      id: 74278,
      vrijednost: "",
    },
    {
      id: 74279,
      vrijednost: "",
    },
    {
      id: 74280,
      vrijednost: "",
    },
    {
      id: 74281,
      vrijednost: "",
    },
    {
      id: 74282,
      vrijednost: "",
    },
    {
      id: 74283,
      vrijednost: "",
    },
    {
      id: 74284,
      vrijednost: "",
    },
    {
      id: 74285,
      vrijednost: "",
    },
    {
      id: 74286,
      vrijednost: "",
    },
    {
      id: 74287,
      vrijednost: "",
    },
    {
      id: 74246,
      vrijednost: "",
    },
    {
      id: 74247,
      vrijednost: "",
    },
    {
      id: 74780,
      vrijednost: "",
    },
    {
      id: 74781,
      vrijednost: "",
    },
  ],
};

export const ktPitanja = [
  {
    id: 0,
    uslov: { pol: 0, akoNije: 2 },
    pitanje: "Da li ste trudni?",
    da: { ima: true, tekst: "DA", akcija: 1, odgovor: 74307 },
    ne: { ima: true, tekst: "NE", akcija: 2, odgovor: 74308 },
    nazad: { ima: true, tip: "pol", broj: 1 },
  },
  {
    id: 1,
    uslov: { pol: 0, akoNije: 2 },
    pitanje: "Ovo je stranica za ako je trudna nesto cemo tu napraviti",
    da: { ima: true, tekst: "DA", akcija: 1, odgovor: 74173 },
    ne: { ima: true, tekst: "NE", akcija: 2, odgovor: 74174 },
    nazad: { ima: true, tip: "pol", broj: 1 },
  },
  {
    id: 2,
    uslov: {},
    pitanje:
      "Jeste li već imali neki pregled koji je zahtijevao upotrebu kontrastnih sredstava?",
    da: { ima: true, tekst: "DA", akcija: 3, odgovor: 74257 },
    ne: { ima: true, tekst: "NE", akcija: 10, odgovor: 74258 },
    nazad: {
      ima: true,
      tip: "pol",
      akoMusko: {
        tip: "korak",
        broj: 1,
      },
      akoZensko: {
        tip: "stranica",
        broj: 0,
      },
    },
  },
  {
    id: 3,
    uslov: {},
    pitanje: (
      <>
        Da li ste imali neki od slijedećih problema prilikom prethodnog
        pregleda:
        <br /> <br />
        Alergijsku reakciju na jodno kontrastno sredstvo?
      </>
    ),
    da: { ima: true, tekst: "DA", akcija: 4, odgovor: 74259 },
    ne: { ima: true, tekst: "NE", akcija: 4, odgovor: 74260 },
    nazad: { ima: true, tip: "stranica", broj: 2 },
  },
  {
    id: 15,
    uslov: {},
    pitanje: "Da li uzimate metformin?",
    da: { ima: true, tekst: "DA", akcija: 16, odgovor: 74283 },
    ne: { ima: true, tekst: "NE", akcija: 17, odgovor: 74284 },
    nazad: { ima: true, tip: "stranica", broj: 14 },
  },
  {
    id: 16,
    uslov: {},
    pitanje: (
      <>
        Pošto uzimate metformin, nakon primanja intravenskog kontrasta morate
        prestati uzimati metformin u periodu od 2 dana nakon radiološkog
        pregleda. <br /> <br /> Počnite ponovo uzimati metformin
        {dayjs().add(2, "d").format("DD.MM.YYYY")}
      </>
    ),
    da: { ima: true, tekst: "NASTAVI", akcija: 17 },
    ne: { ima: false, tekst: "NE", akcija: undefined },
    nazad: { ima: true, tip: "stranica", broj: 15 },
  },
  {
    id: 17,
    uslov: {},
    pitanje: <>Da li ste imali operativne zahvate?</>,
    da: { ima: true, tekst: "DA", akcija: 18, odgovor: 74285 },
    ne: { ima: true, tekst: "NE", akcija: 19, odgovor: 74286 },
    nazad: { ima: true, tip: "stranica", broj: 16 },
  },
  {
    id: 18,
    uslov: {},
    pitanje: (
      <>
        Molimo Vas da kad budete prozvani obavijestite osoblje na šalteru koje
        ste operativne zahvate imali.
      </>
    ),
    da: { ima: true, tekst: "NASTAVI", akcija: 19 },
    ne: { ima: false, tekst: "NE", akcija: undefined },
    nazad: { ima: true, tip: "stranica", broj: 17 },
  },
  {
    id: 19,
    uslov: {},
    pitanje: <>Da li imate svjež nalaz serumskog kreatinina?</>,
    da: { ima: true, tekst: "DA", akcija: 20, odgovor: 74780 },
    ne: { ima: true, tekst: "NE", akcija: 22, odgovor: 74781 },
    nazad: { ima: true, tip: "stranica", broj: 18 },
  },
  {
    id: 20,
    ne: {},
    da: { ima: true, tekst: "NASTAVI", akcija: 21 },
    nazad: { broj: 19 },
  },
  {
    id: 21,
    uslov: {},
    da: { ima: true, tekst: "NASTAVI", akcija: 22, odgovor: 74287 },
    ne: { ima: false, tekst: "NE", akcija: undefined },
    nazad: { ima: true, tip: "stranica", broj: 20 },
    posebniNaslov: true,
  },
  {
    id: 22,
    ne: {},
    da: { ima: true, akcija: 23, odgovor: 74251 },
    nazad: { ima: true, tip: "stranica", broj: 21 },
  },
  {
    id: 23,
    ne: {},
    da: { ima: true, tekst: "NASTAVI", akcija: 24 },
    nazad: { ima: true, tip: "stranica", broj: 22 },
  },
  {
    id: 24,
    uslov: {},
    da: { ima: true, tekst: "DA", akcija: 25 },
    ne: { ima: true, tekst: "NE" },
    nazad: { ima: false },
    posebniNaslov: true,
  },
];

const kontrastPitanjaKT = [
  "Mučnina?",
  "Povraćanje?",
  "Osjećaj davljenja/gušenje?",
  "Osip?",
  "Grčevi?",
  "Nesvjestica?",
];

for (let i = 4, j = 0; i < 10; i++, j++) {
  ktPitanja.push({
    id: i,
    uslov: {},
    pitanje: (
      <>
        Da li ste nakon primanja kontrasta imali neku od sljedećih tegoba:
        <br /> <br />
        {kontrastPitanjaKT[j]}
      </>
    ),
    da: { ima: true, tekst: "DA", akcija: i + 1, odgovor: 74261 + j * 2 },
    ne: { ima: true, tekst: "NE", akcija: i + 1, odgovor: 74262 + j * 2 },
    nazad: { ima: true, tip: "stranica", broj: i - 1 },
  });
}

const bolestiPitanjaKT = [
  "Astma?",
  "Alergija koju morate liječiti?",
  "Bolesti bubrega ili nadbubrežnih žlijezda?",
  "Bolesti štitne žlijezde?",
  "Šećerna bolest?",
];

for (let i = 10, j = 0; i < 15; i++, j++) {
  ktPitanja.push({
    id: i,
    uslov: {},
    pitanje: (
      <>
        Da li bolujete od neke od slijedećih bolesti:
        <br /> <br />
        {bolestiPitanjaKT[j]}
      </>
    ),
    da: { ima: true, tekst: "DA", akcija: i + 1, odgovor: 74273 + j * 2 },
    ne: { ima: true, tekst: "NE", akcija: i + 1, odgovor: 74274 + j * 2 },
    nazad: { ima: true, tip: "stranica", broj: i - 1 },
  });
}

ktPitanja.sort((a, b) => (a.id > b.id ? 1 : -1));

export const mrPocetnaPolja = {
  id_forme: 815,
  modul: [
    {
      id: 74163,
      vrijednost: "",
      odgovor: "Broj telefona",
    },
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
      odgovor: "Gusenje",
    },
    {
      id: 74205,
      vrijednost: "",
      odgovor: "Nije gusenje",
    },
    {
      id: 74206,
      vrijednost: "",
      odgovor: "Osip",
    },
    {
      id: 74207,
      vrijednost: "",
      odgovor: "Nije osip",
    },
    {
      id: 74208,
      vrijednost: "",
      odgovor: "Grcevi",
    },
    {
      id: 74209,
      vrijednost: "",
      odgovor: "Nisu grcevi",
    },
    {
      id: 74210,
      vrijednost: "",
      odgovor: "Nesvjestica",
    },
    {
      id: 74211,
      vrijednost: "",
      odgovor: "Nije nesvjestica",
    },
    {
      id: 74212,
      vrijednost: "",
      odgovor: "Astma",
    },
    {
      id: 74213,
      vrijednost: "",
      odgovor: "Nije astma",
    },
    {
      id: 74214,
      vrijednost: "",
      odgovor: "Alergija",
    },
    {
      id: 74215,
      vrijednost: "",
      odgovor: "Nije alergija",
    },
    {
      id: 74216,
      vrijednost: "",
      odgovor: "Bubrezi",
    },
    {
      id: 74217,
      vrijednost: "",
      odgovor: "Nisu bubrezi",
    },
    {
      id: 74218,
      vrijednost: "",
      odgovor: "Stitna",
    },
    {
      id: 74219,
      vrijednost: "",
      odgovor: "Nije stitna",
    },
    {
      id: 74220,
      vrijednost: "",
      odgovor: "Secer",
    },
    {
      id: 74221,
      vrijednost: "",
      odgovor: "Nije secer",
    },
    {
      id: 74222,
      vrijednost: "",
      odgovor: "Operacije",
    },
    {
      id: 74223,
      vrijednost: "",
      odgovor: "Nema operacije",
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
    {
      id: 75509,
      vrijednost: "",
      odgovor: "ima kreatinin",
    },
    {
      id: 75510,
      vrijednost: "",
      odgovor: "nema kreatinin",
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
    nazad: { ima: true, tip: "pol", broj: 1 },
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
    nazad: { ima: true, tip: "stranica", broj: 5 },
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
    uslov: {},
    pitanje: <>Da li imate svjež nalaz serumskog kreatinina?</>,
    da: { ima: true, tekst: "DA", akcija: 22, odgovor: 75509 },
    ne: { ima: true, tekst: "NE", akcija: 24, odgovor: 75510 },
    nazad: { ima: true, tip: "stranica", broj: 19 },
  },
  {
    id: 22,
    ne: {},
    da: { ima: true, tekst: "NASTAVI", akcija: 23 },
    nazad: { broj: 21 },
  },
  {
    id: 23,
    uslov: {},
    da: { ima: true, tekst: "NASTAVI", akcija: 24, odgovor: 74169 },
    ne: { ima: false, tekst: "NE", akcija: undefined },
    nazad: { ima: true, tip: "stranica", broj: 22 },
    posebniNaslov: true,
  },
  {
    id: 30,
    uslov: {},
    pitanje: (
      <>
        Molimo Vas da kada budete prozvani obavijestite osoblje na šalteru da
        imate ugrađen materijal.
      </>
    ),
    da: { ima: true, tekst: "NASTAVI", akcija: 31 },
    ne: { ima: false, tekst: "NE", akcija: undefined },
    nazad: { ima: true, tip: "stranica", broj: 29 },
  },
  {
    id: 31,
    uslov: {},
    pitanje: <>Da li ste imali povredu oka metalnim predmetom?</>,
    da: { ima: true, tekst: "DA", akcija: 32, odgovor: 74236 },
    ne: { ima: true, tekst: "NE", akcija: 32, odgovor: 74237 },
    nazad: { ima: true, tip: "stranica", broj: 29 },
  },
  {
    id: 32,
    uslov: {},
    pitanje: (
      <>Da li u svom tijelu imate metalna strana tijela (metak , geler…)?</>
    ),
    da: { ima: true, tekst: "DA", akcija: 33, odgovor: 74238 },
    ne: { ima: true, tekst: "NE", akcija: 33, odgovor: 74239 },
    nazad: { ima: true, tip: "stranica", broj: 31 },
  },
  {
    id: 33,
    uslov: {},
    pitanje: <>Da li ste tetovirani?</>,
    da: { ima: true, tekst: "DA", akcija: 34, odgovor: 74240 },
    ne: { ima: true, tekst: "NE", akcija: 34, odgovor: 74241 },
    nazad: { ima: true, tip: "stranica", broj: 32 },
  },
  {
    id: 34,
    uslov: {},
    da: { ima: true, akcija: 35, odgovor: 74163 },
    ne: { ima: false },
    nazad: { ima: true, tip: "stranica", broj: 33 },
  },
  {
    id: 35,
    ne: {},
    da: { ima: true, tekst: "NASTAVI", akcija: 36 },
    nazad: { ima: true, tip: "stranica", broj: 34 },
  },
  {
    id: 36,
    uslov: {},
    da: { ima: true, tekst: "DA", akcija: 37 },
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

for (let i = 24, j = 0; i < 30; i++, j++) {
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
      akcija: i === 29 ? i + 2 : i + 1,
      odgovor: 74225 + j * 2,
    },
    nazad: { ima: true, tip: "stranica", broj: i - 1 },
  });
}

magnetnaPitanja.sort((a, b) => (a.id > b.id ? 1 : -1));
