import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Pekerjaan from './Pekerjaan';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import History from './menu/History';
import Riwayat from './menu/Riwayat_Pekerjaan';
import Settings from './menu/Settings';
import Profile from './menu/settings/Profile';
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


]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={Router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
