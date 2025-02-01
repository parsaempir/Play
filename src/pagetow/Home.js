import './Home.css';
import { useEffect } from 'react';
import eye from '../Pictures/Logo.svg';
import text from '../Pictures/Group 3.svg';
import Plant from '../Pictures/Group 2 (1).png';
import { Link } from 'react-router-dom';
function Home(){
    useEffect(() => {
        const preventPortrait = () => {
          if (window.innerHeight > window.innerWidth) {
            // اگر صفحه در حالت عمودی باشد، فوراً به حالت افقی برگردونیم
            window.screen.orientation.lock("landscape").catch((err) => console.error("Error locking orientation:", err));
          }
        };
    
        preventPortrait();
        window.addEventListener('resize', preventPortrait); // وقتی صفحه تغییر اندازه میده
    
        return () => {
          window.removeEventListener('resize', preventPortrait);
        };
      }, []);
    
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