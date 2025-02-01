import './Home.css';
import eye from '../Pictures/Logo.svg';
import text from '../Pictures/Group 3.svg';
import Plant from '../Pictures/Group 2 (1).png';
import { Link } from 'react-router-dom';
function Home(){

return(

<>

<div className='head-two'>

    <div className='container-two'>
<img src={eye} className='eye-logo1'/>
<img src={text} className='text-logo1'/>

<span className='btn-head-home'>
<Link to="/Help"><button className='but-one1'>راهنمای بازی؟</button></Link>
<Link to='/StatusPage'><button className='but-tow1'>!شروع بازی</button></Link>
</span>
    </div>
</div>

</>

)

}
export default Home;