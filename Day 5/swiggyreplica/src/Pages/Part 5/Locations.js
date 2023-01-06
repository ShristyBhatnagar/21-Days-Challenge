// import React, {useEffect, useState } from 'react';
import "../../SASS/index.css";
import { data } from "../../CityData/Cities";

function Locations() {
  // const [myData,setmyData]=useState();
  // const citiesName= async()=>{
  //     const post=await axios.get("https://jsonplaceholder.typicode.com/users")
  //     const result=post.data;
  //     console.log(result)
  //     setmyData(result)

  // }

  // useEffect(()=>{
  // citiesName()
  // },[])

  return (
    <>
      {" "}
      {data?.map((x, i) => (
        <div key={i} className="people">
          <a href="#">{x.City}</a>
        </div>
      ))}
    </>
  );
}

export default Locations;
