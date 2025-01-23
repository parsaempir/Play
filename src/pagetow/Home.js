import './Home.css';
import eye from '../Pictures/Logo.svg';
import text from '../Pictures/Group 3.svg';
import Plant from '../Pictures/Group 2 (1).png';
import { Link } from 'react-router-dom';
function Home(){

return(

<>

<div className='head'>

    <div className='container'>
<img src={eye} className='eye-logo'/>
<img src={text} className='text-logo'/>

<img src={Plant} className='Plant-png-one'/>

<Link to="/Help"><button className='but-one'>راهنمای بازی؟</button></Link>
<Link to='/StatusPage'><button className='but-tow'>!شروع بازی</button></Link>

    </div>
</div>

</>

)

}
export default Home;