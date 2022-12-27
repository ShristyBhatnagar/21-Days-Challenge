import React from 'react'
import './Mid.css'
import { VscAccount } from "react-icons/vsc";
import {TfiLayoutMediaRight,TfiCalendar,TfiVideoClapper,TfiImage } from "react-icons/tfi";

const Middle = () => {
  return (
    <>
    <div className='MiddleDiv'>
      <div className="iconx">
      <VscAccount  size={50}/>
      <input className="postbar" type={"text"} placeholder="Start a Post"/> 
      </div>
    <div className='iconsz'>
      <div className='icopost'>
      <TfiImage size={40}/>Photo
      </div>
      
      <div className='icopost'>
      <TfiVideoClapper size={40}/>Video
      </div>
      <div className='icopost'>
      <TfiCalendar size={40}/>Audio Event
      </div>
      <div className='icopost'>
      <TfiLayoutMediaRight size={40}/>Write Article
      </div>
      </div>
      </div>
      
      
      </>

  )
}

export default Middle