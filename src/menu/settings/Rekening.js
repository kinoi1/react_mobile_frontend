import React, { useState } from "react";
import HeaderSetting from "./components/Header";
import ModalRekening from "../../modal/ModalRekening";

const Rekening = ({ value }) => {
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const [formData, setFormData] = useState("")
  const [showModal, setShowModal] = useState(false);
  const [currentField, setCurrentField] = useState("");

  const handleOpenModal = () => {
    setShowModal(true); // Buka modal
  };
  const handleCloseModal = () => {
    setCurrentField(''); // Simpan nama input yang diklik
    setShowModal(false);
  };

  const handleSelectValue = (value) => {
    setFormData(value);
    setShowModal(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData(inputs); // Menyimpan data input hanya saat submit
    alert("Data berhasil disimpan!");
  };

  return (
    <div>
        <HeaderSetting label="Rekening Bank" />
        <form>
            <div className="container d-flex flex-column pt-24 bg-white gap-3-5 pb-16" style={{minHeight: '800px'}}>
                <div className="d-flex flex-row card-important align-items-center p-2 rounded-small mb-3"> 
                    <div className="p-2 bg-important rounded-small mr-3">
                        <span className="icon-important"></span>
                    </div>
                    <span className="text-blue text-attention">
                        Pastikan data bank yang kamu masukan benar, kesalahan menjadi tanggung jawab kamu. hubungi admin
                    </span>
                </div>
                <span className="text-xs">Nomor Rekening</span>
                <input className="form-control text-xs border-0 bg-gray input-gray"
                placeholder="Masukan nomor rekening">

                </input>
                <div className="d-flex flex-row">
                    <div className="col-6 d-flex flex-column p-0 pr-2 gap-2">
                        <span className="text-xs">
                            Nama Pemilik
                        </span>
                        <input className="flex-fill text-xs form-control border-0 bg-gray  input-gray"
                        placeholder="Masukan Nama"
                        ></input>
                    </div>
                    <div className="col-6 d-flex flex-column p-0 pl-2 gap-2">
                        <span className="text-xs">
                            Pilih Bank
                        </span>
                        <div className="d-flex flex-row">
                            <input className="form-control text-xs border-0 bg-gray  input-gray select-no-icon"
                            type="text"
                            name="bank"
                            id="bank"
                            placeholder="Pilih Bank"
                            value={formData}
                            onClick={handleOpenModal}
                            readOnly
                            >
                            </input>
                            <i className="fa fa-angle-right d-flex align-items-center bg-select-form-control text-blue"></i>
                        </div>
                    </div>
                </div>
            </div>

            <div className="root">
                <div className="position-fixed container pt-2 pb-4 bg-white bottom-0 shadow-small-t">
                    <button
                    type="submit"
                    className="btn btn-primary col-12 profile-submit text-xs h-45px"
                    >
                    Tambah rekening
                    </button>
                </div>
            </div>
        </form>

        <ModalRekening
        show={showModal}
        onClose={handleCloseModal}
        onSelectValue={handleSelectValue}
        type={currentField}
      />
    </div>
  );
}

export default Rekening;