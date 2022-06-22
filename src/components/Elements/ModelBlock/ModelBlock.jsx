import React from 'react';
import classes from '../ModelBlock/ModelBlock.module.css';

const ModelBlock = ({isSunk}) => {
  
  const getClasses = (isSunk) => {
    let classesString = classes.ModelBlock;

    if (isSunk) {
      classesString += ' ' + classes.ShipIsSunk;
    }

    return classesString;
  }  
  
  return (
    <div className={getClasses(isSunk)}>
      
    </div>
  )
}

export default ModelBlock;
