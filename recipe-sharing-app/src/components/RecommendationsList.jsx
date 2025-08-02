import { Link } from 'react-router-dom';
import useRecipeStore from './recipeStore';
import { useEffect } from 'react';

const RecommendationsList = () => {
  const { recommendations, favorites, addFavorite, generateRecommendations } = useRecipeStore(state => ({
    recommendations: state.recommendations,
    favorites: state.favorites,
    addFavorite: state.addFavorite,
    generateRecommendations: state.generateRecommendations
  }));

  // Generate recommendations on component mount
  useEffect(() => {
    generateRecommendations();
  }, [generateRecommendations]);

  const handleAddToFavorites = (recipeId) => {
    addFavorite(recipeId);
  };

  const isRecipeFavorited = (recipeId) => {
    return favorites.includes(recipeId);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h2 style={{ color: '#28a745', marginBottom: '20px' }}>🌟 Recommended For You</h2>
      
      {recommendations.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '40px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
          <p style={{ color: '#6c757d', fontSize: '18px', marginBottom: '16px' }}>
            No recommendations available yet!
          </p>
          <p style={{ color: '#6c757d', fontSize: '14px' }}>
            Add some recipes to your favorites to get personalized recommendations.
          </p>
        </div>
      ) : (
        <div>
          <p style={{ color: '#6c757d', marginBottom: '20px', fontSize: '14px' }}>
            Based on your favorite recipes, we think you'll love these:
          </p>
          
          <div style={{ display: 'grid', gap: '16px' }}>
            {recommendations.map(recipe => (
              <div 
                key={recipe.id} 
                style={{ 
                  padding: '20px', 
                  border: '2px solid #28a745', 
                  borderRadius: '8px', 
                  backgroundColor: '#f8fff9',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                  <h3 style={{ margin: '0', color: '#2c3e50', fontSize: '20px' }}>
                    {recipe.title}
                  </h3>
                  <button
                    onClick={() => handleAddToFavorites(recipe.id)}
                    disabled={isRecipeFavorited(recipe.id)}
                    style={{
                      background: 'none',
                      border: 'none',
                      fontSize: '20px',
                      cursor: isRecipeFavorited(recipe.id) ? 'default' : 'pointer',
                      color: isRecipeFavorited(recipe.id) ? '#e74c3c' : '#6c757d',
                      padding: '4px'
                    }}
                    title={isRecipeFavorited(recipe.id) ? 'Already in favorites' : 'Add to favorites'}
                  >
                    {isRecipeFavorited(recipe.id) ? '❤️' : '🤍'}
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
                
                <div style={{ display: 'flex', gap: '10px' }}>
                  <Link 
                    to={`/recipe/${recipe.id}`}
                    style={{ 
                      display: 'inline-block',
                      padding: '8px 16px', 
                      backgroundColor: '#28a745', 
                      color: 'white', 
                      textDecoration: 'none', 
                      borderRadius: '4px',
                      fontSize: '14px',
                      fontWeight: 'bold'
                    }}
                  >
                    View Recipe
                  </Link>
                  
                  {!isRecipeFavorited(recipe.id) && (
                    <button
                      onClick={() => handleAddToFavorites(recipe.id)}
                      style={{
                        padding: '8px 16px',
                        backgroundColor: '#fff',
                        color: '#28a745',
                        border: '2px solid #28a745',
                        borderRadius: '4px',
                        fontSize: '14px',
                        fontWeight: 'bold',
                        cursor: 'pointer'
                      }}
                    >
                      Add to Favorites
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default RecommendationsList;
