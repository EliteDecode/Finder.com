import axios from "axios";
import React, { useState, useEffect, useContext } from "react";

const WebSearch = "https://google-search3.p.rapidapi.com/api/v1";

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
  const [currentPage, setCurrentPage] = useState(1);
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

  const getWebsearch = (searchTerm) => {
    setLoading(true);
    axios
      .request({
        method: "GET",
        url: "https://bing-web-search1.p.rapidapi.com/search",
        params: {
          q: searchTerm,
          mkt: "en-us",
          textDecorations: "true",
          count: "100",
          safeSearch: "Off",
          textFormat: "Raw",
          freshness: "Week",
        },
        headers: {
          "X-BingApis-SDK": "true",
          "X-RapidAPI-Key": process.env.REACT_APP_BING_KEY,
          "X-RapidAPI-Host": "bing-web-search1.p.rapidapi.com",
        },
      })
      .then(function (response) {
        setLoading(false);
        console.log(response.data);
        setResults(response.data);
      })
      .catch(function (error) {
        setLoading(false);
        console.error(error);
      });
  };

  const getNewssearch = (searchTerm) => {
    setLoading(true);
    axios
      .request({
        method: "GET",
        url: "https://bing-news-search1.p.rapidapi.com/news/search",
        params: {
          q: searchTerm,
          count: "100",
          textDecorations: "true",
          freshness: "Day",
          originalImg: "true",
          textFormat: "Raw",
          safeSearch: "Off",
        },
        headers: {
          "X-BingApis-SDK": "true",
          "X-RapidAPI-Key": process.env.REACT_APP_BING_KEY,
          "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
        },
      })
      .then(function (response) {
        setLoading(false);
        console.log(response.data);
        setResults(response.data);
      })
      .catch(function (error) {
        setLoading(false);
        console.error(error);
      });
  };

  const getImagesearch = (searchTerm) => {
    setLoading(true);
    axios
      .request({
        method: "GET",
        url: "https://bing-image-search1.p.rapidapi.com/images/search",
        params: { q: searchTerm, count: "500" },
        headers: {
          "X-RapidAPI-Key": process.env.REACT_APP_BING_KEY,
          "X-RapidAPI-Host": "bing-image-search1.p.rapidapi.com",
        },
      })
      .then(function (response) {
        setLoading(false);
        console.log(response.data);
        setResults(response.data);
      })
      .catch(function (error) {
        setLoading(false);
        console.error(error);
      });
  };

  const getVideoSearch = (searchTerm) => {
    setLoading(true);
    axios
      .request({
        method: "GET",
        url: "https://ytube-videos.p.rapidapi.com/search-video",
        params: { q: searchTerm, max: "100", lang: "EN" },
        headers: {
          "X-RapidAPI-Key": process.env.REACT_APP_BING_KEY,
          "X-RapidAPI-Host": "ytube-videos.p.rapidapi.com",
        },
      })
      .then(function (response) {
        setLoading(false);
        console.log(response.data);
        setResults(response.data);
      })
      .catch(function (error) {
        setLoading(false);
        console.error(error);
      });
  };

  return (
    <AppContext.Provider
      value={{
        theme,
        setCurrentPage,
        currentPage,
        setTheme,
        toggleTheme,
        getWebsearch,
        getImagesearch,
        getNewssearch,
        searchTerm,
        loading,
        setSearchTerm,
        getVideoSearch,
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
