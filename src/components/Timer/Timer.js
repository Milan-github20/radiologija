import React, { useEffect, useState } from "react";
import styles from "./Timer.module.css";
import Button from "../UI/Button/Button";

const Timer = ({
  showBackdrop,
  setShowBackdrop,
  setShowCountdownBackdrop,
  showCountdownBackdrop,
  odjava,
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
  }, [showCountdownBackdrop, setShowCountdownBackdrop, setShowBackdrop]);

  useEffect(() => {
    let interval;

    if (showBackdrop && timer > 0) {
      interval = setInterval(() => {
        setTimer((prevCountdown) => prevCountdown - 1);
      }, 1000);
    }

    if (timer === 0) {
      setShowCountdownBackdrop(false);
      setShowBackdrop(false);
      odjava();
    }

    return () => {
      clearInterval(interval);
    };
  }, [showBackdrop, timer, odjava, setShowBackdrop, setShowCountdownBackdrop]);

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
                odjava();
              }}
              text={"NE"}
            />
            <Button
              next
              onClick={() => {
                setShowBackdrop(false);
                setShowCountdownBackdrop(true);
                setTimer(30);
              }}
              text={"DA"}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Timer;
