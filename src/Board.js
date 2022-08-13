import React from 'react'
import PawnYard from './components/pawns/Yard'
import PawnHome from './components/pawns/Home'
import PositiveY from './components/tracks/PositiveY';
import NegativeY from './components/tracks/NegativeY';
import PositiveX from './components/tracks/PositiveX';
import NegativeX from './components/tracks/NegativeX'

export default function Board() {
  const [colorGreen, colorYellow, colorRed, colorPurple] = ['green', 'yellow', 'red', '#6f42c1'];
  const axisColorMapping = {
    '+x': colorPurple,
    '-x': colorGreen,
    '+y': colorYellow,
    '-y': colorRed,
  }

  const getColor = (rowIndex, colIndex, axis) => {
    if(axis === '+x') {
      if ((rowIndex === 0 && colIndex <=6) || (rowIndex === -1 && colIndex === 6)) return axisColorMapping[axis];
    } else if (axis === '-x') {
      if ((rowIndex === 0 && colIndex >= -6) || (rowIndex === 1 && colIndex === -6)) return axisColorMapping[axis];
    } else if (axis === '+y') {
      if ((colIndex === 0 && rowIndex <=6) || (rowIndex === 6 && colIndex === 1)) return axisColorMapping[axis];
    } else if (axis === '-y') {
      if ((colIndex === 0 && rowIndex >= -6) || (rowIndex === -6 && colIndex === -1)) return axisColorMapping[axis];
    }   
  }


  return (
    <div className='' style={{maxWidth: '750px'}}>
      <div className='row d-flex justify-content-center' >
        <PawnYard bgColor={colorGreen} />
        <PositiveY getColor={getColor} />
        <PawnYard bgColor={colorYellow} />
      </div>
      <div className='row d-flex justify-content-center' >
        <NegativeX getColor={getColor}/>
        <PawnHome />
        <PositiveX getColor={getColor}/>
      </div>
      <div className='row d-flex justify-content-center' >
        <PawnYard bgColor={colorRed} />
        <NegativeY getColor={getColor}/>
        <PawnYard bgColor={colorPurple} />
      </div>
    </div>
  )
}
