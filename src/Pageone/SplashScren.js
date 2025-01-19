import './SplashScren.css';
import eye from '../Logo.svg';
import text from '../Group 3.svg';
import piece from '../Group (1).svg'
function Splash(){



return(
<>
<div className='head'>
<div className='container'>
<img src={eye} className='eye-logo'/>
<img src={text} className='text-logo'/>
<img src={piece} className='tik'/>

</div>

</div>

</>


)

}
export default Splash;