import React, { useState } from 'react';
import './pages.css';

const images = [
  {
    id: 1,
    url: "/images/project1.png",
    title: "Arquitectura Moderna",
    desc: "Diseño minimalista con enfoque en la luz natural."
  },
  {
    id: 2,
    url: "/images/project2.png",
    title: "Sistemas High-Tech",
    desc: "Infraestructura tecnológica de última generación."
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    title: "Desarrollo Web",
    desc: "Código limpio y eficiente para aplicaciones escalables."
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
    title: "Algoritmos Avanzados",
    desc: "Soluciones complejas resueltas con elegancia."
  }
];

const Servicios = () => {
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [animating, setAnimating] = useState(false);

  const handleThumbnailClick = (image) => {
    if (image.id === selectedImage.id) return;
    
    setAnimating(true);
    setTimeout(() => {
      setSelectedImage(image);
      setAnimating(false);
    }, 300);
  };

  return (
    <div className="page-container fade-up">
      <h1 className="page-title">Galería Interactiva</h1>
      <p className="page-content" style={{ textAlign: 'center', margin: '0 auto 2rem' }}>
        Selecciona una miniatura para ampliar la imagen y ver los detalles del proyecto.
      </p>
      
      <div className="interactive-gallery">
        <div className="main-image-container">
          <img 
            src={selectedImage.url} 
            alt={selectedImage.title} 
            className="main-image"
            style={{ opacity: animating ? 0 : 1 }}
          />
        </div>

        <div className="image-info" style={{ textAlign: 'center' }}>
          <h3>{selectedImage.title}</h3>
          <p style={{ color: 'var(--secondary-text)' }}>{selectedImage.desc}</p>
        </div>

        <div className="thumbnails-list">
          {images.map((image) => (
            <div 
              key={image.id}
              className={`thumbnail ${selectedImage.id === image.id ? 'thumbnail--active' : ''}`}
              onClick={() => handleThumbnailClick(image)}
            >
              <img src={image.url} alt={image.title} />
            </div>
          ))}
        </div>
      </div>

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
