import logo from './logo.svg';
import './App.css';

import Header from './shared components/Header/Header';
import Jobs from './pages/Jobs';
import Mynetwork from './pages/Mynetwork'
// import './index.js'

import { BrowserRouter, Routes ,Route} from 'react-router-dom';
import Home from './pages/Home';



 function App() {
    return (
<div className='MainContainer'>
<div>      
<BrowserRouter>
<Header /> 
<Routes>
<Route path='/' element={<Home/>}/>
<Route path='/Home' element={<Home/>}/>
<Route path='/Jobs' element={<Jobs/>}/>
<Route path='/mynetwork' element={<Mynetwork/>}/>
</Routes>
         
           
</BrowserRouter>
</div>
       

        </div>

    )
}
 export default App;



