import React from 'react'
import '../../SASS/index.css'
import '../../output.css'
import { data } from './animatedtext'


import { useState, useEffect } from "react";

var counter = 0;
function Timer() {
  const [data1, setData1] = useState(0);



  const timerMain = () => {

    const interval = setInterval(() => {

      if (counter >= 4) {
        counter = 0;
      }
      else {
        counter++;
        console.log(counter)
        setData1(counter)
        // local variable that this closure will see
      }

    }, 1000);

  }


  useEffect(() => {
    let m = setInterval(() => timerMain(), 1000);




  }, [])




  return (
    <div>


      <h1 className='h1tag' key={data[data1].id}>{data[data1].text} </h1>
      <h3 className='h3tag'>Order food from favourite restaurants near you.</h3>



    </div>
  )
}


export default Timer