// src/pages/About.jsx
import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-opacity-90 bg-cover bg-center flex flex-col items-center justify-center text-center px-6"
         style={{ backgroundImage: "url('/images/food-bg.jpg')" }}> 
      <div className="bg-white/80 rounded-lg shadow-lg p-8 max-w-2xl">
        <h1 className="text-4xl font-bold text-burnt mb-4">About Recipe Finder</h1>
        <p className="text-gray-700 text-lg leading-relaxed">
          Recipe Finder is your go-to app for discovering delicious recipes from around the world.
          Whether you’re craving something sweet, spicy, or savory, our platform helps you find
          meals that match your taste and ingredients.  
        </p>
        <p className="text-gray-700 text-lg mt-4">
          This project was built using React, Tailwind CSS, and TheMealDB API to make cooking
          inspiration simple, fast, and enjoyable for everyone.
        </p>
      </div>
    </div>
  );
};

export default About;
