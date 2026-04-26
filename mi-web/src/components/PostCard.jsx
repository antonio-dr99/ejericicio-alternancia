import React from 'react';
import '../pages/pages.css';

/**
 * Componente PostCard (Ejercicio 4).
 * Renderiza de forma independiente cada entrada del blog con sus acciones.
 */
const PostCard = ({ post, onDelete, onToggleFeature, onEdit }) => {
  return (
    <div className={`post-card ${post.isFeatured ? 'post-card--featured' : ''}`}>
      {/* Renderizado condicional del badge de destacado */}
      {post.isFeatured && <span className="featured-badge">Destacado</span>}
      
      <h4>{post.title}</h4>
      <p>{post.description}</p>
      
      <div className="post-actions">
        {/* Acciones para modificar el estado del post en tiempo real */}
        <button 
          className="post-btn post-btn--feature" 
          onClick={() => onToggleFeature(post.id)}
        >
          {post.isFeatured ? 'Quitar Destacado' : 'Destacar'}
        </button>
        <button 
          className="post-btn post-btn--edit" 
          onClick={() => onEdit(post)}
        >
          Editar
        </button>
        <button 
          className="post-btn post-btn--delete" 
          onClick={() => onDelete(post.id)}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default PostCard;
