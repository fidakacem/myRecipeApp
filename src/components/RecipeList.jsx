// useState : permet de gérer la valeur du champ de recherche
import { useState } from "react";

// Importation des composants Bootstrap pour la mise en page
import { Row, Col, Container, Form, InputGroup } from "react-bootstrap";

// Icône de recherche
import { FaSearch } from "react-icons/fa";

// Importation du composant carte et des données
import RecipeCard from "./RecipeCard";
import recipes from "../data/recipes";

// Composant principal affichant la liste des recettes
export default function RecipeList({ filter }) {

  // État permettant de stocker le texte saisi dans la recherche
  const [search, setSearch] = useState("");

  // Par défaut, toutes les recettes sont affichées
  let filteredRecipes = recipes;

  // Si "filter" est défini sur "popular", on ne garde que les recettes populaires
  if (filter === "popular") {
    filteredRecipes = recipes.filter(recipe => recipe.popular);
  }

  // Filtrage basé sur la recherche (titre uniquement)
  filteredRecipes = filteredRecipes.filter(recipe =>
    recipe.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Container className="mt-5">

      {/* Titre + barre de recherche à droite */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>
          {filter === "popular" ? "Recettes Populaires ⭐" : "Nos Recettes Délicieuses 🍰"}
        </h2>

        {/* Champ de recherche */}
        <InputGroup style={{ maxWidth: "300px" }}>
          <Form.Control
            type="text"
            placeholder="Chercher..."
            value={search}
            onChange={(e) => setSearch(e.target.value)} // Mise à jour de l'état
          />
          <InputGroup.Text>
            <FaSearch />
          </InputGroup.Text>
        </InputGroup>
      </div>

      {/* Affichage des cartes dans une grille responsive */}
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
