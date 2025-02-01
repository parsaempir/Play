import './Home.css';
import { useEffect } from 'react';
import eye from '../Pictures/Logo.svg';
import text from '../Pictures/Group 3.svg';
import Plant from '../Pictures/Group 2 (1).png';
import { Link } from 'react-router-dom';
function Home(){
    useEffect(() => {
        const handleOrientationChange = () => {
          if (window.innerHeight < window.innerWidth) {
            // اگر صفحه افقی شد، محتوا رو ثابت می‌کنیم
            document.body.style.transform = 'rotate(90deg)';
            document.body.style.transformOrigin = 'center';
            document.body.style.overflow = 'hidden';
          } else {
            // اگر صفحه عمودی شد، حالت رو به حالت عادی برمی‌گردونیم
            document.body.style.transform = 'rotate(0deg)';
            document.body.style.overflow = 'auto';
          }
        };
    
        window.addEventListener('resize', handleOrientationChange);
        handleOrientationChange(); // اجرا در زمان لود صفحه
    
        return () => {
          window.removeEventListener('resize', handleOrientationChange);
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