import React from "react";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Links = () => {
  const location = useLocation();

  var textH;
  var textN;
  var textI;
  var textV;

  if (location.pathname === "/") {
    textH = "text-blue-400 border-b-2  border-blue-400";
  } else if (location.pathname === "/news") {
    textN = "text-blue-400 border-b-2  border-blue-400";
  } else if (location.pathname === "/image") {
    textI = "text-blue-400 border-b-2  border-blue-400";
  } else if (location.pathname === "/video") {
    textV = "text-blue-400 border-b-2  border-blue-400";
  }

  return (
    <div className="flex space-x-1  justify-between sm:justify-start sm:px-28 px-5 mb-3 sm:space-x-8   items-center mt-5 border-b ">
      <NavLink
        to="/"
        className={`hover:font-semibold sm:text-md text-sm pb-3 ${textH} `}
        activeClassName="text-blue-700 border-b-2 dark:text-blue-300 
         border-blue-700 pb-2 border-b-2 border-blue-400 "
      >
        🔎 All
      </NavLink>
      <NavLink
        to="/news"
        className={`hover:font-semibold sm:text-md text-sm pb-3 ${textN} `}
        activeClassName="text-blue-700 border-b-2 dark:text-blue-300 
         border-blue-700 pb-2 border-b-2 border-blue-400 "
      >
        📰 News
      </NavLink>
      <NavLink
        to="/image"
        className={`hover:font-semibold sm:text-md text-sm pb-3 ${textI} `}
        activeClassName="text-blue-700 border-b-2 dark:text-blue-300 
         border-blue-700 pb-2 border-b-2 border-blue-400 "
      >
        📸 Images
      </NavLink>
      <NavLink
        to="/video"
        className={`hover:font-semibold sm:text-md text-sm pb-3 ${textV} `}
        activeClassName="text-blue-700 border-b-2 dark:text-blue-300 
         border-blue-700 pb-2 border-b-2 border-blue-400 "
      >
        📺 Videos
      </NavLink>
    </div>
  );
};

export default Links;
