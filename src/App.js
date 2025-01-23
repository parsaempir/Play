import { BrowserRouter, Routes, Route } from "react-router-dom";
import SplashScren from './Pageone/SplashScren';
import Home from './pagetow/Home';
import Help from './Pagetree/Help';
import StatusPage from './pagefour/StatusPage';
import Chooseyourcard from './pagefive/Chooseyourcard'

const App = () => {
  
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<SplashScren />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/Help" element={<Help />} />
      <Route path="/StatusPage" element={<StatusPage />} />
      <Route path="/Chooseyourcard" element={<Chooseyourcard />} />

    </Routes>
    </BrowserRouter>
  );
};

export default App;
