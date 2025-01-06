import HeaderSetting from "./components/Header";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";


function TambahSosialMedia() {

  const [isOpen, setIsOpen] = useState(false);
  const [display, SetDisplay] = useState('d-none');
  const [selectedValue, setSelectedValue] = useState("");

  const options = ["Twitter", "Facebook", "Instagram", "Youtube","Tiktok","Shopee","All Website (Isi nama kamu", "Gmail"];

  const sosmed = ["Twitter", "Facebook", "Instagram", "Youtube","Tiktok"];

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option) => {
    setSelectedValue(option);
    setIsOpen(false); // Tutup dropdown setelah memilih
    if(sosmed.includes(option)){
        SetDisplay('d-flex');
    }else{
        SetDisplay('d-none');
    }
  };
  const [onOpen, SetOnOpen] = useState(false);
  const toggleCollapse = () => {
    SetOnOpen(!onOpen);
  };

    return(
        <div>
            <HeaderSetting label="Data sosial media" />

            <div className="container bg-white pt-24 pb-24" style={{overflowY: 'scroll', height:'750px',scrollbarWidth:'none'}}>
                <div className="d-flex flex-column gap-4">

                <div className={`${display} flex-row card-important align-items-center p-2 rounded-small`}> 
                    <span className="text-blue text-attention">
                        Anda bisa tambahkan maks 50 akun {selectedValue}
                    </span>
                </div>

                <span className="text-xs">Tambah sosial media</span>

                <div className="position-relative">
                    {/* Input dengan Icon */}
                    <div
                        className="input-group"
                        onClick={toggleDropdown}
                        style={{ cursor: "pointer" }}
                    >
                        <input
                        type="text"
                        className="form-control border-0 input-gray bg-gray text-xs"
                        placeholder="pilih sosial media"
                        value={selectedValue}
                        readOnly
                        style={{color:'#919191',backgroundColor:'#F5F5F5'}}
                        />
                        <div className="input-group-append">
                        <span className="input-group-text bg-gray border-0"
                        style={{backgroundColor:'#F5F5F5'}}
                        >
                            <i
                            className={` text-blue fa ${isOpen ? "fa-angle-down" : "fa-angle-right"}`}
                            ></i>
                        </span>
                        </div>
                    </div>

                    {/* Dropdown List */}
                    {isOpen && (
                        <div
                        className="dropdown-menu show"
                        style={{
                            position: "absolute",
                            top: "100%",
                            left: "0",
                            width: "100%",
                            zIndex: "1050",
                        }}
                        >
                        {options.map((option, index) => (
                            <button
                            key={index}
                            className="dropdown-item text-xs py-2"
                            onClick={() => handleOptionClick(option)}
                            >
                            {option}
                            </button>
                        ))}
                        </div>
                    )}
                    </div>

                    <span className="text-xs">Username</span>
                    <button
                    className={`btn col-12 ${display} flex-column justify-content-between align-items-center bg-blue border-0 text-white p-2-5`}
                    onClick={toggleCollapse}
                    aria-expanded={onOpen}
                    >
                        <span className="col-12 d-flex p-0">
                            <span className="flex-fill d-flex justify-content-start text-xs font-medium p-0">
                            Baca ini dulu!
                            </span>
                            {onOpen ? (
                            <i className="fa fa-angle-down flex-fill d-flex justify-content-end align-items-center"></i>
                            ) : (
                            <i className="fa fa-angle-right d-flex justify-content-end align-items-center"></i>
                            )}
                        </span>
                        {/* Animated Content */}
                        <motion.div
                            initial={false}
                            animate={{ height: onOpen ? "auto" : 0 }}
                            style={{
                            overflow: "hidden",
                            }}
                            className="bg-blue border-0"
                            transition={{ type: "spring", stiffness: 120, damping: 15 }}
                        >
                            <AnimatePresence>
                            {onOpen && (
                                <motion.div
                                key="content"
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 120,
                                    damping: 12,
                                }}
                                className="card card-body bg-blue text-white border-0 p-0"
                                >
                                <p className="text-align-start m-0 text-xs pt-2 opacity-80 font-normal letter-spacing-03">
                                Isi username dengan link akun sosial media yang akan di gunakan. Contoh: https://www.website.com/profile
                                </p>
                                </motion.div>
                            )}
                            </AnimatePresence>
                        </motion.div>
                    </button>
                    <input className="form-control text-xs border-0 bg-gray input-gray"
                    placeholder="username"
                    >
                    </input>
                    <span className="text-xs">Jumlah Follower</span>
                    <input className="form-control text-xs border-0 bg-gray input-gray"
                    placeholder="follower"
                    ></input>
                </div>

            </div>
            <div className="position-fixed container pt-2 pb-4 bg-white bottom-0 shadow-small-t p-0">
                    <div className="col-12">
                        <button
                        type="submit"
                        className="btn btn-primary col-12 profile-submit text-xs h-45px"
                        >
                        Konfirmasi sosial media
                        </button>
                    </div>
                </div>
        </div>
    )
}

export default TambahSosialMedia;