import { useNavigate } from 'react-router-dom';
import useRecipeStore from './recipeStore';

const DeleteRecipeButton = ({ recipeId, onDeleteSuccess }) => {
  const deleteRecipe = useRecipeStore(state => state.deleteRecipe);
  const navigate = useNavigate();

  const handleDelete = () => {
    const confirmed = window.confirm('Are you sure you want to delete this recipe? This action cannot be undone.');
    
    if (confirmed) {
      deleteRecipe(recipeId);
      if (onDeleteSuccess) {
        onDeleteSuccess();
      } else {
        // Navigate back to home after deletion
        navigate('/');
      }
    }
  };

  return (
    <button 
      onClick={handleDelete}
      style={{ 
        padding: '10px 20px', 
        backgroundColor: '#dc3545', 
        color: 'white', 
        border: 'none', 
        borderRadius: '4px', 
        cursor: 'pointer',
        fontSize: '14px'
      }}
      onMouseOver={(e) => e.target.style.backgroundColor = '#c82333'}
      onMouseOut={(e) => e.target.style.backgroundColor = '#dc3545'}
    >
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;
