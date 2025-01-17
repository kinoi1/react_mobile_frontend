import React, { useState } from "react";
import HeaderSetting from "./components/Header"
import { motion, AnimatePresence } from "framer-motion";

const baseUrl = process.env.REACT_APP_BASE_URL;

function Referral(){

    const [isOpen, setIsOpen] = useState(true);
    const toggleCollapse = () => {
      setIsOpen(!isOpen);
    };

    const [inputValue, setInputValue] = useState("12321");

    const handleCopy = () => {
      navigator.clipboard.writeText(inputValue).then(() => {
        alert("Teks berhasil disalin!");
      });
    };

    return (
        <div>
            <HeaderSetting label="Referall Kamu" />
            <div className="container pt-24 bg-white w-100 " style={{overflowY: 'scroll', height:'750px',scrollbarWidth:'none'}}>
                {/* Trigger Button */}
                <button
                className={`btn col-12 d-flex flex-column justify-content-between align-items-center bg-blue border-0 text-white p-2-5 gap-5px`}
                onClick={toggleCollapse}
                aria-expanded={isOpen}
                >
                <span className="col-12 d-flex p-0">
                    <span className="flex-fill d-flex justify-content-start text-xs font-medium p-0">
                    <img
                        className="mr-2"
                        src={`${baseUrl}/img/settings/perhatian.png`}
                        alt="indobuzz"
                        width="18"
                        height="18"
                    />
                    Baca ini dulu!
                    </span>
                    {isOpen ? (
                    <i className="fa fa-angle-down flex-fill d-flex justify-content-end align-items-center"></i>
                    ) : (
                    <i className="fa fa-angle-right d-flex justify-content-end align-items-center"></i>
                    )}
                </span>
                {/* Animated Content */}
                <motion.div
                    initial={false}
                    animate={{ height: isOpen ? "auto" : 0 }}
                    style={{
                    overflow: "hidden",
                    }}
                    className="bg-blue border-0"
                    transition={{ type: "spring", stiffness: 120, damping: 15 }}
                >
                    <AnimatePresence>
                    {isOpen && (
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
                        <p className="text-align-start m-0 text-xs pt-2"
                        style={{fontWeight: '400',opacity: '0.8',letterSpacing: '0.3px'}}>
                        Referral member digunakan untuk mengajak gabung Kontributor, kamu bisa mengajukan sebagai leader setelah mendapat min 10 member dan dapatkan komisi referral 10% dari fee tiap member yang selesai mengerjakan pekerjaan. Sedangkan, referral Advertiser digunakan untuk mengajak gabung Advertiser, kamu akan mendapat komisi 10% apabila Advertiser melakukan transaksi di indobuzz.
                        </p>
                        </motion.div>
                    )}
                    </AnimatePresence>
                </motion.div>
                </button>

                <div className="d-flex flex-row mt-4 justify-content-between align-items-center">
                    <div className="d-flex flex-column input-gray rounded-xl py-3 px-6">
                        <span className="text-blue text-sm d-flex justify-content-center">12443</span>
                        <span className="text-xs text-member"> Member</span>
                    </div>
                    <div className="d-flex flex-column col-8">
                        <span className="text-xs letter-spacing-05 pb-2">
                            Referral Member
                        </span>
                        <div className="input-group">
                            <input
                                type="text"
                                className="form-control boder-sosial-media border-r-0"
                                id="copyInput"
                                style={{backgroundColor: '#fff'}}
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                placeholder=""
                                disabled
                            />
                            <div className="input-group-append d-flex align-items-center border-salin pr-2"
                            style={{borderRadius: '0rem 0.25rem 0.25rem 0rem'}}
                            >
                                <button className="btn icon-salin" 
                                onClick={handleCopy}>
                                
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="form-group">
                    <label className="text-xs pt-4">Referal Adviser</label>
                    <div className="input-group border-0 pb-2">
                        <input
                            type="text"
                            className="form-control border-0 input-gray placeholder-grey"
                            id="copyInput"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            placeholder=""
                            style={{height:'50px'}}
                        />
                        <div className="input-group-append d-flex align-items-center border-0 input-gray pr-2"
                        style={{borderRadius: '0rem 0.25rem 0.25rem 0rem'}}>
                            <button className="btn icon-salin-grey" 
                            onClick={handleCopy}>
                            </button>
                        </div>
                    </div>
                </div>
                <button className="btn bg-blue text-white text-xs rounded-small font-normal" onClick={handleCopy}
                style={{height:'40px'}}
                >
                    Copy Referral
                </button>

            </div>
            
        </div>
    )
}

export default Referral;