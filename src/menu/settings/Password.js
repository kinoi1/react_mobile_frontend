import React from "react";
import HeaderSetting from "./components/Header";

function Password(){

    return (
        <div>
            <HeaderSetting label="Password kamu" />

            <div className="container bg-white pt-24">
                <div className="d-flex flex-row card-important align-items-center p-3"> 
                    <div className="p-2 card-important rounded-small mr-3">
                        <span className="icon-important"></span>
                    </div>
                    <span className="text-blue text-xs-small letter-spacing-1">
                        Pastikan gunakan kombinasi minimal 8 character & mudah diingat. <span className="underline">hubungi admin</span>
                    </span>
                </div>

                <div className="d-flex flex-column gap-2 pt-4 pb-4">
                    <span className="text-xs">
                         Password lama
                    </span>
                    <input className="form-control text-xs-small border-0 bg-gray input-gray"
                    placeholder="Masukan password lama"></input>
                    <span className="text-xs">Password baru</span>
                    <input className="form-control text-xs-small border-0 bg-gray input-gray"
                    placeholder="Masukan Password baru"></input>
                    <span className="text-xs">
                        Konfirmasi password baru
                    </span>
                    <input className="form-control text-xs-small border-0 bg-gray input-gray"
                    placeholder="Konfirmasi password baru"></input>
                </div>
            </div>
        </div>
    )
}

export default Password;