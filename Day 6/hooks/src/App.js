import Account from './Pages';
import './App.css';
import Timer from './Pages/effect';
import Parent from './Pages/usecontext/Parent';

function App() {
  return (
    <div className="App">
      <Account/>
      <Timer/>
      <Parent/>
   
    </div>
  );
}

export default App;
