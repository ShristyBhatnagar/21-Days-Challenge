import React from 'react'
import '../../SASS/index.css'
import { TbFocus2 } from "react-icons/tb";
import Anime from './login';
import {BrowserRouter,Routes,Route, Link} from 'react-router-dom'
// import'./App.css'


const Loginpg = () => {
  return (
    <>
   
    <div className='leftelem'>
    <img src="https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Swiggy_logo.svg/1280px-Swiggy_logo.svg.png" alt="logo" width="200" height="80"/>
    
    <div className='leftelem__login'>
   
    <Link to="/login">Login</Link>
    
 
    
    <button className='leftelem__signup'>Sign Up</button>
    
    </div>
      
    
    </div>
    
    <Anime/>
    <img className='intro'  src='Lunch.jpg' alt='img'/>
    <div className='Part1div'>
      
    
    <div className='Part1div__LocationBar' >
    
    <input className='Part1div__Loco' type='text' placeholder='Enter your delivery location '></input>
   
    <div className='Part1div__ico'>
    <TbFocus2/>
    </div>
   

    <button className='Part1div__FindButton'>Find Food </button>
    </div>
    
    
    <div className='PopularCity'>
    <h4 className='font-mono' >Popular Cities in India</h4>

    <a href='#' className='popcity'>Ahmedabad</a> <a href='#' className='popcity'>Bangalore</a> <a  href='#' className='popcity'>Chennai</a> <a href='#' className='popcity'>Delhi</a> <a href='#' className='popcity'>Gurgaon</a> <a href='#' className='popcity'>Hyderabad</a> <a href='#' className='popcity'>Kolkata</a> <a href='#' className='popcity'>Mumbai</a> <a href='#' className='popcity'>Pune& more.</a>
    </div>
    </div>
    
    

    
   
    </>
  )
}

export default Loginpg