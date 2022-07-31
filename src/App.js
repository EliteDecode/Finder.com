import React, { useState, useEffect } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Routing from "./components/Routing";
import { useGlobalContext } from "./context";
const App = () => {
  const { theme } = useGlobalContext();
  return (
    <div className={theme === "dark" ? "dark" : ""}>
      <div className="bg-gray-100 px-2 sm:px-20 dark:bg-gray-900 dark:text-gray-200 min-h-screen ">
        <Navbar />
        <Routing />
        <Footer />
      </div>
    </div>
  );
};

export default App;
