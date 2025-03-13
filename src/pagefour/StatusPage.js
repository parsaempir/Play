import './StatusPage.css';
import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import eye from '../Pictures/Logo.svg';
import close from '../Pictures/Vector.svg';
import Back from '../Pictures/Group.svg';
import Plant from '../pagefive/logo gia.png';
import addicon from '../Pictures/کارت - اضافه کردن بازیکن.png';
import icon from '../Pictures/پشت کارت.png';
import iconcross from '../Pictures/Group 6.png';
import jasosin from '../Pictures/کارت - جاسوس.png';
import addjas from '../Pictures/کارت - اضافه کردن جاسوس.png';
import addtime from '../Pictures/Frame 15.png';
import time from '../Pictures/Frame 16.svg';
import naghsh from '../Pictures/Property 1=Variant2.svg';
import joker from '../Pictures/Property 1=Default (1).svg';
import sheriff from '../Pictures/Property 1=Variant2 (1).svg';
import sheriffOff from '../Pictures/Property 1=Default.svg';
import closemodal from '../Pictures/Group 6.svg';
const useAssignJasos = (players, jasos) => {
    const navigate = useNavigate();
    const assignJasos = () => {
        if (jasos.length >= players.length) {
            alert("تعداد جاسوس‌ها نباید بیشتر یا مساوی تعداد بازیکنان باشد!");
            return;
        }
    
       
        const shuffledPlayers = [...players].sort(() => Math.random() - 0.5);
    
        const selectedJasosIds = shuffledPlayers.slice(0, jasos.length).map(player => player.id);
    
     
        const assignedPlayers = players.map(player => ({
            ...player,
            role: selectedJasosIds.includes(player.id) ? "جاسوس" : "شهروند"
        }));
    
        
        localStorage.setItem("assignedPlayers", JSON.stringify(assignedPlayers));
    
        navigate("/pagefive/Chooseyourcard");
    };
    
    

    return assignJasos;
};
function StatusPage() {
    const [players, setPlayers] = useState([]);
    const [jasos, setJasos] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalImage, setModalImage] = useState(null);
    const [extraImage, setExtraImage] = useState(null);
    const [currentImage, setCurrentImage] = useState(joker);
    const [currentImage1, setCurrentImage1] = useState(sheriffOff);
    const [playerName, setPlayerName] = useState("");
    const [updatedJasos, setUpdatedJasos] = useState([]);

    const navigate = useNavigate();
    const assignJasos = useAssignJasos(players, jasos);

    const handleImageClicke = () => {
        setCurrentImage1((prevImage) => (prevImage === sheriffOff ? sheriff : sheriffOff));
    };

    const handleImageClicked = () => {
        setCurrentImage((prevImage) => (prevImage === joker ? naghsh : joker));
    };

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setPlayerName("");
    };

    const handleAddImage = () => {
        setExtraImage('image.jpg');
        setIsModalOpen(false);
    };

    useEffect(() => {
        const savedJasos = JSON.parse(localStorage.getItem("jasos")) || [];
        setJasos(savedJasos);
    }, []);

    const addJasos = () => {
        if (jasos.length < 30) {
            const newJasos = { id: Date.now(), name: `جاسوس ${jasos.length + 1}` };
            setJasos(prevJasos => {
                const updatedJasos = [...prevJasos, newJasos];
                localStorage.setItem("jasos", JSON.stringify(updatedJasos));
                return updatedJasos;
            });
        } else {
            alert("فقط 30 جاسوس می‌توانید اضافه کنید");
        }
    };
    
    const removeJasos = (id) => {
        setJasos(prevJasos => {
            const updatedJasos = prevJasos.filter(jas => jas.id !== id);
            localStorage.setItem("jasos", JSON.stringify(updatedJasos));
            return updatedJasos;
        });
    };
    useEffect(() => {
       
        localStorage.removeItem("jasos");
        setJasos([]); 
    }, []);
    
    const handleConfirmAddPlayer = () => {
        if (!playerName.trim()) {
            alert("لطفاً نام بازیکن را وارد کنید!");
            return;
        }
        if (players.some(player => player.name === playerName)) {
            alert('این نام قبلاً اضافه شده است!');
            return;
        }
     
        if (players.length < 30) {
            const newPlayer = { id: Date.now(), name: playerName };
            setPlayers([...players, newPlayer]);
            setIsModalOpen(false);
            setPlayerName("");
        } else {
            alert("فقط 30 بازیکن می‌توانید اضافه کنید!");
        }
    };

    const removePlayer = (id) => {
        setPlayers(players.filter((player) => player.id !== id));
    };

    const handleRemoveExtraImage = () => {
        setExtraImage(null);
    };
    const handleNextStep = () => {
        if(players.length === 0){
            alert("لطفاً حداقل یک بازیکن اضافه کنید!");
            return;
        }
        if (jasos.length === 0) {
            alert("لطفاً حداقل یک جاسوس اضافه کنید!");
            return;
        }
        if (players.length <= jasos.length) {
            alert("تعداد جاسوس‌ها نباید بیشتر یا مساوی تعداد بازیکنان باشد!");
            return;
        }
    assignJasos();
    navigate("/Chooseyourcard");
    }


    
    return (
        <>
            <div className='head-four'>
                <div className='container-four'>
                    <span className="head-bc">
                        <Link to='/Home'><img src={Back} className="back" /></Link>
                      <Link to='/Home'> <img src={close} className="close-cross" /></Link> 
                    </span>
                    <img src={eye} className='eye-small' />
                    
                    <span className='span-text'>
                        <h1 className='text-one-h1'>بازیکنان</h1>
                        <div className="player-count" id='player-count'>{players.length}</div>
                    </span>

                    <div className="player-container">
                        <div className="player-list">
                            <img
                                src={addicon}
                                alt="افزودن بازیکن"
                                className="add-player-icon"
                                onClick={handleOpenModal}
                                height='100px'
                              
                            />
                            {players.map((player) => (
                                <div key={player.id} className="player-card">
                                    <img
                                        onClick={() => removePlayer(player.id)}
                                        src={iconcross}
                                        className='remove-btn'
                                    />
                                    <img
                                        src={icon}
                                        alt={player.name}
                                        className="player-img"
                                        height='100px'
                                    />
                                    <span className='player-name-add'><h5>{player.name}</h5></span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {isModalOpen && (
                     <>
                        <div className="modal-head">
                    <div className="modal-head-one">
                        <div className='head-mod-one'>
                        <span className="closemodal-one" onClick={handleCloseModal}><img src={closemodal}/></span>
                        <h3>نام بازیکن</h3>
                        <span className='inp-modal'><input type='text' maxLength={9} value={playerName} 
                        onChange={(e) => setPlayerName(e.target.value)

                        }/></span>
                        <span className='btn-modal'>
                        <button onClick={handleConfirmAddPlayer}>تأیید</button></span>
                        </div>
                    </div>
                </div>
                     
                     
                     </>

                    )}

                        {}
                        {extraImage && (
                            <div className="extra-image-container">
                                <img src={time} alt="Extra" height="56px" />
                          </div>
                        )}
                    <div className='hr'></div>
                    <span className='span-text' id='span-text'>
                        <h1 className='h-one'>تعداد جاسوس ها</h1>
                        <div className="player-count" >{jasos.length}</div>
                    </span>

                    <div className="player-container" id='player-container'>
                        <div className="player-list">
                            <img
                                src={addjas}
                                alt="افزودن جاسوس"
                                className="add-player-icon"
                                onClick={addJasos}
                                height='100px'
                            />
                            {jasos.map((jas) => (
                                <div key={jas.id} className="player-card">
                                    <img
                                        onClick={() => removeJasos(jas.id)}
                                        src={iconcross}
                                        className='remove-btn'
                                    />
                                    <img
                                        src={jasosin}
                                        alt={jas.name}
                                        className="player-img"
                                        height='100px'
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className='hr' id='hr'></div>
                    <span className='span-text' id='span-text'>
                        <h1 className='h-one '> دسته بندی کلمات</h1>
                    </span>
                    <div className='container-div'>
                        <div className='player-list'>
                        <img
                            src={time}
                            className='img-add'
                            height='56px'
                            alt="Thumbnail"
                          
                        />
                         <img
                            src={time}
                            className='img-add'
                            height='56px'
                            alt="Thumbnail"
                          
                        />
                         <img
                            src={time}
                            className='img-add'
                            height='56px'
                            alt="Thumbnail"
                          
                        />
                         <img
                            src={time}
                            className='img-add'
                            height='56px'
                            alt="Thumbnail"
                          
                        />

                    </div>
                    </div>
                    <div className='hr' id='hr-div'></div>
                    <span className='span-text' id='span-text'>
                        <h1 className='h-one' id='h-one'> نقش های خاص</h1>
                    </span>
                    <span className='role-one'>
      <img
        src={currentImage}
        alt="Switchable"
        onClick={handleImageClicked}
      />
      <img
        src={currentImage1}
        alt="Switchable"
        onClick={handleImageClicke}
      /></span>
      <div className='poch'>&nbsp;</div>
      <div className='but-div-one'>
<button className='but-top' onClick={handleNextStep}>مرحله بعدی</button>

      </div>
                </div>
            </div>
        </>
    );
}
//<img src={iconzarb}className='iconzrb'  onClick={handleRemoveExtraImage} />  
export default StatusPage;
