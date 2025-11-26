import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import kitchenBg from './assets/kitchen-background.jpg' // Assure-toi que l'image est dans src/assets

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Wrapper pour le background */}
    <div
      style={{
        backgroundImage: `url(${kitchenBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        position: 'relative',
      }}
    >
      {/* Overlay semi-transparent pour lisibilité */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(255, 255, 255, 0.7)',
          zIndex: 0,
        }}
      ></div>

      {/* Contenu réel */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <App />
      </div>
    </div>
  </React.StrictMode>
)
