import React from 'react'
import './navbar.css'

const navbar = () => {
  return (
    <nav className="navbar">
      <img src="src\assets\logo.png" alt="logo" className="logo" />
      <ul className="nav-links">
        <li>Home</li>
        <li>Skills</li>
        <li>Projects</li>
      </ul>

      <button className="hire-btn">Hire Me</button>
    </nav>
  )
}

export default navbar
