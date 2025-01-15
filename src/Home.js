import './Home.css';
import eye from './Logo.svg';
import text from './Group 3.svg';
import giah from './Group 2 (1).png';
function Home(){

return(

<>

<div className='head'>

    <div className='container'>
<img src={eye} className='eye-logo'/>
<img src={text} className='text-logo'/>

<img src={giah} className='giah-png'/>

<button className='but'>راهنمای بازی؟</button>
<button className='but-tow'>!شروع بازی</button>

    </div>
</div>

</>

)

}
export default Home;