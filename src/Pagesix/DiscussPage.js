import React, { useState, useEffect } from 'react';
import './DiscussPage.css';
import Plant2 from '../pagefive/logo gia.png';
import close from "../Pictures/Vector.svg";
import { Link, useLocation } from 'react-router-dom';
import eye from "../Pictures/Logo.svg";
import closemodal from '../Pictures/Group 6.svg';
import imgjas from '../Pictures/jasoskart.svg';
import imgshah from '../Pictures/jasosokart2.svg';

const Countdown = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const minutes = parseInt(params.get("minutes")) || 0;
  const secondsParam = parseInt(params.get("seconds")) || 0;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [seconds, setSeconds] = useState(minutes * 60 + secondsParam);
  const [isPaused, setIsPaused] = useState(false);
  useEffect(() => {
    if (seconds > 0 && !isPaused) {
      const timer = setInterval(() => {
        setSeconds((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
    if (seconds === 0) {
      setIsModalOpen(true);
    }
  }, [seconds, isPaused]);

  const progress = (seconds / (minutes * 60 + secondsParam)) * 100;

  function Modal({ show, onClose, children }) {
    if (!show) return null;
  
    return (
      <div className="modal-overlay">
        <div className="modal">
          <button className="close-btn" onClick={onClose}>✖</button>
          <div className="modal-content">
            {children}
          </div>
        </div>
      </div>
    );
  }
  return (
    <>
{isModalOpen && (
  <div className="modal-overlay">
<div className='modal-head-one'>
<span className="closemodal-five" onClick={() => setIsModalOpen(false)}><img src={closemodal} alt="Close Modal" /></span>
<div className="head-mod-five">
  <h3 style={{
    color: "white",
    fontFamily: 'CinemaFont',
    fontSize: '24px',
    margin: '5px 0 10px 0'
  }}>برنده بازی</h3>
  <span style={{
    display: 'flex',
    gap: '40px',
    marginLeft: '10px',
     
  }}>
    <Link to="/discussPagetwo" state={{ selectedImg: imgjas }}><span style={{
      position: 'relative'
    }}>  <img src={imgjas} alt='kart'/><h3 style={{
      position: 'absolute',
      transform: 'translate(90%, -50%)',
      bottom: '25px',
      fontFamily: 'CinemaFont',
      color: 'white',
      fontSize: '18px',
    }}>شهروند</h3> </span></Link>

 <Link to="/discussPagetwo" state={{ selectedImg: imgshah}}> <span style={{
      position: 'relative'
    }}><img  src={imgshah} alt='karyja'/><h3 style={{
      position: 'absolute',
      transform: 'translate(65%, -50%)',
      bottom: '25px',
      fontFamily: 'CinemaFont',
      color: 'white',
      fontSize: '18px',
    }}>جاسوس</h3></span></Link>

  </span>


  </div>

  </div>
  </div>
)}
    
      <div className='head-six'>
        <div className="container-six">
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
           <button onClick={() => setIsModalOpen(true)}  className="btn game-over-btn">!پایان بازی</button>

          </div>
          
        </div>
      </div>
    </>
  );
};

export default Countdown;
