import { Link } from "react-router-dom";
import BottomBar from "../bottom_bar";

function History() {
    const baseUrl = process.env.REACT_APP_BASE_URL;

    const listhistory = [
        { id: "1", icon: "icon-saldo", class: "text-red",tanggal:"5 Nov 2024, 19.33", nama: "Youtube", nominal: "- Rp.500", desc:'Penarikan saldo 85938', imgclass:"bg-saldo-red" },
        { id: "2", icon: "icon-saldo", class: "text-money", tanggal:"2 Nov 2024, 18.40", nama: "Youtube", nominal: "+ Rp.1000", desc:'Fee job xxx 85938', imgclass:"bg-saldo-blue" },
        { id: "1", icon: "icon-saldo", class: "text-red",tanggal:"5 Nov 2024, 15.00", nama: "Youtube", nominal: "- Rp.500", desc:'Penarikan saldo 334427', imgclass:"bg-saldo-red" },
        { id: "2", icon: "icon-saldo", class: "text-money", tanggal:"2 Nov 2024, 15.00", nama: "Youtube", nominal: "+ Rp.1000", desc:'Fee job xxx 85938', imgclass:"bg-saldo-blue" },
        { id: "1", icon: "icon-saldo", class: "text-red",tanggal:"5 Nov 2024, 15.00", nama: "Youtube", nominal: "- Rp.500", desc:'Penarikan saldo 32245', imgclass:"bg-saldo-red" },
        { id: "2", icon: "icon-saldo", class: "text-money", tanggal:"2 Nov 2024, 15.00", nama: "Youtube", nominal: "+ Rp.1000", desc:'Fee job xxx 85938', imgclass:"bg-saldo-blue" },
        { id: "1", icon: "icon-saldo", class: "text-red",tanggal:"5 Nov 2024, 15.00", nama: "Youtube", nominal: "- Rp.500", desc:'Penarikan saldo 85654', imgclass:"bg-saldo-red" },
        { id: "2", icon: "icon-saldo", class: "text-money", tanggal:"2 Nov 2024, 15.00", nama: "Youtube", nominal: "+ Rp.1000", desc:'Fee job xxx 26512', imgclass:"bg-saldo-blue" },
        { id: "1", icon: "icon-saldo", class: "text-red",tanggal:"5 Nov 2024, 15.00", nama: "Youtube", nominal: "- Rp.500", desc:'Penarikan saldo', imgclass:"bg-saldo-red" },
        { id: "2", icon: "icon-saldo", class: "text-money", tanggal:"2 Nov 2024, 15.00", nama: "Youtube", nominal: "+ Rp.1000", desc:'Fee job xxx', imgclass:"bg-saldo-blue" },
        { id: "1", icon: "icon-saldo", class: "text-red",tanggal:"5 Nov 2024, 15.00", nama: "Youtube", nominal: "- Rp.500", desc:'Penarikan saldo', imgclass:"bg-saldo-red" },
        { id: "2", icon: "icon-saldo", class: "text-money", tanggal:"2 Nov 2024, 15.00", nama: "Youtube", nominal: "+ Rp.1000", desc:'Fee job xxx', imgclass:"bg-saldo-blue" },
        { id: "1", icon: "icon-saldo", class: "text-red",tanggal:"5 Nov 2024, 15.00", nama: "Youtube", nominal: "- Rp.500", desc:'Penarikan saldo', imgclass:"bg-saldo-red" },
        { id: "2", icon: "icon-saldo", class: "text-money", tanggal:"2 Nov 2024, 15.00", nama: "Youtube", nominal: "+ Rp.1000", desc:'Fee job xxx', imgclass:"bg-saldo-blue" },
        { id: "1", icon: "icon-saldo", class: "text-red",tanggal:"5 Nov 2024, 15.00", nama: "Youtube", nominal: "- Rp.500", desc:'Penarikan saldo', imgclass:"bg-saldo-red" },
        { id: "2", icon: "icon-saldo", class: "text-money", tanggal:"2 Nov 2024, 15.00", nama: "Youtube", nominal: "+ Rp.1000", desc:'Fee job xxx', imgclass:"bg-saldo-blue" },
        
      ];

    return(
        <div>
        <section className="position-fixed z-index-2 container p-0">
            <div className="pt-4 pb-16 bg-image" style={{height: '165px'}}>
                <div className="col-md-12 d-flex flex-row">
                    <div className="d-flex flex-column">
                        <span className="text-white opacity-50 text-xs font-normal">Saldo Tersedia</span>
                        <span className="text-white text-lg font-semibold d-flex flex-row align-items-center">Rp. 150.000 <i className="icon-saldo ml-2 bg-saldo-white opacity-50"></i></span>
                    </div>
                </div>
            </div>
        </section>

        <div className=''>
            <div className='container position-fixed z-index-2'>
                <div className="bg-white w-100 card p-4 rounded-xl shadow-all card-fixed top-24">
                    <div className="d-flex flex-row justify-content-between">
                        <div className="">
                            <div className="d-flex flex-row gap-5">
                                <div className="">
                                    <div className="bg-slate-200 rounded-xl n-work col-12 d-flex justify-content-center align-items-center">
                                        <p className="text-blue font-medium m-0 p text-xsm">1351</p>
                                    </div>
                                    <div className="text-grey text-xs d-flex justify-content-center pekerjaan">Pekerjaan</div>
                                </div>
                                <div className="">
                                    <div className="bg-slate-200 rounded-xl d-flex justify-content-center align-items-center n-work">
                                        <p className="text-blue m-0 text-xsm">Rp 500k</p>
                                    </div>
                                    <div className="text-grey text-xs d-flex justify-content-center pekerjaan">Penarikan</div>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex align-items-center">
                            <div className="d-flex flex-column justify-content-end">
                                <Link 
                                to={`${baseUrl}/history/tarik-saldo`}
                                className="btn bg-main text-white text-xs rounded-small px-4 tarik-saldo d-flex align-items-center"> Tarik saldo</Link>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>      
        </div>

        <div className="col-12 bg-white shadow-small pb-2 banner-history">
            <span className="text-work-header">Riwayat saldo</span>
        </div>

        <div className="container bg-white pt-2 pb-20">
            <div className="row">
            {listhistory.map((item, index) => (
                <div key={index} className="col-12">
                    <div className="py-3">
                        <div className="d-flex flex-row">
                            <div className="d-flex flex-row flex-fill p-0">
                                <div className="bg-slate-200 border-icon-saldo d-flex justify-content-center align-items-center rounded-03"><span className={`icon-saldo ${item.imgclass}`}></span>
                                </div>
                                <div className="col-10 ">
                                    <div className="d-flex flex-column h-100">
                                        <div className="flex-fill col-12 text-xs pl-0 font-normal">{item.desc}</div>
                                        <div className="flex-fill col-12 text-xs-small pl-0 d-flex flex-row align-items-center">
                                            <img className="img-11 mr-03" src="/react_mobile_frontend/img/work-icon/Calendar-icon.svg" alt="indobuzz"></img>
                                            <span className="font-normal opacity-50 leading-none text-xs d-flex align-items-end h-100">{item.tanggal}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={`d-flex align-items-center justify-content-end text-xs pr-0 font-medium ${item.class}`}>
                                {item.nominal}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            </div>
        </div>

        <BottomBar />
        </div>
    )

}

export default History;
