import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import SplashScren from './Pageone/SplashScren';
import Home from './pagetow/Home';
import Help from './Pagetree/Help';
import StatusPage from './pagefour/StatusPage';
import Chooseyourcard from './pagefive/Chooseyourcard';
import DiscussPage from './Pagesix/DiscussPage';
import DiscussPagetwo from './Pageseven/discussPagetwo';

const resources = [
  ".jpg",
 
  "./Pagesix/DiscussPage.js",
  "./Pagesix/DiscussPage.css",
  "./Pageseven/discussPagetwo.js",
  "./Pageseven/discussPagetwo.css",
  "./pagefive/Chooseyourcard.js",
  "./pagefive/Chooseyourcard.css",
  "./pagefour/StatusPage.js",
  "./pagefour/StatusPage.css",
  "./Pagetree/Help.js",
  "./Pagetree/Help.css",
  "./pagetow/Home.js",
  "./pagetow/Home.css",
  "./Pageone/SplashScren.js",
  "./Pageone/SplashScren.css",



];
const App = () => {
  const [loading, setLoading] = useState(true);
  const [loadedResources, setLoadedResources] = useState(0);

  useEffect(() => {
    if (loadedResources === resources.length) {
      setLoading(false);
    }
  }, [loadedResources]);

  useEffect(() => {
    resources.forEach((src) => {
      if (src.endsWith('.jpg') || src.endsWith('.png')) {
        const img = new Image();
        img.src = src;
        img.onload = () => setLoadedResources((prev) => prev + 1);
      } else {
        fetch(src).then(() => setLoadedResources((prev) => prev + 1));
      }
    });
  }, []);

  if (loading) {
    return <div>در حال بارگذاری کل صفحه...</div>;
  }
  
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
