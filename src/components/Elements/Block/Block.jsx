import React from 'react'
import classes from './Block.module.css'

const Block = (props) => {

  const setClasses = (gameBlock) => {
    let classesString = classes.block;

    if (gameBlock.isShot) {

      if (gameBlock.ship === null) {
        classesString += ' ' + classes.past;
      } else {
        classesString += ' ' + classes.hit;
      }
    }

    return classesString;
  }

  return (
    <div className={setClasses(props.gameBlock)}
      onClick={(e) => {
        props.shot(props.gameBlock)
      }}>
      {props.caption}
    </div>
  )
}

export default Block;
