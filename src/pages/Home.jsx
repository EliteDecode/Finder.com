import React from "react";

const Home = ({ results }) => {
  return (
    <div className="flex flex-wrap justify-between space-y-6 sm:px-56">
      {results?.map(({ link, title }, index) => {
        return (
          <div key={index} className="w-full sm:w-2/5  ">
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
