import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import "./assets/worklist.css"; 
import Pagination from "./pagination";
import { useLocation } from 'react-router-dom';
import ButtonModal from './modal/ButtonModal';


const WorkList = ( param, pagination = true ) => {
  const listwork = param.listwork;
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const location = useLocation();
    
  const isPekerjaanPage = location.pathname === '/react_mobile_frontend/pekerjaan';
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 5;

  // Calculate the displayed items
  const startIndex = currentPage * itemsPerPage;
  const currentItems = listwork.slice(startIndex, startIndex + itemsPerPage);
  const totalPages = Math.ceil(listwork.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
};

  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false)

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
                    <div className="d-flex justify-content-between">
                      <div className="rounded-lg">
                        <img
                          className="work-image"
                          src={`${baseUrl}/img/work-icon/Follower-icon.svg`}
                          alt="indobuzz"
                        />
                      </div>
                      <div className="p-0 w-60 ml-3">
                        <div className="d-flex flex-column gap-03">
                          <span className="text-xsm text-dark-grey font-medium">{item.nama}</span>
                          <span className='text-xsm'> <img className='w-1-r mr-03' src={`${baseUrl}/img/work-icon/Tiket-icon.svg`} >
                          </img> 
                          
                          <span className='text-xs text-grey font-normal'>Maks 4 tiket</span></span> 
                          <span className="text-blue text-xs font-medium">
                            <img className='mr-03' src={`${baseUrl}/img/Saldo-icon(blue).svg`} width={'15'} height={'15'} alt='indobuzz'></img>
                            Rp. {item.harga}
                          </span>
                        </div>
                      </div>
                      <div className="pr-0 d-flex flex-column align-items-center flex-fill justify-content-center">
                          {isPekerjaanPage && (
                            <div style={{marginBottom: '8px'}}>
                              <img className='img-worklist' src={`${baseUrl}/img/work-icon/Calendar-icon.svg`} alt='indobuzz'></img>
                              <span className='text-small opacity-60 pl-02'>23 Oct-24 Oct 2024</span>
                            </div>
                          )}
                            <button onClick={handleOpenModal} className="btn btn-primary text-base-setting rounded-small px-2 btn-ambil font-normal">
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
          <div>
            {!isPekerjaanPage && (
              <div className='py-12 see-all mb-12'>
                <div className='d-flex justify-content-center'>
                  <button className='btn bg-slate-200 text-xs rounded-3'>
                    Lihat semua <i className='fa fa-arrow-right text-blue pl-2 font-normal'></i>
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
          </div>
      </section>
      <ButtonModal show={showModal} onClose={handleCloseModal}/>

    </div>
  );
};

export default WorkList;
