import React from "react";
import { useGlobalContext } from "../context";
import Search from "./Search";
import { Link } from "react-router-dom";
const Navbar = () => {
  const { theme, toggleTheme } = useGlobalContext();
  return (
    <div className="pt-1 bg-gradient-to-b from-blue-800 to-gray-100 pb-10 dark:from-blue-800 dark:to-gray-900">
      <div className="dark:border-gray-900 border-gray-200">
        <div className="flex justify-end px-2 mt-1">
          <button
            className="text-xs dark:bg-gray-50 dark:text-gray-900 bg-white border
       rounded-full px-2 py-1 hover:shadow-lg"
            onClick={toggleTheme}
          >
            {theme === "dark" ? "💡" : "🌙"}
          </button>
        </div>
        <Link to="/">
          <div
            className="text-xl justify-center flex font-bold sm:text-xl  px-2 sm:px-4 flex items-center  rounded-lg 
          dark:text-gray-50 "
          >
            <h3 className="text-center ">Finder.com </h3> 🔎
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
