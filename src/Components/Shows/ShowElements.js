import styled from 'styled-components';


export const Container1 = styled.div`
position:absolute;
bottom:400px;

;
`
export const ImgBackground = styled.div`
background-color:black;

background-repeat:no-repeat;
background-size: cover; 

background-attachment:fixed;
width: 100%;
height: 950px;



position: relative;
 @media screen and (max-width: 769px){
      
   height: 750px;
   min-width:375px;

     
  }

`; 
export const GigButtonsContainer=styled.div`
min-width: 150px;
    text-align: right;
   

        top:-55px;
        position:relative;
        

`
export const Header1 = styled.div`
&::before{
  content:"CATCH US AT A SHOW";
  visibility:visible;
  }
  
  font-family: 'Montserrat', sans-serif;
  color: white;
  position: relative;
  font-size: 82px;
  top:100px;
  font-weight:1000;
  left: 190px;
  @media screen 
and (min-width: 768px) 
and (max-width: 1024px) 
and (-webkit-min-device-pixel-ratio: 1) {
  font-size: 62px;
     left:150px;
  
}
@media screen and (min-width: 320px)
and (max-width: 800px) {
          
     font-size: 22px;
     left:55px;
     width:250px;
  
       
    }
    @media screen and (min-width: 414px)
    and (max-width: 800px)  {
      left:70px
    }
  
`; 
export const GigDate = styled.div`
display: inline-block;
line-height:28px;
    text-transform: uppercase;
    white-space: nowrap;
        margin-right: 5px;
        min-width: 9em;
        box-sizing: border-box;
    padding-right: 1em;
        color:white;
    font-size: 13px !important;
    font-weight: bold;
    letter-spacing: .5px;
`; 
export const GigLocation = styled.div`
box-sizing: border-box;
    padding-right: 1em;
        min-width: 50%;
        font-size: 16px;
    line-height: 28px;
    color:white;
     @media screen and (max-width: 769px){
      
   
   min-width: 50%;
      font-size: 10px;
    font-weight: bold;
   

     
  }
   }
`; 
export const GigVenue = styled.div`
box-sizing: border-box;
    padding-right: 1em;
    min-width: 50%;
      font-size: 25px !important;
    font-weight: bold;
    color:white;
    letter-spacing: .5px;
      @media screen 
and (min-width: 768px) 
and (max-width: 1024px) 
and (-webkit-min-device-pixel-ratio: 1) {
 
  font-size: 20px !important;
   
  
}
@media screen and (min-width: 320px)
and (max-width: 800px)  {
      
   
   min-width: 50%;
      font-size: 12px !important;
    font-weight: bold;
   

     
  }
`; 
export const GigItem = styled.div`
border-bottom: 1px solid rgba(130,130,130,.15);
width:100%;





}
`; 
export const GigInfoContainer = styled.div`
font-size: 16px;
    line-height: 28px;
    display: block;
        position: absolute;
    height: auto;
width:600px;
    
 
    top:350px;;
    left:50px;
    @media screen 
and (min-width: 768px) 
and (max-width: 1024px) 
and (-webkit-min-device-pixel-ratio: 1) {
 
   width:380px;
   
  
}

@media screen and (min-width: 320px)
and (max-width: 800px)  {
       font-size: 6px;
    line-height: 18px;
   width:300px;
   left:40px
   
   

     
  }
  @media screen and (min-width: 414px)
and (max-width: 800px)  {
  left:50px
}
  
`; 
export const Styles = styled.div`
#card1{
    border:none;
     width:36rem;
      left:116%;
      top:350px;
      padding-bottom:1rem;
      background-color:transparent;
      @media screen 
      and (min-width: 768px) 
      and (max-width: 1024px) 
      and (-webkit-min-device-pixel-ratio: 1) {
       
        width:32rem;
 left:450px;

         
        
      }
      @media screen and (min-width: 320px)
      and (max-width: 800px)  {
        position:relaitve;
         width:16rem;
  left:50px;
  top:55px;
  @media screen and (min-width: 414px)
    and (max-width: 800px)  {
      position:relaitve;
         width:16rem;
  left:65px;
  top:55px;
    }

     
  }
 
}
`