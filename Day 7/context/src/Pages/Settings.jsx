import React from 'react'
import {ThemeContext} from '../Context/ThemeProvider'
import { useContext } from 'react'

const Settings = () => {
    const {theme,setTheme}=useContext(ThemeContext)
  return (
    <div style={{backgroundColor:theme}}>Settings
    <h1>{theme}</h1>
    <button onClick={()=>setTheme('#6aff00')}>Change Theme</button>
    </div>
  )
}

export default Settings