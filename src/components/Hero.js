import React from 'react'
import "./Hero.css"
import img1 from "../hero.jpg"
import tap from "../tap.png"
import tests from "../9.png"
import tests2 from "../8.png"
import raz from "../6.png"
import inst from "../7.png"
import foodi from "../foodi.png"
import hero2 from "../hero2.jpg"
import razerB from "../razerB.png"
import github from "../github.png"
import Fade from 'react-reveal/Fade';
import reactIcon from "../react.png"
import bootstrapIcon from "../bootstrap.png"
import htmlIcon from "../html.png"
import cssIcon from "../css.png"
import javaScriptIcon from "../javascript.png"
import templet1 from "../templet1.jpg"
import smile from "../smile.png"
import Background from "../mount.png"
import Butimg from "../components/butimg.js"


import SectionP from "./SectionP"

import {useState} from "react"
import { Link } from 'react-scroll';

export default function Hero() {
   





  
 let specialC = "special";


   

    // window.getComputedStyle(document.querySelector(".first"), '::before').getPropertyValue("filter") = "saturate:100"


    class Polygon {
        constructor(...sides) {
          this.sides = sides;
        }
        // Method
        *getSides() {
          for(let side of this.sides){
            yield side = side+1;
          }
        }
      }
      
      let pentagon = new Polygon(1,2,3,4,5);
      
      console.log([...pentagon.getSides()]);

      const title1 = ["Climate change","Dish Search App","Instagram Clone","Razer Shop"] //data for titles 
      const explenation =["•	Website based on NASA Climat-change information, I’m using API from various endpoints to show the worldwide temperature change over 130years, or air quality over 170 countries.","•	Website based on NASA Climat-change information, I’m using API from various endpoints to show the worldwide temperature change over 130years, or air quality over 170 countries. ","fjdksf", "fdhsfs"]




    return (
        <div >
            
<div id="stage">
    <img  className="nvv" src={img1}/>

            <div id="site-name" className="show">
              <div className="myName">
            <span className="c1" style={{transitionDelay: 3400+"ms"}}>S</span>
                <span className="c2" style={{transitionDelay: 400+"ms"}}>E</span>
                <span className="c3" style={{transitionDelay: 466+"ms"}}>B</span>
                <span className="c4" style={{transitionDelay: 66.+"ms"}}>A</span>
                <span className="c5" style={{transitionDelay: 266+"ms"}}>S</span>
                <span className="c6" style={{transitionDelay: 133+"ms"}}>T</span>
                <span className="c7" style={{transitionDelay: 166+"ms"}}>I</span>
                <span className="c8" style={{transitionDelay: 500+"ms"}}>A</span>
                <span className="c9" style={{transitionDelay: 400+"ms"}}>N</span>
                <span className="c10" style={{transitionDelay: 533+"ms"}}>L</span>
                <span className="c11" style={{transitionDelay: 300+"ms"}}>E</span>
                <span className="c12" style={{transitionDelay: 666+"ms"}}>W</span>
                <span className="c13" style={{transitionDelay: 500+"ms"}}>Y</span>
                </div>
                <p className="c14">I'm aspiring junior web developer, lets start scrolling!</p>
                {/* <Link className="scrolling" activeClass="active" to="section1" spy={true} smooth={true} duration={1000}>
         <img className="img2" src={tap}></img>
        </Link> */}
        <Butimg></Butimg>
                {/* <button onClick={ok}>okokoo</button> */}
            </div>
           
            </div>
           


            <div><SectionP title1={title1} explenation={explenation} hero2={hero2} Background={Background} foodi={foodi} tests={tests} tests2={tests2} alfa={0} beta={1}></SectionP></div>


            <div><SectionP specialC={specialC} title1={title1} explenation={explenation} hero2={templet1} Background={smile} foodi={razerB} tests={raz} tests2={inst} alfa={2} beta={3}></SectionP></div>
   
        </div>
    )
}

//sectionP = > title of text , explenation => explenation of text , hero2 => first image that loads
// Background => on mouseEnter 1 img change , foodi => on mouseEnter 2 img change
// test and test2 => images of projects that get hovered over
//alfa and beta represents the index of titles ect


// <img style={{width:"3rem", marginRight:"1rem",backgroundColor:"white"}} src={github}></img>
// <span>icon</span>
// <span>Read more</span>