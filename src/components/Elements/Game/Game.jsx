import React from 'react';
import classes from './Game.module.css';
import PlayerGame from '../PlayerGame/PlayerGame';

const Game = ({ gameState, processShot }) => {

  return (
    <div className={classes.Game}>
      <PlayerGame gameState={gameState} playerGame={gameState.Player1} processShot={processShot} />
      <PlayerGame gameState={gameState} playerGame={gameState.Player2} processShot={processShot} />
    </div>
  )
}

export default Game;
