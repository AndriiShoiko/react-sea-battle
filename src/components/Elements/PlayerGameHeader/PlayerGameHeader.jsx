import React from 'react';
import classes from './PlayerGameHeader.module.css'

const PlayerGameHeader = ({ playerGame }) => {
  return (
    <div className={classes.PlayerGameHeader}>
      <h3 style={{ color: 'red' }}>Shots {playerGame.countShots} on {playerGame.countShipBlock}</h3>

      {playerGame.isWin()
        ? <h3 style={{ color: 'green', marginTop: '10px' }}>{playerGame.name} WIN!!!</h3>
        : <h3 style={{ color: 'green', marginTop: '10px' }}>{playerGame.name}</h3>
      }
    </div>
  )
}

export default PlayerGameHeader;
