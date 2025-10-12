import { BASE_URL } from "./config";

/**
 * fetchMealsByName
 * ----------------
 * Fetches recipes from TheMealDB API using a search query.
 * Returns an array of meals if found, otherwise returns an empty array.
 */
export async function fetchMealsByName(name) {
  try {
    const response = await fetch(`${BASE_URL}search.php?s=${name}`);
    const data = await response.json();
    return data.meals || []; // Return empty array if no results
  } catch (error) {
    console.error("Error fetching recipes:", error);
    return [];
  }
}
