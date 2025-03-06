import React from 'react';
import '../assets/NavBar.css'; // Corrected path

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <a href="#home" id="home-button">Home</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;