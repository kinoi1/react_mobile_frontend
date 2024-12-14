
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const listProvider = ["DANA","SHOPEE","OVO","GOPAY"];
const listDaftar   = ['10.000','20.000','50.000','100.000'];

function TarikSaldo(){
    const baseUrl = process.env.REACT_APP_BASE_URL;
    const [formData, setFormData] = useState({
        jenis: '',
        provider: '',
        daftar: '',
        nohp: '',
    })

    const [isExpanded, setIsExpanded] = useState(false);
    const [isExpandedProduct, setIsExpandedProduct] = useState(false);
    const [isExpandedProvider, setIsExpandedProvider] = useState(false);
    const [isExpandedDaftar, setIsExpandedDaftar] = useState(false);



    const toggleExpandProvider = () => {
      setIsExpandedProvider((prev) => !prev);
    };
    const toggleExpandProduct = () => {
        setIsExpandedProduct((prev) => !prev);
    };
    const toggleExpandDaftar = () => {
        setIsExpandedDaftar((prev) => !prev);
    };

    const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
        ...formData, // Salin semua properti formData yang sudah ada
        [name]: value, // Perbarui properti yang sesuai dengan name input
    });
    };
    const handleSelect = (value,name) => {
        formData[name] = value;
        
    };

    return (

        <div>
            <div className="position-fixed z-index-2 w-full header-setting bg-white shadow-small">
                <div className="col-12 pt-12">
                    <div>
                        <Link to={`${baseUrl}/history`}> 
                        <i className="fa fa-angle-left"></i> 
                        <span className="text-black pl-2">Payout otomatis</span> </Link>
                    </div>
                </div>
            </div>
            <div className="bg-white d-flex flex-column container pt-24 shadow-small">
                <div className="pb-4">
                    <span className="text-placeholder opacity-50 text-xs font-normal">Saldo Tersedia</span>
                    <span className="text-blue text-lg font-semibold d-flex flex-row align-items-center">Rp. 150.000 <i className="icon-saldo ml-2 bg-saldo-white opacity-50"></i></span>
                </div>
            </div>
            <div className="bg-white d-flex flex-column container mb-24 pb-16">
                <div className="d-flex flex-row bg-purple align-items-center p-2 mb-4 rounded-small mt-2"> 
                    <div className="p-2 bg-important rounded-small mr-3">
                        <img src={`${baseUrl}/img/settings/Time.png`} height={'30px'}></img>
                    </div>
                    <span className="text-white text-xs-small letter-spacing-1">
                        Komplain maks 1x24 jam setelah transaksi sukses, lebih dari itu maka dianggap transaksi selesai
                    </span>
                </div>
                <div className="d-flex flex-row bg-blue align-items-center p-2 rounded-small"> 
                    <div className="p-2 bg-important rounded-small mr-3">
                        <img src={`${baseUrl}/img/settings/Time.png`} height={'30px'}></img>
                    </div>
                    <span className="text-white text-xs-small letter-spacing-1">
                        Cut off transaksi di jam 09:00 - 06:00 WIB. Di pukul tersebut tidak bisa melakukan transaksi
                    </span>
                </div>

                <label className="mt-4">
                    Jenis produk
                </label>

                <motion.div
                    className="border-0"
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        borderRadius: "8px",
                        overflow: "hidden",
                        cursor: "pointer",
                        backgroundColor: "#fff",
                    }}
                    onClick={toggleExpandProduct}
                >
                    {/* Select Trigger */}
                    <div className="d-flex flex-row">
                    <select
                        className="form-control input-gray border-0 input-select select-no-icon"
                        id="jenis"
                        name="jenis"
                        style={{height:'44px',backgroundColor:'#F5F5F5',color: "#A2A2A2"}}
                        value={formData.jenis}
                        readOnly
                        >
                            {formData.jenis && (<option disabled> {formData.jenis}</option>)}
                    </select>
                        <i style={{backgroundColor: '#F5F5F5'}} className="fa fa-angle-right d-flex align-items-center text-blue pr-2"></i>
                    </div>
                    {/* Options (Animated) */}
                    <AnimatePresence>
                        {isExpandedProduct && (
                        <motion.div
                            className=""
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{
                            height: { duration: 0.3, ease: "easeIn" },
                            opacity: { duration: 0.3, ease: "easeOut" },
                            // height: { duration: 0.35, ease: [0.7, 0.2, 0.6, 1.8] },
                            // opacity: { duration: 0.45, ease: [0.7, 0.4, 0.4, 1.4] },
                            
                            }}
                            style={{
                            overflow: "hidden",
                            backgroundColor: "#F5F5F5",
                            color: "#525151",
                            }}
                        >
                            <div style={{ padding: "10px" }} onClick={() => handleSelect('E-wallet','jenis')}>E-wallet</div>
                            <div style={{ padding: "10px" }} onClick={() => handleSelect('Pulsa','jenis')}>Pulsa</div>
                        </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>

                <label className="mt-4">
                    Provider Produk
                </label>

                <motion.div
                    className="border-0"
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        borderRadius: "8px",
                        overflow: "hidden",
                        cursor: "pointer",
                        backgroundColor: "#fff",
                    }}
                    onClick={toggleExpandProvider}
                >
                    {/* Select Trigger */}
                    <div className="d-flex flex-row">
                    <select
                        className="form-control input-gray border-0 input-select select-no-icon"
                        id="provider"
                        name="provider"
                        style={{height:'44px',backgroundColor:'#F5F5F5',color: "#A2A2A2"}}
                        value={formData.provider || ""}
                        readOnly
                        >
                            {formData.provider && (<option disabled> {formData.provider}</option>)}
                    </select>
                        <i style={{backgroundColor: '#F5F5F5'}} className="fa fa-angle-right d-flex align-items-center text-blue pr-2"></i>
                    </div>

                    {/* Options (Animated) */}
                    <AnimatePresence>
                        {isExpandedProvider && (
                        <motion.div
                            className=""
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{
                            height: { duration: 0.3, ease: "easeIn" },
                            opacity: { duration: 0.3, ease: "easeOut" },
                            // height: { duration: 0.35, ease: [0.7, 0.2, 0.6, 1.8] },
                            // opacity: { duration: 0.45, ease: [0.7, 0.4, 0.4, 1.4] },
                            
                            }}
                            style={{
                            overflow: "hidden",
                            backgroundColor: "#F5F5F5",
                            color: "#525151",
                            }}
                        >
                            {listProvider.map((item, index) => (
                            <div key={index} style={{ padding: "10px" }} onClick={() => handleSelect(item,'provider')}>{item}</div>
                            ))}
                        </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>

                <label className="mt-4">
                    Daftar Produk
                </label>

                <motion.div
                    className="border-0"
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        borderRadius: "8px",
                        overflow: "hidden",
                        cursor: "pointer",
                        backgroundColor: "#fff",
                    }}
                    onClick={(e) => {
                        e.stopPropagation(); // Hentikan bubbling ke elemen anak
                        toggleExpandDaftar();
                    }}
                >
                    {/* Select Trigger */}
                    <div className="d-flex flex-row">
                    <select
                        className="form-control input-gray border-0 input-select select-no-icon"
                        id="daftar"
                        name="daftar"
                        style={{height:'44px',backgroundColor:'#F5F5F5',color: "#A2A2A2"}}
                        value={formData.daftar} 
                        readOnly
                        >
                            {formData.daftar && (<option> {formData.provider + ' ' + formData.daftar}</option>)}
                    </select>
                        <i style={{backgroundColor: '#F5F5F5'}} className="fa fa-angle-right d-flex align-items-center text-blue pr-2"></i>
                    </div>

                    {/* Options (Animated) */}
                    <AnimatePresence>
                        {isExpandedDaftar && (
                        <motion.div
                            className=""
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{
                            height: { duration: 0.3, ease: "easeIn" },
                            opacity: { duration: 0.3, ease: "easeOut" },
                            // height: { duration: 0.35, ease: [0.7, 0.2, 0.6, 1.8] },
                            // opacity: { duration: 0.45, ease: [0.7, 0.4, 0.4, 1.4] },
                            
                            }}
                            style={{
                            overflow: "hidden",
                            backgroundColor: "#F5F5F5",
                            color: "#525151",
                            }}
                        >
                            {listDaftar.map((item,index) => (
                                <div key={index} style={{ padding: "10px" }}
                                onClick={() =>  handleSelect(item,'daftar')}
                                >{formData.provider+' '+item}</div>
                            ))}
                        </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>

                <label className="mt-4">
                    Nomor Tujuan (isi dengan tujuan)
                </label>

                <div className="d-flex flex-row bg-blue align-items-center p-2 mb-4 rounded-small mt-2"> 
                    <div className="p-2 bg-important rounded-small mr-3">
                        <img src={`${baseUrl}/img/settings/Time.png`} height={'25px'}></img>
                    </div>
                    <span className="text-white text-xs-small letter-spacing-1">
                        Pastikan nomor tujuan benar, kesalahan pengisian nomor tujuan diluar tanggung jawab kami
                    </span>
                </div>
                <div>
                    <input
                        type="text"
                        className="form-control input-gray border-0"
                        id="nohp"
                        name="nohp"
                        placeholder="081234567890"
                        value={formData.nohp}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <div className="root">
                <div className="position-fixed container pt-2 pb-4 bg-white bottom-0">
                    <button
                    type="submit"
                    className="btn btn-primary col-12 tarik-saldo letter-spacing-1 text-xs"
                    >
                    Request Penarikan Otomatis
                    </button>
                </div>
            </div>
        </div>
    );
}

export default TarikSaldo;