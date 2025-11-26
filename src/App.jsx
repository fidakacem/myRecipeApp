import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppNavbar from "./components/Navbar";
import RecipeList from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails";
import recipes from "./data/recipes";

function App() {
  return (
    <Router>
      <AppNavbar />
      <Routes>
        <Route path="/" element={<RecipeList recipes={recipes} />} />
        <Route path="/popular" element={<RecipeList recipes={recipes} filter="popular" />} />
        
        <Route path="/recipe/:id" element={<RecipeDetails recipes={recipes} />} />
      </Routes>
    </Router>
  );
}

export default App;
