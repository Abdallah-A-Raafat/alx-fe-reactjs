import { create } from 'zustand'

const useRecipeStore = create((set) => ({
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
    const filteredRecipes = state.searchTerm 
      ? updatedRecipes.filter(recipe =>
          recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
          recipe.description.toLowerCase().includes(state.searchTerm.toLowerCase())
        )
      : updatedRecipes;
    return { 
      recipes: updatedRecipes,
      filteredRecipes
    };
  }),
  
  deleteRecipe: (id) => set((state) => {
    const updatedRecipes = state.recipes.filter((recipe) => recipe.id !== id);
    const updatedFavorites = state.favorites.filter(favId => favId !== id);
    const filteredRecipes = state.searchTerm 
      ? updatedRecipes.filter(recipe =>
          recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
          recipe.description.toLowerCase().includes(state.searchTerm.toLowerCase())
        )
      : updatedRecipes;
    return {
      recipes: updatedRecipes,
      favorites: updatedFavorites,
      filteredRecipes
    };
  }),
  
  updateRecipe: (updatedRecipe) => set((state) => {
    const updatedRecipes = state.recipes.map((recipe) =>
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    );
    const filteredRecipes = state.searchTerm 
      ? updatedRecipes.filter(recipe =>
          recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
          recipe.description.toLowerCase().includes(state.searchTerm.toLowerCase())
        )
      : updatedRecipes;
    return {
      recipes: updatedRecipes,
      filteredRecipes
    };
  }),
  
  setRecipes: (recipes) => set((state) => {
    const filteredRecipes = state.searchTerm 
      ? recipes.filter(recipe =>
          recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
          recipe.description.toLowerCase().includes(state.searchTerm.toLowerCase())
        )
      : recipes;
    return {
      recipes,
      filteredRecipes
    };
  }),
  
  setSearchTerm: (term) => set((state) => {
    const filteredRecipes = term.trim() 
      ? state.recipes.filter(recipe =>
          recipe.title.toLowerCase().includes(term.toLowerCase()) ||
          recipe.description.toLowerCase().includes(term.toLowerCase())
        )
      : state.recipes;
    return {
      searchTerm: term,
      filteredRecipes
    };
  }),
  
  // Favorites actions
  addFavorite: (recipeId) => set((state) => {
    if (!state.favorites.includes(recipeId)) {
      return { favorites: [...state.favorites, recipeId] };
    }
    return state;
  }),
  
  removeFavorite: (recipeId) => set((state) => ({
    favorites: state.favorites.filter(id => id !== recipeId)
  })),
  
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
  
  filterRecipes: () => set((state) => {
    const filteredRecipes = state.searchTerm.trim() 
      ? state.recipes.filter(recipe =>
          recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
          recipe.description.toLowerCase().includes(state.searchTerm.toLowerCase())
        )
      : state.recipes;
    return { filteredRecipes };
  })
}));

export default useRecipeStore;
