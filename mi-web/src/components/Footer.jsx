import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>MI WEB SPA</h3>
          <p>Explorando las fronteras del desarrollo web moderno con React.</p>
        </div>
        <div className="footer-links">
          <a href="#github">GitHub</a>
          <a href="#linkedin">LinkedIn</a>
          <a href="#twitter">Twitter</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 Mi Proyecto SPA. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
