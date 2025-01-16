import './StatusPage.css';
import React, { useState } from 'react';

import eye from './Logo.svg';
import Zarb from './Vector.svg';
import Back from './Group.svg';
import giah from './logo gia.png';
import addicon from './کارت - اضافه کردن بازیکن.png';
import icon from './پشت کارت.png';
import iconzarb from './Group 6.png';
import jasosin from './کارت - جاسوس.png';
import addjas from './کارت - اضافه کردن جاسوس.png'
function StatusPage(){

    const [players, setPlayers] = useState([]);

    const [jasos, setJasos] = useState([]);
    const addJasos =  () => {
if (jasos.length <2) {
const newJasos = { id: Date.now(), name: `جاسوس ${jasos.length + 1}`};
setJasos([...jasos, newJasos]);
} else{
    alert("فقط ۲جاسوس می توانید اضافه کنید")
}
    };
    const removeJasos =(id) => {
        setJasos(jasos.filter((jas) => jas.id !== id ));
    };
    const addPlayer = () => {
        if (players.length < 4) { 
          const newPlayer = { id: Date.now(), name: `بازیکن ${players.length + 1}` };
          setPlayers([...players, newPlayer]);
        } else {
          alert("فقط ۴ بازیکن می‌توانید اضافه کنید!"); 
        }
      };
  
 
    const removePlayer = (id) => {
      setPlayers(players.filter((player) => player.id !== id));
    };
return(


<>
<div className='head'>
<div className='container'>
<span className="head-bz">
            <img src={Back} className="back" />
            <img src={Zarb} className="zarb" />

          </span>
<img src={eye} className='eye'/>
<span className='h-head'>
<h1 className='h-text'>بازیکنان</h1>
<div className="player-count">{players.length}</div>
</span>


<div className="player-container">
      <div className="player-list">
        {}
        <img
          src={addicon}
          alt="افزودن بازیکن"
          className="add-player-icon"
          onClick={addPlayer}
          height='100px'
        />

        {}
        {players.map((player) => (
          <div key={player.id} className="player-card">
          
          <img 
                        onClick={() => removePlayer(player.id)}
src={iconzarb}
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
    <span className='h-head' id='h-head'>
<h1 className='h-text' >تعداد جاسوس ها</h1>
<div className="player-count">{jasos.length}</div>
</span>
 
    <div className="player-container" id='player-container'>
      <div className="player-list">
        {}
        <img
          src={addjas}
          alt="افزودن بازیکن"
          className="add-player-icon"
          onClick={addJasos}
          height='100px'
        />

        {}
        {jasos.map((jas) => (
          <div key={jas.id} className="player-card">
          
          <img 
                        onClick={() => removeJasos(jas.id)}
src={iconzarb}
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

<img src={giah} className='giah'/>
</div>

</div>



</>


)


}

export default StatusPage;