import React, { useState } from 'react';
import './pages.css';

const Contacto = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="page-container fade-up">
      <h1 className="page-title">Contacto</h1>
      <p className="page-content">
        ¿Tienes dudas o quieres trabajar con nosotros? Envíanos un mensaje y te responderemos lo antes posible.
      </p>

      {submitted ? (
        <div className="card" style={{ marginTop: '2rem', borderColor: 'var(--accent-color)', border: '1px solid' }}>
          <h3>¡Mensaje Enviado!</h3>
          <p>Gracias por contactarnos. Te escribiremos pronto.</p>
        </div>
      ) : (
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="nombre">Nombre Completo</label>
            <input type="text" id="nombre" placeholder="Tu nombre..." required />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Correo Electrónico</label>
            <input type="email" id="email" placeholder="tu@email.com" required />
          </div>

          <div className="form-group">
            <label htmlFor="mensaje">Mensaje</label>
            <textarea id="mensaje" rows="5" placeholder="¿En qué podemos ayudarte?" required></textarea>
          </div>

          <button type="submit" className="submit-btn">Enviar Mensaje</button>
        </form>
      )}

      <div className="section-grid" style={{ marginTop: '4rem' }}>
        <div className="card">
          <h3>Soporte Directo</h3>
          <p>soporte@miweb.com</p>
        </div>
        <div className="card">
          <h3>Oficina Central</h3>
          <p>Calle Falsa 123, Madrid</p>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
