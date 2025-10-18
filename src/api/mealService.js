// import { BASE_URL } from "./config";

/**
 * fetchMealsByName
 * ----------------
 * Fetches recipes from TheMealDB API using a search query.
 * Returns an array of meals if found, otherwise returns an empty array.
 */
// src/api/mealService.js

const BASE_URL = import.meta.env.VITE_MEALDB_API;

/**
 * Fetch meals from TheMealDB API by name
 * @param {string} name - The name of the dish to search
 * @returns {Promise<Object[]>} - List of meals
 */
export const fetchMealsByName = async (name) => {
  try {
    const response = await fetch(`${BASE_URL}/search.php?s=${name}`);
    if (!response.ok) {
      throw new Error("Failed to fetch recipes");
    }
    const data = await response.json();
    return data.meals;
  } catch (error) {
    console.error("Error fetching recipes:", error);
    return [];
  }
};
