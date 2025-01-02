import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './assets/plugin/bootstrap/bootstrap.min.css';
import App from './App';
import Pekerjaan from './Pekerjaan';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import History from './menu/History';
import Riwayat from './menu/Riwayat_Pekerjaan';
import Settings from './menu/Settings';
import Profile from './menu/settings/Profile';
import SocialMedia from './menu/settings/Sosial_media';
import Rekening from './menu/settings/Rekening';
import Password from './menu/settings/Password';
import Referral from './menu/settings/Referral';
import EduKontributor from './menu/settings/Edu_kontributor';
import TambahSosialMedia from './menu/settings/Tambah_Sosial_media';
import TarikSaldo from './menu/history/TarikSaldo';
import UploadBukti from './menu/pekerjaan/uploadbukti';
import KetentuanKebijakan from './menu/settings/Ketentuan_kebijakan';
import Login from './menu/Login';
const baseUrl = process.env.REACT_APP_BASE_URL || ''; // Default ke '' jika tidak diatur


const Router = createBrowserRouter([
  {
    path: `${baseUrl}`,
    element: <App />,
  },
  {
    path: `${baseUrl}/pekerjaan`,
    element: <Pekerjaan />,
  },
  {
    path: `${baseUrl}/history`,
    element: <History />,
  },
  {
    path: `${baseUrl}/riwayat-pekerjaan`,
    element: <Riwayat />,
  },
  {
    path: `${baseUrl}/settings`,
    element: <Settings />,
  },
  {
    path: `${baseUrl}/settings/profile`,
    element: <Profile />,
  },
  {
    path: `${baseUrl}/settings/sosial-media`,
    element: <SocialMedia />,
  },
  {
    path: `${baseUrl}/settings/sosial-media/tambah`,
    element: <TambahSosialMedia />,
  },
  {
    path: `${baseUrl}/settings/rekening`,
    element: <Rekening />,
  },
  {
    path: `${baseUrl}/settings/password`,
    element: <Password />,
  },
  {
    path: `${baseUrl}/settings/referral`,
    element: <Referral />,
  },
  {
    path: `${baseUrl}/settings/edu-kontributor`,
    element: <EduKontributor />,
  },
  {
    path: `${baseUrl}/history/tarik-saldo`,
    element: <TarikSaldo />,
  },
  {
    path: `${baseUrl}/pekerjaan/upload-bukti`,
    element: <UploadBukti />,
  },
  {
    path: `${baseUrl}/settings/syarat-ketentuan`,
    element: <KetentuanKebijakan />,
  },
  {
    path: `${baseUrl}/login`,
    element: <Login />,
  }



]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <RouterProvider router={Router}/>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
