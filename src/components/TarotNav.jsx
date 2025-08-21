import React, { useState } from "react";
import { NavLink} from "react-router-dom";
import "../style/tarotnav.css";

const TarotNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <div className="arcanum-container">
        
        {/* Logo */}
        <div className="logo-wrapper">
          <img 
            src="/arcanum-logo.png" 
            alt="Logo Arcanum" 
            className="arcanum-logo"
          />
        </div>

        {/* Barra de navegación */}
        <nav className="navbar">
          <button className="menu-toggle" onClick={toggleMenu}>
            ☰
          </button>

          <div className={`nav-links ${isOpen ? "active" : ""}`}>
            <a href="/" className="nav-button">El tarot</a>
            <a href="/editcards" className="nav-button">Echa tus cartas</a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default TarotNav;

