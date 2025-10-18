// src/App.jsx
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchBar from "./components/SearchBar";
import RecipeList from "./components/RecipeList";
import RecipeDetails from "./pages/RecipeDetails";
import Navbar from "./components/Navbar";
import About from "./pages/About";

const BASE_URL = import.meta.env.VITE_MEALDB_API;

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchRecipes = async (query) => {
    if (!query) return;
    setLoading(true);
    try {
      const res = await fetch(`${BASE_URL}search.php?s=${query}`);
      const data = await res.json();
      setRecipes(data.meals || []);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Router>
      {/* Navbar */}
      <Navbar />

      {/* Routes */}
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <div
              className="min-h-[calc(100vh-4rem)] bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center text-center text-white relative p-6"
              style={{
                backgroundImage: "url('/images/food-bg.jpg')",
              }}
            >
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/50"></div>

              {/* Content */}
              <div className="relative z-10 max-w-3xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-orange-400 drop-shadow-lg">
                  Welcome to Recipe Finder 🍽️
                </h1>
                <p className="text-lg md:text-xl font-medium mb-8 text-gray-100">
                  Search and explore amazing dishes from around the world!
                </p>

                <SearchBar onSearch={fetchRecipes} />

                {loading ? (
                  <p className="text-center text-gray-300 mt-10">
                    Loading recipes...
                  </p>
                ) : (
                  <RecipeList recipes={recipes} />
                )}
              </div>
            </div>
          }
        />

        {/* Recipe Details Page */}
        <Route path="/recipe/:id" element={<RecipeDetails />} />
         <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;
