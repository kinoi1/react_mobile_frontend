import React, { useState } from "react";
import { Link } from 'react-router-dom';


const baseUrl = process.env.REACT_APP_BASE_URL;
function Verifikasi(){
    const [statusVerif, setStatusVerif] = useState(false);    
    const [alert, setAlert] = useState(false);

    const resendOtp = () => {
        setAlert(true);
    }
    const cekStatus = () => {
        setStatusVerif(true);
    }
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
                    Verifikasi <span className="text-blue">Akun</span>
                </div>
                <div className="text-7b text-xs text-center px-4">
                    Periksa pesan whatsapp anda untuk dapatkan OTP, atau anda bisa kirim ulang kode.
                </div>

                {alert && (
                    <div className="text-xs text-alert px-2-5 rounded-3 bg-alert" style={{color: '#4EBA2A',backgroundColor: '#4EBA2A26'}}>
                        Kode berhasil dikirim ulang
                    </div>
                )}
                {statusVerif && (
                    <div className="text-xs text-alert px-2-5 rounded-3 bg-alert" style={{color: '#4EBA2A',backgroundColor: '#4EBA2A26'}}>
                        Verifikasi berhasil, silahkan login
                    </div>
                )}
            </div>
            <div className="d-flex flex-column pt-8">
                <label className="text-xs">OTP</label>
                <input 
                    name="otp"
                    className="input-gray form-control text-xs border-0 placeholder-gray"
                    placeholder=""
                />

                <button
                    type="submit"
                    className="btn btn-primary profile-submit h-45px text-xs mt-16"
                    onClick={cekStatus}
                    >
                    Masuk
                </button>
                <button
                    type="submit"
                    className="btn btn-primary profile-submit h-45px text-xs mt-3"
                    style={{backgroundColor: '#F98118'}}
                    onClick={resendOtp}
                    >
                    Kirim ulang OTP
                </button>

                <div className="d-flex text-xs justify-content-center pt-4">
                    Sudah punya akun? &nbsp; <Link to={`${baseUrl}/login`} className="text-blue no-hover-underline"> login disini</Link>
                </div>
            </div>
        </div>
    )
}

export default Verifikasi;