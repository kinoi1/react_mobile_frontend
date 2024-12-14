import React from "react";
import  { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import '../assets/settings.css';

const DataGender =
    [
        {
            "DataID": 1,
            "Name": "Laki-laki"
        },
        {
            "DataID": 2,
            "Name": "Perempuan"
        },        
      ];

const DataCity =
    [
        {
            "DataID": 1,
            "Name": "Subang"
        },
        {
            "DataID": 2,
            "Name": "Jakarta"
        },
        {
            "DataID": 3,
            "Name": "Bandung"
        },
        {
            "DataID": 4,
            "Name": "Surabaya"
        },
        {
            "DataID": 5,
            "Name": "Indramayu"
        },
        {
            "DataID": 6,
            "Name": "Purwakarta"
        },
        
      ];
const DataProfesi =
[
    {
        "DataID": 1,
        "Name": "Mahasiswa"
    },
    {
        "DataID": 2,
        "Name": "Karyawan Swasta"
    },   
    {
        "DataID": 3,
        "Name": "PNS"
    },      
    {
        "DataID": 4,
        "Name": "Ibu rumah tangga"
    }, 
];

const DataHobby =
[
    {
        "DataID": 1,
        "Name": "Memancing kerusuhan"
    },
    {
        "DataID": 2,
        "Name": "Marah-marah"
    },   
    {
        "DataID": 3,
        "Name": "Tidur"
    },      
    {
        "DataID": 4,
        "Name": "Makan"
    }, 
];
const DataMarried =
[
    {
        "DataID": 1,
        "Name": "Ya"
    },
    {
        "DataID": 2,
        "Name": "Tidak"
    },   
];
const DataPet =
[
    {
        "DataID": 1,
        "Name": "Ya"
    },
    {
        "DataID": 2,
        "Name": "Tidak"
    },   
];
      var dataList = [];
      var HeaderText = '';


const ModalProfile = ({ show, onClose, onSelectValue, type }) => {

const HeaderContent = ({ type }) => {
const renderContent = () => {
    switch (type) {
        case "city":
        return <span> Silahkan <span className="text-blue">pilih kota</span> tempat kamu tinggal! 
                </span>
        case "gender":
        return <span> Silahkan <span className="text-blue">pilih gender</span> Kamu! 
                </span>
        case "profesi":
            return <span> Silahkan <span className="text-blue">pilih pekerjaan</span> Kamu saat ini! </span>
        case "hobby":
            return <span> Silahkan <span className="text-blue">pilih hobi</span> Kamu saat ini! </span>
        case "married":
            return <span> Apakah kamu sudah <span className="text-blue">Menikah</span>? </span>
    
        case "pet":
            return <span> Apakah kamu punya <span className="text-blue">peliharaan</span>? </span>
        default:
        return <h2>404: Page Not Found</h2>;
    }
    };

    return (
    <div>
        {renderContent()} {/* Render konten berdasarkan nilai string */}
    </div>
    );
};
  // Variasi animasi untuk modal
if(type == 'city'){
    dataList = DataCity;
}else if(type == 'gender') {
    dataList = DataGender;
}else if(type == 'profesi') {
    dataList = DataProfesi;
}else if(type == 'hobby'){
    dataList = DataHobby;
}else if(type == 'pet'){
    dataList = DataPet;
}else if(type == 'married'){
    dataList = DataMarried;
}
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
                borderRadius: "10px 10px 0 0",
                backgroundColor: "#fff",
                padding: "20px",
              }}
            >
              <div className="modal-header border-0 d-flex justify-content-center pt-0">
                <HeaderContent type={type} />
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

export default ModalProfile;
