import React from 'react'
import '../../SASS/index.css'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (

    <div className='popscreen'>
        <div className='popscreen__overlay'></div>
        
        <div className='popscreen__popup'>
         <Link to='/top'><div>X</div></Link>
        <h1 style={{font:"bold"}}>Sign</h1>
        <p style={{color:"orange"}}>login to your account</p>
        <img width={150} height={40} src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Image-login_btpq7r"></img>
        <input className='popscreen__Loco' type={"text"} placeholder='Phone Number' ></input>
        <input className='popscreen__Loco' type={"text"} placeholder='Name' ></input>
        <input className='popscreen__Loco' type={"text"} placeholder='Email' ></input>
        <p>Have a referal code?</p>
        
        <button>Continue</button>
        <p>By clicking on Login, I accept the Terms & Conditions & Privacy Policy</p>
    </div>
    </div>
    
  )
}

export default Signup