import React, { useEffect, useState } from "react";
import styles from "./Timer.module.css";
import Button from "../UI/Button/Button";
import toast from "react-hot-toast";

const Timer = ({
  showBackdrop,
  setShowBackdrop,
  setTrenutnaStranicaApp,
  setKorisnik,
  setUser,
  setShowCountdownBackdrop,
  showCountdownBackdrop,
  izadjiIzPregleda,
}) => {
  const [timer, setTimer] = useState(30);

  useEffect(() => {
    let inactivityTimeout;

    const showBackdropAfterInactivity = () => {
      setShowBackdrop(true);
      setTimer(30);

      inactivityTimeout = setTimeout(() => {
        setShowBackdrop(false);
        setTimer(0);
      }, 30000);
    };

    inactivityTimeout = setTimeout(showBackdropAfterInactivity, 30000);

    const handleUserInteraction = () => {
      clearTimeout(inactivityTimeout);
      inactivityTimeout = setTimeout(showBackdropAfterInactivity, 30000);

      if (showCountdownBackdrop) {
        setTimer(30);
        setShowCountdownBackdrop(true);
      } else {
        setTimeout(() => {
          setShowBackdrop(false);
        }, 3000);
      }
    };

    window.addEventListener("touchstart", handleUserInteraction);

    return () => {
      clearTimeout(inactivityTimeout);
      window.removeEventListener("touchstart", handleUserInteraction);
    };
  }, [showCountdownBackdrop]);

  useEffect(() => {
    let interval;

    if (showBackdrop && timer > 0) {
      interval = setInterval(() => {
        setTimer((prevCountdown) => prevCountdown - 1);
      }, 1000);
    }

    if (timer === 0) {
      izadjiIzPregleda();
    }

    return () => {
      clearInterval(interval);
    };
  }, [showBackdrop, timer]);

  // console.log(timer);

  return (
    <div className={styles.mainDiv}>
      {showBackdrop && (
        <div className={styles.backdrop}>
          <div className={styles.poruka}>
            <p>Automatsko vraćanje na početak za {timer} sekundi</p>
            <h1>Bili ste neaktivni, nastavite unos?</h1>
          </div>
          <div className={styles.buttons2}>
            <Button
              back
              onClick={() => {
                setShowBackdrop(false);
                setTrenutnaStranicaApp(0);
                setTimeout(() => {
                  setKorisnik(null);
                  toast.success("Uspješno ste se odjavili!", {
                    duration: 3000,
                  });
                  setUser("");
                }, 1000);
              }}
            >
              Ne
            </Button>
            <Button
              next
              onClick={() => {
                setShowBackdrop(false);
                setShowCountdownBackdrop(true);
                setTimer(30);
              }}
            >
              Da
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Timer;
