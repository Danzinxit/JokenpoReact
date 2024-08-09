import React from 'react';
import { FaHandRock, FaHandPaper, FaHandScissors } from 'react-icons/fa';

const PlayerSelection = ({ onPlay }) => (
  <div className="player-selection">
    <button onClick={() => onPlay('pedra')} className="icon-button">
      <FaHandRock size={50} />
      <p>Pedra</p>
    </button>
    <button onClick={() => onPlay('papel')} className="icon-button">
      <FaHandPaper size={50} />
      <p>Papel</p>
    </button>
    <button onClick={() => onPlay('tesoura')} className="icon-button">
      <FaHandScissors size={50} />
      <p>Tesoura</p>
    </button>
  </div>
);

export default PlayerSelection;
