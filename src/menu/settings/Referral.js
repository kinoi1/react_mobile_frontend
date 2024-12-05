import React, { useState } from "react";
import HeaderSetting from "./components/Header"
import { motion, AnimatePresence } from "framer-motion";


function Referral(){

    const [isOpen, setIsOpen] = useState(false);
    const toggleCollapse = () => {
      setIsOpen(!isOpen);
    };

    const [inputValue, setInputValue] = useState("");

    const handleCopy = () => {
      navigator.clipboard.writeText(inputValue).then(() => {
        alert("Teks berhasil disalin!");
      });
    };

    return (
        <div>
            <HeaderSetting label="Referall Kamu" />
            <div className="container pt-24 bg-white w-100 ">
                {/* Trigger Button */}
                <button
                className={`btn col-12 d-flex flex-column justify-content-between align-items-center bg-blue border-0 text-white p-2-5`}
                onClick={toggleCollapse}
                aria-expanded={isOpen}
                >
                <span className="col-12 d-flex p-0">
                    <span className="flex-fill d-flex justify-content-start text-xs font-semibold p-0">
                    Perhatian!
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
                        <p className="text-align-start m-0 text-xs-small">
                        Referral member digunakan untuk mengajak gabung Kontributor, kamu bisa mengajukan sebagai leader setelah mendapat min 10 member dan dapatkan komisi referral 10% dari fee tiap member yang selesai mengerjakan pekerjaan. Sedangkan, referral Advertiser digunakan untuk mengajak gabung Advertiser, kamu akan mendapat komisi 10% apabila Advertiser melakukan transaksi di indobuzz.
                        </p>
                        </motion.div>
                    )}
                    </AnimatePresence>
                </motion.div>
                </button>

                <div className="d-flex flex-row mt-4 justify-content-between align-items-center">
                    <div className="d-flex flex-column input-gray rounded-xl p-4">
                        <span className="text-blue text-lg">12443</span>
                        <span className="text-small text-member letter-spacing-1"> Member</span>
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
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                placeholder="Masukkan teks di sini"
                            />
                            <div className="input-group-append d-flex align-items-center border-salin">
                                <button className="btn icon-salin" onClick={handleCopy}>
                                
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
                        <div className="input-group-append d-flex align-items-center border-0 input-gray">
                            <button className="btn icon-salin-grey" onClick={handleCopy}>
                            </button>
                        </div>
                    </div>
                </div>
                <button className="btn bg-blue text-white text-xs-small letter-spacing-05 rounded-small" onClick={handleCopy}
                style={{height:'40px'}}
                >
                    Copy Referral
                </button>

            </div>
            
        </div>
    )
}

export default Referral;