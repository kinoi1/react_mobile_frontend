import React from "react";
import './App.css';
import './assets/main.css';
import './assets/BottomBar.module.css';
import BottomBar from "./bottom_bar";
import WorkList from "./work-list";

const baseUrl = process.env.REACT_APP_BASE_URL;

function Pekerjaan() {
  return (
    <div className="bg-slate-200 w-full">
    <section className="bg-white daftar-pekerjaan shadow-small">
        <div className="container">
            <div className="row justify-content-center">
                <span>
                    Daftar Pekerjaan
                </span>
            </div>
        </div>
    </section>

    <div className="container py-4 bg-white">
        <div className="row">
            <div className="col-md-12">
                <div className="d-flex flex-row justify-space-between">
                    <div className="text-xs">Pekerjaan Aktif</div>
                    <div className="text-xs bg-green text-white px-2 rounded-3">Kamu punya 1 pekerjaan aktif</div>
                </div>
            </div>
        </div>
    </div>

    <div className="bg-white shadow-small">
        <div className="container">
            <div className="row">
                <div className="col-md-12 d-flex flex-row align-items-center justify-content-between py-2">
                    <div className="d-flex gap-4">
                        <div className="">
                            <img className='work-image-active' src={`${baseUrl}/img/work-icon/Follower-icon.svg`} alt='indobuzz'></img>
                        
                        </div>
                        <div className="">
                            <span className="text-xs"> Follow Tiktok</span>
                        </div>
                    </div>
                    <div className="d-flex gap-5">
                        <div className="p-0 d-flex px-2 py-1 justify-content-center bg-blue rounded-3">
                            <button className="btn text-xs p-0 text-white">Unggah Bukti</button>
                        </div>
                        <div className="bg-red px-2 rounded-3">
                            <button className="btn text-xs p-0 py-1 text-white"> batalkan</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <section className="mt-2 py-4 bg-white">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <span>
                        Pekerjaan Terbaru
                    </span>
                </div>
            </div>
        </div>
    </section>
    <WorkList />
    <BottomBar />
    </div>
  );
}

export default Pekerjaan;
