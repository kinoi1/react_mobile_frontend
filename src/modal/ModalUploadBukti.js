import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const baseUrl = process.env.REACT_APP_BASE_URL;
const options = ["Twitter", "Facebook", "Instagram", "Youtube","Tiktok","Shopee","All Website (Isi nama kamu", "Gmail"];
const filteredData =
[
    {
        "DataID": 1,
        "Type": "Youtube",
        "Name" : 'tes 1',
        "Follower": '[Follower: 111]'
    },
    {
        "DataID": 2,
        "Type": "Youtube",
        "Name" : 'tes 2',
        "Follower": '[Follower: 101]'
    },
    {
        "DataID": 3,
        "Type": "Youtube",
        "Name" : 'tes 3',
        "Follower": '[Follower: 991]'
    },
    {
        "DataID": 4,
        "Type": "Youtube",
        "Name" : 'tes 4',
        "Follower": '[Follower: 200]'
    },
];
const ModalUploadBukti = ({ show, onClose, onSelectValue}) => {

  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");
  const handleOptionClick = (option) => {
    setSelectedValue(option);
    onSelectValue(option);
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

  const handleSelect = (value) => {
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
              borderRadius: "10px 10px 0 0",
              backgroundColor: "#fff",
              padding: "20px",
            }}
          >
            <div className="modal-header border-0 d-flex justify-content-center pt-0">
                <div className="input-group shadow-small pb-3">
                    Silahkan <span className="text-blue px-2"> pilih sosial media</span> yang akan digunakan
                
                </div>
            </div>
            <div className="modal-body pl-0 pt-0">
              {filteredData.length > 0 && (
              <ul
              className="list-group"
              style={{
                maxHeight: "200px", // Membatasi tinggi maksimum list
                overflowY: "auto", // Membuat list dapat discroll
              }}
            >
              {filteredData.map((item, index) => (
                <li className="list-group-item border-0 input-select pl-0" key={index}
                onClick={() => handleSelect(item.Name)} // Kirim nilai ke parent
                >
                  {item.Type +' - '+item.Name+' '+item.Follower}
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

export default ModalUploadBukti;
