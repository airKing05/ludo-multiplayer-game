import React from 'react'

export default function Yard({bgColor}) {
  const [pawnHomeHoldeGridrWidth, pawnHomeHolderGridHeight] = [40, 40];
  const [pawnHolderGridLeftOffset,  pawnHolderGridRightOffset,  pawnHolderGridTopOffset,  pawnHolderGridBottomOffset] = new Array(4).fill(15);


  return (
    <div className='border' style={{width: '300px', height: '300px', backgroundColor: `${bgColor}`, padding: '0px', position: 'relative'}}>
      <div className='bg-white' style={{ width: '220px ', height: '220px ', border: '3px solid black', position:'absolute',   top:'40px', left: '40px'}}>
        {/* TOP LEFT */}
          <div className=' rounded-circle' style={{height: `${pawnHomeHolderGridHeight}px`, width: `${pawnHomeHoldeGridrWidth}px`, position:'absolute', top: `${pawnHolderGridTopOffset}px`, left: `${pawnHolderGridLeftOffset}px`, backgroundColor: `${bgColor}` }}></div>
        {/* TOP RIGHT */}
          <div className=' rounded-circle' style={{ height: `${pawnHomeHolderGridHeight}px`, width: `${pawnHomeHoldeGridrWidth}px`, position:'absolute', top: `${pawnHolderGridTopOffset}px`, right: `${pawnHolderGridRightOffset}px`, backgroundColor: `${bgColor}`}}></div>
        {/* BOTTOM LEFT */}
          <div className=' rounded-circle' style={{ height: `${pawnHomeHolderGridHeight}px`, width: `${pawnHomeHoldeGridrWidth}px` , position:'absolute', left: `${pawnHolderGridLeftOffset}px`, bottom: `${pawnHolderGridBottomOffset}px`, backgroundColor: `${bgColor}`}}></div>
        {/* BOTTOM RIGHT */}
          <div className=' rounded-circle' style={{ height: `${pawnHomeHolderGridHeight}px`, width: `${pawnHomeHoldeGridrWidth}px`, position:'absolute', bottom: `${pawnHolderGridBottomOffset}px`, right: `${pawnHolderGridRightOffset}px`, backgroundColor: `${bgColor}`}}></div>
      </div>
      {/* <div className='position-relative'>
        <img className='position-absolute transition-1 transition-2 transition-3 transition-4 transition-5' src='https://bit.ly/3PjjZGr' style={{ width: '110px', bottom: '-15px', right: '25px' }} />
      </div> */}
     
    </div>
  )
}
