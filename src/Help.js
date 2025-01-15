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
<div className='hr'></div>   

<button className='but'>
!شروع یازی

</button>
<div className='head-con'>
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
                <p className="text">{getDescription(selectedWord)}</p>
                
                {/* متن اضافی زیر هر بخش */}
                {selectedWord === "بازی" && (

                  <p className="text">
                                                     <span className='span-h'><h1 className="h-text"> قوانین بازی</h1></span>

                    <span className='span-yel'>:هدف بازی</span><br/>
<span className='line'>هر بازیکن باید تلاش کند تا نقش جاسوس را در میان سایر<br/>بازیکنان شناسایی کند.درحالی که جاسوس باید هویت خود<br/>را پنهان نگه دارد و بازکنان دیگر را گمراه کند</span>

 <br/><span className='span-yel' id='yel'>:شروع بازی</span><br/>
 <span className='line-b'>بازی با انتخاب کارت ها آغاز میشود.هر بازیکن یک کارت<br/>دریاقت می کند که نقش اورا مشخص می کند.یکی از بازیکنان<br/>جاسوس است و یقسه در تلاش هستند تااورا پیدا کنند</span>
            </p>

                )}
                {selectedWord === "نقش‌ها" && (
                  <p className="text">     
                  
                  <span className='span-h'><h1 className="h-text"> نقش های بازی</h1></span>

                                  <span className='span-yel' >:جاسوس</span><br/>
<span  className='line'>جاسوس باید تلاش کند تا هویت خود را پنهان نگه<br/>دارد و بازکنان دیگررا گمراه کند.هدف او این<br/>است که تا پایان بازی شناسایی نشود.</span>
<br/><span className='span-yel' id='yel'>:شهروند</span><br/>
<span className='line-b'>شهروندان باید با همکاری و تبادل نظر با یکدیگر<br/>تلاش کنند تا جاسوس را شناسایی کنند و مانع <br/>موفقیت او شوند</span>
                  </p>
                )}
                {selectedWord === "جاسوس" && (
                  <p className="text">          
                                    <span className='span-h'><h1 className="h-text">قوانین جاسوس</h1></span>

<span>جاسوس باید با پنهان کاری و پاسح های هوشمندانه هویت<br/>خودرا مخفی نگه دارد,بازسمنان دیگر را گمراه کند و تا پایان<br/>بازی شناسایی نشود تا بتواند برنده شود.</span>
                  </p>
                )}
              </div>
            )}
          </div>
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
