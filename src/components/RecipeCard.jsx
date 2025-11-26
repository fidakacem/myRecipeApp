import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./RecipeCard.css";

export default function RecipeCard({ recipe }) {
  return (
    <Card className="recipe-card shadow-sm">
      <div className="card-image-wrapper">
        <Card.Img variant="top" src={recipe.image} className="card-image" />
        <div className="card-overlay">
          <h5 className="overlay-title">{recipe.title}</h5>
        </div>
      </div>
      <Card.Body>
        <Card.Text>{recipe.description}</Card.Text>
        <Link to={`/recipe/${recipe.id}`}>
          <Button variant="primary">Voir la Recette</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}
