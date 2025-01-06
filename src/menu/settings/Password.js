import React from "react";
import HeaderSetting from "./components/Header";

function Password(){

    return (
        <div>
            <HeaderSetting label="Password kamu" />

            <div className="container bg-white pt-24" style={{overflowY: 'scroll', height:'750px',scrollbarWidth:'none'}}>
                <div className="d-flex flex-row card-important align-items-center p-2 rounded-small"> 
                    <div className="p-2 card-important rounded-small mr-3">
                        <span className="icon-important"></span>
                    </div>
                    <span className="text-blue text-attention">
                        Pastikan gunakan kombinasi minimal 8 character & mudah diingat. <span className="underline">hubungi admin</span>
                    </span>
                </div>

                <div className="d-flex flex-column gap-3-5 pt-4 pb-4">
                    <div className="">
                        <label className="text-xs">
                            Password lama
                        </label>
                        <input className="form-control text-xs border-0 input-gray form-password"
                        placeholder="Masukan password lama"></input>
                    </div>
                    <div className="">
                        <label className="text-xs">Password baru</label>
                        <input className="form-control text-xs border-0 input-gray form-password"
                        placeholder="Masukan Password baru"></input>
                    </div>
                    <div className="">
                        <label className="text-xs">
                            Konfirmasi password baru
                        </label>
                        <input className="form-control text-xs border-0 input-gray form-password"
                        placeholder="Konfirmasi password baru"></input>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Password;