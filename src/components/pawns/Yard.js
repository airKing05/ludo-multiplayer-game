import React from 'react'

export default function Yard({bgColor}) {
  const [pawnHomeHoldeGridrWidth, pawnHomeHolderGridHeight] = [50, 50];
  const [pawnHolderGridLeftOffset,  pawnHolderGridRightOffset,  pawnHolderGridTopOffset,  pawnHolderGridBottomOffset] = new Array(4).fill(20);
  return (
    <div className='border' style={{width: '300px', height: '300px', backgroundColor: `${bgColor}`}}>
      <div className=' border bg-white position-relative ' style={{ width: '200px ', height: '200px ', top: '15%', left: '15%' }}>
        {/* TOP LEFT */}
          <div className=' rounded-circle' style={{height: `${pawnHomeHolderGridHeight}px`, width: `${pawnHomeHoldeGridrWidth}px`, position:'absolute', top: `${pawnHolderGridTopOffset}px`, left: `${pawnHolderGridLeftOffset}px`, backgroundColor: `${bgColor}` }}></div>
        {/* TOP RIGHT */}
          <div className=' rounded-circle' style={{ height: `${pawnHomeHolderGridHeight}px`, width: `${pawnHomeHoldeGridrWidth}px`, position:'absolute', top: `${pawnHolderGridTopOffset}px`, right: `${pawnHolderGridRightOffset}px`, backgroundColor: `${bgColor}` }}></div>
        {/* BOTTOM LEFT */}
          <div className=' rounded-circle' style={{ height: `${pawnHomeHolderGridHeight}px`, width: `${pawnHomeHoldeGridrWidth}px` , position:'absolute', left: `${pawnHolderGridLeftOffset}px`, bottom: `${pawnHolderGridBottomOffset}px`, backgroundColor: `${bgColor}`}}></div>
        {/* BOTTOM RIGHT */}
          <div className=' rounded-circle' style={{ height: `${pawnHomeHolderGridHeight}px`, width: `${pawnHomeHoldeGridrWidth}px`, position:'absolute', bottom: `${pawnHolderGridBottomOffset}px`, right: `${pawnHolderGridRightOffset}px`, backgroundColor: `${bgColor}` }}></div>
      </div>
    </div>
  )
}
