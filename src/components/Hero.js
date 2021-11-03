import React from 'react'
import "./Hero.css"
import img1 from "../hero.jpg"
import tap from "../tap.png"
import tests from "../9.png"
import tests2 from "../8.png"
import foodi from "../foodi.jpg"
import github from "../github.png"
import Fade from 'react-reveal/Fade';
import reactIcon from "../react.png"
import bootstrapIcon from "../bootstrap.png"
import htmlIcon from "../html.png"
import cssIcon from "../css.png"
import javaScriptIcon from "../javascript.png"
import hero2 from "../hero2.jpg"
import Background from "../mount.jpg"

import {useState} from "react"
import { Link } from 'react-scroll';

export default function Hero() {
    const [state,setState]=useState(0)
    const [oks,setOks]=useState(1)
    const [imgChange, setImgChange]=useState(hero2)
const [sat, setSatu]=useState(0.1)

const [uno, setUno]=useState(1)
const [due,setDue]=useState(1)
const [posi,setPosi]=useState("inherit")
const [oks2,setOks2]=useState(0)
const [oks1,setOks1]=useState(0)



    let sectionStyle ={
opacity: oks,
        backgroundImage: `url(${imgChange})`,
        WebkitFilter: `saturate(${sat})`
    }

  
 


    function imgFunk(){
        setTimeout(() => { 
        setOks(1)
        setOks1(1)
        setImgChange(foodi)
        setSatu(1)
        setDue(0)
    }, 500);
    }

    function imgFunk2(){
    
        // setOks(0)
        setTimeout(() => {
        setSatu(0.01)
        setImgChange(hero2)
        setDue(1)
        setPosi("inherit")
        setOks1(0)   }, 500);
    }


    
    function imgFunk3(){
        setTimeout(() => {
        setImgChange(Background)
        setOks(1)
        setOks2(1)
        setSatu(1)
        setUno(0)}, 500);
    }

    function imgFunk4(){

        setTimeout(() => {
            setUno(1)
            // setOks(0)
            setSatu(0.01)
            setOks2(0)
            setImgChange(hero2)   
        }, 500);

    }


   

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


    return (
        <div >
            
<div id="stage">
    <img  className="nvv" src={img1}/>

            <div id="site-name" className="show">
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
                <p className="c14">I'm aspiring junior web developer, lets start scrolling!</p>
                <Link className="scrolling" activeClass="active" to="section1" spy={true} smooth={true} duration={1000}>
         <img className="img2" src={tap}></img>
        </Link>
                {/* <button onClick={ok}>okokoo</button> */}
            </div>
           
            </div>
            <div id="section1" className="section1">
           



<Fade><div className="first" style={ sectionStyle} >
    
<div  className="h2" style={{opacity:oks2}}>
    <h2  style={{color:"white"}}> Dish search app</h2>
<p>•	Website based on NASA Climat-change information, I’m using API from various endpoints to show the worldwide temperature change over 130years, or air quality over 170 countries. </p>
<div style={{width:" 70%"}}> <img src={reactIcon} className="imgIcons"></img> <img className="imgIcons" src={javaScriptIcon}></img>  
<img className="imgIcons" src={bootstrapIcon}></img>  <img className="imgIcons" src={htmlIcon}></img> 
 <img className="imgIcons"src={cssIcon}></img>  </div>
</div>



<div  className="h3" style={{opacity:oks1}}>
    <h2  style={{color:"white"}}> Recepie generator</h2>
<p>•	Website based on NASA Climat-change information, I’m using API from various endpoints to show the worldwide temperature change over 130years, or air quality over 170 countries. </p>
<div style={{width:" 70%"}}> <img src={reactIcon} className="imgIcons"></img> <img className="imgIcons" src={javaScriptIcon}></img>  
<img className="imgIcons" src={bootstrapIcon}></img>  <img className="imgIcons" src={htmlIcon}></img> 
 <img className="imgIcons"src={cssIcon}></img>  </div>
</div>






</div></Fade>
<img id="1" style={{opacity:uno}} className="first_img" src={tests} onMouseLeave={imgFunk2} onMouseEnter={imgFunk}></img>
<img id="2" style={{opacity:due}}className="second_img" src={tests2} onMouseLeave={imgFunk4} onMouseEnter={imgFunk3}></img>



            </div>
        </div>
    )
}


// <img style={{width:"3rem", marginRight:"1rem",backgroundColor:"white"}} src={github}></img>
// <span>icon</span>
// <span>Read more</span>