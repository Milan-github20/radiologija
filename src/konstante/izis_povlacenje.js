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