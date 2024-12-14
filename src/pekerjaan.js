import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

import './App.css';
import './assets/main.css';
import './assets/BottomBar.module.css';
import BottomBar from "./bottom_bar";
import WorkList from "./work-list";
import ModalBatalPekerjaan from "./modal/ModalBatalPekerjaan";

const baseUrl = process.env.REACT_APP_BASE_URL;

function Pekerjaan() {

    const [showModal, setShowModal] = useState(false);

    const listworkactive = [
        { id: "1", icon: "icon-follow", nama: "Follow Tiktok"},
    ]
    const listwork = [
        { id: "1", icon: "icon-follow", nama: "Youtube", harga: "500" },
        { id: "2", icon: "icon-follow", nama: "Tes Youtube", harga: "500" },
        { id: "3", icon: "icon-follow", nama: "Youtube", harga: "5000" },
        { id: "4", icon: "icon-follow", nama: "Tes Twitter", harga: "5090" },
        { id: "5", icon: "icon-follow", nama: "Youtube", harga: "500" },
        { id: "6", icon: "icon-follow", nama: "Tes Instagram", harga: "5000" },
        { id: "7", icon: "icon-follow", nama: "Youtube", harga: "500" },
        { id: "8", icon: "icon-follow", nama: "Tes Youtube", harga: "500" },
      ];

    const listworktrending = [
        { id: "1", icon: "icon-follow", nama: "Youtube", harga: "500" },
        { id: "1", icon: "icon-follow", nama: "Youtube", harga: "500" },
        { id: "1", icon: "icon-follow", nama: "Youtube", harga: "500" },
      ];

      const listworkspecial = [
        { id: "1", icon: "icon-follow", nama: "Download, Registrasi & Review", harga: "500" },
        { id: "1", icon: "icon-follow", nama: "Youtube", harga: "500" },
        { id: "1", icon: "icon-follow", nama: "Youtube", harga: "500" },
      ];

      const handleOpenModal = (fieldName) => {
        // formData[fieldName] = "";
        // setCurrentField(fieldName); // Simpan nama input yang diklik
        setShowModal(true); // Buka modal
      };
      const handleCloseModal = () => {
        // setCurrentField(''); // Simpan nama input yang diklik
        setShowModal(false);
      };
      const handleSelectValue = (value) => {
        // formData[currentField] = value;
        setShowModal(false);
      };
  return (
    <div className="bg-slate-200 rootwork">
    <section className="bg-white daftar-pekerjaan shadow-small">
        <div className="container">
            <div className="row justify-content-center">
                <span>
                    Daftar Pekerjaan
                </span>
            </div>
        </div>
    </section>

    <div className="container py-4 bg-white">
        <div className="row">
            <div className="col-md-12">
                <div className="d-flex flex-row justify-space-between">
                    <div className="text-xsm">Pekerjaan Aktif</div>
                    <div className="d-flex text-small bg-green text-white px-2 rounded-3 align-items-center">Kamu punya 1 pekerjaan aktif</div>
                </div>
            </div>
        </div>
    </div>

    <div className="bg-white shadow-small pb-2">
    {listworkactive.map((item, index) => (
        <div key={index} className="container">
            <div className="row">
                <div className="col-md-12 d-flex flex-row align-items-center justify-content-between py-2">
                    <div className="d-flex gap-4">
                        <div className="">
                            <img className='work-image-active' src={`${baseUrl}/img/work-icon/Follower-icon.svg`} alt='indobuzz'></img>
                        
                        </div>
                        <div className="">
                            <span className="text-xs"> {item.nama}</span>
                        </div>
                    </div>
                    <div className="d-flex gap-5">
                        <div className="p-0 d-flex px-2 py-1 justify-content-center bg-blue rounded-3">
                            <Link 
                            to={`${baseUrl}/pekerjaan/upload-bukti`}
                            className="btn text-xs-small p-0 text-white">Unggah Bukti</Link>
                        </div>
                        <div className="bg-red px-2 rounded-3">
                            <button className="btn text-xs-small p-0 py-1 text-white"
                            onClick={() => handleOpenModal("pet")}
                            > batalkan</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ))}
    </div>

    <section className="mt-2 py-4 bg-white shadow-small">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <span className="text-xs">
                        Pekerjaan Terbaru
                    </span>
                </div>
            </div>
        </div>
    </section>

    <WorkList listwork={listwork} pagination={false}/>

    <section className="mt-2 py-4 bg-white shadow-small">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <span className="text-xs">
                        Pekerjaan Trending Topik
                    </span>
                </div>
            </div>
        </div>
    </section>

    <WorkList listwork={listworktrending} />

    <section className="mt-2 bg-white pt-4 pb-2">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <span className="text-xs">
                        Pekerjaan Khusus!
                    </span>
                </div>
            </div>
        </div>
    </section>

    <section className="bg-white shadow-small pb-3">
        <div className="container opacity-60">
            <div className="row">
                <div className="col-md-12">
                    <div className="input-group">
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
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>

    <div className="bg-white mb-16 pb-24 shadow-small-t">

        <WorkList listwork={listworkspecial} />

    </div>
    <ModalBatalPekerjaan 
    show={showModal}
    onClose={handleCloseModal}
    onSelectValue={handleSelectValue}
    />
    <BottomBar />
    </div>
  );
}

export default Pekerjaan;
