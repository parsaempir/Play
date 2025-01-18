import React, { useState } from "react";
import "./Chooseyourcard.css";
import giah from "./logo gia.png";
import backlogo from "./Group 12.png";
import Zarb from "./Vector.svg";
import Back from "./Group.svg";
import eye from "./Logo.svg";

function Chooseyourcard() {
  const [showModal, setShowModal] = useState(false);
  const [minutes, setMinutes] = useState(5);
  const [seconds, setSeconds] = useState(0);

  const handleWheelMinutes = (event) => {
    if (event.deltaY < 0) {
      setMinutes((prev) => (prev + 1 > 10 ? 10 : prev + 1)); // محدود کردن دقیقه‌ها به ۱۰
    } else {
      setMinutes((prev) => (prev - 1 < 0 ? 0 : prev - 1));
    }
  };

  const handleWheelSeconds = (event) => {
    if (event.deltaY < 0) {
      setSeconds((prev) => (prev + 1 > 59 ? 0 : prev + 1));
    } else {
      setSeconds((prev) => (prev - 1 < 0 ? 59 : prev - 1));
    }
  };

  const handleTouchMoveMinutes = (event) => {
    const touch = event.touches[0];
    if (touch.clientY < window.innerHeight / 2) {
      setMinutes((prev) => (prev + 1 > 10 ? 10 : prev + 1));
    } else {
      setMinutes((prev) => (prev - 1 < 0 ? 0 : prev - 1));
    }
  };

  const handleTouchMoveSeconds = (event) => {
    const touch = event.touches[0];
    if (touch.clientY < window.innerHeight / 2) {
      setSeconds((prev) => (prev + 1 > 59 ? 0 : prev + 1));
    } else {
      setSeconds((prev) => (prev - 1 < 0 ? 59 : prev - 1));
    }
  };

  const handleStart = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="head">
        <div className="container">
          <span className="head-bz">
            <img src={Back} className="back"  />
            <img src={Zarb} className="zarb" />
          </span>
          <img src={eye} className="eye" alt="eye" />
          <h2 className="titr">نوبت</h2>
          <img src={backlogo} className="back-logo" />
          <div className="but-div">
            <button className="but-top" onClick={() => setShowModal(true)}>
              شروع
            </button>
          </div>
          <img src={giah} className="giah-png"  />
        </div>
      </div>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>زمان بازی</h2>
            <div className="time-selector">
              <div
                className="time-box"
                onWheel={handleWheelMinutes}
                onTouchMove={handleTouchMoveMinutes}
              >
                <div className="time-display">
                  <div className="time-number less">
                    {minutes === 0 ? 10 : minutes - 1}
                  </div>
                  <div className="time-number active">{minutes}</div>
                  <div className="time-number less">
                    {minutes === 10 ? 10 : minutes + 1}
                  </div>
                </div>
                <span>دقیقه</span>
              </div>
              <span className="colon">:</span>
              <div
                className="time-box"
                onWheel={handleWheelSeconds}
                onTouchMove={handleTouchMoveSeconds}
              >
                <div className="time-display">
                  <div className="time-number less">
                    {seconds === 0 ? 59 : seconds - 1}
                  </div>
                  <div className="time-number active">{seconds.toString().padStart(2, "0")}</div>
                  <div className="time-number less">
                    {seconds === 59 ? 0 : seconds + 1}
                  </div>
                </div>
                <span>ثانیه</span>
              </div>
            </div>
            <div className="modal-buttons">
              <button className="start-btn" onClick={handleStart}>
                شروع
              </button>
              <button className="back-btn" onClick={() => setShowModal(false)}>
                بازگشت
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Chooseyourcard;
