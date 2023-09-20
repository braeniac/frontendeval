import React, { useState } from 'react'

function Timer({ setStart, setHours, setMinutes, setSeconds }) {

  return (
    <div className='flex flex-row items-center justify-center space-x-5 font-bold'>
        <input 
            type="text" 
            name="hours" 
            className='w-10 border-2 border-black text-neutral-400'
            defaultValue="HH"
            onChange={e => setHours(e.target.value)}
        />
        <p>:</p>
        <input 
            type="text" 
            name="minutes" 
            className='w-10 border-2 border-black text-neutral-400'
            defaultValue="MM"
            onChange={e => setMinutes(e.target.value)}
        />
        <p>:</p>
        <input 
            type="text" 
            name="seconds" 
            className='w-10 border-2 border-black text-neutral-400'
            defaultValue="SS"
            onChange={e => setSeconds(e.target.value)}
        />

        <button
            className='border-2 px-5 py-1 border-black'
            onClick={() => {
                setStart(true)
            }}
        >
            <p>Start</p>
        </button>
        
    </div>
  )
}

export default Timer