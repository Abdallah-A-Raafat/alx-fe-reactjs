import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css'
import Home from './components/Home'
import RecipeDetails from './components/RecipeDetails'
import AddRecipeForm from './components/AddRecipeForm'
import FavoritesList from './components/FavoritesList'
import RecommendationsList from './components/RecommendationsList'

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <h1>Recipe Sharing Application</h1>
          <nav style={{ marginTop: '20px' }}>
            <Link to="/" style={{ margin: '0 10px', color: '#007bff', textDecoration: 'none' }}>Home</Link>
            <Link to="/favorites" style={{ margin: '0 10px', color: '#e74c3c', textDecoration: 'none' }}>❤️ Favorites</Link>
            <Link to="/recommendations" style={{ margin: '0 10px', color: '#28a745', textDecoration: 'none' }}>🌟 Recommendations</Link>
            <Link to="/add" style={{ margin: '0 10px', color: '#007bff', textDecoration: 'none' }}>➕ Add Recipe</Link>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
          <Route path="/add" element={<AddRecipeForm />} />
          <Route path="/favorites" element={<FavoritesList />} />
          <Route path="/recommendations" element={<RecommendationsList />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
