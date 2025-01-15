import './Help.css';
import Zarb from './Vector.svg';
import Back from './Group.svg';
import giah from './logo gia.png';
import React, { useState } from 'react';

function Help() {
  const [selectedWord, setSelectedWord] = useState("بازی"); // کلمه انتخاب‌شده

  const handleClick = (word) => {
    setSelectedWord(word); // تنظیم کلمه انتخاب‌شده
  };

  return (
    <>
      <div className="head">
        <div className="container">
          <span className="head-bz">
            <img src={Back} className="back" />
            <img src={Zarb} className="zarb" />
          </span>
          <b className="bold">راهنمای بازی</b>
          
          <div className="button-group">
            <button
              onClick={() => handleClick("بازی")}
              className={`word-button ${selectedWord === "بازی" ? "active" : ""}`}
            >
              بازی
            </button>
            <button
              onClick={() => handleClick("نقش‌ها")}
              className={`word-button ${selectedWord === "نقش‌ها" ? "active" : ""}`}
            >
              نقش‌ها
            </button>
            <button
              onClick={() => handleClick("جاسوس")}
              className={`word-button ${selectedWord === "جاسوس" ? "active" : ""}`}
            >
              جاسوس
            </button>
          </div>

          <div className="description">
            {selectedWord && (
              <div className='po'>
               <span className='span-h'><h2 className="h-text"> قوانین بازی</h2></span>
                <p className="text">{getDescription(selectedWord)}</p>
                
                {/* متن اضافی زیر هر بخش */}
                {selectedWord === "بازی" && (
                  <p className="text">
                    <span className='span-yel'>:هدف بازی</span><br/>
 <span className='line-b'>هر بازیکن باید نلاش کند تا نقش جاسوس را در میان سایر<br/> بازیکنان شناسایی کند,در حالی که جاسوس باید هویت خود</span><br/> <span  className='line'>.را پنهان نگه دارد و بازیکنان دیکر را گمراه کند    </span>  
 <br/><span className='span-yel'>:شروع بازی</span><br/>
<span className='line-b'>بازی با انتخاب کارت ها آغاز میشود. هر بازیکن یک کارت <br/>دریافت می کند که نقش اورا مشخص کی کند.یکی از بازکنان</span><br/>
<span className='line'>جاسوس است و بقیه در تلاش هستند تااوررا پیدا کنند.</span>

            </p>

                )}
                {selectedWord === "نقش‌ها" && (
                  <p className="text">                    <span className='span-yel'>:هدف بازی</span><br/>

                    هر بازیکن باید نقش خود را به درستی ایفا کند تا تیم بتواند برنده شود.
                  </p>
                )}
                {selectedWord === "جاسوس" && (
                  <p className="text">                    <span className='span-yel'>:هدف بازی</span><br/>

                    جاسوس باید سعی کند تا هویت خود را مخفی نگه دارد و با دقت عمل کند.
                  </p>
                )}
              </div>
            )}
          </div>

          <img src={giah} className="giah-png" />
        </div>
      </div>
    </>
  );
}

const getDescription = (word) => {
  switch (word) {
    case "بازی":
      return "";
    case "نقش‌ها":
      return "";
    case "جاسوس":
      return "";
    default:
      return "";
  }
};

export default Help;
