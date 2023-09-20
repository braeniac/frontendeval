import React, { useState } from 'react'

function Calculator() {

    const [p, setP] = useState(0);
    const [r, setR] = useState(0); 
    const [l, setL] = useState(0); 
    const [total, setTotal] = useState(0); 

    const [calc, setCalc] = useState(false); 

    const calculate = () => {        
        const monthlyInterestRate = (r/12) / 100; 
        const numberOfPayments = l * 12; 

        const left = monthlyInterestRate * Math.pow((1+monthlyInterestRate), numberOfPayments); 
        const right = (Math.pow((1+monthlyInterestRate), numberOfPayments) - 1)

        const divide = left / right; 

        setTotal(p*divide); 

    }

    return (
        <div className='flex items-center justify-center mt-10'>
            <div className='border-2 border-black w-1/2 p-5 font-bold'>
                <p>Principal loan amount</p>
                <input 
                    type="text"
                    className='border-black border-2'
                    onChange={e => setP(e.target.value)}
                />
                <p className='font-bold'>Interest rate</p>
                <input 
                    type="text"
                    className='border-black border-2'
                    onChange={e => setR(e.target.value)}
                /> %
                <p className='font-bold'>Length of loan</p>
                <input 
                    type="text"
                    className='border-black border-2'
                    onChange={e => setL(e.target.value)}
                /> years

                <div>
                    <button 
                        className='mt-5 border-2 border-black w-22 px-2'
                        onClick={() => {
                            calculate()
                            setCalc(true)
                        }}
                    >
                        <p>Calculate</p>
                    </button>
                </div>
                {
                    (calc)?
                    <div>
                        <p>Your mothly mortgage payment will be ${total.toFixed(0)}</p>
                    </div> : null
                }
            </div>
        </div>
    )
}

export default Calculator