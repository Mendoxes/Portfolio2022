import React from 'react'
import archives from "./images/archive.jpg"
import {Card,Row,Col,Button} from "react-bootstrap"
import one from "../1.png"
import two from "../2.png"
import three from "../3.png"
import four from "../4.png"
import {Fade} from "react-reveal"
export default function Archive() {


    const ok = [one,two,three,four]
    const title =["Tutorial project", "Photo Galery","Old portfolio","Sawing passion"]
const stylish={
margin:"0 auto",
width:"30%",
padding:"4rem",
backgroundColor:"#1a1d29;"

}

const sourseC =["https://mendoxes.github.io/starter/","https://mendoxes.github.io/Maja-Bizior/","https://mendoxes.github.io/Portfolio/","https://mendoxes.github.io/Sewingpassion/"]


    const inside =["This website is one of the first i did `seriously`","Simple photo-galery website created for a friend","my old portfolio created back in 2020","Hobby project showing than sawing can be a real passion"]
    return (
       <Fade delay={200}> <div style={{height:"100vh" ,padding:"2rem"}}>
          <Row xs={1} md={2} className="g-4">
  {Array.from({ length: 4 }).map((_, idx) => (
    <Col>
      <Card>
      <a href={sourseC[idx]}> <Card.Img variant="top" src={ok[idx]} /></a>
        <Card.Body>
          <Card.Title>{title[idx]}</Card.Title>
          <Card.Text>
          {inside[idx]}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  ))}
</Row>

<div style={stylish}><a href={"/"}><Button size="lg" variant="dark">Back to home</Button></a></div>
        </div></Fade>



    )
}
