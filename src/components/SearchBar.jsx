// src/components/SearchBar.jsx
import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query.trim());
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-center gap-3 items-center mb-6"
    >
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for recipes..."
        className="w-80 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
      />
      <button
        type="submit"
        className="bg-indigo-600 text-white px-4 py-3 rounded-lg hover:bg-indigo-700 transition"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
