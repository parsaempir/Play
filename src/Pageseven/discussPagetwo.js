import './discussPagetwo.css';
import Plant2 from '../pagefive/logo gia.png';
import close from "../Pictures/Vector.svg";
import { Link } from 'react-router-dom';
import eye from "../Pictures/Logo.svg";
import oncard from '../Pictures/روی کارت - جاسوس.png'
const discussPagetwo = () => {
  
  return (<>
  <div className='head-seven'>
  <div className="container-seven">
    <span className='head-close'>
  <Link to='/Home'> <img src={close} className="close" /></Link>
  </span>
  <img src={eye} className="eye" />
  <h2 className='h-text-head'>!بازی تموم شد</h2>
  <span className='span-oncard'>
<img src={oncard} className='oncard'/></span>
<div className='head-half'>

<Link to='/StatusPage'><button className='half-btn' id='color-btnone'>بازی مجدد</button></Link>

<Link to='/Home'><button className='half-btn' id='color-btntwo'> صفحه اصلی</button></Link>


</div>

    </div>
    </div>
    </>
  );
};

export default discussPagetwo;
