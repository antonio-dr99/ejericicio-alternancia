import React, { useState } from 'react';
import './pages.css';

/**
 * Página de Contacto (Ejercicio 2).
 * Incluye un formulario con validaciones complejas en tiempo real.
 */
const Contacto = () => {
  // Estado para los valores de los campos
  const [formData, setFormData] = useState({ nombre: '', email: '', mensaje: '' });
  // Estado para los mensajes de error
  const [errors, setErrors] = useState({});
  // Estado para saber qué campos han sido interactuados (touched)
  const [touched, setTouched] = useState({});
  // Estado para el mensaje de éxito tras el envío
  const [submitted, setSubmitted] = useState(false);

  // Lógica de validación (campos obligatorios, email y longitud mínima)
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

  // Manejador de cambios (onChange)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Si el usuario ya tocó el campo, validamos en tiempo real
    if (touched[name]) {
      setErrors(prev => ({ ...prev, [name]: validate(name, value) }));
    }
  };

  // Manejador de pérdida de foco (onBlur)
  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    setErrors(prev => ({ ...prev, [name]: validate(name, value) }));
  };

  // Manejador de envío (onSubmit)
  const handleSubmit = (e) => {
    e.preventDefault();
    // Validamos todos los campos una última vez antes de enviar
    const newErrors = {};
    Object.keys(formData).forEach(key => {
      const error = validate(key, formData[key]);
      if (error) newErrors[key] = error;
    });

    if (Object.keys(newErrors).length === 0) {
      // Éxito: no hay errores
      console.log('Formulario enviado:', formData);
      setSubmitted(true);
      setFormData({ nombre: '', email: '', mensaje: '' });
      setErrors({});
      setTouched({});
      setTimeout(() => setSubmitted(false), 5000);
    } else {
      // Mostramos errores si faltan datos
      setErrors(newErrors);
      setTouched({ nombre: true, email: true, mensaje: true });
    }
  };

  // Función auxiliar para aplicar clases CSS dinámicas según la validez
  const getFieldClass = (name) => {
    if (!touched[name]) return '';
    return errors[name] ? 'input--invalid' : 'input--valid';
  };

  return (
    <div className="page-container fade-up">
      <h1 className="page-title">Contacto</h1>
      
      {submitted ? (
        <div className="card" style={{ marginTop: '2rem', borderColor: 'var(--accent-color)', border: '2px solid' }}>
          <h3>¡Mensaje Enviado con Éxito!</h3>
          <p>Gracias por contactarnos. Te responderemos muy pronto.</p>
        </div>
      ) : (
        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <label htmlFor="nombre">Nombre Completo</label>
            <input type="text" id="nombre" name="nombre" value={formData.nombre} onChange={handleChange} onBlur={handleBlur} className={getFieldClass('nombre')} placeholder="Tu nombre..." />
            {touched.nombre && errors.nombre && <span className="error-message">{errors.nombre}</span>}
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Correo Electrónico</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} onBlur={handleBlur} className={getFieldClass('email')} placeholder="tu@email.com" />
            {touched.email && errors.email && <span className="error-message">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="mensaje">Mensaje</label>
            <textarea id="mensaje" name="mensaje" rows="5" value={formData.mensaje} onChange={handleChange} onBlur={handleBlur} className={getFieldClass('mensaje')} placeholder="¿En qué podemos ayudarte?..." />
            {touched.mensaje && errors.mensaje && <span className="error-message">{errors.mensaje}</span>}
          </div>

          <button type="submit" className="submit-btn" disabled={Object.values(errors).some(e => e !== '')}>
            Enviar Mensaje
          </button>
        </form>
      )}
    </div>
  );
};

export default Contacto;
