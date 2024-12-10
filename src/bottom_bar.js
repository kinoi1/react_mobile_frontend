import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';

const baseUrl = process.env.REACT_APP_BASE_URL;

function BottomBar() {
  const location = useLocation();
  const [activePath, setActivePath] = useState(location.pathname);

  const handleSetActive = (path) => {
    setActivePath(path);
  };

  return (
    <section className={`bg-white position-sticky container bottom-0 d-flex ${location.pathname === '/pekerjaan' ? 'left-0' : ''} root-bottom-bar`}>
            <div className="d-flex flex-row gap-4 w-100 justify-content-between">
              <div>
                <Link
                  to={`${baseUrl}/`}ß
                  className={`icon-home flex-fill ${activePath === `${baseUrl}/` ? 'button-bar-active' : ''}`}
                  onClick={() => handleSetActive(`${baseUrl}/`)}
                ></Link>
              </div>
              <div>
                <Link
                  to={`${baseUrl}/pekerjaan`}
                  className={`icon-work flex-fill ${activePath === `${baseUrl}/pekerjaan` ? 'button-bar-active' : ''}`}
                  onClick={() => handleSetActive(`${baseUrl}/pekerjaan`)}
                ></Link>
              </div>
              <div>
                <Link
                  to={`${baseUrl}/history`}
                  className={`icon-riwayat flex-fill ${activePath === `${baseUrl}/history` ? 'button-bar-active' : ''}`}
                  onClick={() => handleSetActive('/history')}
                ></Link>
              </div>
              <div>
                <Link
                  to={`${baseUrl}/riwayat-pekerjaan`}
                  className={`icon-wallet flex-fill ${activePath === `${baseUrl}/riwayat-pekerjaan` ? 'button-bar-active' : ''}`}
                  onClick={() => handleSetActive(`${baseUrl}/riwayat-pekerjaan`)}
                ></Link>
              </div>
              <div>
                <Link
                  to={`${baseUrl}/settings`}
                  className={`icon-setting flex-fill ${activePath === `${baseUrl}/settings` ? 'button-bar-active' : ''}`}
                  onClick={() => handleSetActive(`${baseUrl}/settings`)}
                ></Link>
              </div>
            </div>
    </section>
  );
}

export default BottomBar;
