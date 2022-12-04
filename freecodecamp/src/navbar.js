import  React from 'react';

import logo from './assets/logo.png';

function Navbar(){
    return(
    <div>
<nav className="navbar navbar-expand-lg navbar-light bg-light Menubg" >
  <a className="navbar-brand" href="#"> <img src={logo}  className='logocss' /></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav " >
      <li className="nav-item active" >
        <a className="nav-link" href="#">HOME <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">TOKEN</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          ABOUT
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">COPMANY</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">PROCESS</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">ROADMAP</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">DECK</a>
        </div>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Contact</a>
      </li>
      <li className='btnlun'>
        <a  href="#" className='launchbtn'>LANUCH APP</a>
      </li>
    
    </ul>
 
  </div>
</nav>
    </div>

    )
};

export default Navbar;