import React from 'react'
import ModelShip from '../ModelShip/ModelShip'

const GroupModelShip = ({ arrayShips }) => {
    return (
        <div>
            {arrayShips.map((e, i) => {
                return <ModelShip
                    modelShip={e}
                    key={i}
                />
            }
            )}
        </div>
    )
}

export default GroupModelShip
