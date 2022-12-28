import React from 'react'
import Child2 from './Child2'





const Child1 = () => {
    const array1= {
        name: 'Srishti',
        Id:1
    }
  return (
    <>
    <div><h1>{this.array1.name}</h1>
        <Child2 props={this.array1}/></div>
        </>
  )
}
export default Child1
