import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import BottomBar from "../bottom_bar";
import '../assets/settings.css';



function Settings() {
    const baseUrl = process.env.REACT_APP_BASE_URL;

    const menuItems = [
        { id: 1, icon: "icon-profile", name: "Ubah profile", link:'profile' },
        { id: 2, icon: "icon-sosmed", name: "Akun sosial media", link:'social-media' },
        { id: 3, icon: "icon-rekening", name: "Rekening Bank", link:'rekening' },
        { id: 4, icon: "icon-key", name: "Password", link:'password' },
        { id: 5, icon: "icon-referral", name: "Referral kamu", link:'refferal' },
        { id: 6, icon: "icon-kontributor", name: "Pusat edukasi kontributor", link:'kontributor' },
        { id: 7, icon: "icon-ketentuan", name: "Ketentuan & kebijakan", link:'ketentuan' },
      ];

    return(
    <div>
        <section className="root">
            <div className="container pt-4 pb-16 bg-image">
                <div className="row">
                    <div className="col-md-12 d-flex flex-row">
                        <div className="bg-profile">
                            <span className="icon-profile-pict bg-white">

                            </span>
                        </div>
                        <div className="pl-2-5">
                            <div className="text-white text-xsm">Anjay Tes</div>
                            <div className="text-white text-small">KONTRIBUTOR</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div className="container py-4 bg-white">
        <h3 className="mb-4 text-base-setting">Pengaturan</h3>
        <ul className="list-group border-0">
            {menuItems.map((item) => (
            <li key={item.id} className="list-group-item d-flex align-items-center p-0 border-0 py-2">
                <div className="bg-slate-200 border-icon-saldo d-flex justify-content-center align-items-center rounded-03">
                    <i className={`${item.icon}`}></i>
                </div>
                <Link
                  to={`${baseUrl}/settings/${item.link}`}>
                    <span className="pl-2-5 text-setting">{item.name}</span>
                </Link>
            </li>
            ))}
        </ul>

        <div className="col-12 px-0 pt-15">
            <a className="d-block w-full btn-primary col-12 p-0 rounded-small logout"> <span className="d-flex justify-content-center align-items-center logout">Logout</span></a>
        </div>

        <BottomBar />
        </div>
    </div>
    )
}

export default Settings;