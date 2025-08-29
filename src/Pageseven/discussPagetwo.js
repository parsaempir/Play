import './discussPagetwo.css';
import Plant2 from '../pagefive/logo gia.png';
import close from "../Pictures/Vector.svg";
import { Link, useLocation } from 'react-router-dom';
import eye from "../Pictures/Logo.svg";
import oncard from '../Pictures/روی کارت - جاسوس.png';
import imgjas from '../Pictures/jasoskart.svg';
import imgshah from '../Pictures/jasosokart2.svg';

const DiscussPagetwo = () => {
  const location = useLocation();
  const selectedImg = location.state?.selectedImg || oncard;
  return (<>
  <div className='head-seven'>
  <div className="container-seven" >
    <span className='head-close'>
  <Link to='/Home'> <img src={close} className="close" /></Link>
  </span>
  <img src={eye} className="eye" />
  <h2 className='h-text-head'>!بازی تموم شد</h2>
  <span className='span-oncard' style={{
    position: 'relative'
  }}>
<img src={selectedImg} className='oncard'/>

{selectedImg === imgjas && (
  <h3 className='jas-h' style={{
    position: 'absolute',
      transform: 'translate(0%, -50%)',
      bottom: '25px',
      fontFamily: 'CinemaFont',
      color: 'white',
      fontSize: '50px',

  }}>شهروند برد</h3>
)}
 {selectedImg === imgshah && (
    <h3 style={{
      position: 'absolute',
      transform: 'translate(0%, -50%)',
      bottom: '25px',
      fontFamily: 'CinemaFont',
      color: 'white',
      fontSize: '50px',
    }}>
     جاسوس برد
    </h3>
  )}
 </span>
<div className='head-half'>

<Link to='/StatusPage'><button className='half-btn' id='color-btnone'>بازی مجدد</button></Link>

<Link to='/Home'><button className='half-btn' id='color-btntwo'> صفحه اصلی</button></Link>


</div>

    </div>
    </div>
    </>
  );
};

export default DiscussPagetwo;
