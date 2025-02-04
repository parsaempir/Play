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
    // اینجا از preventDefault برای جلوگیری از تغییر چرخش صفحه استفاده می‌کنیم.
    const handleOrientationChange = (event) => {
      event.preventDefault(); // جلوگیری از چرخش صفحه
    };

    // اضافه کردن event listener برای جلوگیری از چرخش صفحه
    window.addEventListener('orientationchange', handleOrientationChange);

    // پاک کردن event listener در هنگام unmount کامپوننت
    return () => {
      window.removeEventListener('orientationchange', handleOrientationChange);
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
