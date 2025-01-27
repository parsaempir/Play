import React, { useState, useEffect } from 'react';
import './DiscussPage.css';
import Plant2 from './pagefive/logo gia.png';
import close from "./Pictures/Vector.svg";
import { Link } from 'react-router-dom';
import eye from "./Pictures/Logo.svg";

const Countdown = () => {
  const [seconds, setSeconds] = useState(60); // مقدار اولیه زمان
  const [isPaused, setIsPaused] = useState(false); 

  const radius = 100; // شعاع دایره
  const circumference = 2 * Math.PI * radius; // محیط دایره
  const progress = (seconds / 60) * circumference; // محاسبه مقدار پیشرفت

  useEffect(() => {
    if (seconds > 0 && !isPaused) {
      const timer = setInterval(() => {
        setSeconds((prev) => prev - 1);
      }, 1000);

      return () => clearInterval(timer); 
    }
  }, [seconds, isPaused]);

  const resetTimer = () => {
    setSeconds(60); 
    setIsPaused(false);
  };

  return (<>
  <div className='head'>
  <div className="container">
    <span className='head-close'>
  <Link to='/Home'> <img src={close} className="close" /></Link>
  </span>
  <img src={eye} className="eye" />
  <h2 className='h-text-head'>!بازی شروع شد</h2>

    <div className="game-container">
      <div className="timer-circle">
        <svg width="213" height="213">
          <circle
            cx="106.5"
            cy="106.5"
            r={radius}
            fill="none"
            stroke="#444"
            strokeWidth="10"
          />
          <circle
            cx="106.5"
            cy="106.5"
            r={radius}
            fill="none"
            stroke="gold"
            strokeWidth="10"
            strokeDasharray={circumference}
            strokeDashoffset={circumference - progress}
            strokeLinecap="round"
          />
        </svg>
        <span className="timer-value">{seconds}</span>
      </div>
      <div className="buttons">
   <Link to='/StatusPage'>  <button className="btn reset" >
          تغییر
        </button></Link> 
        <button className="btn pause" onClick={() => setIsPaused(!isPaused)}>
          {isPaused ? 'ادامه' : 'توقف'}
        </button>
       
      </div>
    
  
    </div>
    
    <div className="game-over">
          <button className="btn game-over-btn">!پایان بازی</button>
        </div>
    <img src={Plant2} className="Plant-png" />

    </div>
    </div>
    </>
  );
};

export default Countdown;
