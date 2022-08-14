import React from 'react'

export default function PositiveX(props) {

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
                                    return (<div className='col-2 border' style={{ width: `${trackGridWidth}px`,height: `${trackGridHeight}px`, fontSize:'10px', background: props.getColor(rowIndex, colIndex, '+x')}}>{colIndex}, {rowIndex}</div>)
                                })
                            }
                        </div>
                    )
                })
            }
        </div>
    )
}
