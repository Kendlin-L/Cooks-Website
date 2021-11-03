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
  @media screen 
  and (min-width: 768px) 
  and (max-width: 1024px) 
  and (-webkit-min-device-pixel-ratio: 1) 
 {
    font-size: 50px;
    top:150px;
    font-weight:1000;
    left:160px;
}
  @media screen and (min-width: 320px)
    and (max-width: 800px)  {
   
      font-size: 22px;
       left:40px;
       top:55px;
       width:300px;
    }
   
    @media screen and (min-width: 414px)
    and (max-width: 800px)  {
      font-size: 22px;
       left:60px;
       top:55px;
       width:300px;
    }
  
     @media only screen 
    and (min-device-width: 768px) 
    and (max-device-width: 1024px) 
    and (-webkit-min-device-pixel-ratio: 1) {
      font-family: 'Montserrat', sans-serif;
      color: white;
      position: relative;
      font-size: 22px;
      top:100px;
      font-weight:1000;
      left: 220px;
   
  }
  @media only screen 
  and (min-device-width: 1024px) 
  and (max-device-width: 1366px)
  and (-webkit-min-device-pixel-ratio: 2) {
    left:10px;
    text-align:center;
  
  font-size: 60px;
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
display:flex;


@media screen 
and (min-width: 768px) 
and (max-width: 1024px) 
and (-webkit-min-device-pixel-ratio: 1) {
  width:650px;
 left:30px;
 top:50px;
  }
  
  
 
  @media screen and (min-width: 320px)
  and (max-width: 800px)  {
 
        
   
  left:50px;
    top:100px;
    width:100px;
   
   

    display:inline-block;
  }
  
  
  @media screen and (min-width: 414px)
  and (max-width: 800px)  {
    left:70px;
    top:100px;
    width:100px
  
    display:inline-block;
    }
 

    @media only screen 
    and (min-device-width: 768px) 
    and (max-device-width: 1024px) 
    and (-webkit-min-device-pixel-ratio: 1) {
      left:225px;
  }
  
  
   @media only screen 
          and (min-device-width: 1024px) 
          and (max-device-width: 1366px)
          and (-webkit-min-device-pixel-ratio: 2) {
            left:15px;
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
      @media screen 
  and (max-device-width: 1280px) 
  and (max-device-height: 800px) 
  { 
    width:17rem;
  }
    @media screen and (max-width: 769px){
        position:relaitve;
         width:16rem;
  left:1px;
  top:55px;
   
    padding-bottom:none;

     
  }
  
  
  @media only screen 
  and (min-device-width: 1024px) 
  and (max-device-width: 1366px)
  and (-webkit-min-device-pixel-ratio: 2) {
    left:115px;
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
      @media screen 
  and (max-device-width: 1280px) 
  and (max-device-height: 800px) 
  { 
    width:17rem;
  }
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
   @media screen 
  and (max-device-width: 1280px) 
  and (max-device-height: 800px) 
  { 
    width:17rem;
  }
    @media screen and (max-width: 769px){
 position:relative;
        
         width:16rem;
  left:1px;
  top:55px;
   
   

     
  }
 
  @media only screen 
          and (min-device-width: 1024px) 
          and (max-device-width: 1366px)
          and (-webkit-min-device-pixel-ratio: 2) {
            left:155px;
          }
        
          
  
  }
`