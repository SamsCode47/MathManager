import React from 'react'
import { useState } from 'react';
import {Navbar, MainSection} from "./components"
import './app.css';

const App = () =>{

  const [toggleNav, setToggleNav] = useState(false);

  function handleToggle(){
    setToggleNav(!toggleNav)
  }

  return(
    <div className="app--wrapper">
        <Navbar toggle = {toggleNav} handleToggle = {handleToggle}/>
        <MainSection toggle = {toggleNav}/>
    </div>
  )
  
}

export default App
