import React from 'react'
import PawnsHome from './components/PawnsHome'
import PawnsPort from './components/PawnsPort'
import TrackHorizontal from './components/TrackHorizontal'
import TrackVertical from './components/TrackVertical'

export default function PlayBoard() {
  return (
    <div className='' style={{maxWidth: '1500px'}}>
      <div className='row d-flex justify-content-center' >
        <PawnsHome />
        <TrackVertical />
        <PawnsHome />
      </div>
      <div className='row d-flex justify-content-center' >
        <TrackHorizontal />
        <PawnsPort />
        <TrackHorizontal />
      </div>
      <div className='row d-flex justify-content-center' >
        <PawnsHome />
        <TrackVertical />
        <PawnsHome />
      </div>
      {/* <TrackHorizontal/> */}
      {/* <PawnsHome/> */}
      {/* <TrackVertical/> */}
      {/* <PawnsPort/> */}
    </div>
  )
}
