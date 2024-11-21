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
    <section className={`bg-white position-fixed container bottom-0 ${location.pathname === '/pekerjaan' ? 'left-0' : ''} root-bottom-bar`}>
      <div className="">
        <div className="">
          <div className="col-md-12 p-0">
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
                  className={`icon-riwayat ${activePath === 'history' ? 'button-bar-active' : ''}`}
                  onClick={() => handleSetActive('/history')}
                ></Link>
              </div>
              <div>
                <Link
                  to="foo"
                  className={`icon-setting ${activePath === 'foo' ? 'button-bar-active' : ''}`}
                  onClick={() => handleSetActive('foo')}
                ></Link>
              </div>
              <div>
                <Link
                  to="foo"
                  className={`icon-wallet ${activePath === 'foo' ? 'button-bar-active' : ''}`}
                  onClick={() => handleSetActive('foo')}
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
