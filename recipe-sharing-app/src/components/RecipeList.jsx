import { Link } from 'react-router-dom';
import useRecipeStore from './recipeStore';
import SearchBar from './SearchBar';

const RecipeList = () => {
  const { filteredRecipes, searchTerm, recipes, favorites, addFavorite, removeFavorite } = useRecipeStore(state => ({
    filteredRecipes: state.filteredRecipes,
    searchTerm: state.searchTerm,
    recipes: state.recipes,
    favorites: state.favorites,
    addFavorite: state.addFavorite,
    removeFavorite: state.removeFavorite
  }));

  // Use filtered recipes if there's a search term, otherwise use all recipes
  const displayRecipes = searchTerm ? filteredRecipes : recipes;

  const handleToggleFavorite = (recipeId) => {
    if (favorites.includes(recipeId)) {
      removeFavorite(recipeId);
    } else {
      addFavorite(recipeId);
    }
  };

  const isRecipeFavorited = (recipeId) => {
    return favorites.includes(recipeId);
  };

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
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
              <h3 style={{ margin: '0', flex: 1 }}>{recipe.title}</h3>
              <button
                onClick={() => handleToggleFavorite(recipe.id)}
                style={{
                  background: 'none',
                  border: 'none',
                  fontSize: '20px',
                  cursor: 'pointer',
                  padding: '4px',
                  marginLeft: '10px'
                }}
                title={isRecipeFavorited(recipe.id) ? 'Remove from favorites' : 'Add to favorites'}
              >
                {isRecipeFavorited(recipe.id) ? '❤️' : '🤍'}
              </button>
            </div>
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
