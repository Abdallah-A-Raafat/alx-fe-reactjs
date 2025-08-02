import { Link } from 'react-router-dom';
import useRecipeStore from './recipeStore';

const FavoritesList = () => {
  const { favorites, recipes, removeFavorite } = useRecipeStore(state => ({
    favorites: state.favorites,
    recipes: state.recipes,
    removeFavorite: state.removeFavorite
  }));

  // Get favorite recipe objects
  const favoriteRecipes = favorites.map(id =>
    recipes.find(recipe => recipe.id === id)
  ).filter(Boolean);

  const handleRemoveFavorite = (recipeId) => {
    removeFavorite(recipeId);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h2 style={{ color: '#e74c3c', marginBottom: '20px' }}>❤️ My Favorite Recipes</h2>
      
      {favoriteRecipes.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '40px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
          <p style={{ color: '#6c757d', fontSize: '18px', marginBottom: '16px' }}>
            No favorite recipes yet!
          </p>
          <p style={{ color: '#6c757d', fontSize: '14px' }}>
            Browse recipes and click the ❤️ button to add them to your favorites.
          </p>
        </div>
      ) : (
        <div style={{ display: 'grid', gap: '16px' }}>
          {favoriteRecipes.map(recipe => (
            <div 
              key={recipe.id} 
              style={{ 
                padding: '20px', 
                border: '2px solid #e74c3c', 
                borderRadius: '8px', 
                backgroundColor: '#fff',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                <h3 style={{ margin: '0', color: '#2c3e50', fontSize: '20px' }}>
                  {recipe.title}
                </h3>
                <button
                  onClick={() => handleRemoveFavorite(recipe.id)}
                  style={{
                    background: 'none',
                    border: 'none',
                    fontSize: '20px',
                    cursor: 'pointer',
                    color: '#e74c3c',
                    padding: '4px'
                  }}
                  title="Remove from favorites"
                >
                  💔
                </button>
              </div>
              
              <p style={{ 
                margin: '0 0 16px 0', 
                color: '#555', 
                lineHeight: '1.6' 
              }}>
                {recipe.description.length > 120 
                  ? `${recipe.description.substring(0, 120)}...` 
                  : recipe.description
                }
              </p>
              
              <Link 
                to={`/recipe/${recipe.id}`}
                style={{ 
                  display: 'inline-block',
                  padding: '8px 16px', 
                  backgroundColor: '#e74c3c', 
                  color: 'white', 
                  textDecoration: 'none', 
                  borderRadius: '4px',
                  fontSize: '14px',
                  fontWeight: 'bold'
                }}
              >
                View Recipe
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoritesList;
