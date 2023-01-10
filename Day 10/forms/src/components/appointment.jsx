import React from 'react'
import {useForm} from 'react-hook-form'


const Appointment=()=>{
const Handling=useForm();

const onSubmit=(data)=>{
console.log(data);
    }    
    return(
        <form className="Appointment" onSubmit={Handling.handleSubmit(onSubmit)}>
            <p>Appointment Form</p>
            <input placeholder="FirstName" name="FirstName" {...Handling.register("FirstName",{required:true})}/>
            <input placeholder="Password" {...Handling.register("Password",{required:true,pattern:/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/})}/>
            {Handling.formState.errors.Password && Handling.formState.errors.Password.type==="pattern" && <span>The Password must contain 8 letter</span>}
            {Handling.formState.errors.Password && Handling.formState.errors.Password.type==="required" && <span>This is required</span>}
            <input type="submit"/>
        </form>
    )
}


export default Appointment