import React from 'react';
import './App.css';
import Game from './Game';

function Tictactoe() {
  return (
    <div ><h1>Tic Tac Toe</h1>
    <div className="body">
   <Game />
   </div>
   </div>
  );
}

export default Tictactoe;

