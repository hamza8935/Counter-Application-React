import React, { useState } from 'react'

export default function Events() {
    
   let red = '#FF0000';
    let [ color, setColor] = useState(red); 

    let font1 = 'click me';
   let  [font , setFont] = useState(font1)

    let changeColor = () => {
        
        let purple = '#953553'
        setColor(purple);
        setFont('change color');

    }

    let click = () => {
        red = '#FF0000'
        setColor('#FFC0CB');
        setFont('Hello guys')
    }

  
  return (
      <>
    <div className='main5' style={ {backgroundColor : color} }>
      <button onClick={changeColor} onDoubleClick={click}>{font}</button>
    </div>
    </>
  )
}
