import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect } from "react";
import ModalUploadBukti from "../../modal/ModalUploadBukti";
import $ from "jquery";
import "dropify/dist/js/dropify.min";
import 'dropify/dist/css/dropify.min.css'; 

const baseUrl = process.env.REACT_APP_BASE_URL;

function UploadBukti(){
    const [formData, setFormData] = useState({
        sosialMedia: ''
      }); 
    const [isOpen, setIsOpen] = useState(false);
    const toggleCollapse = () => {
      setIsOpen(!isOpen);
    };
    const [isOpenClient, setIsOpenClient] = useState(false);
    const toggleCollapseClient = () => {
      setIsOpenClient(!isOpenClient);
    };
    const [isOpenCatatan, setIsOpenCatatan] = useState(false);
    const toggleCollapseCatatan = () => {
      setIsOpenCatatan(!isOpenCatatan);
    };
    const [isOpenPerhatian, setIsOpenPerhatian] = useState(false);
    const toggleCollapsePerhatian = () => {
      setIsOpenPerhatian(!isOpenPerhatian);
    };
    const [showModal, setShowModal] = useState(false);
    const [currentField, setCurrentField] = useState("");
    const handleOpenModal = (fieldName) => {
        formData[fieldName] = "";
        setCurrentField(fieldName); // Simpan nama input yang diklik
        setShowModal(true); // Buka modal
      };
    const handleCloseModal = () => {
        setCurrentField(''); // Simpan nama input yang diklik
        setShowModal(false);
    };
    const handleSelectValue = (value) => {
        formData[currentField] = value;
        setShowModal(false);
    };

    // dropify tes

    useEffect(() => {
        // Inisialisasi Dropify
        $(".dropify").dropify();
    
        // Cleanup untuk menghancurkan instance Dropify
        return () => {
          const dropifyInstance = $(".dropify").data("dropify");
          if (dropifyInstance) {
            dropifyInstance.destroy();
          }
        };
      }, []);
    
      const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
          console.log("Selected file:", file.name);
        }
      };

    //
    return (
        <div>
            <div className="position-fixed z-index-2 w-full header-setting bg-white shadow-small">
                <div className="col-12 pt-12">
                    <div>
                        <Link to={`${baseUrl}/history`}> 
                        <i className="fa fa-angle-left"></i> 
                        <span className="text-black pl-2">Upload Pekerjaan</span> </Link>
                    </div>
                </div>
            </div>

            <div className="pt-24 container bg-white">
                <div className="d-flex flex-column pt-8 pb-4">
                    <div className="d-flex justify-content-center">
                        <img className='rounded-3' src={`${baseUrl}/img/work-icon/Follower-icon.svg`} alt='indobuzz' height={'52px'} width={'52px'}></img>
                    </div>
                    <span className="d-flex justify-content-center">
                        Job subscribe Youtube
                    </span>
                    <span className="d-flex justify-content-center">
                        (PX Indonesia)
                    </span>
                    <span className="d-flex justify-content-center text-xs-small">
                        subscribe youtube
                    </span>
                </div>
                <div className="d-flex flex-row">
                    <div className="d-flex flex-column flex-fill">
                        <div className="text-xs d-flex justify-content-center">
                            12-11-2024
                        </div>
                        <div className="text-xs d-flex justify-content-center flex-fill align-items-center text-upload">
                            Periode
                        </div>
                    </div>
                    <div className="vertical-line">
                        
                    </div>
                    <div className="d-flex flex-column flex-fill">
                        <div className="text-xs text-blue d-flex justify-content-center">
                            Rp. 1000
                        </div>
                        <div className="text-xs d-flex justify-content-center flex-fill align-items-center text-upload">
                            Fee
                        </div>
                    </div>
                    <div className="vertical-line">
                        
                    </div>
                    <div className="d-flex flex-column flex-fill px-2">
                        <a className="btn btn-primary rounded-3"> link</a>
                        <span className="d-flex justify-content-center text-xs-small text-upload letter-spacing-05">Link target</span>
                    </div>
                    <div className="vertical-line">
                        
                    </div>
                    <div className="d-flex flex-column flex-fill px-2"> 
                        <a className="btn btn-primary rounded-3"> link</a>
                        <span className="d-flex justify-content-center text-xs-small text-upload letter-spacing-05">Link Assets</span>
                    </div>
                </div>
                <div className="py-4">
                    <button
                        className={`btn col-12 d-flex flex-column justify-content-between align-items-center bg-slate-200 border-0 p-2-5`}
                        onClick={toggleCollapse}
                        aria-expanded={isOpen}
                        >
                        <span className="col-12 d-flex p-0">
                            <span className="flex-fill d-flex justify-content-start text-xs letter-spacing-1 p-0 font-medium"
                            style={{color: '#2F2F2F'}}>
                            Catatan umum
                            </span>
                            {isOpen ? (
                            <i className="fa fa-angle-down flex-fill d-flex justify-content-end align-items-center text-blue"></i>
                            ) : (
                            <i className="fa fa-angle-right d-flex justify-content-end align-items-center text-blue"></i>
                            )}
                        </span>
                    </button>
                        {/* Animated Content */}
                        <motion.div
                            initial={false}
                            animate={{ height: isOpen ? "auto" : 0 }}
                            style={{
                            overflow: "hidden",
                            border: "1px solid #F5F5F5"
                            }}
                            className=""
                            transition={{ type: "spring", stiffness: 120, damping: 15 }}
                        >
                            <AnimatePresence>
                            {isOpen && (
                                <motion.div
                                key="content"
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 120,
                                    damping: 12,
                                }}
                                className="p-2-5"
                                >
                                <p className="text-align-start m-0 text-xs">
                                    Perhatikan baik-baik catatan dari klien dan kerjakan sebaik mungkin.
                                </p>
                                </motion.div>
                            )}
                            </AnimatePresence>
                        </motion.div>
                </div>

                <div className="pb-4">
                    <button
                        className={`btn col-12 d-flex flex-column justify-content-between align-items-center bg-slate-200 border-0 p-2-5`}
                        onClick={toggleCollapseClient}
                        aria-expanded={isOpenClient}
                        >
                        <span className="col-12 d-flex p-0">
                            <span className="flex-fill d-flex justify-content-start text-xs letter-spacing-1 p-0 font-medium"
                            style={{color: '#2F2F2F'}}>
                            Catatan dari klien
                            </span>
                            {isOpen ? (
                            <i className="fa fa-angle-down flex-fill d-flex justify-content-end align-items-center text-blue"></i>
                            ) : (
                            <i className="fa fa-angle-right d-flex justify-content-end align-items-center text-blue"></i>
                            )}
                        </span>
                    </button>
                    {/* Animated Content */}
                    <motion.div
                        initial={false}
                        animate={{ height: isOpenClient ? "auto" : 0 }}
                        style={{
                        overflow: "hidden",
                        border: "1px solid #F5F5F5"
                        }}
                        className=""
                        transition={{ type: "spring", stiffness: 120, damping: 15 }}
                    >
                        <AnimatePresence>
                        {isOpenClient && (
                            <motion.div
                            key="content"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{
                                type: "spring",
                                stiffness: 120,
                                damping: 12,
                            }}
                            className="p-2-5"
                            >
                            <p className="text-align-start m-0 text-xs">
                                BRIEF <br></br>

                                Akun yang digunakan wajib menggunakan akun yang belum pernah subscribe channel PX INDONESIA. <br></br> <br></br>
                                <b>DILARANG UNSUBS CHANNEL!</b> <br></br> <br></br>

                                Contoh bukti screenshoot : <a href="" className="text-blue"> <u>Link di sini</u> </a>
                            </p>
                            </motion.div>
                        )}
                        </AnimatePresence>
                    </motion.div>
                </div>

                <div className="pb-4">
                    <button
                        className={`btn col-12 d-flex flex-column justify-content-between align-items-center bg-blue border-0 text-white p-2-5`}
                        onClick={toggleCollapseCatatan}
                        aria-expanded={isOpenCatatan}
                        >
                        <span className="col-12 d-flex p-0">
                            <span className="flex-fill d-flex justify-content-start text-xs font-semibold p-0">
                            Perhatian!
                            </span>
                            {isOpen ? (
                            <i className="fa fa-angle-down flex-fill d-flex justify-content-end align-items-center"></i>
                            ) : (
                            <i className="fa fa-angle-right d-flex justify-content-end align-items-center"></i>
                            )}
                        </span>
                        {/* Animated Content */}
                        <motion.div
                            initial={false}
                            animate={{ height: isOpenCatatan ? "auto" : 0 }}
                            style={{
                            overflow: "hidden",
                            }}
                            className="bg-blue border-0"
                            transition={{ type: "spring", stiffness: 120, damping: 15 }}
                        >
                            <AnimatePresence>
                            {isOpenCatatan && (
                                <motion.div
                                key="content"
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 120,
                                    damping: 12,
                                }}
                                className="card card-body bg-blue text-white border-0 p-0"
                                >
                                <p className="text-align-start m-0 text-xs-small">
                                    Kamu bisa ambil maks 4x tiket pada pekerjaan ini 
                                    dengan akun sosial media yang berbeda.
                                </p>
                                </motion.div>
                            )}
                            </AnimatePresence>
                        </motion.div>
                    </button>
                </div>
                <div className="form-group">
                    <label htmlFor="gender" className="input-label text-xs">
                    Sosial media
                    </label>
                    <div className="d-flex flex-row">
                    <select
                    className="form-control input-gray text-xs border-0 input-select select-no-icon"
                    id="gender"
                    name="gender"
                    value={formData.gender}
                    onClick={() => handleOpenModal("gender")}
                    readOnly
                    >
                        {formData.gender && (<option selected> {formData.gender}</option>)}

                    </select>
                    <i className="fa fa-angle-right d-flex align-items-center bg-select-form-control text-blue"></i>
                    </div>
                </div>
                <div className="pb-4">
                    <label htmlFor="gender" className="input-label text-xs">
                    Screenshot bukti pekerjaan
                    </label>
                    <div className="d-flex flex-row card-important align-items-center p-2"> 
                        <span className="text-blue text-xs-small letter-spacing-1">
                            Silahkan upload dan tunggu hingga gambar selesai diupload, lalu klik tombol submit pekerjaan.
                        </span>
                    </div>
                    <div className="pt-4">
                        <input
                            type="file"
                            className="dropify bg-slate-200"
                            data-height="100"
                            onChange={handleFileChange}
                        />

                    </div>
                </div>
                <div className="pb-24">
                    <button
                        className={`btn col-12 d-flex flex-column justify-content-between align-items-center bg-purple border-0 text-white p-2-5`}
                        onClick={toggleCollapsePerhatian}
                        aria-expanded={isOpenPerhatian}
                        >
                        <span className="col-12 d-flex p-0">
                            <span className="flex-fill d-flex justify-content-start text-xs font-semibold p-0">
                            Perhatian!
                            </span>
                            {isOpenPerhatian ? (
                            <i className="fa fa-angle-down flex-fill d-flex justify-content-end align-items-center"></i>
                            ) : (
                            <i className="fa fa-angle-right d-flex justify-content-end align-items-center"></i>
                            )}
                        </span>
                        {/* Animated Content */}
                        <motion.div
                            initial={false}
                            animate={{ height: isOpenPerhatian ? "auto" : 0 }}
                            style={{
                            overflow: "hidden",
                            }}
                            className="bg-purple border-0"
                            transition={{ type: "spring", stiffness: 120, damping: 15 }}
                        >
                            <AnimatePresence>
                            {isOpenPerhatian && (
                                <motion.div
                                key="content"
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 120,
                                    damping: 12,
                                }}
                                className="card card-body bg-purple text-white border-0 p-0"
                                >
                                <p className="text-align-start m-0 text-xs-small">
                                    Konfirmasi tiket sebelum (tanggal) atau silahkan batalkan. Akan ada sanksi bagi yang mengambil tiket namun tidak mengerjakannya.
                                </p>
                                </motion.div>
                            )}
                            </AnimatePresence>
                        </motion.div>
                    </button>
                </div>
            </div>
            <div className="root">
                <div className="position-fixed container pt-2 pb-4 bg-white bottom-0">
                    <button
                    type="submit"
                    className="btn btn-primary col-12 profile-submit"
                    >
                        Submit Pekerjaan
                    </button>
                </div>
            </div>
            <ModalUploadBukti
                show={showModal}
                onClose={handleCloseModal}
                onSelectValue={handleSelectValue}
            />
        </div>
    )
}

export default UploadBukti;