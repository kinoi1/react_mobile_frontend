import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const baseUrl = process.env.REACT_APP_BASE_URL;
var totalpekerjaan;
function BottomBar({ data = 0, sendDataToParent }) {
    const listWorkData = {
        listwork: [
            { id: "1", icon: "icon-follow", nama: "Youtube", harga: "500" },
            { id: "2", icon: "icon-follow", nama: "Tes Youtube", harga: "500" },
            { id: "3", icon: "icon-follow", nama: "Youtube", harga: "5000" },
            { id: "4", icon: "icon-follow", nama: "Tes Twitter", harga: "5090" },
            { id: "5", icon: "icon-follow", nama: "Youtube", harga: "500" },
            { id: "6", icon: "icon-follow", nama: "Tes Instagram", harga: "5000" },
            { id: "7", icon: "icon-follow", nama: "Youtube", harga: "500" },
            { id: "8", icon: "icon-follow", nama: "Tes Youtube", harga: "500" },
        ],
        listworktrending: [
            { id: "1", icon: "icon-follow", nama: "Youtube", harga: "500" },
            { id: "2", icon: "icon-follow", nama: "Youtube", harga: "500" },
            { id: "3", icon: "icon-follow", nama: "Youtube", harga: "500" },
        ],
        listworkspecial: [
            {
                id: "1",
                icon: "icon-follow",
                nama: "Download, Registrasi & Review",
                harga: "500",
            },
            { id: "2", icon: "icon-follow", nama: "Youtube", harga: "500" },
            { id: "3", icon: "icon-follow", nama: "Youtube", harga: "500" },
        ],
    };

    useEffect(() => {
        if (sendDataToParent) {
            sendDataToParent(listWorkData); // Kirim data ke parent hanya sekali
        }
    }, []); // Pastikan efek ini hanya berjalan sekali setelah komponen dipasang

    const location = useLocation();
    const [activePath, setActivePath] = useState(location.pathname);

    const handleSetActive = (path) => {
      console.log(path);
        setActivePath(path);
    };
    const [totalpekerjaan, setTotalPekerjaan] = useState(false);
    useEffect(() => {
        const total = Object.values(listWorkData).reduce(
            (total, currentArray) => total + currentArray.length,
            0
        );
        if(total === 0){
          setTotalPekerjaan(false)
        }else{
          setTotalPekerjaan(total);
        }

    }, []);
    return (
        <section
            className={`bg-white position-fixed container bottom-0 d-flex ${
                location.pathname === "/pekerjaan" ? "left-0" : ""
            } root-bottom-bar`}
            style={{boxShadow: '0px -5px 20px 0px rgba(0,0,0,0.05)',
              WebkitBoxShadow: '0px -5px 20px 0px rgba(0,0,0,0.05)',
              MozBoxShadow: '0px -5px 20px 0px rgba(0,0,0,0.05)',
            paddingTop: '0.25rem',
          paddingBottom: '0.45rem'}}
        >
            <div className="d-flex flex-row px-3 w-100 justify-content-between">
                <div className='d-flex flex-column justify-content-center align-items-center'>
                    <Link
                        to={`${baseUrl}`}
                        className={`icon-home flex-fill ${
                            activePath === `${baseUrl}` ? "button-bar-active" : ""
                        }`}
                        onClick={() => handleSetActive(`${baseUrl}`)}
                    ></Link>
                    <span className={`text-bottom-bar ${
                            activePath === `${baseUrl}` ? "text-blue" : "text-gray-bottom-bar"
                        }`}>Beranda</span>
                </div>
                <div className="position-relative">
                    
                    <div className='d-flex flex-column align-items-center h-full'>
                    {totalpekerjaan && (
                        <span
                            className="bg-red position-absolute rounded-3 d-flex justify-content-center align-items-center text-white"
                            style={{
                                fontSize: "8px",
                                height: "14px",
                                width: "14px",
                                zIndex: "2",
                                right: "10%",
                            }}
                        >
                            {totalpekerjaan}
                        </span>
                    )}
                      <Link
                          to={`${baseUrl}/pekerjaan`}
                          className={`icon-work flex-fill ${
                              activePath === `${baseUrl}/pekerjaan` ? "button-bar-active" : ""
                          }`}
                          onClick={() => handleSetActive(`${baseUrl}/pekerjaan`)}
                      ></Link>
                      <span className={`text-bottom-bar ${
                              activePath === `${baseUrl}/pekerjaan` ? "text-blue" : "text-gray-bottom-bar"
                          }`}>Pekerjaan</span>
                    </div>
                </div>
                <div className='d-flex flex-column align-items-center'>
                    <Link
                        to={`${baseUrl}/history`}
                        className={`icon-wallet flex-fill ${
                            activePath === `${baseUrl}/history` ? "button-bar-active" : ""
                        }`}
                        onClick={() => handleSetActive(`${baseUrl}/history`)}
                    ></Link>
                    <span className={`text-bottom-bar ${
                              activePath === `${baseUrl}/history` ? "text-blue" : "text-gray-bottom-bar"
                          }`}>Dompet</span>
                </div>
                <div className='d-flex flex-column align-items-center'>
                    <Link
                        to={`${baseUrl}/riwayat-pekerjaan`}
                        className={`icon-riwayat flex-fill ${
                            activePath === `${baseUrl}/riwayat-pekerjaan`
                                ? "button-bar-active"
                                : ""
                        }`}
                        onClick={() => handleSetActive(`${baseUrl}/riwayat-pekerjaan`)}
                    ></Link>
                    <span className={`text-bottom-bar ${
                              activePath === `${baseUrl}/riwayat-pekerjaan` ? "text-blue" : "text-gray-bottom-bar"
                          }`}>Riwayat</span>
                </div>
                <div className='d-flex flex-column align-items-center'>
                    <Link
                        to={`${baseUrl}/settings`}
                        className={`icon-setting flex-fill ${
                            activePath === `${baseUrl}/settings` ? "button-bar-active" : ""
                        }`}
                        onClick={() => handleSetActive(`${baseUrl}/settings`)}
                    ></Link>
                     <span className={`text-bottom-bar ${
                              activePath === `${baseUrl}/settings` ? "text-blue" : "text-gray-bottom-bar"
                          }`}>Setting</span>
                </div>
            </div>
        </section>
    );
}

export default BottomBar;
