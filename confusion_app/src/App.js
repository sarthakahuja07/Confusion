
import "./App.css";
import React from "react";
import Menu from "./components/MenuComponents";
import {
  Navbar,
  NavbarBrand
} from 'reactstrap';

import Dishes from './shared/dishes';

function App() {
  return (
    <div >
    <Navbar dark color="danger">
      <div className="container">
        <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
      </div>
    </Navbar>
    <Menu dishes={Dishes}/>
    </div> 
  );
}

export default App;
