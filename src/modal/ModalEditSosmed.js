import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const baseUrl = process.env.REACT_APP_BASE_URL;
const options = ["Twitter", "Facebook", "Instagram", "Youtube","Tiktok","Shopee","All Website (Isi nama kamu", "Gmail"];

const ModalEditSosmed = ({ show, onClose }) => {

  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");
  const handleOptionClick = (option) => {
    setSelectedValue(option);
    setIsOpen(false); // Tutup dropdown setelah memilih
  };
  const toggleDropdown = () => setIsOpen(!isOpen);

  // Variasi animasi untuk modal
  const modalVariants = {
    hidden: { y: "100%", opacity: 0 }, // Modal di luar layar bawah
    visible: { y: 0, opacity: 1 }, // Modal muncul ke posisi tengah bawah
    exit: { y: "100%", opacity: 0 }, // Modal keluar ke bawah layar
  };

  // Variasi animasi untuk backdrop
  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
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
                backgroundColor: "#fff",
                padding: "20px",
              }}
            >
              <div className="modal-header border-0 px-0">
                  <span>Edit sosial media</span>
              </div>
              <div className="modal-body p-0 mb-8">
                <div className={`d-flex flex-row card-important align-items-center p-2 mb-4 rounded-small`}> 
                    <span className="text-blue text-xs-small">
                      Fitur edit hanya bisa digunakan 1x24 jam setelah  terakhir kali kamu berhasil melakukan edit
                    </span>
                </div>
                <div className="d-flex flex-column gap-2">
                  <span className="text-xs">Tambah sosial media</span>

                  <div className="position-relative">
                    {/* Input dengan Icon */}
                    <div
                        className="input-group"
                        onClick={toggleDropdown}
                        style={{ cursor: "pointer" }}
                    >
                        <input
                        type="text"
                        className="form-control border-0 input-gray bg-gray text-xs"
                        placeholder="pilih sosial media"
                        value={selectedValue}
                        readOnly
                        style={{color:'#919191',backgroundColor:'#F5F5F5'}}
                        />
                        <div className="input-group-append">
                        <span className="input-group-text bg-gray border-0"
                        style={{backgroundColor:'#F5F5F5'}}
                        >
                            <i
                            className={` text-blue fa ${isOpen ? "fa-angle-down" : "fa-angle-right"}`}
                            ></i>
                        </span>
                        </div>
                    </div>

                    {/* Dropdown List */}
                    {isOpen && (
                        <div
                        className="dropdown-menu show"
                        style={{
                            position: "absolute",
                            top: "100%",
                            left: "0",
                            width: "100%",
                            zIndex: "1050",
                        }}
                        >
                        {options.map((option, index) => (
                            <button
                            key={index}
                            className="dropdown-item text-xs py-2"
                            onClick={() => handleOptionClick(option)}
                            >
                            {option}
                            </button>
                        ))}
                        </div>
                    )}
                  </div>

                  <span className="text-xs pb-2">Username</span>
                  <input className="form-control text-xs border-0 bg-gray input-gray"
                  placeholder="username"
                  >
                  </input>
                  <span className="text-xs pb-2">Jumlah Follower</span>
                  <input className="form-control text-xs border-0 bg-gray input-gray"
                  placeholder="follower"
                  ></input>
                </div>
                  <div className="pt-4">
                    <button className="col-md-12 btn btn-primary text-xs text-white">
                        konfirmasi edit
                    </button>
                    <button className="col-md-12 btn bg-sky-blue text-blue text-xs mt-2">
                        kembali
                    </button>
                  </div>
                  
                
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ModalEditSosmed;
