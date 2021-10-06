import React from 'react';
import { Header1,  ImgBackground, MusicObj, Styles } from './MusicElements';
import {Layout} from '../Layout'
import { Card,  } from "react-bootstrap";
import StellaMaris from '../../Images/StellaMaris1.jpg';
import SportsDay from '../../Images/SportsDay1.jpg';
import Laurels from '../../Images/Laurels.JPG';


export const Music = () =>(
    

<Styles>
    <ImgBackground id="music">
    <Layout>
    <Header1></Header1>
<MusicObj>
    <Card id="card1">
                            <a href="https://open.spotify.com/track/53lqVyjpzR2lTZfQxXnKDl?si=22da4d62181d4b25" target="_blank"  rel="noopener noreferrer">
                            <Card.Img src={StellaMaris}  />  
                            </a>
                        </Card>
                        <Card id="card2">
                            <a href="https://open.spotify.com/album/1UarstJRaPsRJ2tffeLxV0?si=9dreE9FzQ2-oqUq12-TcUg&dl_branch=1" target="_blank"  rel="noopener noreferrer">
                            <Card.Img src={SportsDay}  />  
                            </a>
                        </Card>
                        <Card id="card3">
                            <a href="https://open.spotify.com/track/6ECtLmLrjxssm7kyQ1PWVc?si=94d483fe85704070" target="_blank"  rel="noopener noreferrer">
                            <Card.Img src={Laurels}  />  
                            </a>
                        </Card>
                     </MusicObj>
    </Layout>
    </ImgBackground>
</Styles>

)