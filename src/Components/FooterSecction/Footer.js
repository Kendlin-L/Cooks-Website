import React from 'react';
import { FooterWrapper,  ImgBackground, FootItem,FootLinks ,ChefHat, Email, FootLinks2} from './FooterElements';
import {Layout} from '../Layout'
import chefHat from '../../Images/ChefHatFooter.png';


export const Footer = () =>(


   
    <ImgBackground>
    <FooterWrapper>

<FootItem>
<Layout>
<FootLinks to ="music"  >MUSIC</FootLinks>
</Layout>
</FootItem>
<FootItem>
<Layout>
<FootLinks  to ="shows" >SHOWS</FootLinks>
</Layout>
</FootItem>
<FootItem>
<Layout>
<FootLinks2  to={{ pathname: "https://cookbutwerechefs.bandcamp.com/" }} target="_blank" >STORE</FootLinks2>
</Layout>
</FootItem>


<FootLinks  to ="home" ><ChefHat src={chefHat}/></FootLinks>


<FootItem>
<Layout>

<a href = "mailto: cooksbutwerechefs@gmail.com" style={{textDecoration:"none"}}>
<Email />
</a>
</Layout>

</FootItem>



                     
    </FooterWrapper>
    </ImgBackground>

)
