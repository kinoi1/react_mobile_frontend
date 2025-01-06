import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const baseUrl = process.env.REACT_APP_BASE_URL;

function Login(){
    const [formData, setFormData] = useState({
        email: "",
        password: "",
      });
    const [alert, setAlert] = useState(false);
    const [passwordType, setPasswordType] = useState("password");

    const togglePasswordVisibility = () => {
      setPasswordType((prevType) => (prevType === "password" ? "text" : "password"));
    };
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
        ...prevData,
        [name]: value,
        }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('cek');
        if (!formData.email || !formData.password) {
            setAlert(true);
            return;
        }else{
            setAlert(false);
            navigate(`${baseUrl}/`); 
        }
      };

    
    return(
        <div className="bg-white container pb-8" style={{minHeight: '800px'}}>
            <div className="d-flex flex-column align-items-center gap-4">
                <img
                    className="mt-8 mb-8"
                    src={`${baseUrl}/img/Logo-indobuzz.png`}
                    alt="indobuzz"
                    width='86'
                    height='21'

                />
                <div className="font-semibold text-xsm">
                    Login <span className="text-blue">KONTRIBUTOR</span>
                </div>
                <div className="text-7b text-xs text-center px-4">
                    Pastikan kamu masukan email & password yang telah terdaftar.
                </div>
                {alert && (
                    <div className="text-xs text-alert px-2-5 rounded-3 bg-alert">
                        Masukan email/password anda
                    </div>
                )}
                
            </div>
            <form className="pt-12" onSubmit={handleSubmit}>
                <div className="d-flex flex-column gap-4">
                    <div>
                        <label className="text-xs"> Email</label>
                        <input 
                            name="email"
                            className="input-gray form-control text-xs border-0 placeholder-gray"
                            placeholder="Masukan email"
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label className="text-xs"> Password</label>
                        <input 
                            id="password"
                            name="password"
                            type={passwordType}
                            className="input-gray form-control text-xs border-0 placeholder-gray"
                            placeholder="Masukan password"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="cloudflare">

                    </div>
                    <div className="d-flex flex-row justify-content-between">
                        <div className="d-flex flex-row form-check">
                            <input
                                type="checkbox"
                                className="form-check-input"
                                id="showPassword"
                                value={formData.email}
                                onChange={(e) => {
                                    togglePasswordVisibility(); // Fungsi utama untuk mengatur state
                                    handleChange(e.target.value); // Fungsi tambahan
                                  }}
                            />
                            <label className="form-check-label text-xs text-6d" htmlFor="showPassword">
                                Show Password
                            </label>
                        </div>

                        <span className="text-xs text-6d">
                            lupa password?
                        </span>
                    </div>
                    <button
                        type="submit"
                        className="btn btn-primary profile-submit h-45px text-xs mt-16"
                        >
                        Masuk
                    </button>
                    <div className="text-xs text-center text-6d">
                        Belum punya akun? <Link to={`${baseUrl}/register-kontributor`} className="text-blue no-hover-underline">daftar disini</Link>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Login;