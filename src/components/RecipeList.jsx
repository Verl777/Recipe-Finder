// src/components/RecipeList.jsx
import React from "react";
import { Link } from "react-router-dom";

const RecipeList = ({ recipes }) => {
  if (!recipes || recipes.length === 0) {
    return <p className="text-gray-500 text-center mt-10">No recipes found.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
      {recipes.map((recipe) => (
        <div
          key={recipe.idMeal}
          className="bg-white rounded-xl shadow-lg hover:shadow-2xl p-4 transition"
        >
          <img
            src={recipe.strMealThumb}
            alt={recipe.strMeal}
            className="rounded-xl w-full h-56 object-cover"
          />
          <h3 className="mt-4 text-lg font-semibold">{recipe.strMeal}</h3>
          <p className="text-sm text-gray-500 mt-1">{recipe.strArea}</p>

          <Link
           to={`/recipe/${recipe.idMeal}`}
           state={{ recipe }} // Pass recipe data through navigation state
           className="inline-flex items-center gap-2 text-indigo-700 bg-indigo-100 hover:bg-indigo-200 px-4 py-2 rounded-lg transition duration-200"
          >
           View Details
          </Link>

        </div>
      ))}
    </div>
  );
};

export default RecipeList;
