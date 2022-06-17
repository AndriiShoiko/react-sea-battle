import React, { useState } from 'react'
import LineBlock from '../__LineBlock/LineBlock';
import ModelShip from '../__ModelShip/ModelShip';
import { getPlayerObject } from './gameArea';
import classes from './PlayerGameArea.module.css'


const PlayerGameArea = () => {

    let PlayerObj1 = getPlayerObject();

    const [mGameArea, setGameArea] = useState(PlayerObj1.mArea);

    const processShot = (gameBlock) => {
       
        if (gameBlock.isShot || gameBlock.isHeader) {
            return;
        } else {
            gameBlock.isShot = true;
            if (gameBlock.ship !== null) {

                const ship = gameBlock.ship;
                ship.countShotPart += 1;
                if (ship.countPart === ship.countShotPart) {
                    ship.isSunk = true;
                }

            }
        }
    }

    const shot = (gameBlock) => {
        processShot(gameBlock);
        setGameArea([...mGameArea]);
    }

    return (
        <div className={classes.PlayerGameArea}>
            {
                mGameArea.map((e, i) => {
                    return <LineBlock shot={shot} arrElements={e} key={i} />
                })
            }
            <ModelShip/>
            <ModelShip/>
        </div>
    )
}

export default PlayerGameArea;
