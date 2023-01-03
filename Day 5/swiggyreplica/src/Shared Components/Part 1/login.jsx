import React from 'react'
import '../../output.css'
import {data} from './animatedtext'


import { useState, useEffect } from "react";

// import ReactDOM from "react-dom/client";

function Timer() {
  
  const [data,setData] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setData((data) => data + 1);
    }, 1000);
  });

  return <h1>I've rendered {data} times!</h1>;
}


export default Timer