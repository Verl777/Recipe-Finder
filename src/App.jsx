import { useState } from "react";
import SearchBar from "./components/SearchBar";
import RecipeList from "./components/RecipeList";
import { fetchMealsByName } from "./api/mealService";

/**
 * App Component
 * -------------
 * Main container for the Recipe Finder app.
 * Handles search functionality and displays recipe results.
 */
function App() {
  const [recipes, setRecipes] = useState([]); // State to hold list of fetched recipes

  // Function triggered when user submits a search query
  const handleSearch = async (query) => {
    const results = await fetchMealsByName(query); // Fetch data from API
    setRecipes(results); // Update recipe list
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <header className="text-center py-6 bg-white shadow">
        <h1 className="text-3xl font-bold text-gray-800">🍳 Recipe Finder</h1>
        <p className="text-gray-500">Find your favorite dishes by name</p>
      </header>

      {/* Search Bar */}
      <SearchBar onSearch={handleSearch} />

      {/* Recipe List */}
      <RecipeList recipes={recipes} />
    </div>
  );
}

export default App;
