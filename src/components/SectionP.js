import React from 'react'
import "./SectionP.css"

import reactIcon from "../react.png"
import bootstrapIcon from "../bootstrap.png"
import htmlIcon from "../html.png"
import cssIcon from "../css.png"
import javaScriptIcon from "../javascript.png"
import {useState} from "react"



export default function SectionP({specialC, title1, explenation,hero2,Background,foodi,tests,tests2,alfa,beta}) {

    
    const [opa, setOpa]=useState(0)
    const [opa2, setOpa2]=useState(0)
    const [visi, setVisi]=useState(1)
    const [visi2, setVisi2]=useState(1)
    const [imgChange, setImgChange]=useState(hero2) //main image 
const [hi,setHi]=useState("100%")
const [hi2,setHi2]=useState("100%")
    let sectionStyle ={
    
        backgroundImage: `url(${imgChange})`,
                // WebkitFilter: `saturate(${sat})`
            }

    function make1(){

        setOpa(1)
        setVisi2(0)
      setHi("130%")
        setImgChange(Background)
    }
    function make2(){

        setOpa(0)
        setHi("100%")
        setVisi2(1)
        setImgChange(hero2)
    }


    function make3(){
        setHi2("130%")
        setImgChange(foodi)
        setOpa2(1)
        setVisi(0)
    }
    function make4(){
        setHi2("100%")
        setImgChange(hero2)
        setOpa2(0)
        setVisi(1)
    }

    const SectionTemplet = ({ok})=>{

return ok.map(o => <img src={o} className="imgIcons"/>)

    
    }



const TitleTemplet= (ok)=>{

return 

}





 
    return (





        
        <div  style={{marginTop:"-7px"}}className="main_SectionP">
            
            {specialC?<div className="Background_SectionP " className={specialC} style={sectionStyle}></div>:
            <div className="Background_SectionP " style={sectionStyle}></div>}
            
            <div className="Leyer_SectionP"> 
            
            <div className="ImageContainer_SectionP1" >
           


            <div  className="h2" style={{opacity:opa}}>
    <h2  style={{color:"white"}}>{title1[alfa]} </h2>
<p>{explenation[alfa]} </p>
<div style={{width:" 70%"}}> <SectionTemplet ok={[bootstrapIcon,htmlIcon,cssIcon,reactIcon,javaScriptIcon]}/>  </div>
</div>




           <img style={{opacity:visi,width:hi}} className="first_img_SectionP" src={tests2}onMouseEnter={make1} onMouseLeave={make2} ></img></div>
           <div className="ImageContainer_SectionP2" onMouseEnter={make3} onMouseLeave={make4}>
               
               
           <div  className="h2" style={{opacity:opa2}}>
    <h2  style={{color:"white"}}> {title1[beta]}</h2>
<p>{explenation[beta]}</p>
<div style={{width:" 70%"}}>  <SectionTemplet ok={[bootstrapIcon,htmlIcon,cssIcon,reactIcon,javaScriptIcon]}/></div>
</div>
               
               
               
               
               
               
              <img style={{opacity:visi2,width:hi2}}className="first_img_SectionP" src={tests} onMouseEnter={make3} onMouseLeave={make4} ></img>
               
               </div>
          
            </div>
           
        </div>
    )
}