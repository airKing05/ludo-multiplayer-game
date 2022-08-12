import React from 'react'
import PawnYard from './components/pawns/Yard'
import PawnHome from './components/pawns/Home'
import PositiveY from './components/tracks/PositiveY';
import NegativeY from './components/tracks/NegativeY';
import PositiveX from './components/tracks/PositiveX';
import NegativeX from './components/tracks/NegativeX'

export default function Board() {
  return (
    <div className='mx-auto' style={{maxWidth: '750px'}}>
      <div className='row d-flex justify-content-center' >
        <PawnYard />
        <PositiveY />
        <PawnYard />
      </div>
      <div className='row d-flex justify-content-center' >
        <NegativeX />
        <PawnHome />
        <PositiveX />
      </div>
      <div className='row d-flex justify-content-center' >
        <PawnYard />
        <NegativeY />
        <PawnYard />
      </div>
    </div>
  )
}
