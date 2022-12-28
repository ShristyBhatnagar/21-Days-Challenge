
import React, {useEffect, useState } from 'react'
import './jobs.css';
import axios from "axios";



function Mynetwork () {
  const [myData,setMyData]=useState();
  const mainData=async()=>{
   const posts=await axios.get("https://jsonplaceholder.typicode.com/users")
  
    const result=posts.data;
    console.log(result)
    setMyData(result)
  
}

useEffect(()=>{
mainData()
},[])
  
  return(<>
  {myData?.map((x)=>(<div className='people'>{x.id}<br></br>{x.name}<br></br>{x.email}</div>))}
 
  </>
)
} 


export default Mynetwork