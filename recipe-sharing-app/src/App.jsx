import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './components/Home'
import RecipeDetails from './components/RecipeDetails'
import AddRecipeForm from './components/AddRecipeForm'

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <h1>Recipe Sharing Application</h1>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
          <Route path="/add" element={<AddRecipeForm />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
