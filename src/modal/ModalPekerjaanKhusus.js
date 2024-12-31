import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const baseUrl = process.env.REACT_APP_BASE_URL;


function ModalPekerjaanKhusus({ show, onClose, data }){
    const item = data;
    const modalVariants = {
        hidden: { y: "100%", opacity: 0 }, // Modal di luar layar bawah
        visible: { y: 0, opacity: 1 }, // Modal muncul ke posisi tengah bawah
        exit: { y: "100%", opacity: 0 }, // Modal keluar ke bawah layar
    };
    const backdropVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
        exit: { opacity: 0 },
      };

    const [filteredData, setFilteredData] = useState([]); // Data hasil filter

    const handleInputChange = (e) => {
        const value = e.target.value;
        setQuery(value);
    
        // Filter data berdasarkan input user
        const filtered = dataList.filter((item) =>
          item.Name.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredData(filtered);
      };
    return(
        <div>
            <AnimatePresence>
            {show && (
                <motion.div
                className="modal-backdrop"
                style={{
                    display: "block",
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                }}
                variants={backdropVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                onClick={onClose}
                >
                    <motion.div
                        className="modal-dialog modal-root"
                        style={{
                        position: "fixed",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        margin: "auto",
                        width: "100%",
                        }}
                        variants={modalVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        transition={{
                        duration: 0.3, // Atur kecepatan animasi (dalam detik)
                        ease: "linear", // Hindari efek bouncing
                        }}
                        onClick={(e) => e.stopPropagation()} // Prevent closing modal on click
                    >
                        <div
                        className="modal-content"
                        style={{
                            borderRadius: "25px 25px 0 0",
                            backgroundColor: "#fff",
                            padding: "10px 20px 20px 20px",
                        }}
                        >
                            {/* <div className="modal-header border-0 d-flex justify-content-center pt-0">
                            </div> */}
                            <div className="modal-body p-0">
                                <div className="bg-white pt-3 pb-2">
                                    <div className="d-flex">
                                        <div className="d-flex flex-row flex-fill p-0">
                                        <div className="bg-slate-200 border-icon-saldo d-flex justify-content-center align-items-center rounded-03"><span className={`${item.imgclass}`}></span></div>
                                        <div className="ml-2 d-flex vertical-align-end">
                                            <div className="d-flex flex-column justify-content-between">
                                                <div className="text-xs pl-0 d-flex justify-content-start font-medium leading-none">{item.desc}</div>
                                                <div className="text-xs-small pl-0 d-flex flex-row align-items-baseline">
                                                    <img className="img-11 mr-03" src="/react_mobile_frontend/img/work-icon/Calendar-icon.svg" alt="indobuzz"></img>
                                                    <span className="font-normal opacity-50 text-xs leading-none d-flex align-items-center">{item.tanggal}</span>
                                                </div>
                                            </div>
                                        </div>
                                        </div>
                                        <div className={`d-flex flex-column align-items-end justify-content-start text-xs pr-0 ${item.class}`}>
                                            <span className={`btn ${item.btn} text-white text-small rounded-3`} style={{padding: '2px 11px 2px 11px'}}>
                                                {item.btnText}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="d-flex flex-column">
                                        <span className="text-xs pt-8 pb-2"
                                        style={{color:'#A0A0A0'}}>Pekerjaan kamu</span>

                                        <label className="text-xs pt-2"
                                        style={{color:'#5C5C5C'}}>1. tes</label>
                                        <input className="input-gray form-control border-0 text-xs mb-2"
                                        placeholder="Pekerjaan kamu"
                                        readOnly
                                        ></input>

                                        <label className="text-xs pt-2"
                                        style={{color:'#5C5C5C'}}>2. tes</label>
                                        <input className="input-gray form-control border-0 text-xs mb-2"
                                        placeholder="Pekerjaan kamu"
                                        readOnly
                                        ></input>

                                        <label className="text-xs pt-2"
                                        style={{color:'#5C5C5C'}}>3. tes</label>
                                        <input className="input-gray form-control border-0 text-xs mb-4"
                                        placeholder="Pekerjaan kamu"
                                        readOnly
                                        ></input>

                                        <button className="btn btn-primary rounded-small text-xs " style={{height:'40px'}} onClick={onClose}>Tutup</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
            </AnimatePresence>
        </div>
    )
}

export default ModalPekerjaanKhusus;