// Importation des composants Card et Button de React-Bootstrap
// Card est utilisé pour afficher chaque recette sous forme de carte visuelle
import { Card, Button } from "react-bootstrap";

// Importation du composant Link de React Router
// Permet de naviguer vers la page de détails d’une recette
import { Link } from "react-router-dom";

// Importation du style CSS spécifique aux cartes de recettes
import "./RecipeCard.css";

// Composant représentant une seule carte recette
// Il reçoit les données de la recette via "props" → { recipe }
export default function RecipeCard({ recipe }) {
  return (
    // La classe "recipe-card" permet de styliser l’apparence
    // "shadow-sm" ajoute une petite ombre Bootstrap
    <Card className="recipe-card shadow-sm">

      {/* Zone contenant l'image et le titre en overlay */}
      <div className="card-image-wrapper">
        
        {/* Affichage de l’image de la recette */}
        <Card.Img variant="top" src={recipe.image} className="card-image" />

        {/* Overlay semi-transparent contenant le titre de la recette */}
        <div className="card-overlay">
          <h5 className="overlay-title">{recipe.title}</h5>
        </div>
      </div>

      {/* Bas de la carte : description + bouton */}
      <Card.Body>

        {/* Description courte de la recette */}
        <Card.Text>{recipe.description}</Card.Text>

        {/* Bouton menant vers la page de détails avec l’ID de la recette */}
        <Link to={`/recipe/${recipe.id}`}>
          <Button variant="primary">Voir la Recette</Button>
        </Link>

      </Card.Body>
    </Card>
  );
}
