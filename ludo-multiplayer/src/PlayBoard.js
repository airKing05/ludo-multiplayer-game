import React from 'react'
import PawnsHome from './components/PawnsHome'
import PawnsPort from './components/PawnsPort'
import TrackHorizontal from './components/TrackHorizontal'
import TrackVertical from './components/TrackVertical'

export default function PlayBoard() {
  return (
    <div className='container' style={{maxWidth: '1500px'}}>
      {/* <TrackHorizontal/> */}
      {/* <PawnsHome/> */}
      {/* <TrackVertical/> */}
      <PawnsPort/>
    </div>
  )
}
