import React from 'react';
import { Header1,  ImgBackground, GigDate,GigInfoContainer, Styles, GigLocation, GigItem,GigVenue , GigButtonsContainer, Container1 } from './ShowElements';
import {Layout} from '../Layout'
import { Card, } from "react-bootstrap";
import band from '../../Images/Tembe2.JPG';

import Button from 'react-bootstrap/Button'
export const Shows = () =>(
    <Styles>
    <ImgBackground id="shows">
    <Layout>
    <Header1></Header1>
    <Container1>
    <GigInfoContainer>
    <GigItem>

    <GigDate>NOV 12</GigDate>
   <GigVenue>RECORD ROOM @ 7PM</GigVenue>
    <GigLocation>DUBLIN, IRELAND</GigLocation>
    </GigItem>
    <GigButtonsContainer>
      <Button variant="outline-danger" >TICKETS</Button>
    </GigButtonsContainer>
     
     <GigItem>

    <GigDate>DEC 10</GigDate>
   <GigVenue>GRAND SOCIAL @ 11PM</GigVenue>
    <GigLocation>DUBLIN, IRELAND</GigLocation>
     </GigItem>

       <GigButtonsContainer>
      <Button variant="outline-danger" >TICKETS</Button>
    </GigButtonsContainer>
    </GigInfoContainer>
      <Card id="card1" >
                      
                            <Card.Img src={band}  />  
                         
                        </Card>
                        </Container1>
        </Layout>

    </ImgBackground>
    </Styles>

)