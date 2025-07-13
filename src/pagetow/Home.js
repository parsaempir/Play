import './Home.css';
import { useEffect, useState } from 'react';
import eye from '../Pictures/Logo.svg';
import text from '../Pictures/Group 3.svg';
import { Link, useNavigate, useLocation } from 'react-router-dom';

function Home() {
    const [animateExit, setAnimateExit] = useState(false);
    const [animateBg, setAnimateBg] = useState(false);
    const [animateBgReverse, setAnimateBgReverse] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();

    const [elementsOpacity, setElementsOpacity] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setElementsOpacity(1);
        }, 100);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (location.state && location.state.fromStatusPage) {
            setAnimateBgReverse(true);
            setElementsOpacity(0); 
            
            const fadeTimer = setTimeout(() => {
                setElementsOpacity(1); 
            }, 50);

            const animationTimer = setTimeout(() => {
                setAnimateBgReverse(false);
                window.history.replaceState({}, document.title);
            }, 1500); 
            return () => {
                clearTimeout(fadeTimer);
                clearTimeout(animationTimer);
            };
        }
    }, [location.state]);

    const handleStartGame = () => {
        setAnimateExit(true);
        setAnimateBg(true);

        setElementsOpacity(0); 

        setTimeout(() => {
            navigate('/StatusPage', { state: { animateEntry: true } });
        }, 1500); 
    };
    const handleGoToHelp = () => {
        setAnimateExit(true);      
        setAnimateBg(true);         
        setElementsOpacity(0);      
    
        setTimeout(() => {
            navigate('/Help', { state: { animateEntry: true } });  
        }, 1500); 
    };
    
    return (
        <>
            <div className={`head-two ${animateExit ? 'content-fade-out-up' : ''}`}>
                <div 
                    className={`container-two ${animateBg ? 'background-slide-up' : ''} ${animateBgReverse ? 'background-slide-down' : ''}`}
                >
                    <img src={eye} className='eye-logo1' alt="Eye Logo" style={{ opacity: elementsOpacity }} />
                    <img src={text} className='text-logo1' alt="Text Logo" style={{ opacity: elementsOpacity }} />

                    <span className='btn-head-home' style={{ opacity: elementsOpacity }}>
                        <span>
                        <button className='but-one1' onClick={handleGoToHelp}>راهنمای بازی؟</button>

                        </span>
                        <span>
                        <button className='but-tow1' onClick={handleStartGame}>!شروع بازی</button></span>
                    </span>
                </div>
            </div>
        </>
    );
}

export default Home;