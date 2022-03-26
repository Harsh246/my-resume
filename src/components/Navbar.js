import React from 'react';
import { NavLink } from 'react-router-dom';

import '../styles/navbar.css';

export default function Navbar() {
  return (
      <header>
          
          <div id="header__logo">
              <p>HM</p>
          </div>
          <nav id="header__main">
          <NavLink to="/" activeClassName="active">Home </NavLink>
          <NavLink to="/about" activeClassName="active">About</NavLink>
          <NavLink to="/projects" activeClassName="active">Projects</NavLink>
          <a href="https://www.linkedin.com/in/erharshmalhotra/" target="_blank" rel="noreferrer" id="button" activeClassName="active">Contact</a>
          </nav>
 
    </header>
  )
}
