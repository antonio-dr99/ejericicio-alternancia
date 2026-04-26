import React from 'react';
import './pages.css';

/**
 * Página de Inicio (Ejercicio 1).
 * Presenta la bienvenida y la descripción técnica del proyecto.
 */
const Inicio = () => {
  return (
    <div className="page-container fade-up">
      <h1 className="page-title">Bienvenido a Mi Proyecto SPA</h1>
      <p className="page-content">
        Este proyecto es una Single Page Application (SPA) desarrollada con React y React Router v6. 
        El objetivo principal es demostrar la navegación fluida entre secciones sin recargas de página, 
        manteniendo un estado global para el tema y utilizando variables CSS modernas para un diseño adaptativo y premium.
      </p>
      
      <div className="section-grid">
        <div className="card">
          <h3>Navegación Dinámica</h3>
          <p>Utilizamos BrowserRouter para una experiencia de usuario sin interrupciones.</p>
        </div>
        <div className="card">
          <h3>Diseño Premium</h3>
          <p>Variables CSS, animaciones suaves y un sistema de temas integrado.</p>
        </div>
      </div>
    </div>
  );
};

export default Inicio;
