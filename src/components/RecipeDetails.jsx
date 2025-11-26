import { useParams } from "react-router-dom"; 
import { Container, Card, ListGroup, Button } from "react-bootstrap";

export default function RecipeDetails({ recipes }) {
  const { id } = useParams();
  const recipe = recipes.find(r => r.id === parseInt(id));

  if (!recipe) return <p>Pas de recette!</p>;

  return (
    <Container style={{ marginTop: "20px", maxWidth: "800px" }}>
      <Card>
        <Card.Img
          variant="top"
          src={recipe.image}
          style={{
            width: "100%",
            maxHeight: "400px",
            objectFit: "cover",
          }}
        />
        <Card.Body>
          <Card.Title>{recipe.title}</Card.Title>
          <Card.Text>{recipe.description}</Card.Text>
        </Card.Body>

        <ListGroup variant="flush">
          <ListGroup.Item><strong>Categorie:</strong> {recipe.category}</ListGroup.Item>
          <ListGroup.Item>
            <strong>Ingredients:</strong>
            <ul>
              {recipe.ingredients.map((ing, idx) => (
                <li key={idx}>{ing}</li>
              ))}
            </ul>
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Etapes:</strong>
            <ol>
              {recipe.steps.map((step, idx) => (
                <li key={idx}>{step}</li>
              ))}
            </ol>
          </ListGroup.Item>
        </ListGroup>

        <Card.Body>
          <Button variant="secondary" onClick={() => window.history.back()}>Retour</Button>
        </Card.Body>
      </Card>
    </Container>
  );
}
