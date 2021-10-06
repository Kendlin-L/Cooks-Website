import styled from 'styled-components';


export const Header1 = styled.div`
&::before{
content:"CHECK OUT OUR MUSIC";
visibility:visible;
}

font-family: 'Montserrat', sans-serif;
color: white;
position: relative;
font-size: 82px;
top:100px;
font-weight:1000;
left: 170px;
 @media screen and (max-width: 769px){
        position:relaitve;
 font-size: 22px;
  left:30px;
  top:55px;
  width:300px;
   
   

     
  }
`; 
export const ImgBackground = styled.div`

background-color:black;


width: 100%;
height: 1080px;

position: relative;

@media screen and (max-width: 769px){
 
        
   
   min-width:375px;
 

   

     
  }
`; 
export const MusicObj = styled.div`
position:relative;
left:50px;
 @media screen and (max-width: 769px){
 
        
   
  left:35px;
    top:100px;
    width:100px;
   
   

     
  }
` 

export const Styles = styled.div`
#card1{
  
     border:none;
      width:20rem;
      cursor:pointer;
      top:350px;
      padding-bottom:1rem;
      background-color:transparent;
    @media screen and (max-width: 769px){
        position:relaitve;
         width:16rem;
  left:1px;
  top:55px;
   
    padding-bottom:none;

     
  }
  }
  #card2{
     border:none;
      width:20rem;
      left:450px;
      top:16px;
      cursor:pointer;
       padding-bottom:1rem;
      background-color:transparent;
    @media screen and (max-width: 769px){
        position:relaitve;
         width:16rem;
  left:1px;
  top:55px;
   
   

     
  }
  
}
#card3{
  border:none;
   width:20rem;
   left:890px;
   bottom:320px;
  cursor:pointer;
    padding-bottom:1rem;
   background-color:transparent;
    @media screen and (max-width: 769px){
 position:relative;
        
         width:16rem;
  left:1px;
  top:55px;
   
   

     
  }
  }
`