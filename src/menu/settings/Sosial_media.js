import React, { useState } from "react";
import HeaderSetting from "./components/Header";
import FilterSosmed from "../../modal/FilterSosmed";
import { Link } from "react-router-dom";
import ModalHapusSosmed from "../../modal/ModalHapusSosmed";
import ModalEditSosmed from "../../modal/ModalEditSosmed";

const listData = [
    { id: 1, name: "tes 1",sosmedID:2, sosmed: "Instagram", count:'90' },
    { id: 2, name: "tes 2",sosmedID:3, sosmed: "Facebook", count:'100' },
    { id: 3, name: "tes 3",sosmedID:2, sosmed: "Instagram", count:'200' },
    { id: 4, name: "tes 1",sosmedID:2, sosmed: "Instagram", count:'90' },
    { id: 5, name: "tes 2",sosmedID:3, sosmed: "Facebook", count:'100' },
    { id: 6, name: "tes 3",sosmedID:2, sosmed: "Instagram", count:'200' },
    { id: 7, name: "tes 1",sosmedID:2, sosmed: "Instagram", count:'90' },
    { id: 8, name: "tes 2",sosmedID:3, sosmed: "Facebook", count:'100' },
    { id: 9, name: "tes 3",sosmedID:2, sosmed: "Instagram", count:'200' },
    { id: 10, name: "tes 1",sosmedID:2, sosmed: "Instagram", count:'90' },
    { id: 11, name: "tes 2",sosmedID:3, sosmed: "Facebook", count:'100' },
    { id: 12, name: "tes 3",sosmedID:2, sosmed: "Instagram", count:'200' },
    
  ];

  const baseUrl = process.env.REACT_APP_BASE_URL;

function SocialMedia() {

  const [showModal, setShowModal] = useState(false);
  const [filterValues, setFilterValues] = useState([]);
  const [currentField, setCurrentField] = useState("");
  const [showModalDelete, setShowModalDelete] = useState(false);
  const [showModalEdit, setShowModalEdit] = useState(false);


  const handleOpenModal = () => {
    setShowModal(true); // Buka modal
  };
  const handleCloseModal = () => {
    setCurrentField(''); // Simpan nama input yang diklik
    setShowModal(false);
  };
  const handleCloseModalDelete = () => {
    setShowModalDelete(false);
  };
  const handleOpenModalDelete = (value) => {
    setShowModalDelete(true);
  };
  const handleCloseModalEdit = () => {
    setShowModalEdit(false);
  };
  const handleOpenModalEdit = (value) => {
    setShowModalEdit(true);
  };

  const handleSelectValue = (value) => {
    setFilterValues(value);
    setShowModal(false);
  };
  const filteredData = filterValues.length > 0 
  ? listData.filter(item => filterValues.includes(item.sosmedID))
  : listData;

    return (
        <div>
            <HeaderSetting label="Data sosial media" />

            <div className="z-index-2 container position-fixed bg-white top-10 d-flex flex-row py-3 shadow-small">
                <span className="flex-fill">List sosmed</span>
                <button className="btn icon-filter d-flex justify-content-end"
                onClick={handleOpenModal}
                ></button>
            </div>

            <div className="container bg-white pt-44 pb-16">
                {filteredData.map((item, index) => (
                <div key={index} className="d-flex flex-column border-sosial-media pl-3 pb-3 mb-2 rounded-small">
                    <div className="col-12 p-0 d-flex justify-content-end">
                        <span className="bg-terverifikasi text-verif text-white">Terverifikasi</span>
                    </div>
                    <div className="d-flex flex-row pr-3">
                        <div className="flex-fill d-flex flex-row">
                            <div className="border-icon-saldo bg-slate-200 d-flex justify-content-center align-items-center">
                                <span className="icon-ballon-chat"></span>
                            </div>
                            <div className="col-12">
                                <div className="text-xs">
                                    {item.name}
                                </div>
                                <div className="d-flex flex-row align-items-center text-xs-small">
                                    <i className="icon-profile-sosial-media mr-03"></i> 
                                    <span className="text-blue pr-2">{item.count}</span> <span>{item.sosmed}</span>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex flex-row align-items-center gap-2">
                            <div className="bg-slate-200 border-icon-trash d-flex align-items-center">
                                <button key={item.id} className="btn icon-trash"
                                onClick={handleOpenModalDelete}
                                ></button>
                            </div>
                            <div className="bg-slate-200 border-icon-trash d-flex align-items-center">
                                <button key={item.id} className="btn icon-card-with-pencil"
                                onClick={handleOpenModalEdit}
                                ></button>
                            </div>
                        </div>
                    </div>
                </div>
                ))
                }
            </div>
            <div className="root">
                <div className="position-fixed container pt-2 pb-4 bg-white bottom-0">
                    
                    <Link
                    to={`${baseUrl}/settings/sosial-media/tambah`}
                    className="btn btn-primary col-12 profile-submit"
                    >
                    Tambah sosial media
                    </Link>
                </div>
            </div>

            <FilterSosmed 
                show={showModal}
                onClose={handleCloseModal}
                onSelectValue={handleSelectValue}
            />
            <ModalHapusSosmed 
                show={showModalDelete}
                onClose={handleCloseModalDelete}
            />

            <ModalEditSosmed 
                show={showModalEdit}
                onClose={handleCloseModalEdit}
            />
        </div>
    );
}

export default SocialMedia;