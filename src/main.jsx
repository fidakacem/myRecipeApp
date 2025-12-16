// Importation de React, nécessaire pour utiliser JSX et les composants
import React from 'react'

// Importation de ReactDOM pour rendre l'application dans le DOM
// createRoot est la méthode moderne pour initialiser une application React
import ReactDOM from 'react-dom/client'

// Importation du composant principal App
import App from './App.jsx'

// Importation du fichier CSS de Bootstrap pour utiliser ses composants/styles
import 'bootstrap/dist/css/bootstrap.min.css'

// Importation de l’image de fond depuis le dossier assets
import kitchenBg from './assets/kitchen-background.jpg' 

// Création de la racine où l'application sera injectée dans l’élément HTML dont l'id = "root"
ReactDOM.createRoot(document.getElementById('root')).render(
  // React.StrictMode active des vérifications supplémentaires pour aider au développement
  <React.StrictMode>

    {/* 
      Wrapper principal qui applique un background global à toute l'application.
      L’image de fond sera visible derrière tous les composants.
    */}
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
