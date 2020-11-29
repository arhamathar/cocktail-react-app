import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="logo">The<span>Cocktail</span></div>
        <ul className="nav-links">
          <li>
            <NavLink activeClassName="selected" to="/">Home</NavLink>
          </li>
          <li>
            <NavLink activeClassName="selected" to="/about">About</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
