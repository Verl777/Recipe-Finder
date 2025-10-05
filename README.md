Recipe Finder

A simple and interactive web application that allows users to search for recipes, view ingredients, and get preparation steps using an external recipe API.

Features
Search for recipes by keyword (e.g., "pasta", "chicken").
View recipe details (ingredients + instructions).
Responsive UI built with React + TailwindCSS.
Clean and modular code structure.
Tech Stack
React (Vite) – Frontend framework
Tailwind CSS – Styling
API Integration – Recipe API (The MealDB)
Git & GitHub – Version control and collaboration

 Project Setup
Clone the repo:
git clone https://github.com/<your-username>/<your-repo>.git
cd <your-repo>

Install dependencies (after initialization):
npm install
Run the project locally:
npm run dev

 Branching Strategy

We follow a feature-branch workflow:

main → Stable production-ready code
setup/... → Project setup work
feature/... → New features
fix/... → Bug fixes
experiment/... → Experimental ideas

Example:

git checkout -b feature/add-search-bar
git push origin feature/add-search-bar

📌 Contributing
Fork the repo
Create a new branch
Commit changes
Push and open a Pull Request