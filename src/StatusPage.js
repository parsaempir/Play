import './StatusPage.css';
import React, { useState } from 'react';

import eye from './Logo.svg';
import Zarb from './Vector.svg';
import Back from './Group.svg';
import giah from './logo gia.png';
import addicon from './کارت - اضافه کردن بازیکن.png';
import icon from './پشت کارت.png';
import iconzarb from './Group 6.png'
function StatusPage(){

    const [players, setPlayers] = useState([]);

      
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


<img src={giah} className='giah'/>
</div>

</div>



</>


)


}

export default StatusPage;