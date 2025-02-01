import './SplashScren.css';
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import eye from '../Pictures/Logo.svg';
import text from '../Pictures/Group 3.svg';
import piece from '../Pictures/Group (1).svg'
function Splash(){
    const navigate = useNavigate();

   useEffect(() => {
     
      const timer = setTimeout(() => {
        navigate("/Home"); 
      }, 3000);
  
   
    return () => clearTimeout(timer);
    }, [navigate]);


return(
<>
<div className='head-one'>
<div className='container-one'>
<img src={eye} className='eye-logo'/>
<img src={text} className='text-logo'/>
<img src={piece} className='piece'/>

</div>

</div>

</>


)

}
export default Splash;