import React from 'react'
import '../../SASS/index.css'

const Loginpop = () => {
  return (
    <div className='popup'>
        <h1>Login</h1>
        <p>or create and account</p>
        <input type={"text"} placeholder='Phone Number' ></input>
        <button>Login</button>
        <p>By clicking on Login, I accept the Terms & Conditions & Privacy Policy</p>
    </div>
  )
}

export default Loginpop