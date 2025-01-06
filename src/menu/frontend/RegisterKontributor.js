import React, { useState } from "react";
import ModalProfile from "../../modal/ModalProfile";

const baseUrl = process.env.REACT_APP_BASE_URL;

function RegisterKontributor(){
    const [errors, setErrors] = useState({});
    const [disabled, setDisabled] = useState('disabled');
    const [formData, setFormData] = useState({
        nama: "",
        username: "",
        nowa: "",
        city: "",
        gender: "",
        email: "",
        password: "",
        confirmPassword: "",
        referral: "",
      });    
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
      const handleSelectValue = (value) => {
        formData[currentField] = value;
        setShowModal(false);
      };

      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData, // Salin semua properti formData yang sudah ada
          [name]: value, // Perbarui properti yang sesuai dengan name input
        });
        toggleDisabled();
      };

      const toggleDisabled = () => {
        const errors = {};
        for (const [key, value] of Object.entries(formData)) {
            if (value.trim() === "") {
                errors[key] = key+" tidak boleh kosong";
                console.log(errors);
            }else if(key == 'password' || key == 'confirmPassword'){
                if(formData.password != formData.confirmPassword){
                    errors[key] = "Password tidak match";
                }
            }

        }
        if (Object.keys(errors).length > 0) {
            setErrors(errors); // Simpan error untuk ditampilkan
          } else {
            setErrors({});
            setDisabled((prevType) => (prevType === "disabled" ? "" : "disabled"));

            // Proses submit di sini
          }
      };
    return(
        <>
            <div className="bg-white container pb-8" style={{height: '65%',overflowY: 'scroll',scrollbarWidth:'none'}}>
                <div className="d-flex flex-column align-items-center gap-4 pb-4">
                    <img
                        className="mt-8 mb-8"
                        src={`${baseUrl}/img/Logo-indobuzz.png`}
                        alt="indobuzz"
                        width='86'
                        height='21'

                    />
                    <div className="font-semibold text-xsm">
                        Register <span className="text-blue">KONTRIBUTOR</span>
                    </div>
                    <div className="text-7b text-xs text-center px-4">
                    Pastikan kamu memasukan data yang valid untuk mendaftar sebagai kontributor.
                    </div>
                </div>

                <form className="">
                    <div className="d-flex flex-column">
                        <div className="form-group">
                            <label className="text-xs">Nama</label>
                            <input 
                                className="form-control border-register"
                                name="nama"
                                value={formData.nama}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label className="text-xs">username</label>
                            <input 
                                className="form-control border-register"
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label className="text-xs">Nomor Whatsapp (Aktif)</label>
                            <input 
                                className="form-control border-register"
                                name="nowa"
                                value={formData.nowa}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label className="text-xs">Email</label>
                            <input 
                                className="form-control border-register"
                                name="email"
                                value={formData.email}
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
                                {formData.gender && (<option> {formData.gender}</option>)}

                            </select>
                            <i className="fa fa-angle-right d-flex align-items-center bg-select-form-control text-blue"></i>
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="text-xs">Password</label>
                            <input 
                                className="form-control border-register text-xs"
                                placeholder="Masukan password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label className="text-xs">Konfirmasi Password</label>
                            <input 
                                className="form-control border-register text-xs"
                                placeholder="Konfirmasi password"
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label className="text-xs">Kode Referral(wajib)</label>
                            <input 
                                className="form-control border-register"
                                name="referral"
                                value={formData.referral}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="d-flex flex-row card-important align-items-center p-2 rounded-small mb-3"> 
                            <div className="p-1 bg-important rounded-small mr-3">
                                <span className="icon-important"></span>
                            </div>
                            <span className="text-blue text-attention">
                                Jika belum punya kode referral, dapatkan kode referral dengan 
                                <u className="font-medium"> klik halaman ini</u>
                            </span>
                        </div>
                    </div>
                </form>
            </div>

            <div className="container position-fixed z-index-2 bottom-0 bg-white">
                <div className="d-flex flex-column">
                    <button
                        type="submit"
                        className="btn btn-primary profile-submit h-45px text-xs my-2"
                        disabled={disabled}
                    >
                    Daftar
                    </button>

                    <div className="d-flex flex-row">
                        <input
                            type="checkbox"
                            className="form-check-input ml-0"
                            style={{position: 'unset'}}
                            onClick={toggleDisabled}
                        />
                        <span className="text-xs ml-3 text-96">
                            Saya sudah membaca dan menyetujui <span className="text-blue">Ketentuan Layanan ini</span>

                        </span>
                    </div>
                </div>
                
            </div>

            <ModalProfile
                show={showModal}
                onClose={handleCloseModal}
                onSelectValue={handleSelectValue}
                type={currentField}
            />
        </>
    )
}

export default RegisterKontributor;