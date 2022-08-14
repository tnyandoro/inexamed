import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Navbar() {
  const [click, setClick] = useState(false);
  const [buttonStyle, setButtonStyle] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = (button) => {
    if(window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  window.addEventListener('resize', showButton);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/index.html" className="navbar-logo">
          INXAMED
          <i className="fa fa-medkit" />
        </Link>
        <div aria-hidden="true" className="menu-icon" onClick={handleClick} onKeyDown={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Interactions
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Pregnancy
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Add Interactions
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              References
            </Link>
          </li>
        </ul>
        {button && <Button buttonStyle="btn--outline">SIGN UP</Button>}
      </div>
    </nav>
  );
}

export default Navbar;
