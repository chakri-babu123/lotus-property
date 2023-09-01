import React from 'react';
import '../App.css';
import { NavLink } from 'react-router-dom';
import logo from '../lotus-images/logo-mini.png';
function Navbar() {
  return (
    <>
       
  <header id="header" className="header d-flex align-items-center">
    <div className="container-fluid container-xl d-flex align-items-center justify-content-between banner-nav">

      <NavLink to={'/'} className="logo d-flex align-items-center">
       
       <img src={logo} alt=""/>
      </NavLink>

      <i className="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
      <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
      <nav id="navbar" className="navbar">
        <ul>
          <li><NavLink to={'/'} >Home</NavLink></li>
          <li><NavLink to={'/about'}>About</NavLink></li>
          <li><NavLink to={'/property'}>Properties</NavLink></li>
          <li><NavLink to={'/gallery'}>Gallery</NavLink></li>
          <li><NavLink to={'/contact'}>Contact</NavLink></li>
        </ul>
      </nav>

    </div>
  </header>
    </>
  );
}

export default Navbar;
