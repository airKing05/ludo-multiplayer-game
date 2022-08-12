import React from 'react'

export default function PawnsHome() {
  return (
    <div className='container border bg-success' style={{width: '600px', height: '600px'}}>
      <div className=' border bg-white position-relative ' style={{ width: '400px ', height: '400px ', top: '15%', left: '15%' }}>
          <div className='d-flex justify-content-around mt-5 pb-5'>
          <div className=' rounded-circle bg-success ' style={{height: '100px', width: '100px'}}></div>
          <div className=' rounded-circle bg-success ' style={{ height: '100px', width: '100px' }}></div>
          </div>
        <div className='d-flex justify-content-around mt-5'>
          <div className=' rounded-circle bg-success' style={{ height: '100px', width: '100px' }}></div>
          <div className=' rounded-circle bg-success' style={{ height: '100px', width: '100px' }}></div>
        </div>
      </div>
    </div>
  )
}
