import React from "react";
import { useGlobalContext } from "../context";
import Search from "./Search";
import { Link } from "react-router-dom";
const Navbar = () => {
  const { theme, toggleTheme } = useGlobalContext();
  return (
    <div className="pt-4">
      <div className="p-4 border-b pb-0 flex items-center flex-wrap sm:justify-between justify-between dark:border-gray-900 border-gray-200">
        <Link to="/">
          <div className="bg-blue-500 text-lg font-semibold sm:text-xl py-2 px-2 sm:px-4 flex items-center space-x-4 rounded-lg dark:text-gray-900 dark:bg-gray-50">
            <h3>Finder.com</h3> 🔎
          </div>
        </Link>
        <div>
          <button
            className="text-xs dark:bg-gray-50 dark:text-gray-900 bg-white border
       rounded-full px-2 py-1 hover:shadow-lg"
            onClick={toggleTheme}
          >
            {theme === "dark" ? " 💡 Light " : "🌙 Dark"}
          </button>
        </div>
      </div>
      <Search />
    </div>
  );
};

export default Navbar;
