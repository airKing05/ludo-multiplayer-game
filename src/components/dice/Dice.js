
import React, { useState, useEffect } from 'react';
import { Fragment } from 'react';
import './dice.css'
import './dice1.css'

export default function Dice() {
    const [diceValue, setDiceValue] = useState(1);
    const [rows, setRows] = useState(0);

    console.log("SET ROWS", rows, "randomValue", diceValue);
    const min = 1;
    const max = 7;

    function getRandomNumber() {
        let randomValue = Math.floor(Math.random() * (max - min)) + min;
        let rows = Math.ceil(randomValue / 2);
        // if (randomValue == 2){
        //    let rows = 2
        //     setRows(rows);
        // }else if ( randomValue == 3){
        //    let rows = 3
        //     setRows(rows);
        // }else{
        //     let rows = Math.ceil(randomValue / 2); 
        //     setRows(rows);
        // }
        // console.log("SET ROWS", randomValue, rows);
        setRows(rows);
        setDiceValue(randomValue);

    }
    // 1 1
    // 2 1
    // 3 2 
    // 4 2 
    // 5 3
    return (
        <div id="" onClick={() => getRandomNumber()} >
            <div className='row dice' style={{ border: '0px solid black', padding: '0px', margin: '0px' }}>
                {
                    new Array(rows).fill().map((elem, index) => {
                        return (
                            <div className='row' style={{ border: '0px solid yellow', padding: '0px', margin: '0px auto', textAlign: 'center' }}>
                                {
                                    index < rows - 1 || diceValue % 2 == 0
                                        ? <Fragment>
                                            <div className='col' style={{ border: '0px solid pink' }}>*</div>
                                            <div className='col' style={{ border: '0px solid pink' }}>*</div>
                                        </Fragment>
                                        : diceValue === 5 ? <div className=''>
                                            {
                                                rows / 2 > 1 ?  < >
                                                    {console.log(rows % 2)}
                                                    <div className='col' style={{ border: '0px solid pink' }}>*</div>
                                                    <div className='col' style={{ border: '0px solid pink' }}>*</div>
                                                </> : <>
                                                        {console.log(rows % 2)}
                                                    <div className='col' style={{ border: '0px solid pink' }}>*</div>
                                                </>
                                            }
                                        </div> 
                                        : 
                                        <>
                                            <div className='col' style={{ border: '0px solid pink' }}>*</div>
                                        </>
                                }
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}
