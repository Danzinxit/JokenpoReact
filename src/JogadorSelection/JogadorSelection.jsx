import React from 'react';
import maoFechada from "/mao-fechada.png"
import maoAberta from "/mao-aberta.png"
import maoTesoura from "/mao-tesouras.png"


const PlayerSelection = ({ onPlay }) => (
  <div className="player-selection">
    <button onClick={() => onPlay('pedra')} className="icon-button">
      <img src={maoFechada} width={50}/>
      <p>Pedra</p>
    </button>
    <button onClick={() => onPlay('papel')} className="icon-button">
    <img src={maoAberta} width={50}/>
      <p>Papel</p>
    </button>
    <button onClick={() => onPlay('tesoura')} className="icon-button">
    <img src={maoTesoura} width={50}/>
      <p>Tesoura</p>
    </button>
  </div>
);

export default PlayerSelection;
