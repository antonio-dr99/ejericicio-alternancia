import React from 'react';
import { Link } from 'react-router-dom';
import './pages.css';

const NotFound = () => {
  return (
    <div className="page-container fade-up" style={{ textAlign: 'center' }}>
      <h1 className="page-title">404</h1>
      <h2>Página no encontrada</h2>
      <p style={{ margin: '2rem 0', color: 'var(--secondary-text)' }}>
        Lo sentimos, la sección que buscas no existe o ha sido movida.
      </p>
      <Link to="/" className="submit-btn" style={{ display: 'inline-block', padding: '0.8rem 2rem' }}>
        Volver al Inicio
      </Link>
    </div>
  );
};

export default NotFound;
