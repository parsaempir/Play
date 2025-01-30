import React, { useState, useEffect } from 'react';
import './DiscussPage.css';
import Plant2 from '../pagefive/logo gia.png';
import close from "../Pictures/Vector.svg";
import { Link, useLocation } from 'react-router-dom';
import eye from "../Pictures/Logo.svg";

const Countdown = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const minutes = parseInt(params.get("minutes")) || 0;
  const secondsParam = parseInt(params.get("seconds")) || 0;
  
  const [seconds, setSeconds] = useState(minutes * 60 + secondsParam);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (seconds > 0 && !isPaused) {
      const timer = setInterval(() => {
        setSeconds((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [seconds, isPaused]);

  const progress = (seconds / (minutes * 60 + secondsParam)) * 100;

  return (
    <>
      <div className='head'>
        <div className="container">
          <span className='head-close'>
            <Link to='/Home'><img src={close} className="close" /></Link>
          </span>
          <img src={eye} className="eye" />
          <h2 className='h-text-head'>!بازی شروع شد</h2>

          <div className="game-container">
            <div className="timer-circle">
              <svg width="213" height="213">
                <circle cx="106.5" cy="106.5" r="100" fill="none" stroke="#444" strokeWidth="10" />
                <circle cx="106.5" cy="106.5" r="100" fill="none" stroke="gold" strokeWidth="10" strokeDasharray="628" strokeDashoffset={628 - (progress * 6.28)} strokeLinecap="round" />
              </svg>
              <span className="timer-value">{Math.floor(seconds / 60)}:{(seconds % 60).toString().padStart(2, '0')}</span>
            </div>
            <div className="buttons">
              <Link to='/StatusPage'><button className="btn reset">تغییر</button></Link>
              <button className="btn pause" onClick={() => setIsPaused(!isPaused)}>
                {isPaused ? 'ادامه' : 'توقف'}
              </button>
            </div>
          </div>

          <div className="game-over">
            <Link to='/DiscussPagetwo'><button className="btn game-over-btn">!پایان بازی</button></Link>
          </div>
          <img src={Plant2} className="Plant-png" />
        </div>
      </div>
    </>
  );
};

export default Countdown;
