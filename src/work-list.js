import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import "./assets/worklist.css"; 
import Pagination from "./pagination";
import { useLocation } from 'react-router-dom';



const WorkList = () => {
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const location = useLocation();
    
  const isPekerjaanPage = location.pathname === '/react_mobile_frontend/pekerjaan';
  // console.log(location);
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
    <div data-tes={location.pathname} className="worklist-container">
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
                      <div className="col-md-5 p-0">
                        <div className="d-flex flex-column gap-03">
                          <span className="font-medium">{item.nama}</span>
                          <span className='text-xsm'> <img className='w-1-r mr-02' src={`${baseUrl}/img/work-icon/Tiket-icon.svg`} >
                          </img> 
                          
                          <span className='opacity-60'>Maks Ambil 4 tiket</span></span> 
                          <span className="text-blue text-xsm">
                            Rp. {item.harga}
                          </span>
                        </div>
                      </div>
                      <div className="col-md-2 pr-0 d-flex flex-row-reverse">
                        <div className="">
                          {!isPekerjaanPage && (
                            <div>
                            <img className='img-worklist' src={`${baseUrl}/img/work-icon/Calendar-icon.svg`} alt='indobuzz'></img>
                            <span className='text-small opacity-60 pl-02'>23 Oct-24 Oct 2024</span>
                            </div>
                          )}
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
          </div>
        ))}
        {!isPekerjaanPage && (
          <div className='py-8 see-all'>
          <div className='d-flex justify-content-center'>
            <button className='btn bg-slate-200 text-xs rounded-3'>
              Lihat semua <i className='fa fa-arrow-right text-blue'></i>
            </button>
          </div>
          </div>
        )}
        
        {isPekerjaanPage && (
        <div className="pagination-container py-4">
          <Pagination
            totalPages={totalPages}
            itemsPerPage={itemsPerPage}
            onPageChange={handlePageChange}
          />
          
        </div>
        )}
      </section>
    </div>
  );
};

export default WorkList;
