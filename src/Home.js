import React from 'react';


import {Layout} from './Components/Layout'
import Dan from './Images/DanK.jpg';
import Tembe from './Images/Tembe.jpg';
import DanC from './Images/Dan.jpg';
import Dougie from './Images/Dougie.jpg';
import Siofra from './Images/Siofra2.jpg'
import Jesse from './Images/Jesse.jpg'
import Luke from './Images/Luke2.jpg'
import Laurels from './Images/Laurels.JPG'
import { Header1, HomeContainer,  ImgBackground, CardContainer,SiofraImg,FilmImg, InstaGramContainer, TrailerParkImg } from './Components/HomePage/Elements';
import {Music} from './Components/MusicSection/Music'
import {Shows} from'./Components/Shows/Shows';
import {Footer} from'./Components/FooterSecction/Footer';
import { Card, Row, Col, Container } from "react-bootstrap";
import styled from 'styled-components';


const Styles = styled.div`

height:100%;
    #container1{
        display:flex;
 
position:relative;
top:350px;
height:100%;

left:45px;
 
@media screen and (max-width: 769px){
 
left:1px;
}
 
  }


`; 


export const Home = () =>(

<Styles>
  <HomeContainer id = "home">


   <ImgBackground >
 
   </ImgBackground>
  
     <InstaGramContainer id = "Insta" >
         <Layout>
  <Header1></Header1>
  </Layout>
<CardContainer>

     <Container id="container1" >
   
            <Row>
          
                    <Col  xs={12} md={4} lg={3}  >
                        <Card  style={{border:"none", width:"13rem", cursor:"pointer",  paddingBottom:"1rem", backgroundColor:"transparent"}}>
                              <a href="https://www.instagram.com/p/B2kaUUDj1x5/" target="_blank"  rel="noopener noreferrer">
                            <Card.Img src={Dan}  />  
                            </a>
                        </Card>
                        <Card style={{border:"none", width:"13rem", cursor:"pointer", backgroundColor:"transparent",  paddingBottom:"1rem",}}>
                          <a href="https://www.instagram.com/p/CTkhNB-D-vV/" target="_blank"  rel="noopener noreferrer">
                            <Card.Img src={Tembe}  />  
                            </a>
                        </Card>
                    </Col>
                    <Col  xs={12} md={4} lg={3}  >
                        <Card style={{border:"none", width:"13rem", cursor:"pointer", paddingBottom:"1rem", backgroundColor:"transparent"}}>
                            <a href="https://www.instagram.com/p/BykxLp8C76V/" target="_blank"  rel="noopener noreferrer">
                            <Card.Img src={DanC}  />  
                            </a>
                        </Card>
                        <Card style={{border:"none", width:"13rem", cursor:"pointer", paddingBottom:"1rem",backgroundColor:"transparent"}}>
                        <a href="https://www.instagram.com/p/CTkhNB-D-vV/" target="_blank"  rel="noopener noreferrer">
                            <Card.Img src={Dougie}  />  
                            </a>
                        </Card>
                    </Col>
                    <Col  xs={12} md={4} lg={3}  >
                        <Card style={{border:"none", width:"13rem",paddingBottom:"1rem", cursor:"pointer",backgroundColor:"transparent"}}>
                         <a href="https://www.instagram.com/p/B_BL4FLgfNB/" target="_blank"  rel="noopener noreferrer">
                            <Card.Img src={Jesse}  />  
                            </a>
                        </Card>
                        <Card style={{border:"none", width:"13rem", cursor:"pointer", paddingBottom:"1rem",backgroundColor:"transparent"}}>
                        <a href="https://www.instagram.com/p/B9SPtwgA-Ho/" target="_blank"  rel="noopener noreferrer">
                            <Card.Img src={Siofra}  />  
                            </a>
                        </Card>
                    </Col>
                    <Col  xs={12} md={4} lg={3}  >
                        <Card style={{border:"none", width:"13rem",cursor:"pointer", paddingBottom:"1rem", backgroundColor:"transparent"}}>
                           <a href="https://www.instagram.com/p/CRJSBNTDybz/" target="_blank"  rel="noopener noreferrer">
                            <Card.Img src={Laurels}  />  
                            </a>
                        </Card>
                        <Card style={{border:"none", width:"13rem", cursor:"pointer", paddingBottom:"1rem",backgroundColor:"transparent"}}>
                             <a href="https://www.instagram.com/p/CIwNyAKgGI6/" target="_blank"  rel="noopener noreferrer">
                            <Card.Img src={Luke}  />  
                            </a>
                        </Card>
                    </Col>
            </Row>
            
        </Container>
 
      </CardContainer>
     </InstaGramContainer>
   <FilmImg/>
   <Music 
   />

   <SiofraImg/>
  <Shows/>
  <TrailerParkImg>
 
</TrailerParkImg>
 <Footer/>
  </HomeContainer>
</Styles>
)
// function Header() {
//     // Import result is the URL of your image
 
//     return <img src={cooksImage}  id = "bench1" alt="Logo" />;
//   }