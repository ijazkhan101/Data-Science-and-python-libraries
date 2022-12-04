import React from 'react';
import './App.css';
import Navbar from './navbar';
import Home from './home';
import Deck from './deck';
import { BrowserRouter as Switch, Route, Router} from "react-router-dom";

function App() {
  return (
  
    <div className="Container">
        <Navbar></Navbar>
        <Home></Home>
      </div>
   
  );
}

export default App;
