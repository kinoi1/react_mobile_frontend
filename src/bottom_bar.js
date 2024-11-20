import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

const baseUrl = process.env.REACT_APP_BASE_URL;

var clasbot;

function BottomBar() {
    const location = useLocation();
    clasbot = '';
    if (location.pathname == '/pekerjaan') {
        clasbot = 'left-0';  
    }
    return (
<section className={`bg-white position-fixed w-full bottom-0 ${clasbot}`}>
    <div className='container'>
        <div className='row'>
            <div className='col-md-12'>
                <div className='d-flex px-4 gap-4 justify-content-between'>
                    <div>
                        <a href={`${baseUrl}/`} className='icon-home button-bar-active' ></a>
                    </div>
                    <div>
                        <a href={`${baseUrl}/pekerjaan`} className='icon-work'></a>
                    </div>
                    <div>
                        <a href='foo' className='icon-riwayat'></a>
                    </div>
                    <div>
                        <a href='foo' className='icon-setting'></a>
                    </div>
                    <div>
                        <a href='foo' className='icon-wallet'></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

);
}

export default BottomBar;