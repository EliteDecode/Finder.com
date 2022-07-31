import React, { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import { useGlobalContext } from "../context";

import { Links } from "./Links";

const Search = () => {
  const { setSearchTerm } = useGlobalContext();
  const [text, setText] = useState("Elon Musk");
  const [debouncedValue] = useDebounce(text, 300);

  useEffect(() => {
    if (debouncedValue) setSearchTerm(debouncedValue);
  }, [debouncedValue]);

  return (
    <>
      <div className="my-6">
        <div className=" flex justify-center sm:px-28">
          <input
            type="search "
            className="w-80 sm:w-full  py-2.5 rounded-full  px-5 bg-gray-50 border-2 dark:border-gray-900 border-gray-200  hover:shadow-xl"
            placeholder="🔎 Search Google or type URL"
            onChange={(e) => setText(e.target.value)}
            style={{ outline: "none" }}
          />
        </div>
      </div>
    </>
  );
};

export default Search;
