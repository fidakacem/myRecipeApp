import { useState } from "react";
import { Row, Col, Container, Form, InputGroup } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import RecipeCard from "./RecipeCard";
import recipes from "../data/recipes";

export default function RecipeList({ filter }) {
  const [search, setSearch] = useState("");

  let filteredRecipes = recipes;

  if (filter === "popular") {
    filteredRecipes = recipes.filter(recipe => recipe.popular);
  }

  filteredRecipes = filteredRecipes.filter(recipe =>
    recipe.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Container className="mt-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>
          {filter === "popular" ? "Recettes Populaires ⭐" : "Nos Recettes Délicieuses 🍰"}
        </h2>
        {/* Barre de recherche compacte à droite */}
        <InputGroup style={{ maxWidth: "300px" }}>
          <Form.Control
            type="text"
            placeholder="Chercher..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <InputGroup.Text>
            <FaSearch />
          </InputGroup.Text>
        </InputGroup>
      </div>

      <Row className="g-4 justify-content-center">
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map(recipe => (
            <Col md={4} key={recipe.id}>
              <RecipeCard recipe={recipe} />
            </Col>
          ))
        ) : (
          <p className="text-center">Aucune recette trouvée 😢</p>
        )}
      </Row>
    </Container>
  );
}
