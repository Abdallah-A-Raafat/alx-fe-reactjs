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
  
  // Favorites functionality
  favorites: [],
  recommendations: [],
  
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
  
  // Favorites actions
  addFavorite: (recipeId) => set((state) => {
    if (!state.favorites.includes(recipeId)) {
      const updatedFavorites = [...state.favorites, recipeId];
      // Auto-generate recommendations when favorites change
      get().generateRecommendations();
      return { favorites: updatedFavorites };
    }
    return state;
  }),
  
  removeFavorite: (recipeId) => set((state) => {
    const updatedFavorites = state.favorites.filter(id => id !== recipeId);
    // Auto-generate recommendations when favorites change
    get().generateRecommendations();
    return { favorites: updatedFavorites };
  }),
  
  // Recommendations actions
  generateRecommendations: () => set((state) => {
    // Enhanced recommendation algorithm
    const favoriteRecipes = state.favorites.map(id => 
      state.recipes.find(recipe => recipe.id === id)
    ).filter(Boolean);
    
    if (favoriteRecipes.length === 0) {
      // If no favorites, recommend popular recipes (first 2)
      return { recommendations: state.recipes.slice(0, 2) };
    }
    
    // Get keywords from favorite recipes
    const favoriteKeywords = favoriteRecipes.flatMap(recipe => 
      recipe.title.toLowerCase().split(' ').concat(
        recipe.description.toLowerCase().split(' ')
      )
    );
    
    // Find recipes that match keywords from favorites but aren't already favorited
    const recommended = state.recipes
      .filter(recipe => !state.favorites.includes(recipe.id))
      .map(recipe => {
        const recipeWords = recipe.title.toLowerCase().split(' ').concat(
          recipe.description.toLowerCase().split(' ')
        );
        const matchCount = recipeWords.filter(word => 
          favoriteKeywords.includes(word) && word.length > 3
        ).length;
        return { recipe, matchCount };
      })
      .filter(item => item.matchCount > 0)
      .sort((a, b) => b.matchCount - a.matchCount)
      .slice(0, 3)
      .map(item => item.recipe);
    
    return { recommendations: recommended };
  }),
  
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
