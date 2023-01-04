 import React, { createContext } from 'react'

import ChildA from './ChildA';
 
const ChildName=createContext();
const LName=createContext();
 const Parent = () => {
   return (
    <>
    <ChildName.Provider value={"Srishti"}>
      <LName.Provider value={"Bhatnagar"}>
      <ChildA/>
      </LName.Provider>
      </ChildName.Provider>
    </>
   )
 }
 
 export default Parent
 export {ChildName};
 export {LName};

 