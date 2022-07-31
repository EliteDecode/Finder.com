import React, { useEffect } from "react";
import { useGlobalContext } from "../context";
import { useLocation } from "react-router-dom";

import Loading from "./Loading";
import Home from "../pages/Home";
import Images from "../pages/Images";
import News from "../pages/News";
import Video from "../pages/Video";

const Results = () => {
  const { searchTerm, loading, results, getResults } = useGlobalContext();

  const location = useLocation();

  useEffect(() => {
    if (searchTerm) {
      if (location.pathname === "/video") {
        getResults(`/search/q=${searchTerm} video`);
      } else {
        getResults(`${location.pathname}/q=${searchTerm}&num=40`);
      }
    }
    getResults(`/search/q=${searchTerm}&num=40`);
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
