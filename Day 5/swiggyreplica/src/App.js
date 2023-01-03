import logo from './logo.svg';
import './App.css';
import Loginpg from './Shared Components/Part 1/top';
import Part2 from './Shared Components/Part 2';
import Part3 from './Shared Components/Part 3';
import Part4 from './Shared Components/Part 4'
import Part5 from './Shared Components/Part 5';
// import { BrowserRouter,Routes, Route} from 'react-router-dom';
import Footer from './Shared Components/Footer';
import test from './Shared Components/Part 1/test';
import Timer from './Shared Components/Part 1/login';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import Loginpop from './Shared Components/Login';


function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Loginpg/>
        <Timer/>
        <Part2/>
        <Part3/>
        <Part4/>
        <Part5/>
        <Footer/>
        <Routes>
   
        
   <Route path='/login' element={<Loginpop/>}/>
 </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
