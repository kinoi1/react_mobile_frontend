import React from "react";
import  { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import '../assets/settings.css';

const dataList =
    [
        {
          "DataID": 1,
          "Name": "Bank BJB"
        },
        {
          "DataID": 2,
          "Name": "Bank BRI"
        },      
        {
          "DataID": 3,
          "Name": "BCA"
        },      
        {
          "DataID": 4,
          "Name": "SeaBank"
        },      
        {
          "DataID": 5,
          "Name": "Bank Syariah Indonesia (BSI)"
        },      
        {
          "DataID": 6,
          "Name": "Bank Mandiri"
        },      
      ];




const ModalRekening = ({ show, onClose, onSelectValue }) => {
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

  // search //
  const [query, setQuery] = useState(""); // Input dari user
  const [filteredData, setFilteredData] = useState([]); // Data hasil filter

  // Contoh data statis
 

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    // Filter data berdasarkan input user
    const filtered = dataList.filter((item) =>
      item.Name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredData(filtered);
  };

  // Menampilkan semua data secara default
  React.useEffect(() => {
    setFilteredData(dataList);
  }, [dataList]);


  // Menangani klik pada hasil pencarian
  const handleSelect = (value) => {
    onSelectValue(value); // Kirim nilai yang dipilih ke parent
  };
  // endsearch //
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
              <div className="modal-header border-0 d-flex justify-content-center pt-0">
                
              </div>
              <div className="modal-body p-0">
                <div className="input-group shadow-small pb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text border-0 input-gray">
                            <i className="icon-search text-blue"></i>
                            </span>
                        </div>
                        <input
                            type="text"
                            className="form-control text-placeholder border-0 bg-gray input-gray pl-0 text-xs"
                            placeholder="Cari bank"
                            aria-label="Search"
                            value={query}
                            onChange={handleInputChange}
                        />
                </div>
                {filteredData.length > 0 && (
                <ul
                className="list-group"
                style={{
                  maxHeight: "200px", // Membatasi tinggi maksimum list
                  overflowY: "auto", // Membuat list dapat discroll
                }}
              >
                {filteredData.map((item, index) => (
                  <li className="list-group-item border-0 input-select pl-0 pr-0" key={index}
                  onClick={() => handleSelect(item.Name)} // Kirim nilai ke parent
                  >
                    {item.Name}
                  </li>
                ))}
              </ul>
      )}
                
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ModalRekening;
