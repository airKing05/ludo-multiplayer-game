import React from 'react'

export default function PositiveX() {

    const trackGridWidth = 50;
    const trackGridHeight = 50;
    const trackWidthGridCount = 6;
    const trackHeightGridCount = 3;
    
    const offset = 2;

    const YDirectionPositions = [1, 0, -1];
    const XDirectionPositions = new Array(trackWidthGridCount).fill().map((_, index) => index + offset);
    console.log(YDirectionPositions);
    return (
        <div className='bg-white' style={{ width: '300px', height: '150px' }}>
            {
                YDirectionPositions.map((rowIndex) => {
                  
                    return (
                        <div className='row'>
                            {
                                XDirectionPositions.map((colIndex) => {
                                    if(rowIndex== -1 & colIndex == 6){
                                        return (<div className='col-2 border colorPurple' style={{ width: `${trackGridWidth}px`, height: `${trackGridHeight}px`, fontSize: '10px' }}>{colIndex}, {rowIndex}</div>)
                                    } else if (rowIndex == 0 & colIndex < 7){
                                        return (<div className='col-2 border colorPurple' style={{ width: `${trackGridWidth}px`, height: `${trackGridHeight}px`, fontSize: '10px' }}>{colIndex}, {rowIndex}</div>)
                                    }
                                    return (<div className='col-2 border' style={{ width: `${trackGridWidth}px`,height: `${trackGridHeight}px`, fontSize:'10px' }}>{colIndex}, {rowIndex}</div>)
                                })
                            }
                        </div>
                    )
                })
            }
        </div>
    )
}
