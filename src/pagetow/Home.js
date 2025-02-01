import './Home.css';
import { useEffect } from 'react';
import eye from '../Pictures/Logo.svg';
import text from '../Pictures/Group 3.svg';
import Plant from '../Pictures/Group 2 (1).png';
import { Link } from 'react-router-dom';
function Home(){
    useEffect(() => {
        // جلوگیری از چرخش به حالت افقی
        const handleOrientation = (e) => {
          if (window.matchMedia("(orientation: landscape)").matches) {
            // جلوگیری از چرخش به افقی
            document.body.style.display = 'none';
          } else {
            document.body.style.display = 'block';
          }
        };
    
        window.addEventListener("resize", handleOrientation);
        
        // فراخوانی اولیه
        handleOrientation();
    
        return () => {
          window.removeEventListener("resize", handleOrientation);
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