// Importation des composants Navbar, Nav et Container depuis React-Bootstrap
// Ces composants permettent de créer une barre de navigation responsive facilement
import { Nav, Navbar, Container } from "react-bootstrap";

// Importation de LinkContainer : permet d'intégrer React Router dans une navbar Bootstrap
// Sans cela, les liens rechargeraient la page (comportement non voulu en SPA)
import { LinkContainer } from "react-router-bootstrap";

// Importation des icônes utilisées dans la barre de navigation
import { FaHome, FaStar, FaListAlt } from "react-icons/fa";

// Importation du fichier CSS personnalisée pour styliser la navbar
import "./Navbar.css";

// Composant principal de la barre de navigation
export default function AppNavbar() {
  return (
    // Composant Navbar avec l'option expand="lg" → menu collapsé sur petits écrans
    // className "custom-navbar" applique le style personnalisé défini dans Navbar.css
    <Navbar expand="lg" className="custom-navbar px-4">
      <Container>
        
        {/* Nom de la marque de l’application */}
        <Navbar.Brand className="brand">🍴 MyRecipes</Navbar.Brand>

        {/* Bouton d’ouverture du menu sur mobiles */}
        <Navbar.Toggle aria-controls="navbar-nav" />

        {/* Contient les liens de navigation */}
        <Navbar.Collapse id="navbar-nav">
          {/* ms-auto → alignement du menu à droite */}
          <Nav className="ms-auto">

            {/* LinkContainer permet de transformer Nav.Link en lien React Router */}
            <LinkContainer to="/">
              <Nav.Link>
                <FaHome className="icon" /> Home
              </Nav.Link>
            </LinkContainer>

            <LinkContainer to="/popular">
              <Nav.Link>
                <FaStar className="icon" /> Popular
              </Nav.Link>
            </LinkContainer>

            <LinkContainer to="/categories">
              <Nav.Link>
                <FaListAlt className="icon" /> Categories
              </Nav.Link>
            </LinkContainer>

          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
}
