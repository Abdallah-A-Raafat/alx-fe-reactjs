import { create } from 'zustand'

const useRecipeStore = create((set, get) => ({
  recipes: [
    {
      id: 1,
      title: "Spaghetti Carbonara",
      description: "A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper. Simple yet delicious comfort food that takes only 20 minutes to prepare."
    },
    {
      id: 2,
      title: "Chicken Tikka Masala",
      description: "Tender chunks of roasted marinated chicken in a spiced curry sauce. A popular Indian dish with aromatic spices and creamy tomato base."
    },
    {
      id: 3,
      title: "Caesar Salad",
      description: "Fresh romaine lettuce with parmesan cheese, croutons, and caesar dressing. A light and refreshing salad perfect for lunch."
    }
  ],
  searchTerm: '',
  filteredRecipes: [
    {
      id: 1,
      title: "Spaghetti Carbonara",
      description: "A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper. Simple yet delicious comfort food that takes only 20 minutes to prepare."
    },
    {
      id: 2,
      title: "Chicken Tikka Masala",
      description: "Tender chunks of roasted marinated chicken in a spiced curry sauce. A popular Indian dish with aromatic spices and creamy tomato base."
    },
    {
      id: 3,
      title: "Caesar Salad",
      description: "Fresh romaine lettuce with parmesan cheese, croutons, and caesar dressing. A light and refreshing salad perfect for lunch."
    }
  ],
  
  addRecipe: (newRecipe) => set((state) => {
    const updatedRecipes = [...state.recipes, newRecipe];
    return { 
      recipes: updatedRecipes,
      filteredRecipes: get().filterRecipesList(updatedRecipes, state.searchTerm)
    };
  }),
  
  deleteRecipe: (id) => set((state) => {
    const updatedRecipes = state.recipes.filter((recipe) => recipe.id !== id);
    return {
      recipes: updatedRecipes,
      filteredRecipes: get().filterRecipesList(updatedRecipes, state.searchTerm)
    };
  }),
  
  updateRecipe: (updatedRecipe) => set((state) => {
    const updatedRecipes = state.recipes.map((recipe) =>
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    );
    return {
      recipes: updatedRecipes,
      filteredRecipes: get().filterRecipesList(updatedRecipes, state.searchTerm)
    };
  }),
  
  setRecipes: (recipes) => set((state) => ({
    recipes,
    filteredRecipes: get().filterRecipesList(recipes, state.searchTerm)
  })),
  
  setSearchTerm: (term) => set((state) => ({
    searchTerm: term,
    filteredRecipes: get().filterRecipesList(state.recipes, term)
  })),
  
  filterRecipesList: (recipes, searchTerm) => {
    if (!searchTerm.trim()) {
      return recipes;
    }
    return recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      recipe.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  },
  
  filterRecipes: () => set((state) => ({
    filteredRecipes: get().filterRecipesList(state.recipes, state.searchTerm)
  }))
}));

export default useRecipeStore;
