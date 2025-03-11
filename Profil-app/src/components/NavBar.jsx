import React from 'react';
import '../assets/NavBar.css'; // Corrected path

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <a href="#home" id="home-button">Hjem</a>
        </li>
        <li>
          <a href="#projects">Projekter</a>
        </li>
        <li>
          <a href="#contact">Kontakt</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;