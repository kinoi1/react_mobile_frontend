import React, { useState } from "react";
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
        // { id: "1", icon: "icon-follow", nama: "Follow Tiktok"},
    ]
    const listwork = [
        { id: "1", icon: "icon-follow", nama: "Subscribe Youtube", harga: "500" },
        { id: "2", icon: "icon-follow", nama: "Komentar tiktok", harga: "500" },
        { id: "3", icon: "icon-follow", nama: "Review Google Maps", harga: "5000" },
        { id: "4", icon: "icon-follow", nama: "Follow Instagram", harga: "5090" },
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

      const TotalPekerjaan = listwork.length + listworktrending.length + listworkspecial.length;

      const [childData, setChildData] = useState("");

      const handleDataFromChild = (data) => {
        setChildData(data); // Data yang diterima dari child
      };
  return (
    <div className="bg-slate-200 rootwork" style={{overflowY: 'scroll',maxHeight: '35%',scrollbarWidth:'none'}}>
        <section
  className="position-fixed z-index-2 container top-0 p-0"
  style={{
    boxShadow: '0px -5px 20px 0px rgba(0,0,0,0.05)',
    WebkitBoxShadow: '0px -5px 20px 0px rgba(0,0,0,0.05)',
    MozBoxShadow: '0px -5px 20px 0px rgba(0,0,0,0.05)',
  }}
>
  <div className="bg-white daftar-pekerjaan shadow-small">
    <div className="row justify-content-center">
      <span>Daftar Pekerjaan</span>
    </div>
  </div>

  {listworkactive.length > 0 && (
    <>
      {/* Pekerjaan Aktif Section */}
      <div className="container pt-3 pb-4 bg-white">
        <div className="row">
          <div className="col-md-12">
            <div className="d-flex flex-row justify-space-between">
              <div className="text-work-header">Pekerjaan Aktif</div>
              <div className="d-flex text-xs-small bg-green text-white px-2-5 rounded-3 align-items-center">
                Kamu punya {listworkactive.length} pekerjaan aktif
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* List Pekerjaan Aktif */}
      <div className="bg-white shadow-small pb-4">
        {listworkactive.map((item, index) => (
          <div key={index} className="container">
            <div className="row">
              <div className="col-md-12 d-flex flex-row align-items-center justify-content-between">
                <div className="d-flex gap-4">
                  <div className="d-flex align-items-center">
                    <img
                      className="work-image-active"
                      src={`${baseUrl}/img/work-icon/Follower-icon.svg`}
                      alt={item.nama}
                    />
                  </div>
                  <div className="d-flex align-items-center">
                    <span className="text-xsm">{item.nama}</span>
                  </div>
                </div>
                <div className="d-flex gap-2">
                  <div className="d-flex px-2-5 py-1 align-items-center bg-blue rounded-3">
                    <Link
                      to={`${baseUrl}/pekerjaan/upload-bukti`}
                      className="btn text-base-upload p-0 text-white font-normal"
                    >
                      Unggah Bukti
                    </Link>
                  </div>
                  <div className="bg-red px-2-5 rounded-3">
                    <button
                      className="btn text-base-upload p-0 py-1 text-white font-normal"
                      onClick={() => handleOpenModal("pet")}
                    >
                      Batalkan
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )}
</section>

{listworkactive == 0 && (
    <div className="container pt-3 pb-4 bg-white">
        <div className="row">
            <div className="col-md-12">
                <div className="d-flex flex-row justify-space-between">
                    <div className="text-work-header">
                        Pekerjaan Aktif
                    </div>
                    <div className="d-flex text-xs-small bg-green text-white px-2-5 rounded-3 align-items-center">
                        {/* <img src={`${baseUrl}/video/Api.gif`} alt="tes" height='15' width='15' /> */}
                        Kamu punya {listworkactive.length} pekerjaan aktif
                    </div>
                </div>
            </div>
        </div>
    </div>
)}


                
            

        <section className="container mt-44 py-4 bg-white shadow-small">
            <div className="">
                <div className="row">
                    <div className="col-md-12">
                        <span className="text-work-header">
                            Pekerjaan Terbaru
                        </span>
                    </div>
                </div>
            </div>
        </section>

        <WorkList listwork={listwork} pagination={false}/>

        <section className="container mt-3 py-4 bg-white shadow-small">
            <div className="">
                <div className="row">
                    <div className="col-md-12">
                        <span className="text-work-header">
                            Pekerjaan Trending Topik
                        </span>
                    </div>
                </div>
            </div>
        </section>

        <WorkList listwork={listworktrending} />

        <section className="mt-3 bg-white pt-4 pb-3">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <span className="text-work-header">
                            Pekerjaan Khusus!
                        </span>
                    </div>
                </div>
            </div>
        </section>

        <section className="bg-white shadow-small" style={{paddingBottom: '0.85rem'}}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text border-0 input-gray" style={{borderRadius: '8px 0px 0px 8px'}}>
                                <i className="icon-search text-blue"></i>
                                </span>
                            </div>
                            <input
                                type="text"
                                className="form-control text-placeholder border-0 bg-gray input-gray pl-0 text-xs"
                                placeholder="Masukan kode pekerjaan"
                                aria-label="Search"
                                style={{height: '45px',borderRadius: '0px 8px 8px 0px'}}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <div className="bg-white mb-16 pb-24 shadow-small">

            <WorkList listwork={listworkspecial} />

        </div>
        <ModalBatalPekerjaan 
            show={showModal}
            onClose={handleCloseModal}
            onSelectValue={handleSelectValue}
        />
        <BottomBar data={TotalPekerjaan} sendDataToParent={handleDataFromChild}/>
    </div>
  );
}

export default Pekerjaan;
