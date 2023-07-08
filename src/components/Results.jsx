import React, { useEffect } from "react";
import { useGlobalContext } from "../context";
import { useLocation } from "react-router-dom";

import Loading from "./Loading";
import Home from "../pages/Home";
import Images from "../pages/Images";
import News from "../pages/News";
import Video from "../pages/Video";

const Results = () => {
  const {
    searchTerm,
    loading,
    results,
    getWebsearch,
    getNewssearch,
    getImagesearch,
    getVideoSearch,
  } = useGlobalContext();

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/news") {
      getNewssearch(searchTerm);
    } else if (location.pathname === "/image") {
      getImagesearch(searchTerm);
    } else if (location.pathname === "/video") {
      getVideoSearch(searchTerm);
    } else {
      getWebsearch(searchTerm);
    }
  }, [searchTerm, location.pathname]);

  if (loading) return <Loading />;

  console.log(location.pathname);

  switch (location.pathname) {
    case "/":
      return <Home results={results} />;
    case "/search":
      return <Home results={results} />;
    case "/image":
      return <Images results={results} />;
    case "/news":
      return <News results={results} />;
    case "/video":
      return <Video results={results} />;

    default:
      return "Error";
  }
};

export default Results;
