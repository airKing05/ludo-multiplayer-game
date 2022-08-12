import React from 'react'

export default function PawnsPort() {
  return (
      <div className='container border position-relative' style={{width: '300px', height: '300px'}}>
          <div className='triangle-down pl-0 position-relative' style={{  left: '-13px' }}></div>
          <div className='triangle-up pl-0 position-relative' style={{left:'-13px'}}></div>
          <div className='triangle-right pl-0 position-absolute' style={{top:'0px ', left: '0px' }}></div>
          <div className='triangle-left pl-0 position-absolute' style={{ top: '0px ', left: '150px' }}></div>      
    </div>
  )
}
