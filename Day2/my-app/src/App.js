import logo from './logo.svg';
import './App.css';
import Footer from './shared components/Footer/Footer'
import Header from './shared components/Header/Header';


import './index.js'
import LeftPane from './shared components/LeftPane/LeftPane';
import RightPane from './shared components/RightPane/RightPane';
import Middle from './shared components/Mid/Mid';
import MainPage from './shared components/Mid/MainPage';

function App() {
    return (
        <div className='MainCotainer'>
    
        <Header />
        
        <LeftPane/>
        <RightPane/>
       
        <Middle/>
        <MainPage/>
        
       

        <Footer />
       
        </div>
    
    )
}

export default App;
