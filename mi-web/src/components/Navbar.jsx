import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import './Navbar.css';

/**
 * Componente Navbar.
 * Gestiona la navegación y el cambio de tema visual.
 */
const Navbar = () => {
  // Consumimos el estado del tema global mediante el contexto (Ejercicio 5)
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="navbar">
      <div className="navbar__brand">MI WEB SPA</div>
      
      <div className="navbar__links">
        {/* NavLink aplica automáticamente la clase activa basada en la ruta actual (Ejercicio 1) */}
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
        
        {/* Botón interactivo para alternar entre modo claro y oscuro (Ejercicio 5) */}
        <button className="theme-toggle" onClick={toggleTheme}>
          {theme === 'light' ? '🌙 Modo Oscuro' : '☀️ Modo Claro'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
