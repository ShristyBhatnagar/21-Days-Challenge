

import React ,{ createContext ,useEffect, useState }from "react";

const ThemeContext = createContext({})
const ThemeProvider = ({children}) => {
    const [theme,setTheme]=useState('pink')

    useEffect(()=>{},[theme]);
  return (
    <div>
   <ThemeContext.Provider value={{theme,setTheme}}>
    {children}
   </ThemeContext.Provider>
   </div>
  )
}

export  {ThemeProvider,ThemeContext}