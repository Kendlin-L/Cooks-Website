import React from 'react';
import { Container,X, Icon, Slink,Smenu } from '../Sidebar/Elements';

export const Sidebar = ({isOpen,toggle}) =>(
    <Container isOpen={isOpen} onClick={toggle} >
<Icon onClick={toggle}>
    <X></X>
</Icon>
<Smenu>
    <Slink to = "about" onClick={toggle}>
        ABOUT
    </Slink>
    <Slink to = "music" onClick={toggle}>
        MUSIC
    </Slink>
    <Slink to = "shows" onClick={toggle}>
        SHOWS
    </Slink>
    <Slink to = "store" onClick={toggle}>
        STORE
    </Slink>
</Smenu>
    </Container>

)