import React from 'react'
import NavBar from './NavBar';

export default function About() {


    const stylebar = {
width:"30rem",
height:"23rem",
backgroundColor:"#1a1d29",
margin:"10rem auto",
border:"solid 2px white"
    }


    const mainBar={
display:"flex",
justifyContent: "space-around"

    }
    return (
        <div>
            <NavBar/>
           
           <div style={stylebar}>ok</div>

           <div style={mainBar}>
            <div> ok2</div>
            <div> ok3</div>
</div>
           
        </div>
    )
}
