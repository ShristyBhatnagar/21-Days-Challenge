import React from 'react'
import { useForm } from 'react-hook-form'
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup";


const profileSchema=yup.object().shape({
  FirstName:yup.string().required(),
  DOB:yup.date().required(),
  email:yup.string().required(),
  password:yup.string().min(8).max(32).required()

})

//Using Yup 
const Admission = () => {

    const FormCreation=useForm({
        defaultvalues:{
            FirstName:"Srishti"
        },
        mode:"onChange",
        resolver:yupResolver(profileSchema)})
    const onSubmitHandler=(data)=>{
        console.log({data})
        
    }
    const print=FormCreation.watch("email")
  return (
   <form className='Admission' onSubmit={FormCreation.handleSubmit(onSubmitHandler)}>
    <h3>Admission Form</h3>
    <input type="text" placeholder='First Name' name="FirstName"{...FormCreation.register("FirstName")}/>
    <p>{FormCreation.formState.errors.FirstName?.message}</p>
    <input type="date" placeholder='Date of Birth' name='DOB'{...FormCreation.register("date")}/>
     <p>{FormCreation.formState.errors.date?.message}</p>
    <input type="email" placeholder='abc@abc.com' name='email'{...FormCreation.register("email")}/>
    <p>{FormCreation.formState.errors.email?.message}</p>
    <p>{print}</p>
    <input type="password" placeholder='Password' name="Password"{...FormCreation.register("password")}/>
   
    {FormCreation.formState.errors.password?.message}
    <input type="submit"/>
   </form>
  )
}

export default Admission