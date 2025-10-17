import { useState } from "react";
import { fetchMealsByName } from "../api/mealService";

function SearchBar() {
  const [query, setQuery] = useState("");
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    setLoading(true);
    setError("");

    const results = await fetchMealsByName(query);
    if (!results) {
      setError("No recipes found. Try another search!");
    } else {
      setMeals(results);
    }
    setLoading(false);
  };

  return (
    <div className="p-6 text-center">
      <form onSubmit={handleSearch} className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search for a recipe..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-1/2 p-2 rounded-l-lg border border-gray-300"
        />
        <button
          type="submit"
          className="bg-orange-500 text-white px-4 py-2 rounded-r-lg hover:bg-orange-600"
        >
          Search
        </button>
      </form>

      {loading && <p>Loading recipes...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {meals.map((meal) => (
          <div
            key={meal.idMeal}
            className="border rounded-lg shadow-lg p-4 hover:scale-105 transition-transform"
          >
            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              className="rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{meal.strMeal}</h3>
            <p className="text-gray-600">{meal.strArea} • {meal.strCategory}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchBar;
