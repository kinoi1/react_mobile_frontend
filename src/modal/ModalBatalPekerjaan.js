import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const baseUrl = process.env.REACT_APP_BASE_URL;


function ModalBatalPekerjaan({ show, onClose }){
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
                            borderRadius: "10px 10px 0 0",
                            backgroundColor: "#fff",
                            padding: "20px",
                        }}
                        >
                        <div className="modal-header border-0 d-flex justify-content-center pt-0">
                            <span className="col-md-12 modal-title d-flex flex-column align-items-center justify-content-center text-base-modal leading-none font-semibold">
                                <img className="pb-2" src={`${baseUrl}/img/Batalkan-pekerjaan.png`} height={'160'} width={'217'}></img>
                                <div className="text-sm font-normal">Kamu yakin <span className="text-blue">mau batalkan</span></div> <br></br> 
                                <div className="text-sm font-normal"> <span className="text-blue"> </span>pekerjaan ini?</div>

                                <span className="text-xs letter-spacing-05 pt-4 font-normal" 
                                style={{color: '#8A8A8A',lineHeight: '1.6',textAlign: 'center'}}>
                                    Batalkan pekerjaan berarti kamu tidak lagi harus mengerjakan pekerjaan ini, tiket pekerjaan akan <span className="text-blue">dikembalikan untuk orang lain.</span>
                                </span>
                            </span>

                            

                        </div>
                        <div className="modal-body">
                            <div className="d-flex flex-row gap-2">
                                <button className="col-md-6 btn bg-sky-blue text-xs text-blue">
                                    Lanjut pekerjaan
                                </button>
                                <button className="col-md-6 btn btn-danger text-white text-xs">
                                    Cancel pekerjaan
                                </button>
                            </div>
                            {filteredData.length > 0 && (
                            <ul
                            className="list-group"
                            style={{
                            maxHeight: "200px", // Membatasi tinggi maksimum list
                            overflowY: "auto", // Membuat list dapat discroll
                            }}
                        >
                            
                        </ul>
                        )}
                            
                        </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
            </AnimatePresence>
        </div>
    )
}

export default ModalBatalPekerjaan;