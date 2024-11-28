import BottomBar from "../bottom_bar";
import '../assets/riwayat.css';
import React, { useState } from "react";

function Riwayat() {
    const baseUrl = process.env.REACT_APP_BASE_URL;
    const [activeTab, setActiveTab] = useState("tab1"); // State untuk melacak tab aktif

    const listpekerjaan = [
        { id: "1", btn: "bg-blue",btnText:"pending", class: "text-blue",tanggal:"5 Nov 2024", nama: "Youtube", nominal: "Rp.500", desc:'Like Posting', imgclass:"icon-pending" },
        { id: "2", btn: "bg-money",btnText:"Sukses", class: "text-money", tanggal:"2 Nov 2024", nama: "Youtube", nominal: "+ Rp.1000", desc:'Subscribe Youtube', imgclass:"icon-sukses" },
        { id: "1", btn: "bg-red",btnText:"Dilaporkan", class: "text-red",tanggal:"5 Nov 2024", nama: "Youtube", nominal: "- Rp.500", desc:' Komentar Youtube', imgclass:"icon-report" },
        { id: "1", btn: "bg-blue",btnText:"pending", class: "text-blue",tanggal:"5 Nov 2024", nama: "Youtube", nominal: "Rp.500", desc:'Like Posting', imgclass:"icon-pending" },
        { id: "2", btn: "bg-money",btnText:"Sukses", class: "text-money", tanggal:"2 Nov 2024", nama: "Youtube", nominal: "+ Rp.1000", desc:'Subscribe Youtube', imgclass:"icon-sukses" },
        { id: "1", btn: "bg-red",btnText:"Dilaporkan", class: "text-red",tanggal:"5 Nov 2024", nama: "Youtube", nominal: "- Rp.500", desc:' Komentar Youtube', imgclass:"icon-report" },
        { id: "1", btn: "bg-blue",btnText:"pending", class: "text-blue",tanggal:"5 Nov 2024", nama: "Youtube", nominal: "Rp.500", desc:'Like Posting', imgclass:"icon-pending" },
        { id: "2", btn: "bg-money",btnText:"Sukses", class: "text-money", tanggal:"2 Nov 2024", nama: "Youtube", nominal: "+ Rp.1000", desc:'Subscribe Youtube', imgclass:"icon-sukses" },
        { id: "1", btn: "bg-red",btnText:"Dilaporkan", class: "text-red",tanggal:"5 Nov 2024", nama: "Youtube", nominal: "- Rp.500", desc:' Komentar Youtube', imgclass:"icon-report" },
        { id: "1", btn: "bg-blue",btnText:"pending", class: "text-blue",tanggal:"5 Nov 2024", nama: "Youtube", nominal: "Rp.500", desc:'Like Posting', imgclass:"icon-pending" },
        { id: "2", btn: "bg-money",btnText:"Sukses", class: "text-money", tanggal:"2 Nov 2024", nama: "Youtube", nominal: "+ Rp.1000", desc:'Subscribe Youtube', imgclass:"icon-sukses" },
        { id: "1", btn: "bg-red",btnText:"Dilaporkan", class: "text-red",tanggal:"5 Nov 2024", nama: "Youtube", nominal: "- Rp.500", desc:' Komentar Youtube', imgclass:"icon-report" },
        { id: "1", btn: "bg-blue",btnText:"pending", class: "text-blue",tanggal:"5 Nov 2024", nama: "Youtube", nominal: "Rp.500", desc:'Like Posting', imgclass:"icon-pending" },
        { id: "2", btn: "bg-money",btnText:"Sukses", class: "text-money", tanggal:"2 Nov 2024", nama: "Youtube", nominal: "+ Rp.1000", desc:'Subscribe Youtube', imgclass:"icon-sukses" },
        { id: "1", btn: "bg-red",btnText:"Dilaporkan", class: "text-red",tanggal:"5 Nov 2024", nama: "Youtube", nominal: "- Rp.500", desc:' Komentar Youtube', imgclass:"icon-report" },
        { id: "1", btn: "bg-blue",btnText:"pending", class: "text-blue",tanggal:"5 Nov 2024", nama: "Youtube", nominal: "Rp.500", desc:'Like Posting', imgclass:"icon-pending" },
        { id: "2", btn: "bg-money",btnText:"Sukses", class: "text-money", tanggal:"2 Nov 2024", nama: "Youtube", nominal: "+ Rp.1000", desc:'Subscribe Youtube', imgclass:"icon-sukses" },
        { id: "1", btn: "bg-red",btnText:"Dilaporkan", class: "text-red",tanggal:"5 Nov 2024", nama: "Youtube", nominal: "- Rp.500", desc:' Komentar Youtube', imgclass:"icon-report" },
      ];

      const listkhusus = [
        { id: "1", btn: "bg-blue",btnText:"pending", class: "text-blue",tanggal:"5 Nov 2024", nama: "Youtube", nominal: "Rp.500", desc:'Like Posting', imgclass:"icon-pending" },
        { id: "1", btn: "bg-red",btnText:"Dilaporkan", class: "text-red",tanggal:"5 Nov 2024", nama: "Youtube", nominal: "- Rp.500", desc:' Komentar Youtube', imgclass:"icon-report" },
        { id: "2", btn: "bg-money",btnText:"Sukses", class: "text-money", tanggal:"2 Nov 2024", nama: "Youtube", nominal: "+ Rp.1000", desc:'Subscribe Youtube', imgclass:"icon-sukses" },
        
      ];

    return (

        <div className="bg-slate-200 rootwork">
            <section className="bg-white daftar-pekerjaan position-fixed w-full z-index-2 top-0 pt-8">
                <div className="container">
                    <div className="row justify-content-center">
                        <span>
                            Riwayat Pekerjaan
                        </span>
                    </div>
                </div>
                <ul className="nav nav-tabs col-12 pr-0 pt-4">
                    <li className="nav-item col-6 p-0">
                    <button
                        className={`nav-link text-xs col-12 ${activeTab === "tab1" ? "active text-blue" : "text-grey"}`}
                        onClick={() => setActiveTab("tab1")}
                    >
                        Pekerjaan
                    </button>
                    </li>
                    <li className="nav-item col-6 p-0">
                    <button
                        className={`nav-link text-xs text-grey col-12 ${activeTab === "tab2" ? "active text-blue" : " text-grey"}`}
                        onClick={() => setActiveTab("tab2")}
                    >
                        Pekerjaan Khusus
                    </button>
                    </li>
                </ul>
            </section>

        

        {/* Tab Content */}
        <div className="tab-content mt-28 mb-12">
            <div
            className={`tab-pane fade ${activeTab === "tab1" ? "show active" : ""}`}
            >
                <div className="container bg-white pt-2 pb-2">
                    <div className="row">
                    {listpekerjaan.map((item, index) => (
                        <div className="col-12">
                            <div className="col-12 py-3">
                                <div className="row">
                                    <div className="d-flex flex-row col-8 p-0">
                                    <div className="bg-slate-200 border-icon-saldo d-flex justify-content-center align-items-center rounded-03"><span className={`${item.imgclass}`}></span></div>
                                    <div className="col-8 ml-2 d-flex vertical-align-end">
                                        <div className="row">
                                            <div className="col-12 text-xs pl-0 text-dark-grey">{item.desc}</div>
                                            <div className="col-12 text-xs-small pl-0 d-flex flex-row">
                                                <img class="img-11 mr-03" src="/react_mobile_frontend/img/work-icon/Calendar-icon.svg" alt="indobuzz"></img>
                                                <span className="text-grey leading-none d-flex align-items-center">{item.tanggal}</span>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                    <div className={`col-4 d-flex flex-column align-items-end justify-content-end text-xs pr-0 ${item.class}`}>
                                        <span>{item.nominal}</span>
                                        <span className={`btn ${item.btn} text-white text-small rounded-3`}>
                                            {item.btnText}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    </div>
                </div>
            </div>
            <div
            className={`tab-pane fade ${activeTab === "tab2" ? "show active" : ""}`}
            >
                <div className="container bg-white pt-2 pb-2">
                    <div className="row">
                    {listkhusus.map((item, index) => (
                        <div className="col-12">
                            <div className="col-12 py-3">
                                <div className="row">
                                    <div className="d-flex flex-row col-8 p-0">
                                    <div className="bg-slate-200 border-icon-saldo d-flex justify-content-center align-items-center rounded-03"><span className={`${item.imgclass}`}></span></div>
                                    <div className="col-8 ml-2 d-flex vertical-align-end">
                                        <div className="row">
                                            <div className="col-12 text-xs pl-0 text-dark-grey">{item.desc}</div>
                                            <div className="col-12 text-xs-small pl-0 d-flex flex-row">
                                                <img class="img-11 mr-03" src="/react_mobile_frontend/img/work-icon/Calendar-icon.svg" alt="indobuzz"></img>
                                                <span className="text-grey leading-none d-flex align-items-center">{item.tanggal}</span>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                    <div className={`col-4 d-flex flex-column align-items-end justify-content-end text-xs pr-0 ${item.class}`}>
                                        <span>{item.nominal}</span>
                                        <span className={`btn ${item.btn} text-white text-small rounded-3`}>
                                            {item.btnText}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    </div>
                </div>
            </div>
        </div>

            <BottomBar />
        </div>
    )
}

export default Riwayat;