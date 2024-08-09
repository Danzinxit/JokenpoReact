import React, { useState } from 'react';
import Scoreboard from '../Placar/Placar';
import GameResult from '../GameResult/GameResult';
import PlayerSelection from '../JogadorSelection/JogadorSelection';


const options = ['pedra', 'papel', 'tesoura'];

const getComputerChoice = () => options[Math.floor(Math.random() * options.length)];

const determineWinner = (playerChoice, computerChoice) => {
  if (playerChoice === computerChoice) return 'empate';
  if (
    (playerChoice === 'pedra' && computerChoice === 'tesoura') ||
    (playerChoice === 'papel' && computerChoice === 'pedra') ||
    (playerChoice === 'tesoura' && computerChoice === 'papel')
  ) return 'jogador';
  return 'computador';
};

function Game() {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [winner, setWinner] = useState(null);
  const [scores, setScores] = useState({ jogador: 0, computador: 0, empate: 0 });
                        const handlePlay = (choice) => {
               const computerChoice = getComputerChoice();
        const result = determineWinner(choice, computerChoice);

    setPlayerChoice(choice);
    setComputerChoice(computerChoice);
    setWinner(result);

    setScores((prevScores) => ({
      ...prevScores,
      [result]: prevScores[result] + 1
    }));
  };

  const handleReset = () => {
    setPlayerChoice(null);
    setComputerChoice(null);
    setWinner(null);
  };

  return (
    <div>
      <Scoreboard scores={scores} />
      {winner ? (
        <GameResult
          playerChoice={playerChoice}
          computerChoice={computerChoice}
          winner={winner}
          onPlayAgain={handleReset}
        />
      ) : (
        <PlayerSelection onPlay={handlePlay} />
      )}
    </div>
  );
}

export default Game;
