import React from 'react';
import { FaBars } from 'react-icons/fa';
import {Nav1, NavItem,MobileView, NavMenu, NavLinkRight,NavImage, Container, PageLinks, AboutLink} from './Elements';
import InstaImg from '../../Images/ig.svg';
import FacebookImg from '../../Images/fb.svg';
import YoutubeImg from '../../Images/yt.svg';
import SpotifyImg from '../../Images/spot.svg';

 
export const Navigator = ({toggle }) => (
  
<Nav1 >
  
  <Container>

      {/* <Logo to="/">C.B.W.C</Logo> */}
   
    <MobileView onClick={toggle} >
  <FaBars style={{position:"absolute", right:"90%", top:"5.5px"}} />
    </MobileView>
        <NavMenu>
          <NavItem>
       
              <PageLinks to='music' smooth={true} >MUSIC</PageLinks>
           
          </NavItem>
          <NavItem>
           
              <PageLinks to="shows" smooth={true}  >SHOWS</PageLinks>
           
            </NavItem>
       
          <NavItem>
           
              <AboutLink to={{ pathname: "https://cookbutwerechefs.bandcamp.com/" }} target="_blank" >STORE</AboutLink>
           
          </NavItem>
         
           </NavMenu>
             
           
          <NavItem >
          <NavLinkRight id="ig" to={{ pathname: "https://www.instagram.com/cooks.but.were.chefs/" }} target="_blank">
          <NavImage  src={InstaImg} />
          </NavLinkRight>
          </NavItem>
          <NavItem>
          <NavLinkRight  id="fb" to={{ pathname: "https://www.facebook.com/CooksButWereChefs/" }} target="_blank">
          <NavImage src={FacebookImg}/>
          </NavLinkRight>
          </NavItem>
          <NavItem>
          <NavLinkRight id="yt" to={{ pathname: "https://www.youtube.com/channel/UCbeA0ySIFBUVvIusMRL_NSQ" }} target="_blank">
          <NavImage src={YoutubeImg}/>
          </NavLinkRight>
          </NavItem>
          <NavItem>
          <NavLinkRight id="spot" to={{ pathname: "https://open.spotify.com/artist/2Q9PBFjIjNgm7N5tyL0Z83?si=YDurybJtSV6J0vgV4W0FuQ&dl_branch=1" }} target="_blank">
          <NavImage src={SpotifyImg}/>
          </NavLinkRight>
          </NavItem>
       
     </Container>

    </Nav1>

)