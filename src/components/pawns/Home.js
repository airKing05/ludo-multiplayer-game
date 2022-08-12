import React from 'react'

export default function Home() {
  return (
      <div style={{position: 'relative', width: '150px', height: '150px', padding: '0px'}}>
          <div className='triangle-down' style={{position: 'absolute', top:'0px'}}></div>
          <div className='triangle-up' style={{position: 'absolute', bottom:'0px'}}></div>
          <div className='triangle-right'></div>
          <div className='triangle-left' style={{position: 'absolute', right:'0px', top: '0px'}}></div>      
    </div>
  )
}
