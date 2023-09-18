import React from 'react'
import { useState } from 'react'; 
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";

function Card({ question, answer }) {
    const [open, setOpen] = useState(false); 
    
    return (
        <div className='flex w-1/2 border-2 mb-5 '>
            <div className='flex h-20 ml-10'>
                {
                    !(open) ? 
                    <button
                        onClick={() => {
                            setOpen(!open)
                        }}
                        className='flex items-center'
                    >
                        <IoIosArrowForward />
                        <p>{question}</p>
                    </button> :
                     <button
                        onClick={() => {
                            setOpen(!open)
                        }}
                        className='flex items-center'
                     >
                        <div className='flex-col'>
                            <div className='flex items-center'>
                                <IoIosArrowDown />
                                <p>{question}</p>

                            </div>
                            <p className='pl-4'>{answer}</p>
                        </div>
                    </button>
                }
            </div>
        </div>
    )
}

export default Card