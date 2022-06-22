import React from 'react';
import ModelBlock from '../ModelBlock/ModelBlock';
import classes from '../ModelShip/ModelShip.module.css';

const ModelShip = ({ modelShip }) => {

  const mBlockShip = new Array(modelShip.countPart).fill(0);

  return (
    <div className={classes.ModelShip}>

      {
        mBlockShip.map((e, i) => {
          return <ModelBlock key={i} isSunk={modelShip.isSunk} />
        })
      }

    </div>
  )
}

export default ModelShip;
