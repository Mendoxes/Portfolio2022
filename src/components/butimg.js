import React,{useState} from 'react'
import "./butimg.css"
import disney from "./images/Disney.png"
import disneyAnim from "./images/Disney-anim.gif"
import projectAnim from "./images/project.gif"
import projectImg from "./images/project.png"
import githubAnim from "./images/githubAnim.gif"
import githubImg from "./images/github.png"
import bioImg from "./images/bio.png"
import bioAnim from "./images/bio.gif"
import contactImg from "./images/contact.png"
import contactAnim from "./images/contact.gif"
import ButComponent  from './ButComponent'
import Fade from 'react-reveal/Fade';
export default function Butimg() {


    return (
        <div>
       <Fade delay={2900}> <div className="container">
            <div className="Plus">
      <ButComponent ima={disney} anim={disneyAnim}/>
            <ButComponent ima={projectImg} anim={projectAnim}/>
             <ButComponent ima={githubImg} anim={githubAnim}/>
             <ButComponent ima={bioImg} anim={bioAnim}/>
             <ButComponent ima={contactImg} anim={contactAnim}/>
               
            </div>
        </div></Fade>
       

     

    </div>
    )
}
