import React from 'react'
import Header from '../Components/Header'
import {ThemeContext} from '../Context/ThemeProvider'
import { useContext } from 'react'

const Landingpage = () => {
    const {theme}=useContext(ThemeContext)
  return (
    <div style={{background:theme}}>Landingpage
    <Header/>
    </div>
  )
}

export default Landingpage