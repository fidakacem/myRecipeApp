// Importation des composants nécessaires depuis react-router-dom
// BrowserRouter : permet de gérer la navigation côté client (SPA)
// Routes : conteneur regroupant toutes les routes
// Route : définit une route précise et le composant à afficher
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Importation du composant de la barre de navigation
import AppNavbar from "./components/Navbar";

// Importation du composant affichant la liste des recettes
import RecipeList from "./components/RecipeList";

// Importation du composant permettant d’afficher les détails d’une recette
import RecipeDetails from "./components/RecipeDetails";

// Importation de toutes les recettes depuis le fichier data
import recipes from "./data/recipes";

// Déclaration du composant principal de l'application
function App() {
  return (
    // Router englobe toute l'application pour permettre la navigation sans rechargement de page
    <Router>
      {/* Affichage de la barre de navigation sur toutes les pages */}
      <AppNavbar />

      {/* Déclaration des différentes routes de l'application */}
      <Routes>

        {/* Route principale (/) affichant la liste complète des recettes */}
        <Route path="/" element={<RecipeList recipes={recipes} />} />

        {/* Route /popular : on affiche uniquement les recettes populaires grâce au prop filter */}
        <Route path="/popular" element={<RecipeList recipes={recipes} filter="popular" />} />
        
        {/* Route dynamique : /recipe/:id affiche un composant pour chaque recette selon son id */}
        <Route path="/recipe/:id" element={<RecipeDetails recipes={recipes} />} />
      </Routes>
    </Router>
  );
}

// Exportation du composant App pour qu'il soit utilisé dans main.jsx
export default App;

