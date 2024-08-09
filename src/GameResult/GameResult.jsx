import React from 'react';
import { FaHandRock, FaHandPaper, FaHandScissors } from 'react-icons/fa';

const choiceIcons = {
  pedra: <FaHandRock size={50} />,
  papel: <FaHandPaper size={50} />,
  tesoura: <FaHandScissors size={50} />
};

const GameResult = ({ playerChoice, computerChoice, winner, onPlayAgain }) => (
  <div className="game-result">
    <h2>Resultado</h2>
    <div className="result">
      <div>
        <h3>Você escolheu:</h3>
        {choiceIcons[playerChoice]}
      </div>
      <div>
        <h3>Computador escolheu:</h3>
        {choiceIcons[computerChoice]}
      </div>
    </div>
    {winner === 'empate' ? (
      <p>Empate!</p>
    ) : (
      <p>{winner === 'jogador' ? 'Você ganhou!' : 'Computador ganhou!'}</p>
    )}
    <button onClick={onPlayAgain} className="play-again-button">Jogar Novamente</button>
  </div>
);

export default GameResult;
