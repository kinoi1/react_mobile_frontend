import React, { useState } from "react";

const baseUrl = process.env.REACT_APP_BASE_URL;

function Login(){

    const [passwordType, setPasswordType] = useState("password");

    const togglePasswordVisibility = () => {
      setPasswordType((prevType) => (prevType === "password" ? "text" : "password"));
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
            </div>
            <form className="pt-12">
                <div className="d-flex flex-column gap-4">
                    <div>
                        <label className="text-xs"> Email</label>
                        <input 
                            name="email"
                            className="input-gray form-control text-xs border-0 placeholder-gray"
                            placeholder="Masukan email"
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
                                onChange={togglePasswordVisibility}
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
                        className="btn btn-primary col-12 profile-submit h-45px text-xs mt-16"
                        >
                        Masuk
                    </button>
                    <div className="text-xs text-center text-6d">
                        Belum punya akun? <span className="text-blue">daftar disini</span>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Login;