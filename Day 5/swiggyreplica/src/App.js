import logo from './logo.svg';
import './App.css';
import Loginpg from './Shared Components/Part 1';
import Part2 from './Shared Components/Part 2';
import Part3 from './Shared Components/Part 3';
import Part4 from './Shared Components/Part 4'
import Part5 from './Shared Components/Part 5';
// import { BrowserRouter,Routes, Route} from 'react-router-dom';
import Footer from './Shared Components/Footer';
import test from './Shared Components/Part 1/test';
import Timer from './Shared Components/Part 1/login';



function App() {
  return (
    <div className="App">
      
        
        <Loginpg/>
        <Timer/>
        <Part2/>
        <Part3/>
        <Part4/>
        <Part5/>
        <Footer/>
    </div>
  );
}

export default App;
