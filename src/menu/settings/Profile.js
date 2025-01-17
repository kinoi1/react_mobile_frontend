import React, { useState } from "react";
import HeaderSetting from "./components/Header";
import { motion, AnimatePresence } from "framer-motion";
import ModalProfile from "../../modal/ModalProfile";

const Profile = ({ value }) => {
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    username: "",
    nohp: "",
    gender:"",
    usia:"",
    city: "",
    profesi: "",
    hobby:"",
    married: "",
    pet: "",
  }); // Menyimpan data hanya saat submit
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    username: "",
    nohp: "",
    gender:"",
    usia:"",
    city: "",
    profesi: "",
    hobby:"",
    married: "",
    pet: "",
  });
  const [isOpen, setIsOpen] = useState(true);
  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  const [isOpenWa, setIsOpenWa] = useState(false);
  const toggleCollapseWa = () => {
    setIsOpenWa(!isOpenWa);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData, // Salin semua properti formData yang sudah ada
      [name]: value, // Perbarui properti yang sesuai dengan name input
    });
  };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setInputs({
//       ...inputs,
//       [name]: value,
//     });
//   };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData(inputs); // Menyimpan data input hanya saat submit
    alert("Data berhasil disimpan!");
  };

  const [showModal, setShowModal] = useState(false);
  const [currentField, setCurrentField] = useState("");

  const handleOpenModal = (fieldName) => {
    formData[fieldName] = "";
    setCurrentField(fieldName); // Simpan nama input yang diklik
    setShowModal(true); // Buka modal
  };
  const handleCloseModal = () => {
    setCurrentField(''); // Simpan nama input yang diklik
    setShowModal(false);
  };
//   const handleSelectValue = (value) => {
//     setSelectedValue(value);
//     setShowModal(false); // Tutup modal
//   };

  const handleSelectValue = (value) => {
    formData[currentField] = value;
    setShowModal(false);
  };

  return (
    <div style={{overflowY: 'scroll', height:'750px',scrollbarWidth:'none'}}>
      <HeaderSetting label="Ubah profile" />

      <div className="container pt-24 bg-white w-100 mb-3">
        {/* Trigger Button */}
        <button
          className={`btn col-12 d-flex flex-column justify-content-between align-items-center bg-wa border-0 text-white p-2-5`}
          onClick={toggleCollapseWa}
          aria-expanded={isOpenWa}
        >
          <span className="col-12 d-flex p-0">
            <span className="flex-fill d-flex justify-content-start align-items-center text-xs font-medium p-0">
            <img
              className="mr-2"
              src={`${baseUrl}/img/settings/perhatian.png`}
              alt="indobuzz"
              width="18"
              height="18"
            />
              Verifikasi no Whatsapp kamu!
            </span>
            {isOpenWa ? (
              <i className="fa fa-angle-down flex-fill d-flex justify-content-end align-items-center"></i>
            ) : (
              <i className="fa fa-angle-right d-flex justify-content-end align-items-center"></i>
            )}
          </span>
          {/* Animated Content */}
          <motion.div
            initial={false}
            animate={{ height: isOpenWa ? "auto" : 0 }}
            style={{
              overflow: "hidden",
            }}
            className="bg-wa border-0"
            transition={{ type: "spring", stiffness: 120, damping: 15 }}
          >
            <AnimatePresence>
              {isOpenWa && (
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
                  className="card card-body bg-wa text-white border-0 p-0"
                >
                  <p className="text-align-start m-0 text-xs pt-2 font-normal letter-spacing-03 opacity-80">
                    Silahkan verifikasi akun anda dengan memasukan kode yang telah dikirimkan ke no whatsapp anda.
                    Jika anda tidak menerima kode verifikasi, silahkan klik tombol dibawah ini untuk mengirim kode verifikasi.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </button>

        <div className="form-group pt-4">
            <label htmlFor="otp" className="input-label text-xs">
              Kode OTP
            </label>
            <input
              type="text"
              className="form-control input-gray border-0"
              id="otp"
              name="otp"
              placeholder=""
              
            />
          </div>
          <div className="pt-2 pb-4 bg-white bottom-0">
          <button
              type="submit"
              className="btn btn-primary col-12 profile-submit h-45px text-xs mb-2 card-important text-blue border-0 no-hover"
            >
              Kirim ulang 
            </button>
            <button
              type="submit"
              className="btn btn-primary col-12 profile-submit h-45px text-xs"
            >
              Verifikasi
            </button>
          </div>

      </div>

      <div className="container pt-4 bg-white w-100 ">
        {/* Trigger Button */}
        <button
          className={`btn col-12 d-flex flex-column justify-content-between align-items-center bg-purple border-0 text-white p-2-5 gap-5px`}
          onClick={toggleCollapse}
          aria-expanded={isOpen}
        >
          <span className="col-12 d-flex p-0">
            <span className="flex-fill d-flex justify-content-start align-items-center text-xs font-medium p-0">
            <img
              className="mr-2"
              src={`${baseUrl}/img/settings/perhatian.png`}
              alt="indobuzz"
              width="18"
              height="18"
            />
              Baca ini dulu!
            </span>
            {isOpen ? (
              <i className="fa fa-angle-down flex-fill d-flex justify-content-end align-items-center"></i>
            ) : (
              <i className="fa fa-angle-right d-flex justify-content-end align-items-center"></i>
            )}
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
                  <p className="text-align-start m-0 text-xs pt-2 font-normal letter-spacing-03 opacity-80">
                    Pengisian profil ini untuk tujuan pekerjaan dari brand yang
                    berkaitan dengan hal yang spesifik, seperti pekerjaan yang
                    membutuhkan 100 orang ibu-ibu yang memiliki balita untuk
                    membuat konten soal susu balita yang di pakai, atau butuh
                    100 orang yang memiliki hewan peliharaan untuk membuat
                    konten dengan hewan peliharaannya, dll.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </button>
      </div>
      <form onSubmit={handleSubmit} className="bg-white pt-4">
        <div className="container pb-24">
          {/* Name Field */}
          <div className="form-group">
            <label htmlFor="name" className="input-label text-xs">
              Nama
            </label>
            <input
              type="text"
              className="form-control input-gray border-0"
              id="name"
              name="name"
              placeholder=""
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          {/* Email Field */}
          <div className="form-group">
            <label htmlFor="username" className="input-label text-xs">
              Username
            </label>
            <input
              type="text"
              className="form-control input-gray border-0"
              id="username"
              name="username"
              placeholder=""
              value={formData.username}
              onChange={handleChange}
            />
          </div>

          {/* Password Field */}
          <div className="form-group">
            <div className="d-flex flex-row mb-2">
              <label htmlFor="password" className="input-label text-xs flex-fill mb-0">
                Nomor Handphone
              </label>
              <div className="p-1 px-2 text-xs-small text-white rounded-3" style={{backgroundColor: '#4EBA2A'}}>Terverifikasi</div>
            </div>
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
            <label htmlFor="city" className="input-label text-xs">
              Kota
            </label>
            <div className="d-flex flex-row">
              <input
                type="text"
                className="form-control input-gray text-xs border-0 input-select"
                id="city"
                name="city"
                value={formData.city}
                onClick={() => handleOpenModal("city")}
                readOnly
              ></input>
              <i className="fa fa-angle-right d-flex align-items-center bg-select-form-control text-blue"></i>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="gender" className="input-label text-xs">
              Gender
            </label>
            <div className="d-flex flex-row">
            <select
              className="form-control input-gray text-xs border-0 input-select select-no-icon"
              id="gender"
              name="gender"
              value={formData.gender}
              onClick={() => handleOpenModal("gender")}
              readOnly
            >
                {formData.gender && (<option selected> {formData.gender}</option>)}

            </select>
            <i className="fa fa-angle-right d-flex align-items-center bg-select-form-control text-blue"></i>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="email" className="input-label text-xs">
              Email
            </label>
            <input
              type="text"
              className="form-control input-gray border-0"
              id="email"
              name="email"
              placeholder=""
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="usia" className="input-label text-xs">
              Usia
            </label>
            <input
              type="text"
              className="form-control input-gray border-0"
              id="usia"
              name="usia"
              placeholder=""
              value={formData.usia}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="profesi" className="input-label text-xs">
              Profesi
            </label>
            <div className="d-flex flex-row">
            <select
              type="text"
              className="form-control input-gray text-xs border-0 input-select select-no-icon"
              id="profesi"
              name="profesi"
              value={formData.profesi}
              onClick={() => handleOpenModal("profesi")}
              readOnly
            >
            </select>
            <i className="fa fa-angle-right d-flex align-items-center bg-select-form-control text-blue"></i>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="hobby" className="input-label text-xs">
              Hobby
            </label>
            <div className="d-flex flex-row">
            <select
              className="form-control input-gray text-xs border-0 input-select select-no-icon"
              id="hobby"
              name="hobby"
              value={formData.hobby}
              onClick={() => handleOpenModal("hobby")}
              readOnly
            >
                {formData.hobby && (<option selected> {formData.hobby}</option>)}
            </select>
            <i className="fa fa-angle-right d-flex align-items-center bg-select-form-control text-blue"></i>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="married" className="input-label text-xs">
              Sudah Menikah?
            </label>
            <div className="d-flex flex-row">
            <select
              className="form-control input-gray text-xs border-0 input-select select-no-icon"
              id="married"
              name="married"
              value={formData.married}
              onClick={() => handleOpenModal("married")}
              readOnly
            >
                {formData.married && (<option selected> {formData.married}</option>)}
            </select>
            <i className="fa fa-angle-right d-flex align-items-center bg-select-form-control text-blue"></i>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="pet" className="input-label text-xs">
              Punya hewan peliharaan?
            </label>
            <div className="d-flex flex-row">
            <select
              type="text"
              className="form-control input-gray text-xs border-0 input-select select-no-icon"
              id="pet"
              name="pet"
              value={formData.pet}
              onClick={() => handleOpenModal("pet")}
              readOnly
            >
                {formData.pet && (<option selected> {formData.pet}</option>)}
            </select>
            <i className="fa fa-angle-right d-flex align-items-center bg-select-form-control text-blue"></i>
            </div>
          </div>

          {/* Submit Button */}
        </div>
        <div className="root">
          <div className="position-fixed container pt-2 pb-4 bg-white bottom-0">
            <button
              type="submit"
              className="btn btn-primary col-12 profile-submit h-45px text-xs"
            >
              Perbaharui Profile
            </button>
          </div>
        </div>
      </form>
      <ModalProfile
        show={showModal}
        onClose={handleCloseModal}
        onSelectValue={handleSelectValue}
        type={currentField}
      />
    </div>
  );
};

export default Profile;
