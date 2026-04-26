import React, { useState } from 'react';
import PostCard from '../components/PostCard';
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

const initialPosts = [
  {
    id: 1,
    title: "El Futuro de las SPAs",
    description: "Exploramos las nuevas capacidades de React y cómo están transformando la web moderna.",
    isFeatured: true
  },
  {
    id: 2,
    title: "Diseño Premium con CSS",
    description: "Por qué las variables CSS y el diseño atómico son la clave para interfaces escalables.",
    isFeatured: false
  }
];

const Servicios = () => {
  // Gallery State
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [animating, setAnimating] = useState(false);

  // Blog CMS State
  const [posts, setPosts] = useState(initialPosts);
  const [postFormData, setPostFormData] = useState({ title: '', description: '' });
  const [editingId, setEditingId] = useState(null);

  const handleThumbnailClick = (image) => {
    if (image.id === selectedImage.id) return;
    setAnimating(true);
    setTimeout(() => {
      setSelectedImage(image);
      setAnimating(false);
    }, 300);
  };

  // Blog Functions
  const handlePostChange = (e) => {
    const { name, value } = e.target;
    setPostFormData(prev => ({ ...prev, [name]: value }));
  };

  const handlePostSubmit = (e) => {
    e.preventDefault();
    if (!postFormData.title || !postFormData.description) return;

    if (editingId) {
      setPosts(prev => prev.map(post => 
        post.id === editingId ? { ...post, ...postFormData } : post
      ));
      setEditingId(null);
    } else {
      const newPost = {
        id: Date.now(),
        ...postFormData,
        isFeatured: false
      };
      setPosts(prev => [newPost, ...prev]);
    }
    setPostFormData({ title: '', description: '' });
  };

  const deletePost = (id) => {
    setPosts(prev => prev.filter(post => post.id !== id));
  };

  const toggleFeature = (id) => {
    setPosts(prev => prev.map(post => 
      post.id === id ? { ...post, isFeatured: !post.isFeatured } : post
    ));
  };

  const startEdit = (post) => {
    setPostFormData({ title: post.title, description: post.description });
    setEditingId(post.id);
    window.scrollTo({ top: document.getElementById('blog-form').offsetTop - 100, behavior: 'smooth' });
  };

  return (
    <div className="page-container fade-up">
      <h1 className="page-title">Servicios</h1>
      
      {/* Interactive Gallery Section */}
      <section style={{ marginBottom: '6rem' }}>
        <h2>Galería de Proyectos</h2>
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
      </section>

      {/* Dynamic Blog CMS Section */}
      <section className="blog-section">
        <h2>Blog CMS Dinámico</h2>
        <p style={{ marginBottom: '2rem' }}>Gestiona las noticias y actualizaciones de forma sencilla.</p>

        <form id="blog-form" className="blog-form" onSubmit={handlePostSubmit}>
          <h3>{editingId ? 'Editar Publicación' : 'Crear Nueva Publicación'}</h3>
          <div className="form-group" style={{ marginBottom: '1rem' }}>
            <label>Título</label>
            <input 
              type="text" 
              name="title"
              value={postFormData.title}
              onChange={handlePostChange}
              placeholder="Título del post..."
              required
            />
          </div>
          <div className="form-group" style={{ marginBottom: '1.5rem' }}>
            <label>Descripción</label>
            <textarea 
              name="description"
              value={postFormData.description}
              onChange={handlePostChange}
              placeholder="Contenido del post..."
              rows="3"
              required
            ></textarea>
          </div>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <button type="submit" className="submit-btn" style={{ width: 'auto', paddingInline: '2rem' }}>
              {editingId ? 'Guardar Cambios' : 'Publicar Post'}
            </button>
            {editingId && (
              <button 
                type="button" 
                className="post-btn" 
                onClick={() => {
                  setEditingId(null);
                  setPostFormData({ title: '', description: '' });
                }}
              >
                Cancelar
              </button>
            )}
          </div>
        </form>

        <div className="blog-posts-container">
          {posts.map(post => (
            <PostCard 
              key={post.id}
              post={post}
              onDelete={deletePost}
              onToggleFeature={toggleFeature}
              onEdit={startEdit}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Servicios;
