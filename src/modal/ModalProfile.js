import React from "react";
import  { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import '../assets/settings.css';

const dataList =
    [
        {
          "ProvinceID": 1,
          "Province": "SUMATERA UTARA"
        },
        {
          "ProvinceID": 2,
          "Province": "SUMATERA BARAT"
        },
        {
          "ProvinceID": 3,
          "Province": "RIAU"
        },
        {
          "ProvinceID": 4,
          "Province": "JAMBI"
        },
        {
          "ProvinceID": 5,
          "Province": "SUMATERA SELATAN"
        },
        {
          "ProvinceID": 6,
          "Province": "BENGKULU"
        },
        {
          "ProvinceID": 7,
          "Province": "LAMPUNG"
        },
        {
          "ProvinceID": 8,
          "Province": "KEPULAUAN BANGKA BELITUNG"
        },
        {
          "ProvinceID": 9,
          "Province": "KEPULAUAN RIAU"
        },
        {
          "ProvinceID": 10,
          "Province": "DKI JAKARTA"
        },
        {
          "ProvinceID": 11,
          "Province": "JAWA BARAT"
        },
        {
          "ProvinceID": 12,
          "Province": "JAWA TENGAH"
        },
        {
          "ProvinceID": 13,
          "Province": "DI YOGYAKARTA"
        },
        {
          "ProvinceID": 14,
          "Province": "JAWA TIMUR"
        },
        {
          "ProvinceID": 15,
          "Province": "BANTEN"
        },
        {
          "ProvinceID": 16,
          "Province": "BALI"
        },
        {
          "ProvinceID": 17,
          "Province": "NUSA TENGGARA BARAT"
        },
        {
          "ProvinceID": 18,
          "Province": "NUSA TENGGARA TIMUR"
        },
        {
          "ProvinceID": 19,
          "Province": "KALIMANTAN BARAT"
        },
        {
          "ProvinceID": 20,
          "Province": "KALIMANTAN TENGAH"
        },
        {
          "ProvinceID": 21,
          "Province": "KALIMANTAN SELATAN"
        },
        {
          "ProvinceID": 22,
          "Province": "KALIMANTAN TIMUR"
        },
        {
          "ProvinceID": 23,
          "Province": "KALIMANTAN UTARA"
        },
        {
          "ProvinceID": 24,
          "Province": "SULAWESI UTARA"
        },
        {
          "ProvinceID": 25,
          "Province": "SULAWESI TENGAH"
        },
        {
          "ProvinceID": 26,
          "Province": "SULAWESI SELATAN"
        },
        {
          "ProvinceID": 27,
          "Province": "SULAWESI TENGGARA"
        },
        {
          "ProvinceID": 28,
          "Province": "GORONTALO"
        },
        {
          "ProvinceID": 29,
          "Province": "SULAWESI BARAT"
        },
        {
          "ProvinceID": 30,
          "Province": "MALUKU"
        },
        {
          "ProvinceID": 31,
          "Province": "MALUKU UTARA"
        },
        {
          "ProvinceID": 32,
          "Province": "PAPUA BARAT"
        },
        {
          "ProvinceID": 33,
          "Province": "PAPUA"
        }
      ];
const ModalProfile = ({ show, onClose, onSelectValue }) => {
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
      item.Province.toLowerCase().includes(value.toLowerCase())
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
                borderRadius: "10px 10px 0 0",
                backgroundColor: "#fff",
                padding: "20px",
              }}
            >
              <div className="modal-header border-0 d-flex justify-content-center pt-0">
                <span> Silahkan <span className="text-blue">pilih kota</span> tempat kamu tinggal! 
                </span>
              </div>
              <div className="modal-body">
                <div className="input-group shadow-small pb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text bg-transparent border-r-0">
                            <i className="fa fa-search"></i>
                            </span>
                        </div>
                        <input
                            type="text"
                            className="form-control pl-0 border-l-0 text-xs text-placeholder "
                            placeholder="Masukan kode pekerjaan"
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
                  <li className="list-group-item border-0 input-select" key={index}
                  onClick={() => handleSelect(item.Province)} // Kirim nilai ke parent
                  >
                    {item.Province}
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

export default ModalProfile;
