import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/index.html" className="navbar-logo">
          INXAMED
          <i className="fa fa-medkit" />
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
