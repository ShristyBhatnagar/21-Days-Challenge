import "./App.css";
import Loginpg from "./Pages/Part 1/top";
import Part2 from "./Pages/Part 2";
import Part3 from "./Pages/Part 3";
import Part4 from "./Pages/Part 4";
import Part5 from "./Pages/Part 5";
import Footer from "./Shared Components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loginpop from "./Shared Components/Login";
import { createContext, useEffect, useState } from "react";
import ReactSwitch from "react-js-switch";
import Signup from "./Shared Components/Signup";

function App() {
  const themeChanger = createContext({});
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
  };
  useEffect(() => {
    document.body.className = theme;
  });
  return (
    <div className="App">
      <themeChanger.Provider>
        <BrowserRouter>
          <div className="themechanger">
            <ReactSwitch
              onChange={toggleTheme}
              checked={theme === "dark"}
              checkedIcon={false}
            />
            <span>Change Theme</span>
          </div>
          <Loginpg />

          {/* <Timer/> */}
          <Part2 />
          <Part3 />
          <Part4 />
          <Part5 />
          
          <Footer />
          <Routes>
            <Route path="/" element={<Loginpop />} />
            <Route path="/login" element={<Loginpop />} />
            <Route path="/Signup" element={<Signup/>} />
          </Routes>
        </BrowserRouter>
      </themeChanger.Provider>
    </div>
  );
}

export default App;
