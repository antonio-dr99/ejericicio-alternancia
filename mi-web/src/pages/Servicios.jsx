import React, { useState } from 'react';
import PostCard from '../components/PostCard';
import './pages.css';

// Datos estáticos para la galería (Ejercicio 3)
const images = [
  { id: 1, url: "/images/project1.png", title: "Arquitectura Moderna", desc: "Diseño minimalista con enfoque en la luz natural." },
  { id: 2, url: "/images/project2.png", title: "Sistemas High-Tech", desc: "Infraestructura tecnológica de última generación." },
  { id: 3, url: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80", title: "Desarrollo Web", desc: "Código limpio y eficiente." },
  { id: 4, url: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80", title: "Algoritmos", desc: "Soluciones complejas elegantes." }
];

// Posts iniciales para el CMS (Ejercicio 4)
const initialPosts = [
  { id: 1, title: "El Futuro de las SPAs", description: "Exploramos las nuevas capacidades de React 19.", isFeatured: true },
  { id: 2, title: "Diseño Premium con CSS", description: "Claves para interfaces escalables con variables CSS.", isFeatured: false }
];

const Servicios = () => {
  // Estado para la Galería Interactiva (Ejercicio 3)
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [animating, setAnimating] = useState(false);

  // Estado para el Sistema de Blog CMS (Ejercicio 4)
  const [posts, setPosts] = useState(initialPosts);
  const [postFormData, setPostFormData] = useState({ title: '', description: '' });
  const [editingId, setEditingId] = useState(null);

  // Manejador para cambiar la imagen principal de la galería
  const handleThumbnailClick = (image) => {
    if (image.id === selectedImage.id) return;
    setAnimating(true);
    setTimeout(() => {
      setSelectedImage(image);
      setAnimating(false);
    }, 300);
  };

  // Manejador para actualizar los inputs del formulario del blog
  const handlePostChange = (e) => {
    const { name, value } = e.target;
    setPostFormData(prev => ({ ...prev, [name]: value }));
  };

  // Manejador para enviar el formulario de posts (Crear o Editar)
  const handlePostSubmit = (e) => {
    e.preventDefault();
    if (!postFormData.title || !postFormData.description) return;

    if (editingId) {
      // Si estamos editando, actualizamos el post existente
      setPosts(prev => prev.map(post => post.id === editingId ? { ...post, ...postFormData } : post));
      setEditingId(null);
    } else {
      // Si es nuevo, lo añadimos al inicio de la lista
      const newPost = { id: Date.now(), ...postFormData, isFeatured: false };
      setPosts(prev => [newPost, ...prev]);
    }
    setPostFormData({ title: '', description: '' });
  };

  const deletePost = (id) => setPosts(prev => prev.filter(post => post.id !== id));
  
  const toggleFeature = (id) => setPosts(prev => prev.map(post => post.id === id ? { ...post, isFeatured: !post.isFeatured } : post));

  const startEdit = (post) => {
    setPostFormData({ title: post.title, description: post.description });
    setEditingId(post.id);
    window.scrollTo({ top: document.getElementById('blog-form').offsetTop - 100, behavior: 'smooth' });
  };

  return (
    <div className="page-container fade-up">
      <h1 className="page-title">Servicios</h1>
      
      {/* Sección: Galería Interactiva (Ejercicio 3) */}
      <section style={{ marginBottom: '6rem' }}>
        <h2>Galería de Proyectos</h2>
        <div className="interactive-gallery">
          <div className="main-image-container">
            <img src={selectedImage.url} alt={selectedImage.title} className="main-image" style={{ opacity: animating ? 0 : 1 }} />
          </div>
          <div className="image-info" style={{ textAlign: 'center' }}>
            <h3>{selectedImage.title}</h3>
            <p>{selectedImage.desc}</p>
          </div>
          <div className="thumbnails-list">
            {images.map((image) => (
              <div key={image.id} className={`thumbnail ${selectedImage.id === image.id ? 'thumbnail--active' : ''}`} onClick={() => handleThumbnailClick(image)}>
                <img src={image.url} alt={image.title} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sección: Blog CMS Dinámico (Ejercicio 4) */}
      <section className="blog-section">
        <h2>Blog CMS Dinámico</h2>
        <form id="blog-form" className="blog-form" onSubmit={handlePostSubmit}>
          <h3>{editingId ? 'Editar Publicación' : 'Crear Nueva Publicación'}</h3>
          <div className="form-group">
            <label>Título</label>
            <input type="text" name="title" value={postFormData.title} onChange={handlePostChange} placeholder="Título..." required />
          </div>
          <div className="form-group">
            <label>Descripción</label>
            <textarea name="description" value={postFormData.description} onChange={handlePostChange} placeholder="Contenido..." rows="3" required />
          </div>
          <button type="submit" className="submit-btn">{editingId ? 'Guardar Cambios' : 'Publicar Post'}</button>
        </form>

        <div className="blog-posts-container">
          {posts.map(post => (
            <PostCard key={post.id} post={post} onDelete={deletePost} onToggleFeature={toggleFeature} onEdit={startEdit} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Servicios;
