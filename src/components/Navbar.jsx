import { Nav, Navbar, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { FaHome, FaStar, FaListAlt } from "react-icons/fa";
import "./Navbar.css";

export default function AppNavbar() {
  return (
    <Navbar expand="lg" className="custom-navbar px-4">
      <Container>
        <Navbar.Brand className="brand">🍴 MyRecipes</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <LinkContainer to="/">
              <Nav.Link><FaHome className="icon" /> Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/popular">
              <Nav.Link><FaStar className="icon" /> Popular</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/categories">
              <Nav.Link><FaListAlt className="icon" /> Categories</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
