import logo from './logo.svg';
import './App.css';
import Hero from "./components/Hero.js"
import  { lazy, Suspense } from "react";
import About from "./components/About.js"

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  
  return (
    <div className="App">


<BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Hero/>}>
     
        
         

      </Route>
      <Route path="about" element={<About />}></Route>
    </Routes>
  </BrowserRouter>



     {/* <Hero></Hero> */}
    </div>
  );
}

export default App;
