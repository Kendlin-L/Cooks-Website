import styled from 'styled-components';


export const Header1 = styled.div`
&::before{
content:"CHECK OUT OUR MUSIC";
visibility:visible;
}

font-family: 'Montserrat', sans-serif;
color: white;
position: absolute;
font-size: 82px;
top:100px;
font-weight:1000;
left: 370px;
display:block;
 @media screen and (max-width: 769px){
        position:relaitve;
 font-size: 22px;
  left:80px;
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
position:absolute;
left:285px;
top:100px;
display:flex;
 @media screen and (max-width: 769px){
 
  display:inline-block;   
   
  left:85px;
    top:100px;
    width:270px;
   
   

     
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
      left:135px;
      top:350px;
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
   left:250px;
   top:350px;
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