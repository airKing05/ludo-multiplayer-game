import React from 'react'


export default function Yard() {
  const [pawnHomeHoldeGridrWidth, pawnHomeHolderGridHeight] = [50, 50];
  const [pawnHolderGridLeftOffset,  pawnHolderGridRightOffset,  pawnHolderGridTopOffset,  pawnHolderGridBottomOffset] = new Array(4).fill(20);
  return (
    <div className='border bg-success' style={{width: '300px', height: '300px'}}>
      <div className=' border bg-white position-relative ' style={{ width: '200px ', height: '200px ', top: '15%', left: '15%' }}>
        {/* TOP LEFT */}
          <div className=' rounded-circle bg-success ' style={{height: `${pawnHomeHolderGridHeight}px`, width: `${pawnHomeHoldeGridrWidth}px`, position:'absolute', top: `${pawnHolderGridTopOffset}px`, left: `${pawnHolderGridLeftOffset}px` }}></div>
        {/* TOP RIGHT */}
          <div className=' rounded-circle bg-success ' style={{ height: `${pawnHomeHolderGridHeight}px`, width: `${pawnHomeHoldeGridrWidth}px`, position:'absolute', top: `${pawnHolderGridTopOffset}px`, right: `${pawnHolderGridRightOffset}px` }}></div>
        {/* BOTTOM LEFT */}
          <div className=' rounded-circle bg-success' style={{ height: `${pawnHomeHolderGridHeight}px`, width: `${pawnHomeHoldeGridrWidth}px` , position:'absolute', left: `${pawnHolderGridLeftOffset}px`, bottom: `${pawnHolderGridBottomOffset}px`}}></div>
        {/* BOTTOM RIGHT */}
          <div className=' rounded-circle bg-success' style={{ height: `${pawnHomeHolderGridHeight}px`, width: `${pawnHomeHoldeGridrWidth}px`, position:'absolute', bottom: `${pawnHolderGridBottomOffset}px`, right: `${pawnHolderGridRightOffset}px` }}></div>
      </div>
      <div className='position-relative'>
        <img className='position-absolute transition-1 transition-2 transition-3 transition-4 transition-5' src='https://bit.ly/3PjjZGr' style={{ width: '110px', bottom: '-15px', right: '25px' }} />
      </div>
     
     <section>
     
     </section>
    </div>
  )
}
