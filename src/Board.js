import React from 'react'
import PawnYard from './components/pawns/Yard'
import PawnHome from './components/pawns/Home'
import PositiveY from './components/tracks/PositiveY';
import NegativeY from './components/tracks/NegativeY';
import PositiveX from './components/tracks/PositiveX';
import NegativeX from './components/tracks/NegativeX'

export default function Board() {
  const [colorGreen, colorYellow, colorRed, colorPurple] = ['green', 'yellow', 'red', '#6f42c1']
  return (
    <div className='' style={{maxWidth: '750px'}}>
      <div className='row d-flex justify-content-center' >
        <PawnYard bgColor={colorGreen} />
        <PositiveY />
        <PawnYard bgColor={colorYellow} />
      </div>
      <div className='row d-flex justify-content-center' >
        <NegativeX />
        <PawnHome />
        <PositiveX />
      </div>
      <div className='row d-flex justify-content-center' >
        <PawnYard bgColor={colorRed} />
        <NegativeY />
        <PawnYard bgColor={colorPurple} />
      </div>
    </div>
  )
}
