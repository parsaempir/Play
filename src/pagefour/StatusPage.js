import './StatusPage.css';
import React, { useState } from 'react';
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
import time from '../Pictures/Frame 16.png';
import naghsh from '../Pictures/Property 1=Variant2.png';
import joker from '../Pictures/Property 1=Default.png';
import sheriff from '../Pictures/Property 1=Variant2 (1).png';
import sheriffOff from '../Pictures/Property 1=Default (1).png';

function StatusPage() {
    const [players, setPlayers] = useState([]);
    const [jasos, setJasos] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalImage, setModalImage] = useState(null);
    const [extraImage, setExtraImage] = useState(null);
    const [currentImage, setCurrentImage] = useState(joker);
    const [currentImage1, setCurrentImage1] = useState(sheriffOff);

    const handleImageClicke = () => {
      setCurrentImage1((prevImage) => (prevImage === sheriffOff ? sheriff : sheriffOff));
    };
  

    const handleImageClicked = () => {
      setCurrentImage((prevImage) => (prevImage === joker ? naghsh : joker));
    };
  
    const handleImageClick = (imageSrc) => {
        setModalImage(imageSrc);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setModalImage(null);
    };

    const handleAddImage = () => {
        setExtraImage('image.jpg'); 
        setIsModalOpen(false); 
    };

    const addJasos = () => {
        if (jasos.length < 2) {
            const newJasos = { id: Date.now(), name: `جاسوس ${jasos.length + 1}` };
            setJasos([...jasos, newJasos]);
        } else {
            alert("فقط 2 جاسوس می‌توانید اضافه کنید");
        }
    };

    const removeJasos = (id) => {
        setJasos(jasos.filter((jas) => jas.id !== id));
    };

    const addPlayer = () => {
        if (players.length < 3) {
            const newPlayer = { id: Date.now(), name: `بازیکن ${players.length + 1}` };
            setPlayers([...players, newPlayer]);
        } else {
            alert("فقط 3 بازیکن می‌توانید اضافه کنید!");
        }
    };

    const removePlayer = (id) => {
        setPlayers(players.filter((player) => player.id !== id));
    };

    const handleRemoveExtraImage = () => {
        setExtraImage(null); 
    };
    
    const Modal = ({ onClose, onAddImage }) => {
        return (
            <div className="modal-one">
                <div className="modal-content">
                    <span className="close-modal" onClick={onClose}>&times;</span>
                  <span className='bold-span'>رنگ</span><br/>
                  <span className='bold-span'>زمان</span><br/>
                  <span className='bold-span'>مورچه</span>

                   
                    <span className='btn-span'>
                    <button onClick={onAddImage}>انتخاب</button><br/></span>
                </div>
            </div>
        );
    };

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
                        <h1 className='text-one'>بازیکنان</h1>
                        <div className="player-count">{players.length}</div>
                    </span>

                    <div className="player-container">
                        <div className="player-list">
                            <img
                                src={addicon}
                                alt="افزودن بازیکن"
                                className="add-player-icon"
                                onClick={addPlayer}
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
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className='hr'></div>
                    <span className='span-text' id='span-text'>
                        <h1 className='h-one'>تعداد جاسوس ها</h1>
                        <div className="player-count">{jasos.length}</div>
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
                            src={addtime}
                            className='img-add'
                            height='56px'
                            alt="Thumbnail"
                            onClick={() => handleImageClick('image.jpg')}
                        />

                        {isModalOpen && (
                            <Modal
                                imageSrc={modalImage}
                                onClose={handleCloseModal}
                                onAddImage={handleAddImage}
                            />
                        )}

                        {}
                        {extraImage && (
                            <div className="extra-image-container">
                                <img src={time} alt="Extra" height="56px" />
                          </div>
                        )}
                    </div>
                    </div>
                    <div className='hr' id='hr-div'></div>
                    <span className='span-text' id='span-text'>
                        <h1 className='h-one'> نقش های خاص</h1>
                    </span>
                    <div className='role'>
      <img
        src={currentImage}
        alt="Switchable"
        onClick={handleImageClicked}
      />
      <img
        src={currentImage1}
        alt="Switchable"
        onClick={handleImageClicke}
      /></div>
      <div className='but-div-one'>
<Link to='/Chooseyourcard'><button className='but-top'>مرحله بعدی</button></Link>

      </div>
                </div>
            </div>
        </>
    );
}
//<img src={iconzarb}className='iconzrb'  onClick={handleRemoveExtraImage} />  
export default StatusPage;
