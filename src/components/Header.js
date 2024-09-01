// src/components/Header.js
import React, { useState } from 'react';
import { FaUser } from 'react-icons/fa'; 

import { Link } from 'react-router-dom';
import SobreMi from "./SobreMi"
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <h1><Link to="/" onClick={toggleMenu}>MiPortafolio</Link></h1>
      </div>
      <div
        className={`hamburger-menu ${menuOpen ? 'active' : ''}`}
        onClick={toggleMenu}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>
      <nav className={`nav ${menuOpen ? 'active' : ''}`}>
        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
          <li><Link to="/sobre-mi" onClick={toggleMenu}>Sobre mi</Link></li>
          <li><Link to="/proyectos" onClick={toggleMenu}>Proyectos</Link></li>
          <li><Link to="/cursos" onClick={toggleMenu}>Cursos</Link></li>
          <li><Link to="/blog" onClick={toggleMenu}>Blog</Link></li>
          <li><Link to="/contacto" onClick={toggleMenu}>Contacto</Link></li>
          <li>
                    <Link to="/login" onClick={toggleMenu}>
                        <FaUser style={{ marginRight: '8px' }} /> 
                    </Link>
                </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
