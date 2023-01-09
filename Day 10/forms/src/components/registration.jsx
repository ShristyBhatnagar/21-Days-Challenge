import React from 'react'
import { useForm } from "react-hook-form";
import { useState } from 'react';
import '../App.css'

const Registration = () => {
  const {register,handleSubmit,watch,formState:{errors}}=useForm();
   const onSubmit =data =>(data);
   const [data,setData]=useState("")
  console.log(watch())
  
  return (
    <div className='form'>
    <form onSubmit={handleSubmit((data)=>setData(JSON.stringify(data)))}>
     <div className='content'> <label>First Name:</label>
      <input placeholder='First name'{...register("firstName", {required:"this is required"})}></input>
      
      {errors.firstName && <span>this is required</span>}<br></br>
      </div>
      <div className='content'>
      <label>Gender:</label>
      <select {...register("gender",{required:true})}>
      <option value="">selection</option>
        <option value="female">female</option>
        <option value="male">male</option>
        <option value="other">other</option>
      </select>
      
      {errors.gender && <p>Please select</p>}
      <br></br>
      </div>
      <div className='content'>
      <label>Email:</label>
      <input placeholder="Email" type="email" {...register("email",{required:true})}/>
      <br></br>
      </div>
      <div className='content'>
      <label>Age:</label>
      <input placeholder="age" type="age" {...register("age",{pattern:/\d+/})}/>
      <br></br>
      </div>
      <div className='content'>
     <label>Phone:</label>
      <input placeholder="Phonenumber" type="number" {...register("PhoneNumber",{minLength:10,maxLength:10})}></input>
   
      {errors.PhoneNumber && <span>max 10 digit</span>}
      <br></br>
      </div>
      <button>Submit</button>
    
     
     

    </form>
    </div>
  )
  
}

export default Registration