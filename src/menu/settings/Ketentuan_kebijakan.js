import HeaderSetting from "./components/Header";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";

const baseUrl = process.env.REACT_APP_BASE_URL;

function KetentuanKebijakan(){
    const [isOpen, setIsOpen] = useState(false);
    const toggleCollapse = () => {
        setIsOpen(!isOpen);
      };
    return (
        <div style={{overflowY: 'scroll', height:'750px',scrollbarWidth:'none'}}>
            <HeaderSetting label="Syarat & Ketentuan" />
            <div className="container pt-20 w-100 ">

                <button
                    className={`btn col-12 d-flex flex-column justify-content-between border-0 p-2-5 bg-white mt-2 mb-3`}
                    onClick={toggleCollapse}
                    aria-expanded={isOpen}
                    >
                    <span className="col-12 d-flex p-0">
                        <span className="flex-fill d-flex justify-content-start text-xs p-0">
                        Informasi update!
                        </span>
                        {isOpen ? (
                        <i className="fa fa-angle-down flex-fill d-flex justify-content-end align-items-center"></i>
                        ) : (
                        <i className="fa fa-angle-right d-flex justify-content-end align-items-center"></i>
                        )}
                    </span>
                    <motion.div
                        initial={false}
                        animate={{ height: isOpen ? "auto" : 0 }}
                        style={{
                        overflow: "hidden",
                        }}
                        className="border-0"
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
                                    className="card card-body border-0 p-0"
                                >
                                    <p className="text-align-start m-0 text-xs pt-2">
                                        Tidak ada perubahan syarat & ketentuan
                                    </p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </button>

            </div>

            <div className="container bg-white mt-2 pt-3 d-flex flex-column gap-2 text-ketentuan">
                <h1 className="pb-2" style={{fontSize: '1.3rem'}}>Syarat dan Ketentuan</h1>

                <span className="text-xsm text-ketentuan">Selamat datang di indobuzz.id</span>
                {/* <br /> */}
                <span className="text-xsm text-ketentuan">Syarat & ketentuan yang ditetapkan di bawah ini menjelaskan terkait aturan yang perlu diperhatikan oleh kontributor. Kontributor disarankan membaca dengan seksama karena dapat berdampak kepada kelancaran dan mekanisme pekerjaan yang dikerjakan kontributor.</span>
                {/* <br /> */}
                <span className="text-xsm text-ketentuan">Dengan mendaftar dan/atau menggunakan situs www.indobuzz.id, maka pengguna dianggap telah membaca, mengerti, memahami dan menyetujui semua isi dalam syarat & ketentuan.</span>
                {/* <br /> */}
                <span className="text-xsm text-ketentuan">Dengan mendaftar dan/atau menggunakan situs www.indobuzz.id, maka pengguna dianggap telah membaca, mengerti, memahami dan menyetujui semua isi dalam syarat & ketentuan.</span>

            </div>

            <div className="container bg-white mt-2 pt-3 d-flex flex-column gap-2">
                <h2 style={{fontSize: '1.1rem'}}> 1. Aturan pemilikan akun</h2>

                <span className="text-xsm text-ketentuan">Mohon diperhatikan! dilarang memiliki lebih dari 1 akun indobuzz.id, Jika kami temukan adanya 1 orang yang memiliki lebih dari 1 akun indobuzz maka akan kami suspend/block. Per 1 orang hanya dibolehkan memiliki 1 akun indobuzz.</span>
                <div className="d-flex flex-column text-xsm text-ketentuan" style={{marginLeft: '0.1rem'}}>
                    <ul className="pl-6">
                        <li>
                            Setiap orang diperbolehkan memiliki hanya 1 akun di platform ini.
                        </li>
                        <li>
                            Tidak diperkenankan membuat akun ganda, menggunakan identitas, atau menggunakan akun orang lain.
                        </li>
                        <li>
                            Pelanggaran aturan ini termasuk penangguhan atau penghapusan akun terkait
                        </li>
                    </ul>
                </div>
            </div>

            <div className="container bg-white mt-2 pt-3 d-flex flex-column gap-2">
                <h2 style={{fontSize: '1.1rem'}}> 2. Pelaporan yang benar</h2>

                <div className="d-flex flex-column text-xsm text-ketentuan" style={{marginLeft: '0.1rem'}}>
                    <ul className="pl-6">
                        <li>
                            Laporan yang diajukan harus akurat dan didasarkan pada informasi yang valid.
                        </li>
                        <li>
                            Tidak diperkenankan memberikan laporan palsu atau menyalahgunakan fitur pelaporan.
                        </li>
                        <li>
                            pengguna yang melanggar aturan ini dikenai sanksi yang sesuai.
                        </li>
                    </ul>
                </div>
            </div>

            <div className="container bg-white mt-2 pt-3 d-flex flex-column gap-2">
                <h2 style={{fontSize: '1.1rem'}}> 3. Pelanggaran</h2>

                <div className="d-flex flex-column text-xsm text-ketentuan" style={{marginLeft: '0.1rem'}}>
                    <ul className="pl-6">
                        <li>
                            Pelanggaran ringan = salah upload, dan salah akun sosmed, gambar kurang jelas.
                        </li>
                        <li>
                            Pelanggaran menengah = jika kesalahan pertama diulang selama lebih dari 2x
                        </li>
                        <li>
                        Pelanggaran berat = upload gambar hasil pekerjaan orang lain, memiliki lebih dari 1 akun indobuzz, sengaja upload gambar tidak sesuai, follower tidak sesuai dengan akun real.
                        </li>
                    </ul>
                </div>
            </div>

            <div className="container bg-white mt-2 pt-3 d-flex flex-column gap-2">
                <h2 style={{fontSize: '1.1rem'}}> 4. Sanksi atau Hukuman</h2>
                <span>1. Hukuman ringan</span>

                <div className="d-flex flex-column text-xsm text-ketentuan" style={{marginLeft: '0.1rem'}}>
                    <ul className="pl-6">
                        <li>
                            Pemberitahuan tentang pelanggaran dan permintaan untuk memperbaiki tindakan di job selanjutnya.
                        </li>
                    </ul>
                </div>

                <span>2. Hukuman menengah</span>

                <div className="d-flex flex-column text-xsm text-ketentuan" style={{marginLeft: '0.1rem'}}>
                    <ul className="pl-6">
                        <li>
                            Sementara penangguhan akun dengan durasi yang ditentukan.
                        </li>
                    </ul>
                </div>

                <span>3. Hukuman berat</span>

                <div className="d-flex flex-column text-xsm text-ketentuan" style={{marginLeft: '0.1rem'}}>
                    <ul className="pl-6">
                        <li>
                            Penangguhan akun jangka panjang atau permanen.
                        </li>
                        <li>
                            Penghapusan akun secara permanen.
                        </li>
                        <li>
                            Pelarangan penggunaan platform di masa depan.
                        </li>
                    </ul>
                </div>
            </div>
            <div className="container bg-white pb-2">
                <button className="btn rounded-small text-blue d-block" style={{border: '1px solid #0087EC'}}> kembali keatas</button>
                <span className="pt-4 letter-spacing-1 text-xs pb-2" style={{color: '#9D9D9D'}}>Last update: 09/09/2024 </span>
            </div>
            <div className="container bg-white mt-4 pb-4 mb-12">
            <div className="d-flex justify-content-center">
                <img
                    className="d-block pt-4 pb-4"
                    src={`${baseUrl}/img/Logo-indobuzz.png`}
                    alt="indobuzz"
                    width='100'
                    

                />
            </div>
            
            <span className="pb-4 text-small d-flex justify-content-center" style={{color: '#9D9D9D'}}>
                © 2011-2024, PT Indobuzz Republik Digital
            </span>
            </div>
            
        </div>
    )
}
export default KetentuanKebijakan;