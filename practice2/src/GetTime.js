import React, { useState } from 'react'

export default function GetTime() {
     
    console.log(GetTime);
    let [GoTime , setTime] = useState(new Date().toLocaleTimeString());
    let time = () => {
        
        setTime( new Date().toLocaleTimeString())
       
    }
  return (
    <div className='main1'>
           <h2>{GoTime}</h2>
           <button className='btn' onClick={time} >Get Time</button>
    </div>
  )
}
