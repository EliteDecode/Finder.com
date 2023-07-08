import React, { useState } from "react";
import { useGlobalContext } from "../context";
import { GrNext, GrPrevious } from "react-icons/gr";
const Pagination = ({ totalPages }) => {
  const { currentPage, setCurrentPage } = useGlobalContext();

  function handlePrevPage() {
    setCurrentPage(currentPage - 1);
    scrollToTop();
  }

  function handleNextPage() {
    setCurrentPage(currentPage + 1);
    scrollToTop();
  }

  function handlePageClick(pageNumber) {
    setCurrentPage(pageNumber);
    scrollToTop();
  }

  const pageButtons = [];
  for (let i = 1; i <= totalPages; i++) {
    pageButtons.push(
      <button
        className="mx-2 btn bg-blue-700 text-white py-1 px-3 items-center rounded-md"
        key={i}
        onClick={() => handlePageClick(i)}
        disabled={currentPage === i}
      >
        {i}
      </button>
    );
  }

  function scrollToTop() {
    const scrollDuration = 300; // in milliseconds
    const scrollStep = -window.scrollY / (scrollDuration / 15);

    function animateScroll() {
      window.requestAnimationFrame(() => {
        if (window.scrollY !== 0) {
          window.scrollBy(0, scrollStep);
          animateScroll();
        }
      });
    }

    animateScroll();
  }
  return (
    <div className="mt-5 mb-5 sm:mx-0 mx-5 space-y-3">
      <button
        className="btn bg-blue-700 text-white py-1 px-3 items-center rounded-md"
        disabled={currentPage === 1}
        onClick={handlePrevPage}
      >
        Prev
      </button>
      {pageButtons}
      <button
        className="btn bg-blue-700 text-white py-1 px-3 items-center rounded-md"
        disabled={currentPage === 1}
        onClick={handleNextPage}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
