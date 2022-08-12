import React from 'react'
import PawnYard from './components/pawns/Yard'
import PawnHome from './components/pawns/Home'
import HorizontalTrack from './components/tracks/Horizontal'
import VerticalTrack from './components/tracks/Vertical'

export default function Board() {
  return (
    <div className='' style={{maxWidth: '750px'}}>
      <div className='row d-flex justify-content-center' >
        <PawnYard />
        <VerticalTrack />
        <PawnYard />
      </div>
      <div className='row d-flex justify-content-center' >
        <HorizontalTrack />
        <PawnHome />
        <HorizontalTrack />
      </div>
      <div className='row d-flex justify-content-center' >
        <PawnYard />
        <VerticalTrack />
        <PawnYard />
      </div>
    </div>
  )
}
