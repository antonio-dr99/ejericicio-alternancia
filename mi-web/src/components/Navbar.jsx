import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ theme, toggleTheme }) => {
  return (
    <nav className="navbar">
      <div className="navbar__brand">MI WEB</div>
      
      <div className="navbar__links">
        <NavLink 
          to="/" 
          className={({ isActive }) => isActive ? "navbar__link navbar__link--active" : "navbar__link"}
        >
          Inicio
        </NavLink>
        <NavLink 
          to="/servicios" 
          className={({ isActive }) => isActive ? "navbar__link navbar__link--active" : "navbar__link"}
        >
          Servicios
        </NavLink>
        <NavLink 
          to="/contacto" 
          className={({ isActive }) => isActive ? "navbar__link navbar__link--active" : "navbar__link"}
        >
          Contacto
        </NavLink>
        
        <button className="theme-toggle" onClick={toggleTheme}>
          {theme === 'light' ? '🌙 Modo Oscuro' : '☀️ Modo Claro'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
