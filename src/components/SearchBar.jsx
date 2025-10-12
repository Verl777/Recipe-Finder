import { useState } from "react";

/**
 * SearchBar Component
 * -------------------
 * Renders a search input where users can type a recipe name.
 * When submitted, it triggers the onSearch() function passed from the parent component.
 */
function SearchBar({ onSearch }) {
  const [query, setQuery] = useState(""); // State to store user's search input

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim() === "") return; // Prevent empty searches
    onSearch(query); // Pass search query to parent component
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-center gap-3 my-6">
      {/* Input field for user to type recipe name */}
      <input
        type="text"
        placeholder="Search for a recipe..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-1/2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      {/* Submit button to trigger search */}
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
      >
        Search
      </button>
    </form>
  );
}

export default SearchBar;
