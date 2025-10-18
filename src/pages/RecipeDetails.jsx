// src/pages/RecipeDetails.jsx
import React, { useEffect, useState } from "react";
import { useParams, Link, useLocation } from "react-router-dom";

const BASE_URL = import.meta.env.VITE_MEALDB_API;

const RecipeDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const [recipe, setRecipe] = useState(location.state?.recipe || null);

  useEffect(() => {
    if (recipe) return; // ✅ If recipe already passed, skip fetch

    const fetchRecipeDetails = async () => {
      try {
        const res = await fetch(`${BASE_URL}lookup.php?i=${id}`);
        const data = await res.json();
        setRecipe(data.meals[0]);
      } catch (error) {
        console.error("Error fetching recipe details:", error);
      }
    };
    fetchRecipeDetails();
  }, [id, recipe]);

  if (!recipe) {
    return <p className="text-center text-gray-500 mt-10">Loading recipe...</p>;
  }

  const getIngredients = () => {
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
      const ingredient = recipe[`strIngredient${i}`];
      const measure = recipe[`strMeasure${i}`];
      if (ingredient && ingredient.trim() !== "") {
        ingredients.push(`${ingredient} - ${measure}`);
      }
    }
    return ingredients;
  };

  return (
    <div className="max-w-3xl mx-auto bg-white p-6 rounded-2xl shadow-xl">
      <Link
        to="/"
        state={{ fromDetails: true }} // ✅ Keeps app aware you came from search
        className="text-indigo-600 hover:text-indigo-800 font-semibold"
      >
        ← Back to Search
      </Link>

      <img
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
        className="rounded-xl w-full h-72 object-cover mt-4"
      />
      <h1 className="text-3xl font-bold mt-4">{recipe.strMeal}</h1>
      <p className="text-gray-500 mt-1">
        {recipe.strCategory} | {recipe.strArea}
      </p>

      <h2 className="mt-6 font-semibold text-lg">Ingredients</h2>
      <ul className="list-disc list-inside mt-2 text-gray-700">
        {getIngredients().map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h2 className="mt-6 font-semibold text-lg">Instructions</h2>
      <p className="text-gray-700 mt-2 leading-relaxed whitespace-pre-line">
        {recipe.strInstructions}
      </p>

      {recipe.strYoutube && (
        <a
          href={recipe.strYoutube}
          target="_blank"
          className="inline-block mt-4 text-white bg-red-600 py-2 px-4 rounded-lg hover:bg-red-700 transition"
        >
          Watch on YouTube
        </a>
      )}
    </div>
  );
};

export default RecipeDetails;
