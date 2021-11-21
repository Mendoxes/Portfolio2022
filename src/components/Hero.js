import React from 'react'
import "./Hero.css"
import img1 from "../hero.jpg"
import tap from "../tap.png"
import tests from "../9.png"
import tests2 from "../8.png"
import raz from "../6.png"
import inst from "../7.png"
import phpIcon from "../php.png"
import mysqlIcon from "../mysql.png"
import svelteIcon from "../svelte.png"
import sveltProject from "../5.png"
import phpProject from "../10.png"
import sveltImg from "../svelteProject.png"
import phpImg from "../phpProject.png"
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
   




 let stack= [[bootstrapIcon,htmlIcon,cssIcon,reactIcon,javaScriptIcon]
 ,[bootstrapIcon,htmlIcon,cssIcon,reactIcon,javaScriptIcon]
 ,[bootstrapIcon,htmlIcon,cssIcon,reactIcon,javaScriptIcon]
 ,[bootstrapIcon,htmlIcon,cssIcon,reactIcon,javaScriptIcon]
 ,[htmlIcon,cssIcon,svelteIcon,javaScriptIcon,cssIcon]
 ,[reactIcon,javaScriptIcon,phpIcon,mysqlIcon,cssIcon]]
  
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

      const title1 = ["Climate change","Dish Search App","Instagram Clone","Razer Shop","Svelte.js E-commerce","Php-react CRUD"] //data for titles 
      const explenation =["•	Website based on NASA Climat-change information, I’m using API from various endpoints to show the worldwide temperature change over 130years, or air quality over 170 countries.", "Website that helps you find recipe for dish you like. You can filter your results by maximum KCAL intake.This project got API calls limit","•	A clone of one of the most popular social network application. It is connected to Firebase API and deployed on Vercel. With my clone you can register account, log in, add pictures with title, comment/like other people’s photos. ","•	Mock-up of e-commerce shop with a Commerce.js CMS so updating content does not require coding. Stack used for this project: 	JavaScript,React.js,Commerce.js,material.ui,CSS,HTML.", "•	Simple Mock-up of E-commerce shop application, it was done with Svelte.js.","basic CRUD application that connects react frontend and php/mysql backend, you can add/delete/ products"]
      const linkPage =["https://climat-change.vercel.app/","https://food-sepia.vercel.app/","https://insta-steel.vercel.app/login ","https://razer-shop.vercel.app/","https://mendoxes.github.io/Clothes/","https://php-list.vercel.app/"]



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
           


        <Fade>   
          
        
           <div id="section1"><SectionP stack={stack} linkPage={linkPage} title1={title1} explenation={explenation} hero2={hero2} Background={Background} foodi={foodi} tests={tests} tests2={tests2} alfa={0} beta={1}>
          
          
          </SectionP>
          </div>
          <div style={{border:"solid 2px white",margin:"1rem"}}><h1 style={{padding:"2rem"}}> React projects</h1>

 </div>           <div><SectionP stack={stack} linkPage={linkPage} specialC={specialC} title1={title1} explenation={explenation} hero2={templet1} Background={smile} foodi={razerB} tests={raz} tests2={inst} alfa={2} beta={3}></SectionP></div>
            <div style={{border:"solid 2px white",margin:"1rem"}}><h1 style={{padding:"2rem"}}>PHP/Svelte.js projects</h1></div>
            <div><SectionP stack={stack} linkPage={linkPage} specialC={specialC} title1={title1} explenation={explenation} hero2={templet1} Background={sveltImg} foodi={phpImg} tests={phpProject} tests2={sveltProject} alfa={4} beta={5}></SectionP></div></Fade>
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