import React from 'react'
import Card from './Card';

function FaqComponent() {

  const arr = [
    {
      question: "How many bones does a cat have?",
      answer: "A cat has 230 bones - 6 more than a human",
    },
    {
      question: "How much do cats sleep?",
      answer: "The average cat sleeps 12-16 hours per day",
    },
    {
      question: "How long do cats live",
      answer: "Outdoor cats live 5 years on average. Indoor\ncats live 15 years on average.",
    },
  ]; 

  return (
    <div className='flex flex-col justify-center items-center'>
      <h1 className='font-bold text-2xl my-10'>Frequently asked questions</h1>
      {
        arr.map(({ question, answer }) => (
          <Card question={question} answer={answer} />
        ))
      }
    </div>
  )
}

export default FaqComponent