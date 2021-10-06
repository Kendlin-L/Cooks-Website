import styled from 'styled-components';
import {Link as LinkScroll} from 'react-scroll';
import {Link as LinkLogo} from 'react-router-dom';
import {Link as LinkAbout} from 'react-router-dom';

export const Nav1 = styled.nav`

    background-color: transparent;
    // background: linear-gradient(#BA55D3, #EE82EE);
    text-decoration: none;
    display:flex;
    top:0;
  position:relative;
    transition: top 10.3s;
    transition-timing-function:ease-in;
    jusitfy-content: center;
    align-items:center;
    font-size:16px;
    height:70px;
    width:100%;
    z-index:10;
    @media screen and (max-width:960px){
      transition: 0.8s all ease;
      height:50px;
     
    }
   
    
 
  `

  export const NavItem = styled.div`
  height:80px;

  `

  export const Logo = styled(LinkLogo)`
  color: white;
  font-size: 40px;
  position:absolute;
   left: 45%;
   jusitfy-self:flex-start;
   margin-left:24px;
   display:flex;
   text-decoration:none;
   align-items:center;
  &:hover {
      color: black;
    }
    @media screen and (max-width: 769px){
      font-size: 30px;
      margin-left:0px;
      left:40%;
      top:5px;
  }
}
  `
  

  export const NavImage = styled.img`

 position:relative;


height:40px;

 cursor:pointer;
  justify-content:center;
  &:hover {
      color: black;
     
      border-radius:25%;
    }
    @media screen and (max-width: 769px){
     display:none
  }
}

  `
    export const NavLinkRight = styled(LinkAbout)`
   display: flex;
 
    position:fixed;
    cursor:pointer;
   

    color: #fff;
    align-items:center;

    font-size: 20px;
  top:15px;
  
    text-decoration: none;

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
    &#ig{
   
right:190px;
    }
    &#fb{
   
right:140px;
    }
    &#yt{
   
right:90px;
    }
    &#spot{
   
right:40px;
    }

  `

  export const Container = styled.div`
  display:flex;
  jusitfy-content:space-between;
  z-index:1;
  width:100%;
  padding:0 24px;

  height:70px;
 background-color: transparent;
  // background: linear-gradient(#BA55D3, #EE82EE);
  

  `
  
  export const MobileView = styled.div`
  display: none;
  @media screen and (max-width: 768px){
    display:block;
       position:fixed:
       top:0;
       left:10%;
            width:10px;
       transfrom:translate(-100%, 60%);
       cursor:pointer;
   
       font-size: 20px;
       color:white;
   }
  @media screen and (max-width: 378px){
    display:block;
       position:fixed:
       top:0;
  
       right:10%;
       transfrom:translate(-100%, 60%);
       cursor:pointer;
   
       font-size: 20px;
       color:white;
   }
    `
  export const NavMenu = styled.ul`
  display: flex;
  align-items:center;
  list-style:none;
  text-align:center;
 margin-right:-22px;
   
  @media screen and (max-width: 769px){
      display:none;
     
  }
    `
export const PageLinks = styled(LinkScroll)`
    display: flex;
 
    position:relative;
    cursor:pointer;
   
    height:100%;
    color: #fff;
    align-items:center;
 right:50px;
    font-size: 20px;
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
      export const AboutLink = styled(LinkAbout)`
    display: flex;
     right:50px;
    position:relative;
    cursor:pointer;
   
    height:100%;
    color: #fff;
    align-items:center;
  
    font-size: 20px;
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
