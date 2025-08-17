import React, { useState } from 'react';
import './navbar.css';

const Navbar = () => {
  // State to manage the mobile menu's visibility
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <img src="src\assets\logoname.png" alt="logo" className="logo" />

      {/* Hamburger menu icon */}
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {/* These spans will be styled to look like a hamburger or an 'X' */}
        <span className={menuOpen ? 'open' : ''}></span>
        <span className={menuOpen ? 'open' : ''}></span>
        <span className={menuOpen ? 'open' : ''}></span>
      </div>

      {/* Navigation links - add 'active' class when menu is open */}
      <ul className={menuOpen ? "nav-links active" : "nav-links"}>
        <li>Home</li>
        <li>Skills</li>
        <li>Projects</li>
        {/* It's good practice to move the button inside for mobile view */}
        <button className="hire-btn mobile">Hire Me</button>
      </ul>

      <button className="hire-btn desktop">Hire Me</button>
    </nav>
  );
}

export default Navbar;