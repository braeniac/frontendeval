import React, { useState } from 'react'

function Card({ num, count, onIncrement,  }) {
    const [number, ] = useState(num); 
    const [clicked, setClicked] = useState(false); 
    const [disabled, setDisabled] = useState(false); 

    return (
        <button 
            disabled={disabled}
            onClick={() => {
                setClicked(!clicked)
                if (count === 2) {
                    setDisabled(!disabled)
                }
                onIncrement()
            }}
            className='w-20 h-20 border-black border-2'
        >
            {
                (clicked) ?
                <p>{number}</p> :
                <p className='text-white'>{number}</p>
            }
        </button>
    )
}

export default Card