import BottomBar from "../bottom_bar";

function History() {
    const baseUrl = process.env.REACT_APP_BASE_URL;

    const listhistory = [
        { id: "1", icon: "icon-saldo", class: "text-red",tanggal:"5 Nov 2024", nama: "Youtube", nominal: "- Rp.500", desc:'Penarikan saldo', imgclass:"bg-saldo-red" },
        { id: "2", icon: "icon-saldo", class: "text-money", tanggal:"2 Nov 2024", nama: "Youtube", nominal: "+ Rp.1000", desc:'Fee job xxx', imgclass:"bg-saldo-blue" },
        { id: "1", icon: "icon-saldo", class: "text-red",tanggal:"5 Nov 2024", nama: "Youtube", nominal: "- Rp.500", desc:'Penarikan saldo', imgclass:"bg-saldo-red" },
        { id: "2", icon: "icon-saldo", class: "text-money", tanggal:"2 Nov 2024", nama: "Youtube", nominal: "+ Rp.1000", desc:'Fee job xxx', imgclass:"bg-saldo-blue" },
        { id: "1", icon: "icon-saldo", class: "text-red",tanggal:"5 Nov 2024", nama: "Youtube", nominal: "- Rp.500", desc:'Penarikan saldo', imgclass:"bg-saldo-red" },
        { id: "2", icon: "icon-saldo", class: "text-money", tanggal:"2 Nov 2024", nama: "Youtube", nominal: "+ Rp.1000", desc:'Fee job xxx', imgclass:"bg-saldo-blue" },
        { id: "1", icon: "icon-saldo", class: "text-red",tanggal:"5 Nov 2024", nama: "Youtube", nominal: "- Rp.500", desc:'Penarikan saldo', imgclass:"bg-saldo-red" },
        { id: "2", icon: "icon-saldo", class: "text-money", tanggal:"2 Nov 2024", nama: "Youtube", nominal: "+ Rp.1000", desc:'Fee job xxx', imgclass:"bg-saldo-blue" },
        { id: "1", icon: "icon-saldo", class: "text-red",tanggal:"5 Nov 2024", nama: "Youtube", nominal: "- Rp.500", desc:'Penarikan saldo', imgclass:"bg-saldo-red" },
        { id: "2", icon: "icon-saldo", class: "text-money", tanggal:"2 Nov 2024", nama: "Youtube", nominal: "+ Rp.1000", desc:'Fee job xxx', imgclass:"bg-saldo-blue" },
        { id: "1", icon: "icon-saldo", class: "text-red",tanggal:"5 Nov 2024", nama: "Youtube", nominal: "- Rp.500", desc:'Penarikan saldo', imgclass:"bg-saldo-red" },
        { id: "2", icon: "icon-saldo", class: "text-money", tanggal:"2 Nov 2024", nama: "Youtube", nominal: "+ Rp.1000", desc:'Fee job xxx', imgclass:"bg-saldo-blue" },
        { id: "1", icon: "icon-saldo", class: "text-red",tanggal:"5 Nov 2024", nama: "Youtube", nominal: "- Rp.500", desc:'Penarikan saldo', imgclass:"bg-saldo-red" },
        { id: "2", icon: "icon-saldo", class: "text-money", tanggal:"2 Nov 2024", nama: "Youtube", nominal: "+ Rp.1000", desc:'Fee job xxx', imgclass:"bg-saldo-blue" },
        { id: "1", icon: "icon-saldo", class: "text-red",tanggal:"5 Nov 2024", nama: "Youtube", nominal: "- Rp.500", desc:'Penarikan saldo', imgclass:"bg-saldo-red" },
        { id: "2", icon: "icon-saldo", class: "text-money", tanggal:"2 Nov 2024", nama: "Youtube", nominal: "+ Rp.1000", desc:'Fee job xxx', imgclass:"bg-saldo-blue" },
        
      ];

    return(
        <div>
        <section className="position-fixed z-index-2 root">
            <div className="pt-4 pb-16 bg-image">
                <div className="">
                    <div className="col-md-12 d-flex flex-row">
                        <div className="d-flex flex-column">
                            <span className="text-white opacity-50 text-xs font-normal">Saldo Tersedia</span>
                            <span className="text-white text-lg font-semibold d-flex flex-row align-items-center">Rp. 150.000 <i className="icon-saldo ml-2 bg-saldo-white opacity-50"></i></span>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>

        <div className=''>
            <div className='container'>
                <div className='row'>
                    <div className=''>
                        <div className="bg-white w-100 card p-4 rounded-xl position-fixed z-index-2  shadow-lg card-fixed top-24">
                            <div class="d-flex flex-row justify-content-between">
                                <div class="">
                                    <div class="d-flex flex-row gap-5">
                                        <div class="">
                                            <div class="bg-slate-200 rounded-xl n-work col-12 d-flex justify-content-center align-items-center">
                                                <p class="text-blue font-medium m-0 p text-xsm">1351</p>
                                            </div>
                                            <div class="text-grey text-xs d-flex justify-content-center pekerjaan">Pekerjaan</div>
                                        </div>
                                        <div class="">
                                            <div class="bg-slate-200 rounded-xl d-flex justify-content-center align-items-center n-work">
                                                <p class="text-blue m-0 text-xsm">Rp 500k</p>
                                            </div>
                                            <div class="text-grey text-xs d-flex justify-content-center pekerjaan">Penarikan</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="d-flex align-items-center">
                                    <div class="d-flex flex-column justify-content-end">
                                        <button class="btn bg-main text-white text-xs rounded-small px-4 tarik-saldo"> Tarik saldo</button>
                                    </div>
                                </div>
                            </div> 
                        </div>
                    </div>
            
                </div>
            </div>
        </div>

        <div className="col-12 bg-white shadow-small pb-2 banner-history">
            <span className="text-xsm text-dark-grey">Riwayat saldo</span>
        </div>

        <div className="container bg-white pt-2 pb-2">
            <div className="row">
            {listhistory.map((item, index) => (
                <div className="col-12">
                    <div className="py-2">
                        <div className="d-flex flex-row">
                            <div className="d-flex flex-row col-8 p-0">
                                <div className="bg-slate-200 border-icon-saldo d-flex justify-content-center align-items-center rounded-03"><span className={`icon-saldo ${item.imgclass}`}></span>
                                </div>
                                <div className="col-9 ml-2">
                                    <div className="row">
                                        <div className="col-12 text-xs pl-0 text-dark-grey">{item.desc}</div>
                                        <div className="col-12 text-xs-small pl-0 d-flex flex-row">
                                            <img class="img-11 mr-03" src="/react_mobile_frontend/img/work-icon/Calendar-icon.svg" alt="indobuzz"></img>
                                            <span className="text-grey leading-none">{item.tanggal}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={`col-4 d-flex align-items-center justify-content-end text-xs pr-0 ${item.class}`}>{item.nominal}</div>
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
