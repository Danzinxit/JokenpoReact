import React from 'react';

const Scoreboard = ({ scores }) => (
  <div className="scoreboard">
    <h2>Placar :</h2>
    <p><strong>Jogador:</strong> {scores.jogador}</p>
    <p><strong>Computador:</strong> {scores.computador}</p>
    <p><strong>Empates:</strong> {scores.empate}</p>
  </div>
);

export default Scoreboard;
