import React from 'react'
import NavBar from './NavBar';
import HorizontalScroll from 'react-scroll-horizontal'
import "./about.css"
import theatre from "./images/theatre.jpg"
import theatreLight from "./images/theatreLight.jpg"
import office from "./images/office.png"
import gallery from "./images/gallery.jpg"
import trains from "./images/trains.jpg"
import production from "./images/production.jpg"
import coffie from "./images/coffie.jpg"
import warehouse from "./images/warehouse.jpg"
import {Button} from "react-bootstrap"
export default function About() {


    const stylebar = {
width:"30rem",
height:"23rem",
backgroundColor:"#1a1d29",
margin:"10rem auto",
border:"solid 2px white"
    }

    const stylish={
        margin:"0 auto",
        width:"30%",
        padding:"4rem",
        backgroundColor:"#1a1d29;"
        
        }

    const mainBar={
display:"flex",
justifyContent: "space-around"

    }

    // const child   = { width: `30em`, height: `100%`}
    // const parent  = { width: `60em`, height: `100%`}
    return (



        <div style={{backgroundColor:"#1a1d29"}}>
            <div className="main bg">
                
<div>
    <h3>2011-2012</h3>
    <h1>Chorea Theatre</h1>

<h3><i>apprenctice</i></h3>
<h5>(Lodz, Poland)</h5>
</div>
<img style={{width:"48%" ,border:"solid 3px white"}} src={theatre}></img>



            </div>
            <hr/>
            <div className="main bg1">
                
                <div>
                    
                    <h3>2012-2013</h3>
                    <h1>Financial company A.P.K.</h1>
                
                <h3><i>Office worker</i></h3>
                <h5>(Lodz, Poland)</h5>
                </div>
                <img style={{width:"48%" ,border:"solid 3px white"}} src={office}></img>
                
                
                
                            </div>
                            <hr/>



            <div className="main bg2">
                
                <div>
                    
                    <h3>2013-2014</h3>
                    <h1>Poleski art center</h1>
                
                <h3><i>Light managment</i></h3>
                <h5>(Lodz, Poland)</h5>
                </div>
                <img style={{width:"48%" ,border:"solid 3px white"}} src={theatreLight}></img>
                
                
                
                            </div>
                            <hr/>


                            <div className="main bg2">
                
                <div>
                    
                    <h3>2014-2015</h3>
                    <h1>'TES' Gallery</h1>
                
                <h3><i>Cashier</i></h3>
                <h5>(Lodz, Poland)</h5>
                </div>
                <img style={{width:"48%" ,border:"solid 3px white"}} src={gallery}></img>
                
                
                
                            </div>
                            <hr/>


                            <div className="main bg2">
                
                <div>
                    
                    <h3>2015</h3>
                    <h1>Driessen</h1>
                
                <h3><i>Production worker</i></h3>
                <h5>(Deurne, Netherlands )</h5>
                </div>
                <img style={{width:"48%" ,border:"solid 3px white"}} src={production}></img>
                
                
                
                            </div>
                            <hr/>


                            <div className="main bg2">
                
                <div>
                    
                    <h3>2016</h3>
                    <h1>Lodz City Council</h1>
                
                <h3><i>Train inspector</i></h3>
                <h5>(Lodz, Poland )</h5>
                </div>
                <img style={{width:"48%" ,border:"solid 3px white"}} src={trains}></img>
                
                
                
                            </div>
                            <hr/>

                            <div className="main bg2">
                
                <div>
                    
                    <h3>2016-2017</h3>
                    <h1>Un Caffe</h1>
                
                <h3><i>Barista</i></h3>
                <h5>(Lodz, Poland )</h5>
                </div>
                <img style={{width:"48%" ,border:"solid 3px white"}} src={coffie}></img>
                
                
                
                            </div>
                            <hr/>


                            
                            <div className="main bg2">
                
                <div>
                    
                    <h3>2017-</h3>
                    <h1>SMPE</h1>
                
                <h3><i>Forklift-driver/Step-up Team leader</i></h3>
                <h5>(Nothinghamshire, UK )</h5>
                </div>
                <img style={{width:"48%" ,border:"solid 3px white"}} src={warehouse}></img>
                
                
                
                            </div>
                        




<div style={stylish}><a href={"/"}><Button size="lg" variant="dark">Back to home</Button></a></div>
                            

          
    
      </div>



    )
}
