import React, { Fragment } from 'react'
import { move } from '../../helper/movements';
import { useRef } from 'react';

export default function Home() {
  const pawnElement=  useRef();
  let x = -1;
  let y = -6;
  const gridWidth = 50;
  const gridHeight = 50;
  const movePawn = () => {
    let [_x, _y] = move(x, y);
    x += _x;
    y += _y;
    const translateX = _x * gridWidth * (-1 * _x);
    const translateY = _y * gridHeight * (-1 * _y);
    console.log(_x, _y, x, y, translateX, translateY);

    pawnElement.current.style.transform += `translate(${translateX}px, ${translateY}px)` 

  }


  return (
      <Fragment>
          <div style={{position: 'relative', width: '150px', height: '150px', padding: '0px'}}>
            <div className='triangle-down' style={{position: 'absolute', top:'0px'}}>
                <div style={{width:'50px', height: '50px', background:'black', position:'absolute', zIndex:100, left: '-75px', top:'275px'}} onClick={movePawn} ref={pawnElement}></div>
            </div>

            <div className='triangle-up' style={{position: 'absolute', bottom:'0px'}}>
              {/* <div style={{width:'50px', height: '100px', background:'black', position:'absolute', zIndex:100}}></div> */}
            </div>
            <div className='triangle-right'></div>
            <div className='triangle-left' style={{position: 'absolute', right:'0px', top: '0px'}}></div>      
          </div>
      </Fragment>
      
  )
}
