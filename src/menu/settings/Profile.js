import React, { useState } from "react";
import HeaderSetting from "./components/Header";
import { motion, AnimatePresence } from "framer-motion";
import ModalProfile from "../../modal/ModalProfile";

const Profile = ({ value }) => {
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const [formData, setFormData] = useState({}); // Menyimpan data hanya saat submit
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    nohp: "",
    city:"",
  });
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData(inputs); // Menyimpan data input hanya saat submit
    console.log("Form Submitted:", inputs);
    alert("Data berhasil disimpan!");
  };


  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false)

  const handleSelectValue = (value) => {
    setSelectedValue(value);
    setShowModal(false); // Tutup modal
  };
    return (
        <div>

            <HeaderSetting label='Ubah profile' />

    <div className="container pt-24 bg-white w-100 ">
      {/* Trigger Button */}
      <button
        className={`btn col-12 d-flex flex-column justify-content-between align-items-center bg-purple border-0 text-white p-2-5`}
        onClick={toggleCollapse}
        aria-expanded={isOpen}
      ><span className="col-12 d-flex p-0"><span className="flex-fill d-flex justify-content-start text-xs font-semibold p-0">Perhatian! </span> 
        {isOpen ? <i className="fa fa-angle-down flex-fill d-flex justify-content-end align-items-center"></i> : <i className="fa fa-angle-right d-flex justify-content-end align-items-center"></i>}
        </span>
        {/* Animated Content */}
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0 }}
        style={{
          overflow: "hidden",
        }}
        className="bg-purple border-0"
        transition={{ type: "spring", stiffness: 120, damping: 15 }}
      >
        <AnimatePresence>
          {isOpen && (
            <motion.div
              key="content"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 12,
              }}
              className="card card-body bg-purple text-white border-0 p-0"
            >
              <p className="text-align-start m-0 text-xs-small">
              Pengisian profil ini untuk tujuan pekerjaan dari brand yang berkaitan dengan hal yang spesifik, seperti pekerjaan yang membutuhkan 100 orang ibu-ibu yang memiliki balita untuk membuat konten soal susu balita yang di pakai, atau butuh 100 orang yang memiliki hewan peliharaan untuk membuat konten dengan hewan peliharaannya, dll.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      </button>

      
    </div>
    <form onSubmit={handleSubmit}>

            <div className="container bg-white pb-8">
                    {/* Name Field */}
                    <div className="form-group">
                    <label htmlFor="name" className="input-label text-xs">Nama</label>
                    <input
                        type="text"
                        className="form-control input-gray border-0"
                        id="name"
                        name="name"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    </div>

                    {/* Email Field */}
                    <div className="form-group">
                    <label htmlFor="username" className="input-label text-xs">Username</label>
                    <input
                        type="text"
                        className="form-control input-gray border-0"
                        id="username"
                        name="username"
                        placeholder=""
                        value={formData.email}
                        onChange={handleChange}
                    />
                    </div>

                    {/* Password Field */}
                    <div className="form-group">
                        <label htmlFor="password" className="input-label text-xs">Nomor Handphone</label>
                        <input
                            type="text"
                            className="form-control input-gray border-0"
                            id="nohp"
                            name="nohp"
                            placeholder=""
                            value={formData.nohp}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="city" className="input-label text-xs">Kota </label>
                        <input
                            type="text"
                            className="form-control input-gray text-xs border-0 input-select"
                            id="city"
                            name="city"
                            value={selectedValue}
                            onClick={handleOpenModal}
                        >
                            
                        </input>
                    </div>

                    <div className="form-group">
                        <label htmlFor="gender" className="input-label text-xs">Nomor </label>
                        <select
                            className="form-control input-gray text-xs border-0 input-select"
                            id="gender"
                            name="gender"
                            value={formData.gender}
                            onChange={handleChange}
                        >
                            <option value="">Pilih</option>
                            <option value="">Laki-laki</option>
                            <option value="">Perempuan</option>
                            <option value="">Non-binary</option>
                            <option> A Car</option>
                        </select>
                    </div>

                    {/* Submit Button */}
                    
                    
                
            </div>
            <div className="root">
                <div className="position-fixed container pt-2 pb-4 bg-white">
                        <button type="submit" className="btn btn-primary col-12 profile-submit">
                        Perbaharui Profile
                        </button>
                    </div>
                </div>
            </form>
            <ModalProfile show={showModal} onClose={handleCloseModal} onSelectValue={handleSelectValue} />

        </div>
    )
}

export default Profile;