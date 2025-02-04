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
      const checkOrientation = () => {
        const elements = document.querySelectorAll(".hide-on-rotate");
  
        if (window.matchMedia("(orientation: landscape)").matches) {
          elements.forEach(el => el.style.display = "none"); // آیتم‌ها رو مخفی کن
        } else {
          elements.forEach(el => el.style.display = "block"); // دوباره نشون بده
        }
      };
  
      // چک اولیه
      checkOrientation();
  
      // گوش دادن به چرخش صفحه
      window.addEventListener("orientationchange", checkOrientation);
  
      return () => {
        window.removeEventListener("orientationchange", checkOrientation);
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
