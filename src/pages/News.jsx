import React from "react";

const News = ({ results }) => {
  return (
    <div className="flex flex-wrap justify-between sm:px-32 px-0 ">
      {results?.map(({ id, links, source, title }) => (
        <div key={id} className="w-full  border-b-4 border-gray-200 py-6 px-5 ">
          <a
            href={links?.[0].href}
            target="_blank"
            rel="noreferrer "
            className="hover:underline "
          >
            <p className="text-lg dark:text-blue-300 text-blue-700">{title}</p>
          </a>
          <div className="flex gap-4">
            <a
              href={source?.href}
              target="_blank"
              rel="noreferrer"
              className="hover:underline hover:text-blue-300"
            >
              {" "}
              {source?.href}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default News;
