import styled from "styled-components";
import {FaTimes} from "react-icons/fa";
import {Link as LinkScroll} from 'react-scroll';

export const Container = styled.aside`
    width: 100%;
    position:fixed;
    z-index:999;
    height:100%;
    background:#0d0d0d;
    display:grid;
    align-items:center;
    top:0;
    left:0;
    transition: 0.3s ease-in-out;
    opacity:${({isOpen})=>(isOpen? '100%':0)};
    top:${({isOpen})=>(isOpen? 0:'-100%')};
    @media screen and (max-width:769px){
    max-width:375px;
    
}

`
export const X = styled(FaTimes)`
    color:#fff;

`
export const Icon = styled.div`
position:absolute;
top:5px;
background:transparent;
right:16px;
font-size:20px;
cursor:pointer;
outline:none;
`
export const Smenu = styled.ul`
display:grid;
grid-template:column;
text-align:center;
grid-template-rows:repeat(6,80px);
@media screen and (max-width:480px){
    grid-template-rows:repeat(6,60px);

}
`
export const Slink = styled(LinkScroll)`
display:flex;
align-items:center;
position:relative;
left:38%;

jusify-content:center;
color:#fff;
font-size:16px;
text-decoration:none;
list-style:none;
transition: 0.3s ease-in-out;
cursor:pointer;
&:hover {
    color: #C0C0C0;
    transition: .3s;
  }
`
