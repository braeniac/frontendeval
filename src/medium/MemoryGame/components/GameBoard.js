import React, { useEffect, useState } from 'react'
import Card from '../components/Card'; 

function GameBoard() {
  
  const [game, setGame ] = useState([]);
  const [count, setCount] = useState(0); 

  const handleIncrement = () => {
    setCount(count + 1); 
  }

  useEffect(() => {
    const originalArray = Array.from({ length: 18 }, (_, index) => index + 1);
    let doubledArray = [...originalArray, ...originalArray];
    for (let i = doubledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1)); // Generate a random index between 0 and i
      // Swap elements at i and j
      [doubledArray[i], doubledArray[j]] = [doubledArray[j], doubledArray[i]];
    }  
    setGame(doubledArray)
  }, [])

  return (
    <div className='grid grid-rows-6 grid-cols-6 mt-10 gap-4'>
      {
        game.map((value) => {
          return( 
            <Card 
              num={value} 
              count={count} 
              onIncrement={handleIncrement} 
            />
          )
        })

      }
    </div>
  )
}

export default GameBoard