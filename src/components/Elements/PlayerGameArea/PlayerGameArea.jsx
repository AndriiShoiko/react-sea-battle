import React from 'react'
import LineBlock from '../LineBlock/LineBlock';
import classes from './PlayerGameArea.module.css';

const PlayerGameArea = ({ playerGame, processShot }) => {

    return (
        <div className={classes.PlayerGameArea}>
            {
                playerGame.mArea.map((e, i) => {
                    return <LineBlock shot={processShot} arrElements={e} key={i} />
                })
            }
        </div>
    )
}

export default PlayerGameArea;
