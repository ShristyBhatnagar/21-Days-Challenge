import logo from './logo.svg';
import './App.css';
import Loginpg from './Shared Components/Part 1/top';
import Part2 from './Shared Components/Part 2';
import Part3 from './Shared Components/Part 3';
import Part4 from './Shared Components/Part 4'
import Part5 from './Shared Components/Part 5';
// import { BrowserRouter,Routes, Route} from 'react-router-dom';
import Footer from './Shared Components/Footer';
import Timer from './Shared Components/Part 1/login';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import Loginpop from './Shared Components/Login';
import { createContext, useEffect, useState } from 'react';
import ReactSwitch from 'react-js-switch'


function App() {
  const themeChanger=createContext({});
  const [theme,setTheme]=useState('light');
  const toggleTheme=()=>{
    setTheme((theme)=>(theme==='light'?'dark':'light'));
  }
  useEffect(()=>{document.body.className=theme})
  return (
    <div className="App">
      <themeChanger.Provider>
      <BrowserRouter>
      <ReactSwitch onChange={toggleTheme} checked={theme==='dark'} checkedIcon={false}/>Change Theme
        <Loginpg/>
        
        <Timer/>
        <Part2/>
        <Part3/>
        <Part4/>
        <Part5/>
        <Footer/>
        <Routes>
   
        <Route path='/' element={<Loginpop/>}/>
   <Route path='/login' element={<Loginpop/>}/>
   
 </Routes>
 </BrowserRouter>
 </themeChanger.Provider>
       
    </div>
  );
}

export default App;
