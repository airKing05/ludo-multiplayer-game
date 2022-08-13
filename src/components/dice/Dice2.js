import React, { useState } from 'react'
import './dice2.css'

export default function Dice2() {
  const [diceValue, setDiceValue] = useState(1);
  const min = 1;
  const max = 7;
  let arr = new Array(diceValue).fill(0)

  function getRandomNumber() {
    let randomValue = Math.floor(Math.random() * (max - min)) + min;
    setDiceValue(randomValue)
  }

  let pips = isNaN(diceValue)
  console.log(!pips)

  let dots = Number.isInteger(diceValue) ? 
  arr && arr.map((_, index) => {
    return <span class="dot" key={index}></span>
  }) :  null  


  return (
    <div onClick={() => getRandomNumber()} >
      <div className="face">{dots}</div>
    </div>
    
  )
}
