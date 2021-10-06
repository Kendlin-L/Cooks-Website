import styled from 'styled-components';
import chefHat from '../../Images/ChefHat.png';
import TrailerPark2 from '../../Images/TrailerPark2.jpg';
import Band from '../../Images/Band.jpg';
import Siofra from '../../Images/Siofra3.jpg';

export const HomeContainer = styled.div`

width: 100%;
height: 100%;

background-color:black;

position: relative;

top: -100px;
@media screen and (max-width: 1024px){


  width: 100%;

     
  }

`; 

export const HomeBackground = styled.div`
position:absolute;
width: 100%;

@media screen and (max-width: 769px){


     
  }

`; 

export const Header1 = styled.div`
&::before{
  content:"FOLLOW US ON INSTAGRAM";
  visibility:visible;
  }
  font-family: 'Montserrat', sans-serif;
  color: white;
  position: relative;
  font-size: 82px;
  top:150px;
  font-weight:1000;
  left:50px;
  @media screen 
  and (min-width: 768px) 
  and (max-width: 1024px) 
  and (-webkit-min-device-pixel-ratio: 1) 
 {
    font-size: 50px;
    top:150px;
    font-weight:1000;
    left:120px;
}
  @media screen and (min-width: 320px)
  and (max-width: 800px)  {
      font-weight:1000;
      font-size: 18px;
      left:45px;
      width:300px;
  
       
    }
    
    @media screen and (min-width: 414px)
    and (max-width: 800px)  {
      font-weight:1000;
      font-size: 18px;
      left:70px;
      width:300px
    }
    @media screen and (max-width: 321px){
      left:25px;
             
          }
       
 
`; 
export const CardContainer = styled.div`

@media screen 
  and (min-width: 768px) 
  and (max-width: 1024px) 
  and (-webkit-min-device-pixel-ratio: 1) {
position:relative;
  top:-150px;
  left:25px;
    width:900px;
       
    }
    @media screen and (min-width: 320px)
  and (max-width: 800px)  {
    position:relative;
    top:-150px;
    left:70px;
      width:100px;
  
       
    }
    @media screen and (min-width: 414px)
  and (max-width: 800px)  {
    position:relative;
    top:-150px;
    left:100px;
      width:100px;
  
       
    }
    
  }`

export const ImgBackground = styled.div`
background-color:black;
background-attachment:scroll;
background-image: url(${chefHat});
background-repeat:no-repeat;
background-size:contain;
background-position:50%50%;


height:1080px;
position:relative;


width: 100%;
display:inline-block;

position: relative;
top:55px;
@media screen and (max-width: 769px){
   
height:560px;
        min-width:375px;
  }

`; 
export const TrailerParkImg = styled.div`
background-image: url(${TrailerPark2});
background-repeat:no-repeat;
background-size: cover; 
background-attachment:fixed;
width: 100%;
height:1080px;
background-position:center;



position: relative;


`; 
export const FilmImg = styled.div`
background-image: url(${Band});
background-repeat:no-repeat;
background-size:cover;
background-color:black;
background-position:50% 40%;

width:100%;
height:1080px;


position: relative;
@media screen and (max-width: 769px){
       
   
   background-size:cover;
background-attachment:scroll;
  min-width:375px;
     background-position:35%;

  }


`; 
export const SiofraImg = styled.div`
background-image: url(${Siofra});
background-repeat:no-repeat;
background-size:cover;
background-color:black;
background-position:50% 60%;
background-attachment:fixed;
width:100%;
height:1080px;


position: relative;
@media screen and (max-width: 769px){
    
      min-width:375px;
    }

`; 

export const InstaGramContainer = styled.div`

background-attachment:fixed;

width:100%;
height: 1080px;

background-color:#010101;
position: relative;
background-repeat:no-repeat;
background-size: cover; 
@media screen and (max-width: 769px){
    
    height:2100px;
  }
 


`
export const ChefHatContainer = styled.div`


background-attachment:fixed;
background-image: url(${chefHat});
background-repeat:no-repeat;
background-size:contain;


width:1080px;
height:1080px;
position:relative;
top:15px;
left:35px;
`
export const InstaImgBackground = styled.img`
 -o-object-fit:cover;
object-fit:cover;
object-repeat:no-repeat;
width: 100%;
height: 1080px;

position: abosulte;


`; 
