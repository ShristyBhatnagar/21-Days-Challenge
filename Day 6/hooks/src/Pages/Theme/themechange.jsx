import React from "react"
import '../../App.css'
import { useState } from "react"


const Usestate = () => {
    const [theme,settheme]=useState("theme1")
    const [count,setcount]=useState(0)
   const setting=()=>{
       settheme("theme2")
       setcount(count+1)
   }
  return (
    <>
    <button onClick={setting}>theme</button>
    <button onClick={setting}>count</button>
     <h1 id={theme}> you </h1>
     <h1>{count}</h1>
   </>
  )
}
export default Usestate







