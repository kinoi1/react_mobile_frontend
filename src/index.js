import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Pekerjaan from './Pekerjaan';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/pekerjaan",
    element: <Pekerjaan />
  }

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
