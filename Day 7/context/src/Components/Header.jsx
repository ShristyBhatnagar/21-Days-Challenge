import React,{ useContext } from 'react'

import {ThemeContext} from '../Context/ThemeProvider'

const Header = () => {
    const {theme,setTheme}=useContext(ThemeContext)
  return (
    <div>
      <h1>{theme}</h1>
      <button onClick={()=>setTheme('#00ff00')}></button>
      </div>
  )
}

export default Header