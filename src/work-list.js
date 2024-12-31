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
                      <div className="p-0 flex-fill ml-3">
                        <div className="d-flex flex-column gap-03">
                          <span className="text-xs font-normal" style={{maxWidth: 'clamp(17ch, 22vw, 20ch)',whiteSpace: 'nowrap',overflow: 'hidden',textOverflow: 'ellipsis'}}>{item.nama}</span>
                          <span className='text-xsm'> 
                          <img className='w-1-r mr-03' src={`${baseUrl}/img/work-icon/Tiket-icon.svg`} >
                              </img> 
                              <span className='text-xs font-normal opacity-50'>Maks 4 tiket</span>
                            <img className='img-worklist d-none' src={`${baseUrl}/img/work-icon/Calendar-icon.svg`} alt='indobuzz'></img>
                            
                          <span className='text-xs opacity-50 pl-02 d-none'>23 Oct-24 Oct 2024</span>
                          

                          </span> 
                          <span className="text-blue text-xs font-medium">
                            <img className='mr-03' src={`${baseUrl}/img/Saldo-icon(blue).svg`} width={'15'} height={'15'} alt='indobuzz'></img>
                            Rp. {item.harga}
                          </span>
                        </div>
                      </div>
                      <div className="pr-0 d-flex flex-column align-items-end justify-content-center">
                          {isPekerjaanPage && (
                            <div>
                              
                            </div>
                          )}
                            <button onClick={handleOpenModal} className="btn btn-primary text-base-setting rounded-small btn-ambil font-normal w-100">
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
                  <button className='btn bg-slate-200 text-xs rounded-3 font-normal'>
                    Lihat semua <i className='fa fa-arrow-right text-blue pl-2'></i>
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
