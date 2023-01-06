
import './App.css';
import {ThemeProvider} from './Context/ThemeProvider';
import Landingpage from './Pages/Landingpage';
import Settings from './Pages/Settings';

function App() {
  return (
    <>
   <ThemeProvider>
      <Landingpage/>
    <Settings/>
      </ThemeProvider>
      </>
  );
}

export default App;
