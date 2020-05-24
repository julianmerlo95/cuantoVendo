import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.sass';

const Navbar = (props) => {
  return (
    <div className="navbar">
      <img></img>
      <div className="navbar__list">
        <h2><NavLink to="/vender">Vender</NavLink></h2>
        <h2><NavLink to="/stock">Stock</NavLink></h2>
      </div>
    </div>
  )
}

export default Navbar;