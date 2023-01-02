import React from 'react'
import '../../SASS/index.css'
import { TbFocus2 } from "react-icons/tb";
// import'./App.css'

const Login = () => {
  return (
    <>
   
    <div className='leftelem'>
    <img src="https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Swiggy_logo.svg/1280px-Swiggy_logo.svg.png" alt="logo" width="200" height="80"/>
   
    <div className='login'>Login<button className='signup'>Sign Up</button></div> 
    </div>
    <img className='intro'  src='Lunch.jpg' alt='img'/>
    <div className='Part1div'>
    <div className='LocationBar' >
  
    <input className='Loco' type='text' placeholder='Enter your delivery location '></input>
   
    <div className='ico'>
    <TbFocus2/>
    </div>
    

    <button className='FindButton'>Find Food </button>
    </div>
    
    
    <div className='PopularCity'>
    <h4 >Popular Cities in India</h4>

    <a className='popcity'>Ahmedabad</a> <a className='popcity'>Bangalore</a> <a className='popcity'>Chennai</a> <a className='popcity'>Delhi</a> <a className='popcity'>Gurgaon</a> <a className='popcity'>Hyderabad</a> <a className='popcity'>Kolkata</a> <a className='popcity'>Mumbai</a> <a className='popcity'>Pune& more.</a>
    </div>
    </div>
    
    

    
   
    </>
  )
}

export default Login