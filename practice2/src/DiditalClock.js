import React, { useState } from 'react'

export default function DiditalClock() {
    
    let [time , setCtime] = useState(new Date().toLocaleTimeString());
    let update = () => {
    setCtime (new Date().toLocaleTimeString());
    }
    setInterval(update,1000);
  return (
      <>
    <div className='clock'>
      <h1>{time}</h1>
    </div>
    </>
  )
}
