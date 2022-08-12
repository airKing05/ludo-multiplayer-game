import React from 'react'

export default function HorizontalTrack() {

    const trackGridWidth = 50;
    const trackGridHeight = 50;
    return (
        <div className='bg-white' style={{ width: '300px', height: '150px' }}>
            <div className='row'>
                <div className='col-2 border' style={{ width: `${trackGridWidth}px`, height: `${trackGridHeight}px` }}></div>
                <div className='col-2 border' style={{ width: `${trackGridWidth}px`, height: `${trackGridHeight}px` }}></div>
                <div className='col-2 border' style={{ width: `${trackGridWidth}px`, height: `${trackGridHeight}px` }}></div>
                <div className='col-2 border' style={{ width: `${trackGridWidth}px`, height: `${trackGridHeight}px` }}></div>
                <div className='col-2 border' style={{ width: `${trackGridWidth}px`, height: `${trackGridHeight}px` }}></div>
                <div className='col-2 border' style={{ width: `${trackGridWidth}px`, height: `${trackGridHeight}px` }}></div>
            </div>
            <div className='row'>
                <div className='col-2 border' style={{ width: `${trackGridWidth}px`, height: `${trackGridHeight}px` }}></div>
                <div className='col-2 border' style={{ width: `${trackGridWidth}px`, height: `${trackGridHeight}px` }}></div>
                <div className='col-2 border' style={{ width: `${trackGridWidth}px`, height: `${trackGridHeight}px` }}></div>
                <div className='col-2 border' style={{ width: `${trackGridWidth}px`, height: `${trackGridHeight}px` }}></div>
                <div className='col-2 border' style={{ width: `${trackGridWidth}px`, height: `${trackGridHeight}px` }}></div>
                <div className='col-2 border' style={{ width: `${trackGridWidth}px`, height: `${trackGridHeight}px` }}></div>
            </div>
            <div className='row'>
                <div className='col-2 border' style={{ width: `${trackGridWidth}px`, height: `${trackGridHeight}px` }}></div>
                <div className='col-2 border' style={{ width: `${trackGridWidth}px`, height: `${trackGridHeight}px` }}></div>
                <div className='col-2 border' style={{ width: `${trackGridWidth}px`, height: `${trackGridHeight}px` }}></div>
                <div className='col-2 border' style={{ width: `${trackGridWidth}px`, height: `${trackGridHeight}px` }}></div>
                <div className='col-2 border' style={{ width: `${trackGridWidth}px`, height: `${trackGridHeight}px` }}></div>
                <div className='col-2 border' style={{ width: `${trackGridWidth}px`, height: `${trackGridHeight}px` }}></div>
            </div>
        </div>
    )
}
