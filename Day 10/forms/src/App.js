
import React from 'react';
import './App.css';
import Registration from './components/registration';
import Appointment from './components/appointment';
import Admission from './components/Admission';
function App() {
  return (
    <div className="App">
      <Registration/>
      <Appointment/>
      <Admission/>
     </div>
  )
}

export default App;
