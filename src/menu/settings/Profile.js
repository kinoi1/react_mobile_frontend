import React, { useState } from "react";
import HeaderSetting from "./components/Header";

function Profile() {
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const [formData, setFormData] = useState({}); // Menyimpan data hanya saat submit
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    nohp: "",
    city:"",
  });

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

            <div className="container pt-24 bg-white">
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