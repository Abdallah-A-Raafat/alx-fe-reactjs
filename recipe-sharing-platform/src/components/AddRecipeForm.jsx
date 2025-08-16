import React, { useState } from 'react';

const AddRecipeForm = () => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!title.trim()) newErrors.title = 'Title is required.';
    if (!ingredients.trim()) {
      newErrors.ingredients = 'Ingredients are required.';
    } else if (ingredients.split('\n').length < 2) {
      newErrors.ingredients = 'Please enter at least two ingredients (one per line).';
    }
    if (!steps.trim()) newErrors.steps = 'Preparation steps are required.';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
      // Here you would normally send the data to a backend or update state
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-8 px-4 md:px-0">
      <form
        className="bg-white p-8 md:p-12 rounded-lg shadow-lg w-full max-w-lg md:max-w-2xl"
        onSubmit={handleSubmit}
      >
  <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Add a New Recipe</h2>
        {submitted && (
          <div className="mb-4 p-3 bg-green-100 text-green-700 rounded">
            Recipe submitted successfully!
          </div>
        )}
  <div className="mb-4 md:mb-6">
          <label className="block text-gray-700 font-medium mb-2">Title</label>
          <input
            type="text"
            className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 ${errors.title ? 'border-red-500' : 'border-gray-300'}`}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
        </div>
  <div className="mb-4 md:mb-6">
          <label className="block text-gray-700 font-medium mb-2">Ingredients (one per line)</label>
          <textarea
            className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 ${errors.ingredients ? 'border-red-500' : 'border-gray-300'}`}
            rows={4}
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
          />
          {errors.ingredients && <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>}
        </div>
  <div className="mb-6 md:mb-8">
          <label className="block text-gray-700 font-medium mb-2">Preparation Steps</label>
          <textarea
            className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 ${errors.steps ? 'border-red-500' : 'border-gray-300'}`}
            rows={4}
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
          />
          {errors.steps && <p className="text-red-500 text-sm mt-1">{errors.steps}</p>}
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 md:py-3 rounded hover:bg-blue-700 transition font-semibold text-lg md:text-xl"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
