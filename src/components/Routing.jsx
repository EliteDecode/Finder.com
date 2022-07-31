import React from "react";
import { Routes, Route } from "react-router-dom";
import Results from "./Results";
import Search from "./Search";

const Routing = () => {
  return (
    <div className="">
      <Routes>
        <Route exact path="/" element={<Results />}></Route>
        <Route exact path="/search" element={<Results />}></Route>
        <Route exact path="/image" element={<Results />}></Route>
        <Route exact path="/news" element={<Results />}></Route>
        <Route exact path="/video" element={<Results />}></Route>
      </Routes>
    </div>
  );
};

export default Routing;
