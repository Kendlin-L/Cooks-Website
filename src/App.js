
import React, { useState,  } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import {Home}from './Home';

import { Navigator } from './Components/Navbar/Navigator';
import { Sidebar } from './Components/Sidebar/Sidebar';







const App = ()=> {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () =>{

    setIsOpen(!isOpen);
  }

  
 
  return (
    <React.Fragment>
       
      <Router>
  
  
      <Sidebar isOpen={isOpen} toggle = {toggle}/>
    
      <Navigator  toggle={toggle} />
      <Switch>
      <Route exact path ="/" component ={Home}/>
      
      
     </Switch>
      </Router>
      
    
      </React.Fragment>
  );
}




export default App;
