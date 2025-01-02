import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import BottomBar from "../bottom_bar";
import '../assets/settings.css';



function Settings() {
    const baseUrl = process.env.REACT_APP_BASE_URL;

    const menuItems = [
        { id: 1, icon: "icon-profile", name: "Ubah profile", link:'profile', new: false },
        { id: 2, icon: "icon-sosmed", name: "Akun sosial media", link:'sosial-media', new: false },
        { id: 3, icon: "icon-rekening", name: "Rekening Bank", link:'rekening', new: false },
        { id: 4, icon: "icon-key", name: "Password", link:'password', new: false },
        { id: 5, icon: "icon-referral", name: "Referral kamu", link:'referral', new: true },
        // { id: 6, icon: "icon-kontributor", name: "Pusat edukasi kontributor", link:'edu-kontributor', new: false },
        { id: 7, icon: "icon-ketentuan", name: "Ketentuan & kebijakan", link:'syarat-ketentuan', new: false },
      ];

    return(
    <div style={{overflowY: 'scroll',maxHeight: '85%',scrollbarWidth:'none'}}>
        <section className="position-fixed z-index-2 container p-0">
            <div className="pt-12 pb-16 bg-image" style={{height: '100px'}}>
                <div className="">
                    <div className="col-md-12 d-flex flex-row">
                        <div className="">
                            <span className="icon-profile-pict bg-white">

                            </span>
                        </div>
                        <div className="pl-2-5">
                            <div className="text-white text-xsm">Anjay Tes</div>
                            <div className="text-white text-xs opacity-50">KONTRIBUTOR</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div className="container pt-36 pb-16 bg-white" style={{minHeight: '750px'}}>
        <h3 className="mb-4 text-xsm" style={{color: '#4C4C4C'}}>Pengaturan</h3>
        <ul className="list-group border-0">
            {menuItems.map((item) => (
            <li key={item.id} className="list-group-item d-flex align-items-center p-0 border-0 py-3">
                <div className="bg-slate-200 border-icon-saldo d-flex justify-content-center align-items-center rounded-03">
                    <i className={`${item.icon}`}></i>
                </div>
                <Link
                className='flex-fill no-hover-underline'
                to={`${baseUrl}/settings/${item.link}`}>
                    <span className="pl-2-5 text-xs" style={{color: '#4C4C4C',fontWeight: '400'}}>{item.name}</span>
                </Link>
                {item.new && (
                    <span style={{fontSize: '9px'}} className=' px-2 bg-red rounded-3 text-white letter-spacing-05 mr-3'>Baru</span>

                )}
                <i 
                style={{color:'#4C4C4C'}}
                className='fa fa-angle-right'></i>
            </li>
            ))}
        </ul>

        {/* <div className="col-12 px-0 pt-15"> */}
            <a className="d-block p-0 rounded-small logout mt-24 mb-8"> <span className="d-flex justify-content-center align-items-center h-100 font-medium">Logout</span></a>
        {/* </div> */}

        </div>
        <BottomBar />

    </div>
    )
}

export default Settings;