import React from "react";
import { NavLink } from "react-router-dom";

const links = [
  { url: "/", text: "🔎 All" },
  { url: "/news", text: "📰 News" },
  { url: "/image", text: "📸 Images" },
  { url: "/video", text: "📺 Videos" },
];

export const Links = () => (
  <div className="flex space-x-3 sm:space-x-8  items-center my-7">
    {links.map(({ url, text }) => (
      <NavLink
        to={url}
        className="hover:font-semibold sm:text-lg text-md"
        activeClassName="text-blue-700 border-b-2 dark:text-blue-300 
        border-blue-700 pb-2 "
      >
        {text}
      </NavLink>
    ))}
  </div>
);
