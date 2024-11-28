import React, { useState } from "react";
import HeaderSetting from "./components/Header";
import { motion, AnimatePresence } from "framer-motion";

function Profile() {
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const [formData, setFormData] = useState({}); // Menyimpan data hanya saat submit
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    nohp: "",
    city:"",
  });
  const [isOpen, setIsOpen] = useState(false);

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
    return (
        <div>

            <HeaderSetting label='Ubah profile' />

    <div className="container pt-24 bg-white w-100 ">
      {/* Trigger Button */}
      <button
        className={`btn col-12 d-flex flex-column justify-content-between align-items-center bg-purple border-0 text-white`}
        onClick={toggleCollapse}
        aria-expanded={isOpen}
      ><span className="col-12 d-flex"><span className="flex-fill d-flex justify-content-start">Perhatian! </span> 
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
              className="card card-body bg-purple text-white border-0"
            >
              <p>
                This is the content inside the collapsible div. It now has a
                bouncy animation when opening and closing.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      </button>

      
    </div>

            <div className="container bg-white">
                <form onSubmit={handleSubmit}>
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
                        <label htmlFor="city" className="input-label text-xs">Nomor </label>
                        <select
                            className="form-control input-gray text-xs"
                            id="city"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                        >
                            <option value="">Pilih</option>
                            <option value="">Subang</option>
                            <option value="">Bandung</option>
                            <option value="">Jakarta</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="gender" className="input-label text-xs">Nomor </label>
                        <select
                            className="form-control input-gray text-xs"
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
                    <button type="submit" className="btn btn-primary">
                    Submit
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Profile;