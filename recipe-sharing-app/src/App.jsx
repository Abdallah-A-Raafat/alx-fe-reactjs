import './App.css'
import RecipeList from './components/RecipeList'
import AddRecipeForm from './components/AddRecipeForm'

function App() {
  return (
    <div className="App">
      <header>
        <h1>Recipe Sharing Application</h1>
      </header>
      <main style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
        <AddRecipeForm />
        <hr style={{ margin: '30px 0' }} />
        <RecipeList />
      </main>
    </div>
  )
}

export default App
