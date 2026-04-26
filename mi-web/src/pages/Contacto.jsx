import React, { useState } from 'react';
import './pages.css';

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (name, value) => {
    let error = '';
    
    if (!value) {
      error = 'Este campo es obligatorio';
    } else if (name === 'email' && !/\S+@\S+\.\S+/.test(value)) {
      error = 'Formato de email inválido';
    } else if (name === 'mensaje' && value.length < 10) {
      error = 'El mensaje debe tener al menos 10 caracteres';
    }

    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Validación en tiempo real (solo si ya ha sido tocado)
    if (touched[name]) {
      const error = validate(name, value);
      setErrors(prev => ({ ...prev, [name]: error }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    const error = validate(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validar todos los campos al enviar
    const newErrors = {};
    Object.keys(formData).forEach(key => {
      const error = validate(key, formData[key]);
      if (error) newErrors[key] = error;
    });

    if (Object.keys(newErrors).length === 0) {
      console.log('Formulario enviado:', formData);
      setSubmitted(true);
      setFormData({ nombre: '', email: '', mensaje: '' });
      setErrors({});
      setTouched({});
      setTimeout(() => setSubmitted(false), 5000);
    } else {
      setErrors(newErrors);
      setTouched({ nombre: true, email: true, mensaje: true });
    }
  };

  const getFieldClass = (name) => {
    if (!touched[name]) return '';
    return errors[name] ? 'input--invalid' : 'input--valid';
  };

  return (
    <div className="page-container fade-up">
      <h1 className="page-title">Contacto</h1>
      <p className="page-content">
        ¿Tienes dudas o quieres trabajar con nosotros? Envíanos un mensaje y te responderemos lo antes posible.
      </p>

      {submitted ? (
        <div className="card" style={{ marginTop: '2rem', borderColor: 'var(--accent-color)', border: '2px solid' }}>
          <h3>¡Mensaje Enviado con Éxito!</h3>
          <p>Gracias por contactarnos. Nuestro equipo revisará tu mensaje y te responderá muy pronto.</p>
        </div>
      ) : (
        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <label htmlFor="nombre">Nombre Completo</label>
            <input 
              type="text" 
              id="nombre" 
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              onBlur={handleBlur}
              className={getFieldClass('nombre')}
              placeholder="Tu nombre..." 
            />
            {touched.nombre && errors.nombre && <span className="error-message">{errors.nombre}</span>}
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Correo Electrónico</label>
            <input 
              type="email" 
              id="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={getFieldClass('email')}
              placeholder="tu@email.com" 
            />
            {touched.email && errors.email && <span className="error-message">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="mensaje">Mensaje</label>
            <textarea 
              id="mensaje" 
              name="mensaje"
              rows="5" 
              value={formData.mensaje}
              onChange={handleChange}
              onBlur={handleBlur}
              className={getFieldClass('mensaje')}
              placeholder="¿En qué podemos ayudarte? (mín. 10 caracteres)" 
            ></textarea>
            {touched.mensaje && errors.mensaje && <span className="error-message">{errors.mensaje}</span>}
          </div>

          <button 
            type="submit" 
            className="submit-btn"
            disabled={Object.values(errors).some(e => e !== '')}
          >
            Enviar Mensaje
          </button>
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
