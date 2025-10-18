// src/components/RecipeModal.jsx
import React from "react";

const RecipeModal = ({ recipe, onClose }) => {
  if (!recipe) return null;

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
    <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-2xl max-w-2xl w-full relative shadow-2xl overflow-y-auto max-h-[90vh]">
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-gray-500 hover:text-red-500 text-2xl"
        >
          ×
        </button>
        <img
          src={recipe.strMealThumb}
          alt={recipe.strMeal}
          className="rounded-xl w-full h-64 object-cover"
        />
        <h2 className="text-2xl font-bold mt-4">{recipe.strMeal}</h2>
        <p className="text-gray-500 mt-1">
          {recipe.strCategory} | {recipe.strArea}
        </p>
        <h3 className="mt-4 font-semibold text-lg">Ingredients</h3>
        <ul className="list-disc list-inside mt-2 text-gray-700">
          {getIngredients().map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <h3 className="mt-4 font-semibold text-lg">Instructions</h3>
        <p className="text-gray-700 mt-2 whitespace-pre-line leading-relaxed">
          {recipe.strInstructions}
        </p>
      </div>
    </div>
  );
};

export default RecipeModal;
