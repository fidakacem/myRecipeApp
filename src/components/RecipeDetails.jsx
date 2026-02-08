// useParams permet de récupérer l'ID présent dans l'URL
import { useParams } from "react-router-dom";

// Importation des composants Bootstrap utilisés pour structurer la page
import { Container, Card, ListGroup, Button } from "react-bootstrap";

// Composant d'affichage des détails d'une recette
export default function RecipeDetails({ recipes }) {

  // Récupération de l'ID présent dans l'URL 
  const { id } = useParams();

  // Recherche de la recette correspondant à cet ID
  const recipe = recipes.find(r => r.id === parseInt(id));

  // Si aucune recette ne correspond → message d’erreur
  if (!recipe) return <p>Pas de recette!</p>;

  return (
    // Container centre le contenu et ajoute des marges automatiques
    <Container style={{ marginTop: "20px", maxWidth: "800px" }}>
      
      {/* Card affichant les détails complets */}
      <Card>

        {/* Image principale en haut de la page */}
        <Card.Img
          variant="top"
          src={recipe.image}
          style={{
            width: "100%",
            maxHeight: "400px",
            objectFit: "cover", // Garde de bonnes proportions sans déformer l’image
          }}
        />

        {/* Informations générales : titre + description */}
        <Card.Body>
          <Card.Title>{recipe.title}</Card.Title>
          <Card.Text>{recipe.description}</Card.Text>
        </Card.Body>

        {/* Liste des informations détaillées */}
        <ListGroup variant="flush">
          
          {/* Catégorie */}
          <ListGroup.Item>
            <strong>Categorie:</strong> {recipe.category}
          </ListGroup.Item>

          {/* Ingrédients sous forme de liste */}
          <ListGroup.Item>
            <strong>Ingredients:</strong>
            <ul>
              {recipe.ingredients.map((ing, idx) => (
                <li key={idx}>{ing}</li>
              ))}
            </ul>
          </ListGroup.Item>

          {/* Étapes, affichées sous forme de liste ordonnée */}
          <ListGroup.Item>
            <strong>Etapes:</strong>
            <ol>
              {recipe.steps.map((step, idx) => (
                <li key={idx}>{step}</li>
              ))}
            </ol>
          </ListGroup.Item>

        </ListGroup>

        {/* Bouton retour : utilise l’historique du navigateur */}
        <Card.Body>
          <Button variant="secondary" onClick={() => window.history.back()}>
            Retour
          </Button>
        </Card.Body>

      </Card>
    </Container>
  );
}
