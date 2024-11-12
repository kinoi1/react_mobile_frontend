import './App.css';
import './assets/main.css';
const baseUrl = process.env.REACT_APP_BASE_URL;

const Data = [
  // { id: "1", nama: "Follow Tiktok", harga: 5000, progress: 30 },
];

function App() {
  return (
    <div>
      <section className="bg-main pt-11 pb-14">
        <div className="container pl-6">
          <div className="row">
            <div className='col-md-12'>
              <div className="d-flex flex-column">
                <div className="text-white">
                  <span className='text-sm'>Halo, Jeni</span>
                </div>
                <div>
                  <span className="text-white opacity-40">Apa kabarmu hari ini?</span>
                </div>
                <div className="w-93 bg-white card p-4 rounded-xl absolute top-16 shadow-lg">
                  <div className="d-flex flex-row justify-space-between">
                    <div className='d-flex gap-4'>
                    <div className="d-flex flex-column">
                      <div className="text-grey font-normal text-base">Saldo Tersedia</div>
                      <div className="text-2xl font-semibold text-blue">Rp. 150.000</div>
                    </div>
                    <div className='d-flex align-self-end'>
                        <img className='w-2-r' alt='tes' src={`${baseUrl}/img/Saldo-icon(white).svg`}></img>
                    </div>
                    </div>
                    <div className='d-flex gap-5'>
                    <div className="d-flex flex-column">
                      <div className="col-md-12 bg-slate-200 rounded-xl d-flex w-full ">
                        <p className="text-blue font-medium flex justify-content-center align-items-center m-0 d-flex w-full px-2">1351</p>
                      </div>
                      <div className="text-grey text-xs d-flex justify-content-center">Pekerjaan</div>
                    </div>
                    <div className="d-flex flex-column">
                      <div className="col-md-12 bg-slate-200 rounded-xl d-flex px-2-5">
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
      </section>

      <section className="pt-24">
        <div className="container ml-4 p-0">
          <img className='w-91 rounded-xl' src={`${baseUrl}/img/Banner2.jpg`} alt='Banner'>
          </img>
        </div>
      </section>

      <section className="pt-8">
        <div className="container pl-6 pr-8">
          <div className='row'>
            <div className="col-md-12 d-flex flex-row gap-1 p-0">
              <p className="w-66 m-0 mr-2 p-0">Pekerjaan aktif</p>
              <div className="w-34 bg-rose-500 text-white rounded-3 px-2 ml-8 text-right">
                Segera Kerjakan!
              </div>
            </div>
          </div>
          
        </div>
      </section>

      <section className="pt-8">
      {Data.length > 0 ? (
        Data.map((item,index) => (
        <div className='container pl-6' key={index}>
          <div className="bg-white p-2 rounded-xl shadow-lg work-active py-4">
            <div className='col-md-12 p-0'>
              {/* <div class="d-flex flex-row"> */}
                <div className="d-flex flex-row">
                  <div className='w-20 bg-slate-200 rounded-lg'>
                  
                  </div>
                  <div className='col-md-5 d-flex flex-column pl-2'>
                    <div className='text-slate-400'>
                      <p className='m-0'>{item.nama}</p>
                    </div>
                    <div className='text-sky-600'>
                      <p className='m-0'><i></i> Rp. {item.harga}</p>
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
      ))
    ): (
      <p className='d-flex justify-content-center opacity-40'>Tidak ada pekerjaan yang diambil</p>
    )}
      </section>

      <section className='position-fixed pb-4'>
        <div className='w-full d-flex px-8 gap-10'>
          <div>
            <a href='foo' onClick=''>
              <img className='w-14-r' src={`${baseUrl}/img/navbar-icon/Navbar-beranda.svg`} alt='icon'></img>
            </a>
          </div>
          <div>
            <a href='foo' onClick=''>
              <img className='w-14-r' src={`${baseUrl}/img/navbar-icon/Navbar-pekerjaan.svg`} alt='icon'></img>
            </a>
          </div>
          <div>
            <a href='foo' onClick=''>
              <img className='w-14-r' src={`${baseUrl}/img/navbar-icon/Navbar-riwayat.svg`} alt='icon'></img>
            </a>
          </div>
          <div>
            <a href='foo' onClick=''>
              <img className='w-14-r' src={`${baseUrl}/img/navbar-icon/Navbar-setting.svg`} alt='icon'></img>
            </a>
          </div>
          <div>
            <a href='foo' onClick=''>
              <img className='w-14-r' src={`${baseUrl}/img/navbar-icon/Navbar-wallet.svg`} alt='icon'></img>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
