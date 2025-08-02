import AddRecipeForm from './AddRecipeForm';
import RecipeList from './RecipeList';

const Home = () => {
  return (
    <main style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <AddRecipeForm />
      <hr style={{ margin: '30px 0', border: 'none', height: '1px', backgroundColor: '#ddd' }} />
      <RecipeList />
    </main>
  );
};

export default Home;
