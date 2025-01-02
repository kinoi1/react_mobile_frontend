import { useEffect } from 'react';

import './App.css';
import './assets/main.css';
import React from "react";
import BottomBar from './bottom_bar';
import WorkList from './work-list';
import BannerDashboard from './menu/components/BannerHeaders';



const baseUrl = process.env.REACT_APP_BASE_URL;


function App() {

  const Data = [
    { id: "1", icon: "icon-follow", nama: "Youtube", harga: "500", progress: "25" },
  ];

  const listwork = [
    { id: "1", icon: "icon-follow", nama: "Youtube", harga: "500" },
    { id: "2", icon: "icon-follow", nama: "Tes Youtube", harga: "500" },
    { id: "3", icon: "icon-follow", nama: "Youtube", harga: "500" },
    { id: "4", icon: "icon-follow", nama: "Tes Youtube", harga: "500" },
    { id: "5", icon: "icon-follow", nama: "Youtube", harga: "500" },
    { id: "6", icon: "icon-follow", nama: "Tes Youtube", harga: "500" },
    { id: "7", icon: "icon-follow", nama: "Youtube", harga: "500" },
    { id: "8", icon: "icon-follow", nama: "Tes Youtube", harga: "500" },
  ];
  useEffect(() => {
    const container = document.getElementById('dashboard');
    console.log(container.scrollTop);
    if (container) {
        container.scrollTop = 0; // Reset posisi scroll
        console.log(container.scrollTop);
    }
}, []); // Hanya dijalankan sekali saat komponen dimuat

  const handleScroll = (event) => {
    console.log(event.target.scrollTop)
  }
  return (
    <div id='dashboard' style={{overflowY: 'scroll',maxHeight: '65%',scrollbarWidth:'none'}} onScroll={handleScroll}>
      <section className="w-100 pt-7 pb-30 position-fixed z-index-2 bg-image">
        <div className="w-full container position-fixed z-index-2">
          <div className="w-full row position-fixed z-index-2">
            <div className='w-full col-md-12 position-fixed z-index-2 line-height-1-4'>
              <div className="text-white">
                  <span className='text-lg font-medium'>Halo, Jeni</span>
                </div>
                <div className='pb-6'> 
                  <span className="text-white text-xs opacity-50">Apa kabarmu hari ini?</span>
                </div>
              <div className="d-flex flex-column">
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <div className='position-fixed z-index-2 d-flex'
      style={{maxWidth:'480px',paddingLeft: '18px', paddingRight: '18px',width: '100%'}}>
        <div className="bg-white card p-4 rounded-xl card-fixed shadow-all top-24">
          <div className="d-flex flex-row justify-content-between overflow-hidden white-space-nowrap">
            <div className="d-flex align-items-center pr-0">
              <div className="d-flex flex-column justify-content-end">
                  <div className='row'></div>
                  <div className='d-flex flex-column'>
                    <span className='text-xs text-grey'>Saldo tersedia</span>
                    <span className='text-base text-blue font-semibold d-flex flex-row align-items-center gap-2'>Rp. 150,000 <i className='icon-saldo w-1-2 h-1-2'></i> </span>
                  </div>
              </div>
            </div>
            <div className="">
                <div className="d-flex flex-row gap-5">
                  <div className="">
                      <div className="bg-slate-200 rounded-xl n-work col-12 d-flex justify-content-center align-items-center">
                          <p className="text-blue font-medium m-0 p text-xsm">1351</p>
                      </div>
                      <div className="text-grey text-xs d-flex justify-content-center pekerjaan">Pekerjaan</div>
                  </div>
                  <div className="">
                      <div className="bg-slate-200 rounded-xl d-flex justify-content-center align-items-center n-work">
                          <p className="text-blue m-0 text-xsm">Rp 500k</p>
                      </div>
                      <div className="text-grey text-xs d-flex justify-content-center pekerjaan">Penarikan</div>
                  </div>
                </div>
            </div>
                    
          </div>
        </div>
      </div>

      <BannerDashboard />

      <section className="bg-white pt-8"
        // style={{paddingTop:'clamp(150px, 45vw, 200px)'}}
      >
        <div className="container">
          <div className='col-md-12 p-0'>
            <div className="d-flex flex-row gap-1 p-0 justify-space-between">
              <p className="m-0 mr-2 p-0">Pekerjaan aktif</p>
              <div className={`text-xs-small ${Data.length == 0 ? 'bg-blue' : 'bg-rose-500'} text-white rounded-3 px-2-5 ml-8 text-right d-flex align-items-center`}>
                {Data.length == 0 ? 'Segera ambil pekerjaan' : 'Segera kerjakan!'}
              </div>
            </div>
          </div>
          
        </div>
      </section>

      <section className="bg-white pt-8 pb-8 mb-3">
      {Data.length > 0 ? (
        Data.map((item,index) => (
        <div className='container' key={index}>
          <div className='row'>
            <div className='col-md-12'>
              <div className="bg-white p-2 rounded-xl shadow-lg work-active py-3 px-3">
                <div className='col-md-12 p-0'>
                    <div className="d-flex flex-row">
                    <img
                          className="work-image"
                          src={`${baseUrl}/img/work-icon/Follower-icon.svg`}
                          alt="indobuzz"
                        />
                      <div className='d-flex flex-column pl-3 flex-fill'>
                        <div className='text-slate-400'>
                          <p className='m-0 font-medium text-dark-grey'>{item.nama}</p>
                        </div>
                        <div className='text-sky-600 d-flex flex-row gap-2'>
                          <img src={`${baseUrl}/img/Saldo-icon(blue).svg`} width={'13'}></img><p className='m-0 text-blue font-medium text-xs'> Rp. {item.harga}</p>
                        </div>
                      </div>
                    
                      <div className='pr-0' style={{minWidth: '40%'}}>
                        <span className='d-flex justify-content-end text-xs mb-2' style={{color: '#A2A2A2'}}>Progress</span>
                        <div className="progress" style={{padding:'2px'}}>
                          <div className="progress-bar rounded-3" role="progressbar" aria-valuenow={item.progress} aria-valuemin="0" aria-valuemax="100" style={{width: `${item.progress}%`}}></div>
                        </div>
                      </div>
                    </div>
                  {/* </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))
      ): (
        <p className='d-flex justify-content-center text-none text-xs'>Tidak ada pekerjaan yang diambil</p>
      )}
      </section>

      <section className='pt-4 pb-4 shadow-small bg-white'>
        <div className='container'>
          <div className='col-md-12 p-0'>
            <div className='d-flex flex-row justify-space-between'>
              <div className=''>  Pekerjaan Terbaru!</div>
              <div className='bg-green rounded-xl py-1 px-2-5 text-white font-normal text-xs-small'> {listwork.length} Pekerjaan baru</div>
            </div>
          </div>
        </div>
      </section>
      
    <WorkList listwork={listwork} />
    <BottomBar />
    </div>
  );
}

export default App;
