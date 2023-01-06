import React from 'react'
import '../../output.css'
import {data} from './animatedtext'


import { useState, useEffect } from "react";

// import ReactDOM from "react-dom/client";

function Timer() {
  const [data1,setData1] = useState(0);

  
  const timerMain=()=>{
    let counter=0;

     const interval=setInterval(() => {
      
    if (counter > data.length) {
      clearInterval(interval);
    } 
      else
      {      
      setData1(data1+1);
      counter++; // local variable that this closure will see
    }
    
  }, 300);
 
}


  useEffect(() => {
   let m= setInterval(()=>timerMain(),2000);
   
 
  return clearInterval(m);
      
  },[])

   
  

  return(
    <div>
    
   
      <h1 className='text-lg' key={data[data1].id}>{data[data1].text} </h1>
    
      
  
  </div>
  )
}


export default Timer