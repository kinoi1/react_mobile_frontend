import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

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
                <div className='w-full d-flex px-4 gap-4'>
                    <div>
                        <a href='/' className='icon-home button-bar-active' onClick=''></a>
                    </div>
                    <div>
                        <a href='/pekerjaan' className='icon-work' onClick=''></a>
                    </div>
                    <div>
                        <a href='foo' className='icon-riwayat' onClick=''></a>
                    </div>
                    <div>
                        <a href='foo' className='icon-setting' onClick=''></a>
                    </div>
                    <div>
                        <a href='foo' className='icon-wallet' onClick=''></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

);
}

export default BottomBar;