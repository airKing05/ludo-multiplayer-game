import React from 'react'

export default function NegativeY() {

    const trackGridWidth = 50;
    const trackGridHeight = 50;
    const trackWidthGridCount = 3;
    const trackHeightGridCount = 6;

    const offset = -2;
   

    const XDirectionPositions = [-1, 0, 1];
    const YDirectionPositions = new Array(trackHeightGridCount).fill().map((_, index) => -index + offset);
    console.log(YDirectionPositions);
    return (
        <div className='bg-white' style={{ width: '150px', height: '300px' }}>
            {
                YDirectionPositions.map((rowIndex) => {
                    
                    return (
                        <div className='row'>
                            {
                               
                                XDirectionPositions.map((colIndex) => {
                                    if (rowIndex == -6 & colIndex== -1) {
                                        return (<div className='col-2 border colorRed' style={{ width: `${trackGridWidth}px`, height: `${trackGridHeight}px`, fontSize: '10px' }}>{colIndex}, {rowIndex}</div>)
                                    } else if (rowIndex > -7 & colIndex == 0){
                                        return (<div className='col-2 border colorRed' style={{ width: `${trackGridWidth}px`, height: `${trackGridHeight}px`, fontSize: '10px' }}>{colIndex}, {rowIndex}</div>)
                                    }
                                    return (<div className='col-2 border abcd' style={{ width: `${trackGridWidth}px`,height: `${trackGridHeight}px`, fontSize:'10px' }}>{colIndex}, {rowIndex}</div>)
                                })
                            }
                        </div>
                    )
                })
            }
        </div>
    )
}
