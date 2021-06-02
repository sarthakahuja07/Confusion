
import "./App.css";
import React, { useState } from "react";
import Menu from "./components/MenuComponents";
import {
  Navbar,
  NavbarBrand
} from 'reactstrap';

function App() {
  return (
    <div >
    <Navbar dark color="danger">
      <div className="container">
        <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
      </div>
    </Navbar>
    <Menu />
    </div> 
  );
}

export default App;
