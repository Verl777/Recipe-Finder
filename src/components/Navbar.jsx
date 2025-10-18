import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-navy text-white shadow-md sticky top-0 z-50 w-full">
      {/* Container */}
      <div className="w-full px-6 md:px-12 flex justify-between items-center h-16">
        {/* ===== Logo (Left) ===== */}
        <Link
          to="/"
          className="text-3xl font-extrabold tracking-wide text-burnt hover:text-orange-400 transition-colors duration-300"
        >
          Recipe<span className="text-white">Finder</span>
        </Link>

        {/* ===== Desktop Menu (Right) ===== */}
        <div className="hidden md:flex items-center space-x-6">
          <Link
            to="/"
            className="px-5 py-2 bg-burnt rounded-lg hover:bg-orange-700 transition duration-300 font-semibold"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="px-5 py-2 bg-burnt rounded-lg hover:bg-orange-700 transition duration-300 font-semibold"
          >
            About
          </Link>
        </div>

        {/* ===== Mobile Menu Button ===== */}
        <button
          className="md:hidden text-white hover:text-burnt focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* ===== Mobile Dropdown ===== */}
      {isOpen && (
        <div className="md:hidden bg-navy border-t border-burnt w-full">
          <div className="flex flex-col items-center py-4 space-y-3">
            <Link
              to="/"
              className="w-4/5 text-center bg-burnt hover:bg-orange-700 py-2 rounded-md transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="w-4/5 text-center bg-burnt hover:bg-orange-700 py-2 rounded-md transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
