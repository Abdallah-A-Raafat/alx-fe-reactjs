import { Link } from 'react-router-dom';
import useRecipeStore from './recipeStore';
import SearchBar from './SearchBar';

const RecipeList = () => {
  const { filteredRecipes, searchTerm, recipes } = useRecipeStore(state => ({
    filteredRecipes: state.filteredRecipes,
    searchTerm: state.searchTerm,
    recipes: state.recipes
  }));

  // Use filtered recipes if there's a search term, otherwise use all recipes
  const displayRecipes = searchTerm ? filteredRecipes : recipes;

  return (
    <div>
      <h2>Recipe List</h2>
      <SearchBar />
      
      {searchTerm && (
        <div style={{ marginBottom: '15px', padding: '10px', backgroundColor: '#e9ecef', borderRadius: '4px' }}>
          <p style={{ margin: 0, color: '#495057' }}>
            {filteredRecipes.length === 0 
              ? `No recipes found for "${searchTerm}"` 
              : `Found ${filteredRecipes.length} recipe${filteredRecipes.length === 1 ? '' : 's'} for "${searchTerm}"`
            }
          </p>
        </div>
      )}

      {displayRecipes.length === 0 && !searchTerm ? (
        <p>No recipes yet. Add one below!</p>
      ) : (
        displayRecipes.map(recipe => (
          <div key={recipe.id} style={{ margin: '10px 0', padding: '15px', border: '1px solid #ccc', borderRadius: '8px', backgroundColor: '#f9f9f9' }}>
            <h3 style={{ margin: '0 0 10px 0' }}>{recipe.title}</h3>
            <p style={{ margin: '0 0 15px 0', color: '#666' }}>
              {recipe.description.length > 100 
                ? `${recipe.description.substring(0, 100)}...` 
                : recipe.description
              }
            </p>
            <Link 
              to={`/recipe/${recipe.id}`}
              style={{ 
                display: 'inline-block',
                padding: '8px 16px', 
                backgroundColor: '#007bff', 
                color: 'white', 
                textDecoration: 'none', 
                borderRadius: '4px',
                fontSize: '14px'
              }}
            >
              View Details
            </Link>
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;
