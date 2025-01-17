import './Chooseyourcard.css';
import giah from './logo gia.png';
import backlogo from './Group 12.png';
import Zarb from './Vector.svg';
import Back from './Group.svg';
import eye from './Logo.svg';

function Chooseyourcard(){

return(


<>
<div className='head'>

<div className='container'>
<span className="head-bz">
            <img src={Back} className="back"  />
            <img src={Zarb} className="zarb" />

          </span>
          <img src={eye} className='eye' />
<h2 className='titr'>,نوبت</h2>
<img src={backlogo} className='back-logo'/>
<div className='but-div'>
<button className='but-top'>شروع</button>

      </div>
<img src={giah} className='giah-png'/>

</div>

</div>


</>



)


}
export default Chooseyourcard;