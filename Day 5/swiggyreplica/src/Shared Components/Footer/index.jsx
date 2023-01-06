import React from 'react'
import { TbBrandFacebook,TbBrandTwitter,TbBrandPinterest,TbBrandInstagram } from "react-icons/tb";

const Footer = () => {
  return (
    <>
    <div className='Foot'>
      <img className='footerimg'src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_284/Logo_f5xzza"/>
      <p>&#169; 2023  Swiggy</p>
      <div className='socialmedia'>
        <TbBrandFacebook size={30}/>
        <TbBrandTwitter size={30}/>
        <TbBrandPinterest size={30}/>
        <TbBrandInstagram size={30}/>
      </div>
      </div>
    </>
  )

}

export default Footer