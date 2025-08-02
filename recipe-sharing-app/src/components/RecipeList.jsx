import { Link } from 'react-router-dom';
import useRecipeStore from './recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore(state => state.recipes);

  return (
    <div>
      <h2>Recipe List</h2>
      {recipes.length === 0 ? (
        <p>No recipes yet. Add one below!</p>
      ) : (
        recipes.map(recipe => (
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
