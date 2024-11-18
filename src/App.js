import './App.css';
import './assets/main.css';
const baseUrl = process.env.REACT_APP_BASE_URL;

const Data = [
  // { id: "1", nama: "Follow Tiktok", harga: 5000, progress: 30 },
];

const listwork = [
  {id: "1", icon: "icon-follow", nama: " Youtube", harga:"500"},
  {id: "1", icon: "icon-follow", nama: "tes Youtube", harga:"500"}

]

function App() {
  return (
    <div>
      <section className="w-full bg-main pt-7 pb-30 position-fixed z-index-2">
        <div className="w-full container position-fixed z-index-2">
          <div className="w-full row position-fixed z-index-2">
            <div className='w-full col-md-12 position-fixed z-index-2'>
              <div className="text-white">
                  <span className='text-sm'>Halo, Jeni</span>
                </div>
                <div className='pb-6'> 
                  <span className="text-white opacity-40">Apa kabarmu hari ini?</span>
                </div>
              <div className="d-flex flex-column">
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <div className='card-fixed-d z-index-2'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
            <div className="bg-white card p-4 rounded-xl position-fixed z-index-2  shadow-lg card-fixed">
              <div className="d-flex flex-row justify-space-between">
                <div className='d-flex gap-4 n-detail'>
                  <div className="d-flex flex-column justify-content-end">
                    <div className="text-grey font-normal text-base">Saldo Tersedia</div>
                    <div className="text-2xl font-semibold text-blue"><span>Rp. 150.000</span></div>
                  </div>
                <div className='d-flex align-self-end pb-1'>
                    <img className='w-2-r' alt='tes' src={`${baseUrl}/img/Saldo-icon(white).svg`}></img>
                </div>
                </div>
                <div className='d-flex gap-5'>
                <div className="d-flex flex-column">
                  <div className="col-md-12 bg-slate-200 rounded-xl d-flex n-work">
                    <p className="text-blue font-medium flex justify-content-center align-items-center m-0 d-flex px-2">1351</p>
                  </div>
                  <div className="text-grey text-xs d-flex justify-content-center">Pekerjaan</div>
                </div>
                <div className="d-flex flex-column">
                  <div className="col-md-12 bg-slate-200 rounded-xl d-flex px-2-5 n-work">
                    <p className="text-blue flex align-self-center m-0">Rp 500k</p>
                  </div>
                  <div className="text-grey text-xs d-flex justify-content-center">Penarikan</div>
                </div>
                </div>
              </div>
            </div>
            </div>
            
          </div>
        </div>
      </div>

      


      <section className="banner-dashboard">
        <div className="container">
          <div className='row'>
            <div className='col-md-12'>
              <img className='w-100 rounded-xl' src={`${baseUrl}/img/Banner2.jpg`} alt='Banner'>
              </img>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-8">
        <div className="container pl-6 pr-8">
          <div className='row'>
            <div className="col-md-12 d-flex flex-row gap-1 p-0 justify-space-between">
              <p className="m-0 mr-2 p-0">Pekerjaan aktif</p>
              <div className="text-xs bg-rose-500 text-white rounded-3 px-2-5 ml-8 text-right d-flex align-items-center">
                Segera Kerjakan!
              </div>
            </div>
          </div>
          
        </div>
      </section>

      <section className="pt-8">
      {Data.length > 0 ? (
        Data.map((item,index) => (
        <div className='container' key={index}>
          <div className='row'>
            <div className='col-md-12'>
              <div className="bg-white p-2 rounded-xl shadow-lg work-active py-4">
                <div className='col-md-12 p-0'>
                  {/* <div class="d-flex flex-row"> */}
                    <div className="d-flex flex-row">
                      <div className='w-20 bg-slate-200 rounded-lg'>
                      
                      </div>
                      <div className='col-md-5 d-flex flex-column pl-2'>
                        <div className='text-slate-400'>
                          <p className='m-0 font-medium'>{item.nama}</p>
                        </div>
                        <div className='text-sky-600 d-flex flex-row gap-2'>
                          <img src={`${baseUrl}/img/Saldo-icon(blue).svg`}></img><p className='m-0 text-blue font-medium'> Rp. {item.harga}</p>
                        </div>
                      </div>
                    
                      <div className='col-md-5'>
                        <span className='d-flex justify-content-end'>Progress</span>
                        <div className="progress">
                          <div className="progress-bar " role="progressbar" aria-valuenow={item.progress} aria-valuemin="0" aria-valuemax="100"></div>
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
        <p className='d-flex justify-content-center opacity-40'>Tidak ada pekerjaan yang diambil</p>
      )}
      </section>

      <section className='pt-4 pb-4 shadow-small'>
        <div className='container'>
          <div className='col-md-12 bg-white w-full p-0'>
            <div className='d-flex flex-row justify-space-between'>
              <div className='text-label font-medium'> Pekerjaan Terbaru!</div>
              <div className='bg-green rounded-xl p-1 px-2 text-white font-normal text-xs'>Pekerjaan baru</div>
            </div>
          </div>
        </div>
      </section>
      
<section className='listwork-section'>
    {listwork.length > 0 ? (
        listwork.map((item,index) => (
      <div className='shadow-small' key={index}>
        <div className='container'>
          <div className='col-md-12 p-0'>
            <div className='bg-white'>
              <div className='col-md-12 list-work'>
                <div className='d-flex'>
                  <div className='rounded-lg'>
                    <img className='work-image' src={`${baseUrl}/img/work-icon/Follower-icon.svg`} alt='indobuzz'></img>
                  </div>
                  <div className='col-md-5'>
                    <div className='d-flex flex-column gap-03'>
                      <span className='text-xs'>{item.nama}</span>
                      <span className='text-small'> <img className='w-1-r' src={`${baseUrl}/img/work-icon/Tiket-icon.svg`} ></img> <span className='opacity-60'>Maks Ambil 4 tiket</span>
                      </span>
                      <span className='text-blue text-small'>
                        <img className='w-1-r' src={`${baseUrl}/img/Saldo-icon(blue).svg`} alt='indobuzz'></img>
                        <span className='pl-01'>Rp. {item.harga}</span>
                        
                      </span>
                    </div>
                  </div>
                  <div className='col-md-6 d-flex justify-content-end'>
                    <div className='row align-items-center'>
                      <button className='btn btn-primary text-xs h-60 rounded-small'>
                          Ambil Pekerjaan
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      ))
    ):(
      <p>cek</p>
    )}
    <div className='py-8'>
      <div className='d-flex justify-content-center'>
        <button className='btn bg-slate-200 text-xs rounded-3'>
          Lihat semua <i className='fa fa-arrow-right text-blue'></i>
        </button>
      </div>
    </div>
</section>

      <section className='bg-white position-fixed w-full bottom-0'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <div className='w-full d-flex px-4 gap-4'>
              <div>
                <a href='foo' className='icon-home button-bar-active' onClick=''>
      

                </a>
              </div>
              <div>
                <a href='./pekerjaan.js' className='icon-work' onClick=''>
              
                </a>
              </div>
              <div>
                <a href='foo' className='icon-riwayat' onClick=''>
                  
                </a>
              </div>
              <div>
                <a href='foo' className='icon-setting' onClick=''>

                </a>
              </div>
              <div>
                <a href='foo' className='icon-wallet' onClick=''>
                  
                </a>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
