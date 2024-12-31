import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect } from "react";
import ModalUploadBukti from "../../modal/ModalUploadBukti";
import $ from "jquery";
import "dropify/dist/js/dropify.min";
import 'dropify/dist/css/dropify.min.css'; 

const baseUrl = process.env.REACT_APP_BASE_URL;

function UploadBukti(){
    const jobkhusus = false;
    const taskJobKhusus = [
        { id: "1", nama: "Youtube", note: '', type: 'file' },
        { id: "1", nama: "Youtube", note: '', type: 'link' },
    ];
    const [formData, setFormData] = useState({
        sosialMedia: ''
      }); 
    const [isOpen, setIsOpen] = useState(true);
    const toggleCollapse = () => {
      setIsOpen(!isOpen);
    };
    const [isOpenClient, setIsOpenClient] = useState(true);
    const toggleCollapseClient = () => {
      setIsOpenClient(!isOpenClient);
    };
    const [isOpenCatatan, setIsOpenCatatan] = useState(false);
    const toggleCollapseCatatan = () => {
      setIsOpenCatatan(!isOpenCatatan);
    };
    const [isOpenPerhatian, setIsOpenPerhatian] = useState(true);
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
            <div className="position-fixed z-index-2 w-full header-setting bg-white shadow-small d-flex align-items-center">
                <div className="col-12">
                    <div>
                        <Link to={`${baseUrl}/pekerjaan`} className="no-hover-underline"> 
                        <i className="fa fa-angle-left"></i> 
                        <span className="text-black pl-2">Upload Pekerjaan</span> </Link>
                    </div>
                </div>
            </div>

            <div className="pt-24 container bg-white">
                <div className="d-flex flex-column pt-4 pb-4">
                    <div className="d-flex justify-content-center mb-4">
                        <img className='rounded-3' src={`${baseUrl}/img/work-icon/Follower-icon.svg`} alt='indobuzz' height={'72px'} width={'72px'}></img>
                    </div>
                    <span className="d-flex justify-content-center">
                        Job subscribe Youtube
                    </span>
                    <span className="d-flex justify-content-center">
                        (PX Indonesia)
                    </span>
                    <span className="d-flex justify-content-center text-xs pt-2 text-upload">
                        subscribe youtube
                    </span>
                </div>
                <div className="d-flex flex-row">
                    
                    
                    <div className="d-flex flex-column flex-fill pr-8 pl-8">
                        <div className="text-xs text-blue d-flex justify-content-center">
                            Rp. 1000
                        </div>
                        <div className="text-xs d-flex justify-content-center flex-fill align-items-center text-upload">
                            Fee
                        </div>
                    </div>
                    <div className="vertical-line">
                        
                    </div>
                    <div className="d-flex flex-column flex-fill">
                        <a className="btn btn-primary rounded-3 text-xs mx-8" style={{paddingTop: '2px', paddingBottom: '2px'}}> link</a>
                        <span className="d-flex justify-content-center text-xs text-upload letter-spacing-03">Target</span>
                    </div>
                    <div className="vertical-line">
                        
                    </div>
                    <div className="d-flex flex-column flex-fill"> 
                        <a className="btn btn-primary rounded-3 text-xs ml-8 mr-4" style={{paddingTop: '2px', paddingBottom: '2px'}}> link</a>
                        <span className="d-flex justify-content-center text-xs text-upload letter-spacing-03">Assets</span>
                    </div>
                </div>

                <div className="d-flex flex-row card-important align-items-center p-2 mt-4 rounded-small"> 
                    <span className="icon-important mr-2"></span>
                    <span className="text-blue text-attention">
                        Periode pekerjaan dimulai pada <span className="font-medium">23 Dec 2024 pukul 12:00</span> s/d <span className="font-medium"> 24 Dec 2024 pukul 15:00</span>
                    </span>
                </div>

                <div className="py-4">
                    <button
                        className={`btn col-12 d-flex flex-column justify-content-between align-items-center bg-slate-200 border-0 p-2-5`}
                        onClick={toggleCollapse}
                        aria-expanded={isOpen}
                        >
                        <span className="col-12 d-flex p-0">
                            <span className="flex-fill d-flex justify-content-start text-xs letter-spacing-03 p-0 font-medium"
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
                            <span className="flex-fill d-flex justify-content-start text-xs letter-spacing-03 p-0 font-medium"
                            style={{color: '#2F2F2F'}}>
                            Catatan dari klien
                            </span>
                            {isOpenClient ? (
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
                        className={`btn col-12 d-flex flex-column justify-content-between align-items-center bg-blue border-0 text-white p-2-5 gap-5px`}
                        onClick={toggleCollapseCatatan}
                        aria-expanded={isOpenCatatan}
                        >
                        <span className="col-12 d-flex p-0">
                            <span className="flex-fill d-flex justify-content-start text-xs font-medium p-0">
                            Baca ini dulu!
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
                                <p className="text-align-start m-0 text-xs opacity-80 font-normal">
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
                    <label className="input-label text-xs">
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
                {jobkhusus === true ? (
                    <div>
                        <div className="rounded-small p-3 mb-4" style={{ border: '1px solid #EDEDED' }}>
                            <label className="input-label text-xs">
                                Screenshot bukti pekerjaan
                            </label>
                            <div className="d-flex flex-row card-important align-items-center p-2 rounded-small">
                                <span className="text-blue text-attention">
                                    Silahkan upload dan tunggu hingga gambar selesai diupload, lalu klik tombol submit pekerjaan.
                                </span>
                            </div>
                            <div className="pt-4">
                                <input
                                    type="file"
                                    className="dropify bg-slate-200 border-0"
                                    data-height="100"
                                    onChange={handleFileChange}
                                />
                            </div>
                        </div>

                        {/* Map over taskJobKhusus */}
                        {taskJobKhusus.map((item, index) => (
                            <div className="rounded-small p-3 mb-4" style={{ border: '1px solid #EDEDED' }}>
                                <div className="d-flex flex-column">
                                    <label className="input-label text-xs">
                                        Task {index+1} 
                                    </label>
                                    <label className="input-label text-xs">
                                        Note : 
                                    </label>
                                </div>
                                <div className="pt-2">
                                    {item.type == 'file' ? (
                                        <div className="d-flex flex-column gap-4">
                                            <div className="d-flex flex-row card-important align-items-center p-2 rounded-small">
                                                <span className="text-blue text-attention">
                                                    Silahkan upload dan tunggu hingga gambar selesai diupload, lalu klik tombol submit pekerjaan.
                                                </span>
                                            </div>
                                            <input
                                            type="file"
                                            className="dropify bg-slate-200 border-0"
                                            data-height="100"
                                            onChange={handleFileChange}
                                            />
                                            <button className="btn btn-primary rounded-small font-medium text-xs">
                                                Upload bukti
                                            </button>
                                        </div>
                                    ):(
                                        
                                        <div className="d-flex flex-column gap-4">
                                            <div className="d-flex flex-row card-important align-items-center p-2 rounded-small">
                                                <span className="text-blue text-attention">
                                                Silahkan masukan link hasil pekerjaan.
                                                </span>
                                            </div>
                                            <input 
                                                name="link[]"
                                                className="input-gray form-control text-xs border-0 placeholder-gray"
                                                placeholder="Masukan link"
                                            />
                                            <button className="btn btn-primary rounded-small font-medium text-xs">
                                                Konfirmasi link
                                            </button>
                                        </div>
                                    )}
                                    
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="pb-4">
                        <label className="input-label text-xs">
                            Screenshot bukti pekerjaan
                        </label>
                        <div className="d-flex flex-row card-important align-items-center p-2 rounded-small">
                            <span className="text-blue text-attention">
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
                )}

                <div className="pb-24">
                    <button
                        className={`btn col-12 d-flex flex-column justify-content-between align-items-center bg-purple border-0 text-white p-2-5 gap-5px`}
                        onClick={toggleCollapsePerhatian}
                        aria-expanded={isOpenPerhatian}
                        >
                        <span className="col-12 d-flex p-0">
                            <span className="flex-fill d-flex justify-content-start text-xs font-medium p-0">
                            Baca ini dulu!
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
                                <p className="text-align-start m-0 text-xs opacity-80 font-normal">
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
                    className="btn btn-primary col-12 profile-submit text-xs h-45px"
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