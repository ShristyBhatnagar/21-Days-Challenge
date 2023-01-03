import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

function Timer() {
    const [count,setCount]=useState(0);
    useEffect(()=>{
        setTimeout(()=>{
            setCount((count)=>count+1);
       
    },1000);
});
  return (
    
    <div>{count}</div>
  )
}

export default Timer