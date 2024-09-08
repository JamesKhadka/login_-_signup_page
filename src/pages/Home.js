import React, { useState, useEffect } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../fire';

// Countdown Timer Component
const CountdownTimer = ({ initialMinutes = 1, initialSeconds = 0 }) => {
  const [minutes, setMinutes] = useState(initialMinutes);
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    let countdownInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else {
        if (minutes === 0) {
          clearInterval(countdownInterval);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, [minutes, seconds]);

  return (
    <div className="text-9xl font-bold text-blue-500">
      {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
    </div>
  );
};

const Home = ({ user, setAuthState, setUser }) => {
  const onClickHandler = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
        setAuthState('login');
      });
  };

  return (
    <div className="flex justify-center items-center bg-pink-400 h-screen relative">
      {/* Button on the top right */}
      <div className="absolute top-5 right-5">
        <button
          onClick={onClickHandler}
          className="active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out w-35 px-3 py-4 bg-cyan-500 text-white text-lg rounded-xl font-bold"
        >
          Sign Out
        </button>
      </div>

      {/* Countdown timer centered and styled */}
      <div className="flex flex-col justify-center items-center">
        <CountdownTimer initialMinutes={10} initialSeconds={0} />
      </div>

    </div>
  );
};

export default Home;
