import React from 'react'
import '../../SASS/index.css'
import { Link } from 'react-router-dom'

const Loginpop = () => {
  return (

    <div className='popscreen'>
        <div className='popscreen__overlay'></div>
        
        <div className='popscreen__popup'>
         <Link to='/top'><div>X</div></Link>
        <h1 style={{font:"bold"}}>Login</h1>
        <p style={{color:"orange"}}>or create an account</p>
        <img width={150} height={40} src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Image-login_btpq7r"></img>
        <input className='popscreen__Loco' type={"text"} placeholder='Phone Number' ></input>
        <button>Login</button>
        <p>By clicking on Login, I accept the Terms & Conditions & Privacy Policy</p>
    </div>
    </div>
    
  )
}

export default Loginpop