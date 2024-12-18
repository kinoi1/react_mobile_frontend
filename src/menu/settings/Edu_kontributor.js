import HeaderSetting from "./components/Header";
import React from "react";
import { motion } from "framer-motion";
import "../../assets/Slider.css";

const baseUrl = process.env.REACT_APP_BASE_URL;


function EduKontributor(){
    const sliderData = ["Tarik saldo", "Referral", "Leader", "Pekerjaan Khusus", "Akun Sosmed"];

    const listTips = [
        {
            name:'Cara unggah pekerjaan yang baik dan benar anti ditolak admin',
            category:'tips & trick',
            lastUpdate:'23 sept'
        },
        {
            name:'lorem ipsum',
            category:'tips & trick',
            lastUpdate:'23 sept'
        },
        {
            name:'lorem ipsum',
            category:'tips & trick',
            lastUpdate:'23 sept'
        },
        {
            name:'lorem ipsum',
            category:'tips & trick',
            lastUpdate:'23 sept'
        },
        {
            name:'lorem ipsum',
            category:'tips & trick',
            lastUpdate:'23 sept'
        }
    ]

    const listTipsLast = [
        {
            name:'Cara mengunggah pekerjaan',
            category:'tips & trick',
        },
        {
            name:'cara capture anti ditolak admin',
            category:'tips & trick',
        },
        {
            name:'lorem ipsum',
            category:'tips & trick',
        },
        {
            name:'lorem ipsum',
            category:'tips & trick',
        },
        {
            name:'lorem ipsum',
            category:'tips & trick',
        }
    ]

    return(
        <div className="bg-white overflow-hidden">
            <HeaderSetting label="Pusat edukasi kontributor" />
            <div className="container">
                <div className="pt-24 d-flex justify-content-center">
                <img
                    className="d-block pt-2 pb-4"
                    src={`${baseUrl}/img/Logo-indobuzz.png`}
                    alt="indobuzz"
                    width='100'
                    

                />
                </div>
                <div className="input-group border-0 pb-2">
                    <span className="btn fa fa-search input-gray d-flex align-items-center"
                    style={{color:'#979797'}}>
                    </span>
                    <input
                        type="text"
                        className="form-control border-0 input-gray placeholder-grey"
                        id="copyInput"
                        placeholder=""
                        
                    />
                    <div className="input-group-append d-flex align-items-center border-0 input-gray">
                        
                    </div>
                </div>

                <motion.div
                    className="slider pb-4 overflow-hidden"
                    drag="x"
                    dragConstraints={{ left: -200, right: 0 }} // Batas drag
                >
                    {sliderData.map((item, index) => (
                    <motion.div className="slider-item" key={index}>
                        {item}
                    </motion.div>
                    ))}
                </motion.div>

                <div className="pb-2">
                    <span>
                        Tips & trick
                    </span>
                </div>

                <motion.div
                    className="slider pb-4"
                    drag="x"
                    dragConstraints={{ left: -900, right: 0 }} // Batas drag
                >
                    {listTips.map((item, index) => (
                    <motion.div className="slider-item rounded-0 border-0 d-flex align-items-start" key={index}
                    style={{maxWidth:'250px'}}
                    >
                        <div className="d-flex flex-column"
                        style={{maxWidth:'250px'}}>
                            <div className="image-tips input-gray">

                            </div>
                            <div className="white-space-breakSpaces pt-2">
                                {item.name}
                            </div>
                            <div className="pt-2">
                                {item.category} &middot; {item.lastUpdate}
                            </div>
                        </div>
                    </motion.div>
                    ))}
                </motion.div>
                <div className="text-xsm pb-3">
                    Yuk, tonton video tips & trik jadi kontributor terbaik terbaik
                </div>
                <div className="bg-slate-200 mb-3"
                 style={{height:'190px'}}
                >
                    
                </div>
                <div className="text-xsm pb-3">
                    Cara memaksimalkan referral dan mendapatkan cuan
                </div>
                <div className="text-xs">
                    <i className="fa fa-clock"></i> 1:42 &middot; Tips & trick &middot; Diperbarui 23 Sept
                </div>
                <div className="text-xs pt-3 pb-3">
                    Ini dia! tips ampuh yang bisa kamu coba untuk bisa mendapatkan persentase 10% dari referral konsisten tiap bulan. Dapatkan insight lainnya dengan tonton tips ini.
                </div>

                <motion.div
                    className="slider pb-24"
                    drag="x"
                    dragConstraints={{ left: -200, right: 0 }} // Batas drag
                >
                    {listTipsLast.map((item, index) => (
                    <motion.div className="slider-item rounded-0 border-0 d-flex align-items-start p-0" key={index}>
                        <div className="d-flex flex-column"
                        style={{maxWidth:'150px'}}>
                            <div className="image-tips-last input-gray">

                            </div>
                            <div className="white-space-breakSpaces pt-2">
                                {item.name}
                            </div>
                            <div className="pt-2">
                                {item.category}
                            </div>
                        </div>
                    </motion.div>
                    ))}
                </motion.div>

                
            </div>
            <div className="container position-fixed z-index-2 bottom-0 d-flex justify-content-center bg-white pb-4">
                <button className="col-12 btn bg-blue text-white text-xs">
                   <span className="d-flex flex-row justify-content-center">
                    <i className="icon-cs"></i> Hubungi CS
                   </span>
                </button>
            </div>
        </div>
    )
}
export default EduKontributor;