import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import "./assets/worklist.css"; 
import Pagination from "./pagination";

const WorkList = () => {
  const baseUrl = process.env.REACT_APP_BASE_URL;

  const listwork = [
    { id: "1", icon: "icon-follow", nama: "Youtube", harga: "500" },
    { id: "2", icon: "icon-follow", nama: "Tes Youtube", harga: "500" },
    { id: "3", icon: "icon-follow", nama: "Youtube", harga: "500" },
    { id: "4", icon: "icon-follow", nama: "Tes Youtube", harga: "500" },
    { id: "5", icon: "icon-follow", nama: "Youtube", harga: "500" },
    { id: "6", icon: "icon-follow", nama: "Tes Youtube", harga: "500" },
    { id: "7", icon: "icon-follow", nama: "Youtube", harga: "500" },
    { id: "8", icon: "icon-follow", nama: "Tes Youtube", harga: "500" },
  ];

  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;

  // Calculate the displayed items
  const startIndex = currentPage * itemsPerPage;
  const currentItems = listwork.slice(startIndex, startIndex + itemsPerPage);
  const totalPages = Math.ceil(listwork.length / itemsPerPage);
  const handlePageClick = (event) => {
    setCurrentPage(event.selected);
  };
  const handlePageChange = (page) => {
    console.log("Halaman aktif:", page + 1);
  };

  return (
    <div className="worklist-container">
      <section className="listwork-section bg-white">
        {/* Render the items */}
        {currentItems.map((item, index) => (
          <div className="shadow-small" key={index}>
            <div className="container">
              <div className="col-md-12 p-0">
                <div className="bg-white">
                  <div className="col-md-12 list-work">
                    <div className="d-flex justify-content-between gap-4">
                      <div className="rounded-lg">
                        <img
                          className="work-image"
                          src={`${baseUrl}/img/work-icon/Follower-icon.svg`}
                          alt="indobuzz"
                        />
                      </div>
                      <div className="col-md-6 p-0">
                        <div className="d-flex flex-column gap-03">
                          <span className="font-medium">{item.nama}</span>
                          <span className="text-blue text-xsm">
                            Rp. {item.harga}
                          </span>
                        </div>
                      </div>
                      <div className="d-flex justify-content-end">
                        <button className="btn btn-primary text-xs h-60 rounded-small">
                          Ambil Pekerjaan
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Render the pagination */}
        <div className="pagination-container py-4">
          <Pagination
            totalPages={totalPages}
            itemsPerPage={itemsPerPage}
            onPageChange={handlePageChange}
          />
          {/* <ReactPaginate
            previousLabel={<i className="d-flex justify-content-center align-items-center next border-solid-1 p-4 shadow-small rounded-3 fa fa-angle-left"></i>}
            nextLabel={<i className="d-flex justify-content-center align-items-center next border-solid-1 p-4 shadow-small rounded-3 fa fa-angle-right"></i>}
            breakLabel={"..."}
            pageCount={Math.ceil(listwork.length / itemsPerPage)}
            marginPagesDisplayed={2}
            pageRangeDisplayed={3}
            onPageChange={handlePageClick}
            containerClassName={"pagination"}
            activeClassName={"active"}
            previousClassName={"prev"}
            nextClassName={"next"}
            breakClassName={"break"}
            disabledClassName={"disabled"}
            pageClassName="page-item" // Class setiap angka halaman

          /> */}
        </div>
      </section>
    </div>
  );
};

export default WorkList;
