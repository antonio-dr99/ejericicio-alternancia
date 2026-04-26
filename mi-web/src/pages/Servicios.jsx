import React from 'react';
import './pages.css';

const Servicios = () => {
  return (
    <div className="page-container fade-up">
      <h1 className="page-title">Galería y Blog</h1>
      
      <section>
        <h2>Nuestra Galería</h2>
        <p>Una muestra de nuestros proyectos más destacados.</p>
        <div className="gallery">
          <div className="gallery-item">
            <img src="/images/project1.png" alt="Arquitectura Moderna" />
          </div>
          <div className="gallery-item">
            <img src="/images/project2.png" alt="Tecnología" />
          </div>
          <div className="gallery-item">
            <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80" alt="Código" />
          </div>
          <div className="gallery-item">
            <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80" alt="Desarrollo" />
          </div>
        </div>
      </section>

      <section className="blog-section">
        <h2>Blog de Actualidad</h2>
        <div className="blog-post">
          <span className="blog-date">26 de Abril, 2026</span>
          <h4>El Futuro de las SPAs con React 19</h4>
          <p>Exploramos las nuevas capacidades de React y cómo están transformando la web moderna.</p>
        </div>
        <div className="blog-post">
          <span className="blog-date">20 de Abril, 2026</span>
          <h4>Diseño Premium con CSS Moderno</h4>
          <p>Por qué las variables CSS y el diseño atómico son la clave para interfaces escalables.</p>
        </div>
      </section>
    </div>
  );
};

export default Servicios;
