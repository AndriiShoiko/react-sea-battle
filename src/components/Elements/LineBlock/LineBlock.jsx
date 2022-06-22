import React from 'react'
import Block from '../Block/Block'
import classes from './LineBlock.module.css'

const LineBlock = (props) => {
    return (
        <div className={classes.LineBlock}>
            {props.arrElements.map((e, i) => {
                return <Block
                    shot={props.shot}
                    key={i}
                    caption={e.caption}
                    gameBlock={e}></Block>
            }
            )}
        </div>
    )
}

export default LineBlock;
