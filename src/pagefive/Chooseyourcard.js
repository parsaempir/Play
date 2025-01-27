import React, { useState } from "react";
import "./Chooseyourcard.css";
import Plant2 from "./logo gia.png";
import backlogo from "../Pictures/Group 12.png";
import close from "../Pictures/Vector.svg";
import Back from "../Pictures/Group.svg";
import eye from "../Pictures/Logo.svg";
import { Link } from "react-router-dom";
function Chooseyourcard() {
  const [showModal, setShowModal] = useState(false);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isScrollingMinutes, setIsScrollingMinutes] = useState(false);
  const [isScrollingSeconds, setIsScrollingSeconds] = useState(false);

  if (showModal) {
    document.body.style.overflow = "hidden";
  }

  const handleWheelMinutes = (event) => {
    if (!isScrollingMinutes) {
      setIsScrollingMinutes(true);
      if (event.deltaY < 0) {
        setMinutes((prev) => (prev + 1 > 10 ? 0 : prev + 1));
      } else {
        setMinutes((prev) => (prev - 1 < 0 ? 10 : prev - 1));
      }
      setTimeout(() => setIsScrollingMinutes(false), 300); 
    }
  };

  const handleWheelSeconds = (event) => {
    if (!isScrollingSeconds) {
      setIsScrollingSeconds(true);
      if (event.deltaY < 0) {
        setSeconds((prev) => (prev + 1 > 59 ? 0 : prev + 1));
      } else {
        setSeconds((prev) => (prev - 1 < 0 ? 59 : prev - 1));
      }
      setTimeout(() => setIsScrollingSeconds(false), 1); 
    }
  };

  const handleTouchMoveMinutes = (event) => {
    if (!isScrollingMinutes) {
      setIsScrollingMinutes(true);
      const touch = event.touches[0];
      if (touch.clientY < window.innerHeight / 2) {
        setMinutes((prev) => (prev + 1 > 10 ? 0 : prev + 1));
      } else {
        setMinutes((prev) => (prev - 1 < 0 ? 10 : prev - 1));
      }
      setTimeout(() => setIsScrollingMinutes(false), 300); 
    }
  };

  const handleTouchMoveSeconds = (event) => {
    if (!isScrollingSeconds) {
      setIsScrollingSeconds(true);
      const touch = event.touches[0];
      if (touch.clientY < window.innerHeight / 2) {
        setSeconds((prev) => (prev + 1 > 59 ? 0 : prev + 1));
      } else {
        setSeconds((prev) => (prev - 1 < 0 ? 59 : prev - 1));
      }
      setTimeout(() => setIsScrollingSeconds(false), 1); 
    }
  };

  const handleStart = () => {
    setShowModal(false);
  };

  const formatTime = (time) => time.toString().padStart(2, "0");

  return (
    <>
      <div className="head">
        <div className="container">
          <span className="head-bc">
          <Link to='/StatusPage'>  <img src={Back} className="back" /></Link>
          <Link to='/Home'> <img src={close} className="close" /></Link>
          </span>
          <img src={eye} className="eye" />
          <h2 className="titr">نوبت</h2>
          <img src={backlogo} className="back-logo" />
          <div className="but-div">
            <button className="but-top-one" onClick={() => setShowModal(true)}>
              شروع
            </button>
          </div>
          <img src={Plant2} className="Plant-png" />
        </div>
      </div>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="head-mod">
              <div className="text-heder">زمان بازی</div>
              <div className="time-selector">
                <div
                  className="time-box"
                  onWheel={handleWheelMinutes}
                  onTouchMove={handleTouchMoveMinutes}
                >
                  <div className="time-display">
                    <div className="time-number less">
                      {formatTime(minutes === 0 ? 10 : minutes - 1)}
                    </div>
                    <div className="time-number active">{formatTime(minutes)}</div>
                    <div className="time-number less">
                      {formatTime(minutes === 10 ? 0 : minutes + 1)}
                    </div>
                  </div>
                </div>
                <span className="colon">:</span>
                <div
                  className="time-box"
                  onWheel={handleWheelSeconds}
                  onTouchMove={handleTouchMoveSeconds}
                >
                  <div className="time-display">
                    <div className="time-number less">
                      {formatTime(seconds === 0 ? 59 : seconds - 1)}
                    </div>
                    <div className="time-number active">{formatTime(seconds)}</div>
                    <div className="time-number less">
                      {formatTime(seconds === 59 ? 0 : seconds + 1)}
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-buttons">
               <Link to='/DiscussPage'><button className="start-btn" onClick={handleStart}>
                  شروع
                </button></Link> 
                <button className="back-btn" onClick={() => setShowModal(false)}>
                  بازگشت
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Chooseyourcard;
