import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import SplashScren from './Pageone/SplashScren';
import Home from './pagetow/Home';
import Help from './Pagetree/Help';
import StatusPage from './pagefour/StatusPage';
import Chooseyourcard from './pagefive/Chooseyourcard';
import DiscussPage from './Pagesix/DiscussPage';
import DiscussPagetwo from './discussPagetwo';
const App = () => {
      useEffect(() => {
        // جلوگیری از چرخش به حالت افقی
        const handleOrientation = (e) => {
          if (window.matchMedia("(orientation: landscape)").matches) {
            // جلوگیری از چرخش به افقی
            document.body.style.display = 'block';
          } else {
            document.body.style.display = 'none';
          }
        };
    
        window.addEventListener("resize", handleOrientation);
        
        // فراخوانی اولیه
        handleOrientation();
    
        return () => {
          window.removeEventListener("resize", handleOrientation);
        };
      }, []);
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<SplashScren />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/Help" element={<Help />} />
      <Route path="/StatusPage" element={<StatusPage />} />
      <Route path="/Chooseyourcard" element={<Chooseyourcard />} />
      <Route path="/DiscussPage" element={<DiscussPage />} />
      <Route path="/DiscussPagetwo" element={<DiscussPagetwo />} />

    </Routes>
    </BrowserRouter>
  );
};

export default App;
