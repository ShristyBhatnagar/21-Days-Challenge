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
    
  }, 200);
 
}


  useEffect(() => {
   let m= setInterval(()=>timerMain(),1000);
   
 
//  return clearInterval(m);
      
  },[])

   
  

  return(
    <div>
    
   
      <ul><li key={data[data1].id}>{data[data1].text} </li>
    
      </ul>
  
  </div>
  )
}


export default Timer