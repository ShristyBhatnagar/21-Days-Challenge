import logo from './logo.svg';
import './App.css';
import Footer from './shared components/Footer/Footer'
import Header from './shared components/Header/Header';
import Jobs from './pages/Jobs';
// import './index.js'
import LeftPane from './shared components/LeftPane/LeftPane';
import RightPane from './shared components/RightPane/RightPane';
import Middle from './shared components/Mid/Mid';
import MainPage from './shared components/Mid/MainPage';
import { BrowserRouter, Routes ,Route} from 'react-router-dom';



 function App() {
    return (
        // <div className='MainContainer'>
<BrowserRouter>
<Header /> 
<Routes>
<Route path='/Jobs' element={<Jobs/>}/>
</Routes>
         
           
</BrowserRouter>
            // <LeftPane />
            // <RightPane />

            // <Middle />
            // <MainPage />



            // <Footer />
           

        // </div>

    )
}
 export default App;



