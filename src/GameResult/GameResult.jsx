import React from 'react';
import maoFechada from "/mao-fechada.png"
import maoAberta from "/mao-aberta.png"
import maoTesoura from "/mao-tesouras.png"

const choiceIcons = {
 
pedra: <img src={maoFechada} width={50}/>,
papel: <img src={maoAberta} width={50}/>,
tesoura: <img src={maoTesoura} width={50}/>
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
