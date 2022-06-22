import React from 'react'
import classes from './PlayerGame.module.css'
import PlayerGameArea from '../PlayerGameArea/PlayerGameArea'
import GroupModelShip from '../GroupModelShip/GroupModelShip'
import PlayerGameHeader from '../PlayerGameHeader/PlayerGameHeader'


const PlayerGame = ({ gameState, playerGame, processShot }) => {

  const getClasses = () => {
    let classesString = classes.PlayerGame;

    if (gameState.endGame) {
      classesString += ' ' + classes.endGame + ' ' + classes.isLock;
    } else {
      if (gameState.whoseMove !== playerGame) {
        classesString += ' ' + classes.isLock;
      } else {
        classesString += ' ' + classes.isMove;
      }
    }

    return classesString;
  }

  return (
    <div className={getClasses()}>
      <PlayerGameHeader playerGame={playerGame} />
      <PlayerGameArea playerGame={playerGame} processShot={processShot} />

      <GroupModelShip arrayShips={playerGame.mShip4} />
      <GroupModelShip arrayShips={playerGame.mShip3} />
      <GroupModelShip arrayShips={playerGame.mShip2} />
      <GroupModelShip arrayShips={playerGame.mShip1} />
    </div>
  )
}

export default PlayerGame;
