import React, {useState} from 'react'

import GameBoard from './components/GameBoard';

function MemoryGame() {

    const [start, setStart] = useState(false); 

    return (
        <div className='flex flex-col items-center justify-center mt-10 font-bold'>
            <h1 className='text-3xl'>Memory Game</h1>
            {
                (!start) ? 
                <button
                    className='mt-20 border-2 border-black px-3 py-2'
                    onClick={() => {
                        setStart(!start)
                    }}
                >
                    <p>Start Game</p>
                </button> :
                <GameBoard />
            }
        </div>  
    )
}

export default MemoryGame