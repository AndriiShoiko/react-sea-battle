import React from 'react';
import ModelBlock from '../__ModelBlock/ModelBlock';
import classes from '../__ModelShip/ModelShip.module.css';

const ModelShip = () => {
  return (
    <div className={classes.ModelShip}>
      <ModelBlock/>
      <ModelBlock/>
      <ModelBlock/>
    </div>
  )
}

export default ModelShip;
