import React from 'react'

export default function NegativeY(props) {

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
                                    return (<div className='col-2 border abcd' style={{ width: `${trackGridWidth}px`,height: `${trackGridHeight}px`, fontSize:'10px', background: props.getColor(rowIndex, colIndex, '-y') }}>{colIndex}, {rowIndex}</div>)
                                })
                            }
                        </div>
                    )
                })
            }
        </div>
    )
}
