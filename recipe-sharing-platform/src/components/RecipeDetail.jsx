import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/src/data.json')
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((r) => String(r.id) === String(id));
        setRecipe(found);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div className="text-center py-10">Loading...</div>;
  }

  if (!recipe) {
    return <div className="text-center py-10 text-red-500">Recipe not found.</div>;
  }

  // Mock ingredients and instructions for demonstration
  const ingredients = [
    '1 cup ingredient A',
    '2 tbsp ingredient B',
    'Salt to taste',
    'Other ingredients...'
  ];
  const instructions = [
    'Step 1: Do something important.',
    'Step 2: Continue with the next step.',
    'Step 3: Finish up and serve.'
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 flex flex-col items-center">
      <div className="max-w-2xl w-full bg-white rounded-lg shadow-lg p-6">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-60 object-cover rounded mb-6"
        />
        <h1 className="text-3xl font-bold mb-2">{recipe.title}</h1>
        <p className="text-gray-700 mb-4">{recipe.summary}</p>
        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
          <ul className="list-disc list-inside space-y-1">
            {ingredients.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Instructions</h2>
          <ol className="list-decimal list-inside space-y-1">
            {instructions.map((step, idx) => (
              <li key={idx}>{step}</li>
            ))}
          </ol>
        </div>
        <Link to="/" className="text-blue-600 hover:underline">&larr; Back to Home</Link>
      </div>
    </div>
  );
};

export default RecipeDetail;
