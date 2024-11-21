import './App.css';
import './assets/main.css';
import BottomBar from './bottom_bar';
import WorkList from './work-list';

const baseUrl = process.env.REACT_APP_BASE_URL;

const Data = [
  // { id: "1", nama: "Follow Tiktok", harga: 5000, progress: 30 },
];


function App() {
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
              <div className="h-full-work d-flex flex-row justify-space-between">
                <div className='d-flex gap-4 n-detail'>
                  <div className="d-flex flex-column justify-content-end">
                    <div className="text-grey font-normal text-base">Saldo Tersedia</div>
                    <div className="text-base font-semibold text-blue"><span>Rp. 150.000</span></div>
                  </div>
                <div className='d-flex align-self-end pb-1'>
                    <img className='w-2-r' alt='tes' src={`${baseUrl}/img/Saldo-icon(white).svg`}></img>
                </div>
                </div>
                <div className='d-flex gap-5'>
                <div className="h-full-work">
                  <div className="col-md-12 bg-slate-200 rounded-xl h-full-work n-work">
                    <p className="text-lg h-full-work text-blue font-medium flex justify-content-center align-items-center m-0 d-flex px-2">1351</p>
                  </div>
                </div>
                <div className="h-full-work">
                  <div className="h-full-work col-md-12 bg-slate-200 rounded-xl d-flex px-2-5 n-work">
                    <p className="text-lg h-full-work d-flex text-blue flex align-items-center m-0">Rp 500k</p>
                  </div>
                </div>
                </div>
              </div>
              <div className='d-flex flex-row justify-content-end gap-pekerjaan'>
                <div className='text-grey text-xs'>
                  Pekerjaan
                </div>
                <div className='text-grey text-xs p-penarikan'>
                  Penarikan
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

      <section className="bg-white pt-8">
        <div className="container">
          <div className='col-md-12 p-0'>
            <div className="d-flex flex-row gap-1 p-0 justify-space-between">
              <p className="m-0 mr-2 p-0">Pekerjaan aktif</p>
              <div className="text-xs bg-rose-500 text-white rounded-3 px-2-5 ml-8 text-right d-flex align-items-center">
                Segera Kerjakan!
              </div>
            </div>
          </div>
          
        </div>
      </section>

      <section className="bg-white pt-8 pb-8 mb-2">
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
        <p className='d-flex justify-content-center opacity-40 text-xsm'>Tidak ada pekerjaan yang diambil</p>
      )}
      </section>

      <section className='pt-4 pb-4 shadow-small bg-white'>
        <div className='container'>
          <div className='col-md-12 p-0'>
            <div className='d-flex flex-row justify-space-between'>
              <div className='text-label font-medium'> Pekerjaan Terbaru!</div>
              <div className='bg-green rounded-xl p-1 px-2 text-white font-normal text-xs'>Pekerjaan baru</div>
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
