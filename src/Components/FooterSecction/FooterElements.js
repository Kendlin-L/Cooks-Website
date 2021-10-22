import styled from 'styled-components';
import {Link as LinkScroll} from 'react-scroll';
import {Link as LinkAbout} from 'react-router-dom';
export const FooterWrapper = styled.div`
padding:15px 24px;
display:flex;
flex-direction:row;
justify-content:center;
align-items:center;
position:relative;


@media screen and (max-width:769px){
    display:none;
    


    
}


`; 
export const ChefHat = styled.img`



height:130px;
 top:27px;


top:15px;

display:flex;

`
export const Container1 = styled.div`
position:relative;
left:450px;
`
export const ImgBackground = styled.div`

background-color:black;
position:relative;



`; 
 export const FootItem = styled.div`
height:10px;
  #hat{
      color:black;
  }
   #right2{
      color:black;
  }

  `
  export const FootLinks = styled(LinkScroll)`
    display: flex;
    
    position:relative;
    cursor:pointer;
   
    height:50%;
    color: #fff;
    align-items:center;
  
    font-size: 15px;
  top:5px;
    font-weight:400;
    text-decoration: none;
     padding: 0 16px;
    @media screen and (max-width: 769px){
        display:none;
       
    }
    &:hover {
      color: #C0C0C0;
      transition: .3s;
    }
    &.active{
      border-bottom: 3px #fff;
    }
    #hat{
  height:100%;
    }
  
    `
      export const FootLinks2 = styled(LinkAbout)`
    display: flex;
    
    position:relative;
    cursor:pointer;
   
    height:50%;
    color: #fff;
    align-items:center;
  
    font-size: 15px;
  top:5px;
    font-weight:400;
    text-decoration: none;
     padding: 0 16px;
    @media screen and (max-width: 769px){
        display:none;
       
    }
    &:hover {
      color: #C0C0C0;
      transition: .3s;
    }
    &.active{
      border-bottom: 3px #fff;
    }
  
    `
    export const Email = styled.div`
&::before{
content:"COOKSBUTWERECHEFS@GMAIL.COM";
visibility:visible;
}

font-family: 'Montserrat', sans-serif;
color: white;
position: relative;
font-size:15px;
top:5px;

`; 