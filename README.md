# Proyecto React SPA - Ejercicios de Alternancia

Este proyecto es una Single Page Application (SPA) desarrollada con **React** y **Vite**, que integra una serie de ejercicios prácticos para demostrar el dominio de conceptos fundamentales de React, gestión de estado, enrutamiento y diseño web moderno.

## 🚀 Características Principales

### 1. Sistema de Rutas (Ejercicio 1)
- Implementación de **React Router v6** para una navegación fluida sin recarga de página.
- Secciones definidas: **Inicio**, **Servicios** y **Contacto**.
- **NavLink** con estado activo resaltado en color verde lima.
- Animaciones de entrada `fadeUp` en cada cambio de ruta.

### 2. Formulario con Validación (Ejercicio 2)
- Formulario de contacto interactivo con validación en tiempo real.
- Gestión de eventos: `onChange`, `onBlur` y `onSubmit`.
- Feedback visual (bordes verdes/rojos) e indicadores de error para campos obligatorios, formato de email y longitud mínima.

### 3. Galería de Imágenes Interactiva (Ejercicio 3)
- Galería dinámica en la sección de Servicios.
- Sistema de miniatura y visor principal que se actualiza mediante estado (`useState`).
- Transiciones suaves entre imágenes.

### 4. CMS de Blog Dinámico (Ejercicio 4)
- Sistema de gestión de contenidos (CMS) para publicaciones.
- Funcionalidades completas: **Crear**, **Editar**, **Eliminar** y **Destacar** posts.
- Uso de componentes independientes (`PostCard`) para renderizado dinámico.

### 5. Modo Oscuro/Claro (Ejercicio 5)
- Gestión de tema global mediante **React Context API**.
- Uso extensivo de **Variables CSS** para un cambio de apariencia en tiempo real.
- Persistencia del tema seleccionado en `localStorage`.

---

## 🛠️ Tecnologías Utilizadas

- **React 19**
- **Vite** (Build Tool)
- **React Router Dom v6** (Navegación)
- **CSS3** (Variables, Flexbox, Grid, Animaciones)
- **Context API** (Gestión de estado global)

---

## 📁 Estructura del Proyecto

```text
src/
├── components/          # Componentes reutilizables (Navbar, Footer, PostCard)
├── context/             # Gestión de estado global (ThemeContext)
├── pages/               # Vistas principales de la aplicación
│   ├── Inicio.jsx
│   ├── Servicios.jsx
│   ├── Contacto.jsx
│   └── NotFound.jsx     # Página de error 404
├── App.jsx              # Configuración de Router y Context Provider
├── index.css            # Variables CSS y estilos base
└── main.jsx             # Punto de entrada de la aplicación
```

---

## 💻 Instalación y Ejecución

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/Antonio-DR99/Ejericicio-Alternancia.git
   ```

2. **Instalar dependencias:**
   ```bash
   cd mi-web
   npm install
   ```

3. **Ejecutar en modo desarrollo:**
   ```bash
   npm run dev
   ```

4. **Abrir en el navegador:**
   Visita `http://localhost:5173` para ver la aplicación en funcionamiento.

---

## ✍️ Autor

- **Antonio** - [GitHub](https://github.com/Antonio-DR99)

---
*Este proyecto fue realizado como parte de los ejercicios de alternancia para el aprendizaje de desarrollo frontend con React.*
