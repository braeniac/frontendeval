import React, { useState } from 'react'

import Timer from './Timer';
import Countdown from './Countdown';

function CountdownTimer() {
   
  const [start, setStart] = useState(false); 
  const [hours, setHours] = useState(0); 
  const [minutes, setMinutes] = useState(0); 
  const [seconds, setSeconds] = useState(0); 
  
  return (
    <div>
      <h1 className='font-bold text-3xl flex items-center justify-center my-10'>
        Countdown Timer
      </h1>

      {
        (!start) ? 
        <Timer 
          setStart={setStart} 
          setHours={setHours}
          setMinutes={setMinutes}
          setSeconds={setSeconds}
        /> :
        <Countdown 
          setStart={setStart}
          setHours={setHours}
          setMinutes={setMinutes}
          setSeconds={setSeconds}
          hours={hours}
          minutes={minutes}
          seconds={seconds}
        />
      }

    
      

    </div>
  )
}

export default CountdownTimer