import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const baseUrl = process.env.REACT_APP_BASE_URL;

const ModalHapusSosmed = ({ show, onClose }) => {
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
              <div className="w-100 d-flex justify-content-center">
                <div style={{border: '2px solid #DADADA', width: '40px', borderRadius: '1rem'}}></div>
              </div>

              <div className="modal-header border-0 d-flex flex-column">
                <span className="col-md-12 modal-title d-flex flex-column align-items-center justify-content-center text-base-modal leading-none font-semibold">
                    <img className="pb-2 mb-2" src={`${baseUrl}/img/settings/Delete-Sosmed.png`} height={'137'} width={'207'}></img>
                    <div className="font-semibold pb-2">Kamu yakin mau <span className="text-blue">hapus</span></div> 
                    <div className="font-semibold"> <span className="text-blue">sosmed </span>ini?</div>
                </span>
              </div>
              <div className="modal-body p-0">
                    <p className="text-xs text-center text-grey mb-12">
                    Proses hapus membutuhkan waktu <span className="font-semibold text-blue">3x24 jam</span>, apabila yang kamu butuhkan adalah merubah akun yang ada silahkan pakai fitur edit akun!
                    </p>
                    <div className="d-flex flex-row gap-2">
                        <button className="flex-fill btn bg-sky-blue text-xs text-blue">
                            Kembali
                        </button>
                        <button className="flex-fill btn btn-danger text-white text-xs">
                            Ya, hapus
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

export default ModalHapusSosmed;
