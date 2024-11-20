import React, { useState } from "react";

const Pagination = ({ totalPages, itemsPerPage, onPageChange }) => {
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageClick = (page) => {
    setCurrentPage(page);
    onPageChange(page);
  };

  const pages = Array.from({ length: totalPages }, (_, i) => i);

  return (
    <ul className="pagination gap-4 m-0">
      {/* Tombol Sebelumnya */}
      <li
        className={`prev-item ${currentPage === 0 ? "disabled" : ""}`}
        onClick={() => currentPage > 0 && handlePageClick(currentPage - 1)}
      >
        <a className="prev-link d-flex justify-content-center align-items-center next border-solid-1 p-4 shadow-small rounded-3 fa fa-angle-left"></a>
      </li>

      <div className="page-header d-flex flex-row align-items-center">
      {pages.map((page) => (
        <li
          key={page}
          className={`page-item ${page === currentPage ? "active" : ""}`}
          onClick={() => handlePageClick(page)}
        >
          <div className="page-number-wrapper">
            <span className="pagination-number">{page + 1}</span>
          </div>
        </li>
        
      ))}
      </div>

      {/* Tombol Berikutnya */}
      <li
        className={`next-item ${
          currentPage === totalPages - 1 ? "disabled" : ""
        }`}
        onClick={() =>
          currentPage < totalPages - 1 && handlePageClick(currentPage + 1)
        }
      >
        <a className="next-link d-flex justify-content-center align-items-center next border-solid-1 p-4 shadow-small rounded-3 fa fa-angle-right"></a>
      </li>
    </ul>
  );
};

export default Pagination;
