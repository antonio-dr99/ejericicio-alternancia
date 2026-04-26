import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Inicio from './pages/Inicio';
import Servicios from './pages/Servicios';
import Contacto from './pages/Contacto';
import NotFound from './pages/NotFound';
import './index.css';

/**
 * Componente principal App.
 * Configura el enrutamiento (Ejercicio 1) y el contexto de tema (Ejercicio 5).
 */
function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        {/* ScrollToTop asegura que la página suba al inicio en cada cambio de ruta */}
        <ScrollToTop />
        
        <Navbar />
        
        <main>
          {/* Configuración de rutas dinámicas sin recarga de página */}
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/contacto" element={<Contacto />} />
            {/* Ruta comodín para manejar errores 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
