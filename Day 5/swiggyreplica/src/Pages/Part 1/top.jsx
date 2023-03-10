import React from 'react'
import '../../SASS/index.css'
import { TbFocus2 } from "react-icons/tb";
// import Anime from './animatedtext';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Timer from './animatedtextpg';
// import'./App.css'


const Loginpg = () => {
  return (
    <>

      <div className='leftelem'>
        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Swiggy_logo.svg/1280px-Swiggy_logo.svg.png" alt="logo" width="200" height="70" />

        <div className='leftelem__login'>

          <Link to="/login">Login</Link>



         <Link to='/Signup'><button className='leftelem__signup'>Sign Up</button></Link> 

        </div>


      </div>
      <Timer />
      <img className='intro' src='Lunch.jpg' alt='img' />
      <div className='Part1div'>


        <div className='Part1div__LocationBar' >

          <input className='Part1div__Loco' type='text' placeholder='Enter your delivery location '></input>

          <div className='Part1div__ico'>
           <span className='icospan'><TbFocus2 className='ico' /> Locate Me</span> 
          </div>

          <div>

            <button className='Part1div__FindButton'>Find Food.</button>
          </div>
        </div>


        <div className='PopularCity'>
          <h4 className='font-mono' >Popular Cities in India</h4>

          <a href='#' className='popcity'>Ahmedabad</a> <a href='#' className='popcity'>Bangalore</a> <a href='#' className='popcity'>Chennai</a> <a href='#' className='popcity'>Delhi</a> <a href='#' className='popcity'>Gurgaon</a> <a href='#' className='popcity'>Hyderabad</a> <a href='#' className='popcity'>Kolkata</a> <a href='#' className='popcity'>Mumbai</a> <a href='#' className='popcity'>Pune& more.</a>
        </div>
      </div>





    </>
  )
}

export default Loginpg