import React from 'react'
import Child2 from './Child2'

const Child3 = (prop1) => {
    console.log(prop1);
  return (
    <div><h1>{prop1.prop1.props.name}</h1></div>
  )
}

export default Child3