import './Help.css';
import close from '../Pictures/Vector.svg';
import Back from '../Pictures/Group.svg';
import Plant from '../pagefive/logo gia.png';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

function Help() {
  const [selectedWord, setSelectedWord] = useState("بازی"); 
      const [contentOpacity, setContentOpacity] = useState(0); 
      useEffect(() => {
      
        const timer = setTimeout(() => {
            setContentOpacity(1);
        }, 100); 
        return () => clearTimeout(timer);
    }, []);
  const navigate = useNavigate();

  const handleClick = (word) => {
    setSelectedWord(word); 
  };
  const handleGoBack = () => {
    navigate('/Home', { state: { fromStatusPage: true } });
};

  return (
    <>
      <div className="head-three" >
        <div className="container-three">
          <span className="head-bc" style={{ opacity: contentOpacity }}>
           <img src={Back} className="back"onClick={handleGoBack} />
            <Link to='/Home'><img src={close} className="close-one" /></Link>

          </span>

          <b className="bold" style={{ opacity: contentOpacity }}>راهنمای بازی</b>


<div className='head-container' style={{ opacity: contentOpacity }}>
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
              <div >
                <p className="text">{getDescription(selectedWord)}</p>
                
                {/* متن اضافی زیر هر بخش */}
                {selectedWord === "بازی" && (
                  <p className="text">
                                                     <span className='span-one'><h1 className="text-one"> قوانین بازی</h1></span>

                    <span className='span-yellow'>هذف بازی:</span><br/>
<span className='line'>هر بازیکن باید تلاش کند تا نقش جاسوس را در میان سایر<br/>بازیکنان شناسایی کند.درحالی که جاسوس باید هویت خود<br/>را پنهان نگه دارد و بازکنان دیگر را گمراه کند</span>

 <br/><span className='span-yellow' id='yellow'>شروع بازی:</span><br/>
 <span className='line-span'>بازی با انتخاب کارت ها آغاز میشود.هر بازیکن یک کارت<br/>دریاقت می کند که نقش اورا مشخص می کند.یکی از بازیکنان<br/>جاسوس است و یقسه در تلاش هستند تااورا پیدا کنند</span>
 <br/><span className='span-yellow' id='yellow-one'>نحوه بازی:</span><br/>
<span className='line-span' id='line-span'>

 
 بازیکنان با پرسیدن سوالات و مشاهده رفتار دیگران تلاش<br/> می‌کنند تا جاسوس را شناسایی کنند. جاسوس نیز باید به<br/> شکلی پاسخ دهد که هویت خود را پنهان کند و شک دیگران را<br/> به افراد دیگر بیندازد.<br/>
انتهای بازی:<br/> زمانی که بازیکنان به توافق برسند که فردی جاسوس است،<br/> رای‌گیری انجام می‌شود. اگر جاسوس شناسایی شود، بازی به<br/> پایان می‌رسد و بازیکنان برنده می‌شوند. اگر جاسوس موفق<br/> شود تا پایان بازی شناسایی نشود، او برنده خواهد بود.<br/>
زمان بازی:<br/> بازی دارای یک محدودیت زمانی است. بازیکنان باید در مدت<br/> زمان مشخصی به نتیجه برسند وگرنه بازی به نفع جاسوس<br/> تمام می‌شود.


</span>          

            </p>

                )}
                
                {selectedWord === "نقش‌ها" && (
           <p className="text">     
                  
                  <span className='span-one'><h1 className="text-one"> نقش های بازی</h1></span>

                                  <span className='span-yellow' >جاسوس:</span><br/>
<span  className='line'>جاسوس باید تلاش کند تا هویت خود را پنهان نگه<br/>دارد و بازکنان دیگررا گمراه کند.هدف او این<br/>است که تا پایان بازی شناسایی نشود.</span>
<br/><span className='span-yellow' id='yellow'>شهروند:</span><br/>
<span className='line-span'>شهروندان باید با همکاری و تبادل نظر با یکدیگر<br/>تلاش کنند تا جاسوس را شناسایی کنند و مانع <br/>موفقیت او شوند</span><br/>

<br/><span className='span-yellow' id='yellow-two'>جوکر:</span><br/>
<span className='line-span' id='line-span-one'>

جوکر: جوکر نقش متغیری دارد. او ممکن است به نفع <br/>جاسوس یا شهروندان بازی کند. هدف او این<br/> است که بازی را پیچیده‌تر کند و گیج‌کننده باشد.<br/>
کارآگاه (کلانتر):<br/> کارآگاه یا کلانتر، قدرت ویژه‌ای دارد که<br/> می‌تواند به کمک آن هویت یکی از<br/> بازیکنان را در هر دور از بازی بررسی<br/> کند و تلاش کند جاسوس را پیدا کند.

</span>

                  </p>
                )}
                {selectedWord === "جاسوس" && (
                  <p className="text">          
                                    <span className='span-one'><h1 className="text-one">قوانین جاسوس</h1></span>

<span>جاسوس باید با پنهان کاری و پاسح های هوشمندانه هویت<br/>خودرا مخفی نگه دارد,بازسمنان دیگر را گمراه کند و تا پایان<br/>بازی شناسایی نشود تا بتواند برنده شود.</span> 
                  </p>
                )}
   </div>
            )}
          </div>
          </div>
          <div className="hr-one" style={{ opacity: contentOpacity }}></div>   
<span className='but-head-top' style={{ opacity: contentOpacity }}>
          <Link to='/StatusPage'><button className='but'>
!شروع بازی

</button></Link></span>
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
