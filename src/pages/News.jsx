import React from "react";
import Pagination from "../components/Pagination";
import eath from "../assets/earth.png";
import { useGlobalContext } from "../context";
import moment from "moment";
const News = ({ results }) => {
  const { currentPage, setCurrentPage } = useGlobalContext();
  const itemsPerPage = 10;
  const totalPages = Math.ceil(results?.value?.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = results?.value?.slice(startIndex, endIndex);

  const timestamp = "2023-03-30T18:03:57.0000000Z";

  return (
    <div className="flex flex-wrap justify-between sm:px-24 px-0 sm:w-9/12 w-full ">
      {currentItems?.map(
        ({ name, description, image, provider, url, datePublished }, index) => {
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
                  <h6 className="text-[14px] font-semibold">
                    {provider?.[0].name}
                  </h6>
                </div>
                <div>
                  <p className="text-[16px]  dark:text-blue-300 text-blue-700  hover:underline">
                    {name.replace(/[^a-zA-Z0-9 ]/g, "").length > 50
                      ? name.substring(0, 50) + "..."
                      : name}
                  </p>
                </div>

                <p className="text-sm ">{description}</p>
                <p className="text-sm mt-3 font-semibold opacity-80">
                  {moment.utc(datePublished).local().format("hh:mm A")}
                </p>
              </a>
            </div>
          );
        }
      )}
      <Pagination totalPages={totalPages} />
    </div>
  );
};

export default News;
