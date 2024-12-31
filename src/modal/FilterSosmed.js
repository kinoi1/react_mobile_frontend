import React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FilterSosmed = ({ show, onClose, onSelectValue }) => {
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

  const [selectedButtons, setSelectedButtons] = useState([]);

  // Daftar filter (label pada tombol)
//   const filters = ["Twitter", "Instagram", "Facebook", "Tiktok", "Youtube", "Shopee", "Gmail", "All Website"];
  const filters = [
    {
        id:1,
        name:"Twitter",
        type:1
    }, 
    {   id:2,
        name:"Instagram",
        type:1
    }, 
    {   id:3,
        name:"Facebook",
        type:1,
    }, 
    {   id:4,
        name:"Tiktok",
        type:1,
    }, 
    {   id:5,
        name:"Youtube",
        type:1,
    }, 
    {   id:6,
        name:"Shopee",
        type:1,
    }, 
    {   id:7,
        name:"Gmail",
        type:1,
    }, 
    {   id:8,
        name:"All Website",
        type:1,
    },
    {   id:9,
        name:"0 - 1000",
        type:2,
    },
    {   id:10,
        name:"1000 - 5000",
        type:2,
    },
    {   id:11,
        name:"5000 - 10000",
        type:2,
    },
    {   id:12,
        name:"Diatas 10000",
        type:2,
    },
    ];

  // Fungsi untuk toggle tombol yang dipilih
  const toggleButton = (filter) => {
    if (selectedButtons.includes(filter)) {
      // Hapus dari list jika sudah dipilih
      setSelectedButtons(selectedButtons.filter((item) => item !== filter));
    } else {
      // Tambahkan ke list jika belum dipilih
      setSelectedButtons([...selectedButtons, filter]);
    }
  };

  const handleReset = () => {
    setSelectedButtons([]); // Reset state menjadi kosong
  };

  // Fungsi submit
  const handleSubmit = (value) => {
    onSelectValue(value); // Kirim nilai yang dipilih ke parent
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
              <div className="modal-header border-0 d-flex flex-row p-0">
                <div className="flex-fill d-flex flex-row">
                    <span className="modal-header icon-filter"></span>
                    <span className="text-base-setting d-flex align-items-center">Filter</span>
                </div>
                <div className="d-flex justify-content-center">
                    <button className="btn d-flex justify-content-end border-blue text-blue text-xs-small px-3"
                    onClick={handleReset}
                    >Reset</button>
                </div>
              </div>
              <div className="modal-body p-0">
                
                    <div className="d-flex flex-column">
                        <div className="d-flex flex-column"> 
                            <span style={{color:'#AFAFAF'}} className="text-xs py-3"> Berdasarkan Sosmed</span>
                            <div className="line-height-3">
                                {filters.map((filter) => (
                                    filter.type === 1 && (
                                    <button
                                    key={filter.id}
                                    type="button"
                                    className={`btn font-normal mr-2 rounded-3 px-3 text-xs ${
                                        selectedButtons.includes(filter.id)
                                        ? "btn-selected text-blue"
                                        : "btn-grey"
                                    }`}
                                    onClick={() => toggleButton(filter.id)}
                                    >
                                    {filter.name}
                                    </button>
                                )))}
                            </div>
                        </div>
                        <div className="d-flex flex-column pb-4"> 
                            <span style={{color:'#AFAFAF'}} className="text-xs py-3"> Berdasarkan follower</span>
                            <div className="line-height-3">
                                {filters.map((filter) => (
                                    filter.type === 2 && (
                                    <button
                                    key={filter.id}
                                    type="button"
                                    className={`btn font-normal mr-2 px-3 rounded-3 text-xs ${
                                        selectedButtons.includes(filter.id)
                                        ? "btn-selected text-blue"
                                        : "btn-grey"
                                    }`}
                                    onClick={() => toggleButton(filter.id)}
                                    >
                                    {filter.name}
                                    </button>
                                )))}
                            </div>
                        </div>
                        <button className="col-md-12 btn btn-primary text-white text-xs mb-4"
                        onClick={() => handleSubmit(selectedButtons)}
                        style={{padding:"0.75rem"}}
                        >
                            Konfirmasi filter
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

export default FilterSosmed;
