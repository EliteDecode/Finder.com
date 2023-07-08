import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
const AppContext = React.createContext();

const getLocalStorage = () => {
  let theme = "dark";
  if (localStorage.getItem("theme")) {
    theme = localStorage.getItem("theme");
  }

  return theme;
};

const AppProvider = ({ children }) => {
  const [theme, setTheme] = useState(getLocalStorage);
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState("elon musk");

  const setToStorage = () => {
    localStorage.setItem("theme", theme);
  };

  useEffect(() => {
    document.documentElement.className = theme;
    setToStorage();
  }, [theme]);

  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  const URL = "https://google-search3.p.rapidapi.com/api/v1";

  const getResults = async (type) => {
    setLoading(true);
    try {
      const response = await fetch(`${URL}${type}`, {
        method: "GET",
        headers: {
          "X-User-Agent": "desktop",
          "X-Proxy-Location": "EU",
          "X-RapidAPI-Key":
            "5ad410eca6mshdc836c9d82b0340p10fb99jsn3d112fcf76bc",
          "X-RapidAPI-Host": "google-search3.p.rapidapi.com",
        },
      });
      const data = await response.json();

      if (type.includes("/news")) {
        setResults(data.entries);
      } else if (type.includes("/image")) {
        setResults(data.image_results);
      } else {
        setResults(data.results);
      }

      console.log(data);

      setLoading(false);
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <AppContext.Provider
      value={{
        theme,
        setTheme,
        toggleTheme,
        getResults,
        searchTerm,
        loading,
        setSearchTerm,
        results,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
