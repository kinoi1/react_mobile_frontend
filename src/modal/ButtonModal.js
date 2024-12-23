import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const ButtonModal = ({ show, onClose }) => {
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
                borderRadius: "25px 25px 0 0",
                backgroundColor: "#fff",
                padding: "10px 20px 20px 20px",
              }}
            >
              <div className="w-100 d-flex justify-content-center">
                <div style={{border: '2px solid #DADADA', width: '40px', borderRadius: '1rem'}}></div>
              </div>
              <div className="modal-header border-0 pt-8">
                <h5 className="col-md-12 modal-title d-flex flex-column align-items-center justify-content-center text-base-modal font-semibold p-0" style={{lineHeight: '0.8'}}>
                    <div>Ambil <span className="text-blue">pekerjaan & dapatkan</span></div> <br></br> 
                    <div> <span className="text-blue">cuan</span> dengan mudah!</div>
                </h5>
              </div>
              <div className="modal-body pb-2 pl-0 pr-0">
                
                    <p className="text-xs text-center text-grey" style={{padding: '0rem 0rem',marginBottom: '3rem', lineHeight: '1.7'}}>Pekerjaan ini bisa kamu ambil <span className="text-blue font-medium">maks 4x</span> dengan akun sosmed yang berbeda. Pastikan jumlah akunmu mencukupi agar bisa ambil maks.</p>
                    <div className="d-flex flex-row gap-2">
                        <button className="flex-fill btn bg-sky-blue text-xs text-blue pl-0 pr-0" style={{paddingTop: '12px',paddingBottom: '12px'}}>
                            Cek sosmed dulu
                        </button>
                        <button className="flex-fill btn btn-primary text-white text-xs pl-0 pr-0" style={{paddingTop: '12px',paddingBottom: '12px'}}>
                            Langsung Ambil
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

export default ButtonModal;
