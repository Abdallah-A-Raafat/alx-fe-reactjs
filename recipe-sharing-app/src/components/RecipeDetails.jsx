import { useParams, useNavigate } from 'react-router-dom';
import useRecipeStore from './recipeStore';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';
import { useState } from 'react';

const RecipeDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { recipe, favorites, addFavorite, removeFavorite } = useRecipeStore(state => ({
    recipe: state.recipes.find(recipe => recipe.id === parseInt(id)),
    favorites: state.favorites,
    addFavorite: state.addFavorite,
    removeFavorite: state.removeFavorite
  }));
  const [isEditing, setIsEditing] = useState(false);

  const handleToggleFavorite = () => {
    if (favorites.includes(recipe.id)) {
      removeFavorite(recipe.id);
    } else {
      addFavorite(recipe.id);
    }
  };

  const isRecipeFavorited = favorites.includes(recipe?.id);

  if (!recipe) {
    return (
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h2>Recipe Not Found</h2>
        <button 
          onClick={() => navigate('/')}
          style={{ 
            padding: '10px 20px', 
            backgroundColor: '#007bff', 
            color: 'white', 
            border: 'none', 
            borderRadius: '4px', 
            cursor: 'pointer' 
          }}
        >
          Back to Recipes
        </button>
      </div>
    );
  }

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleDeleteSuccess = () => {
    navigate('/');
  };

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <button 
        onClick={() => navigate('/')}
        style={{ 
          marginBottom: '20px',
          padding: '8px 16px', 
          backgroundColor: '#6c757d', 
          color: 'white', 
          border: 'none', 
          borderRadius: '4px', 
          cursor: 'pointer' 
        }}
      >
        ← Back to Recipes
      </button>

      {isEditing ? (
        <EditRecipeForm 
          recipe={recipe} 
          onCancel={handleEditToggle}
          onSave={handleEditToggle}
        />
      ) : (
        <div>
          <div style={{ marginBottom: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
              <h1 style={{ margin: '0', flex: 1 }}>{recipe.title}</h1>
              <button
                onClick={handleToggleFavorite}
                style={{
                  background: 'none',
                  border: '2px solid #e74c3c',
                  borderRadius: '50%',
                  width: '50px',
                  height: '50px',
                  fontSize: '20px',
                  cursor: 'pointer',
                  marginLeft: '20px',
                  backgroundColor: isRecipeFavorited ? '#e74c3c' : 'white'
                }}
                title={isRecipeFavorited ? 'Remove from favorites' : 'Add to favorites'}
              >
                {isRecipeFavorited ? '❤️' : '🤍'}
              </button>
            </div>
            <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#555' }}>
              {recipe.description}
            </p>
          </div>

          <div style={{ display: 'flex', gap: '10px', marginTop: '30px' }}>
            <button 
              onClick={handleEditToggle}
              style={{ 
                padding: '10px 20px', 
                backgroundColor: '#28a745', 
                color: 'white', 
                border: 'none', 
                borderRadius: '4px', 
                cursor: 'pointer' 
              }}
            >
              Edit Recipe
            </button>
            <DeleteRecipeButton 
              recipeId={recipe.id} 
              onDeleteSuccess={handleDeleteSuccess}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default RecipeDetails;
