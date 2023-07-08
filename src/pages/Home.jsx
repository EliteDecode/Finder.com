import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Pagination from "../components/Pagination";
import { useGlobalContext } from "../context";
import { GiWorld } from "react-icons/gi";
import eath from "../assets/earth.png";
const Home = ({ results }) => {
  const { currentPage, setCurrentPage } = useGlobalContext();
  const itemsPerPage = 10;
  const totalPages = Math.ceil(results?.value?.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = results?.value?.slice(startIndex, endIndex);

  return (
    <div className="flex flex-wrap justify-between sm:px-24 px-0 sm:w-9/12 w-full ">
      {currentItems?.map(
        ({ name, description, image, provider, url }, index) => {
          return (
            <div
              key={index}
              className="w-full  border-b-4 border-gray-200 py-6 px-5 "
            >
              <a href={url} target="_blank" rel="noreferrer">
                <div className="flex space-x-2 items-center">
                  <img
                    src={image?.thumbnail?.contentUrl || eath}
                    alt=""
                    className="h-10 w-10 rounded-full"
                  />
                  <div>
                    <h6 className="text-[14px] font-semibold">
                      {provider?.[0]?.name}
                    </h6>

                    <p className="text-[13px] opacity-80  hover:underline">
                      {url.length > 30 ? url.substring(0, 30) + "..." : url}
                    </p>
                  </div>
                </div>
                <p className="text-[16px]  dark:text-blue-300 text-blue-700  hover:underline">
                  {name.replace(/[^a-zA-Z0-9 ]/g, "").length > 50
                    ? name.substring(0, 50) + "..."
                    : name}
                </p>

                <p className="text-sm ">{description}</p>
              </a>
            </div>
          );
        }
      )}
      <Pagination totalPages={totalPages} />
    </div>
  );
};

export default Home;
