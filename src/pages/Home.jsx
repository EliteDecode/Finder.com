import React from "react";
import { useLocation } from "react-router-dom";
const Home = ({ results }) => {
  return (
    <div className="flex flex-wrap justify-between sm:px-32 px-0 ">
      {results?.map(({ link, title }, index) => {
        return (
          <div
            key={index}
            className="w-full  border-b-4 border-gray-200 py-6 px-5 "
          >
            <a href={link} target="_blank" rel="noreferrer">
              <p className="text-sm">
                {link.length > 30 ? link.substring(0, 30) : link}
              </p>
              <p className="text-lg hover:underline dark:text-blue-300 text-blue-700 ">
                {title}
              </p>
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
