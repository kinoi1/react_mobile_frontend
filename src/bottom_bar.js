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
    <section className={`bg-white position-sticky container bottom-0 pt-4 ${location.pathname === '/pekerjaan' ? 'left-0' : ''} root-bottom-bar`}>
      <div className="">
        <div className="">
          <div className="col-md-12 px-4">
            <div className="d-flex gap-4 justify-content-between">
              <div>
                <Link
                  to={`${baseUrl}/`}
                  className={`icon-home ${activePath === `${baseUrl}/` ? 'button-bar-active' : ''}`}
                  onClick={() => handleSetActive(`${baseUrl}/`)}
                ></Link>
              </div>
              <div>
                <Link
                  to={`${baseUrl}/pekerjaan`}
                  className={`icon-work ${activePath === `${baseUrl}/pekerjaan` ? 'button-bar-active' : ''}`}
                  onClick={() => handleSetActive(`${baseUrl}/pekerjaan`)}
                ></Link>
              </div>
              <div>
                <Link
                  to={`${baseUrl}/history`}
                  className={`icon-riwayat ${activePath === `${baseUrl}/history` ? 'button-bar-active' : ''}`}
                  onClick={() => handleSetActive('/history')}
                ></Link>
              </div>
              <div>
                <Link
                  to={`${baseUrl}/riwayat-pekerjaan`}
                  className={`icon-wallet ${activePath === `${baseUrl}/riwayat-pekerjaan` ? 'button-bar-active' : ''}`}
                  onClick={() => handleSetActive('/riwayat-pekerjaan')}
                ></Link>
              </div>
              <div>
                <Link
                  to={`${baseUrl}/settings`}
                  className={`icon-setting ${activePath === `${baseUrl}/settings` ? 'button-bar-active' : ''}`}
                  onClick={() => handleSetActive('/settings')}
                ></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BottomBar;
