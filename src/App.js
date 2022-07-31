import React, { useState, useEffect } from "react";
import Footer from "./components/Footer";
import Links from "./components/Links";
import Navbar from "./components/Navbar";
import Routing from "./components/Routing";
import Search from "./components/Search";
import { useGlobalContext } from "./context";
const App = () => {
  const { theme } = useGlobalContext();
  return (
    <div className={theme === "dark" ? "dark" : ""}>
      <div className="bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen ">
        <Navbar />
        <Search />
        <Links />
        <Routing />
      </div>
    </div>
  );
};

export default App;
