/**
 * RecipeList Component
 * --------------------
 * Displays a list of recipes fetched from TheMealDB API.
 * Each recipe shows its image, name, category, and cuisine.
 */
function RecipeList({ recipes }) {
  // Show message if no recipes were found
  if (!recipes || recipes.length === 0) {
    return <p className="text-center text-gray-500">No recipes found 🥲</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
      {recipes.map((recipe) => (
        <div
          key={recipe.idMeal}
          className="bg-white rounded-lg shadow hover:shadow-lg transition p-4"
        >
          {/* Recipe thumbnail image */}
          <img
            src={recipe.strMealThumb}
            alt={recipe.strMeal}
            className="rounded-lg mb-3 w-full h-48 object-cover"
          />

          {/* Recipe title */}
          <h3 className="font-semibold text-lg mb-1">{recipe.strMeal}</h3>

          {/* Category and Cuisine info */}
          <p className="text-sm text-gray-500">
            {recipe.strCategory} • {recipe.strArea}
          </p>
        </div>
      ))}
    </div>
  );
}

export default RecipeList;
