import React, { useState, useEffect } from 'react'
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';

function Countdown({ hours, setHours, minutes, setMinutes, seconds, setSeconds, setStart }) {

    const [pause, setPause] = useState(false); 
    const [timer, setTimer] = useState(1000); 

    useEffect(() => {
        if (!pause) {
            setTimeout(async () => {  
                if (seconds > 0) {
                    setSeconds(seconds - 1)
                } else if (minutes > 0 && seconds === 0) {
                    setMinutes(minutes - 1)
                    setSeconds(59)
                } else if (hours > 0 && minutes === 0 && seconds === 0) {
                    setHours(hours - 1)
                    setMinutes(59)
                } else if (hours === 0 && minutes === 0 && seconds === 0) {
                    NotificationManager.success('The timer is compelete', 'Countdown Timer')
                }
            }, timer)
        }
    }, [hours, minutes, seconds, pause])

    return (
    <div className='flex flex-row items-center justify-center space-x-5 font-bold'>
        <p>{hours}</p>
        <p>:</p>
        <p>{minutes}</p> 
        <p>:</p>
        <p>{seconds}</p> 
        {
            !(pause) ? 
            <button
                className='border-2 px-5 py-1 border-black'
                onClick={() => {
                   setPause(true)
                   setTimeout(0)
                }}

            >
                <p>Pause</p>
            </button> : 
            <button
                className='border-2 px-5 py-1 border-black'
                onClick={() => {
                    setPause(false)
                    setTimer(1000)           
                }}
            >
                <p>Start</p>
            </button>
        }
        <button
             className='border-2 px-5 py-1 border-black'
             onClick={() => {
                setStart(false)
                setHours(0)
                setMinutes(0)
                setSeconds(0); 
             }}
        >
            <p>Reset</p>
        </button>

        <NotificationContainer />
    
    </div>
  )
}

export default Countdown