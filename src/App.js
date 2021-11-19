import logo from './logo.svg';
import './App.css';
import Hero from "./components/Hero.js"
import  { lazy, Suspense } from "react";

function App() {
  
  return (
    <div className="App">
     <Hero></Hero>
    </div>
  );
}

export default App;
