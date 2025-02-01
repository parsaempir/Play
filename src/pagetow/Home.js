import './Home.css';
import { useEffect } from 'react';
import eye from '../Pictures/Logo.svg';
import text from '../Pictures/Group 3.svg';
import Plant from '../Pictures/Group 2 (1).png';
import { Link } from 'react-router-dom';
function Home(){
    useEffect(() => {
        const preventLandscape = () => {
          if (window.innerHeight < window.innerWidth) {
            // اگر صفحه در حالت افقی بود، به حالت عمودی برمی‌گردونیم
            window.screen.orientation.lock("portrait").catch((err) => console.error("Error locking orientation:", err));
          }
        };
    
        preventLandscape(); // بررسی و قفل کردن صفحه در حالت عمودی
        window.addEventListener('resize', preventLandscape); // گوش دادن به تغییر اندازه صفحه
    
        return () => {
          window.removeEventListener('resize', preventLandscape); // حذف event listener
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