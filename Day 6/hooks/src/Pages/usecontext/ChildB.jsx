import React from 'react'
import {ChildName, LName}  from './Parent'
const ChildB = () => {
  return (
    <>
    <ChildName.Consumer>
        {(kidname)=>{return(
           <LName.Consumer>{(kidLName)=>{return(<h1>Here is the child {kidname} {kidLName}</h1>)}}</LName.Consumer> 
        )}}  
    </ChildName.Consumer>
    
    </>
  )
}

export default ChildB