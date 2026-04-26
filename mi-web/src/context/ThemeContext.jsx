import React, { createContext, useState, useEffect, useContext } from 'react';

// Creamos el contexto para el tema global
const ThemeContext = createContext();

/**
 * Proveedor del tema que envuelve la aplicación.
 * Gestiona el estado del modo claro/oscuro y su persistencia.
 */
export const ThemeProvider = ({ children }) => {
  // Inicializamos el tema desde localStorage o por defecto 'light'
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

  // Efecto para actualizar el atributo 'data-theme' en el HTML y guardar en localStorage
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Función para alternar entre temas (Ejercicio 5)
  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Hook personalizado para acceder fácilmente al tema desde cualquier componente
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme debe usarse dentro de un ThemeProvider');
  }
  return context;
};
