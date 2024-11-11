import './App.css';
import './assets/main.css';
const baseUrl = process.env.REACT_APP_BASE_URL;

function App() {
  return (
    <div>
      <section className="bg-main pt-11 pb-14">
        <div className="container pl-6">
          <div className="row">
            <div className='col-md-12'>
              <div className="d-flex flex-column">
                <div className="text-white">
                  <span>Halo, Jeni</span>
                </div>
                <div>
                  <span className="text-slate-400">apa kabar</span>
                </div>
                <div className="w-93 bg-white card p-4 rounded-xl absolute top-16 shadow-lg">
                  <div className="d-flex flex-row gap-4">
                    <div className="d-flex flex-column pt-3">
                      <div className="small">Saldo Tersedia</div>
                      <div className="lead">Rp. 150.000</div>
                    </div>
                    <div className='d-flex align-self-end'>
                        <img alt='tes' src={`${baseUrl}/saldo.svg`}></img>
                    </div>
                    <div className="d-flex flex-column">
                      <div className="col-md-12 bg-slate-200 rounded-xl d-flex">
                        <p className="text-sky-600 flex align-self-center m-0 pb-2 pt-2">1351</p>
                      </div>
                      <div className="text-slate-400">Pekerjaan</div>
                    </div>
                    <div className="d-flex flex-column">
                      <div className="col-md-12 bg-slate-200 rounded-xl d-flex px-2-5">
                        <p className="text-sky-600 flex justify-center m-0 pb-2 pt-2">Rp 500k</p>
                      </div>
                      <div className="text-slate-400">Penarikan</div>
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
          <div className="w-90 bg-sky-600 rounded-xl shadow-lg card">
            <div className="pl-2">
              <div className="flex flex-col">
                <p>Kini Notif Job Langsung di Whatsapp</p>
                <p>
                  Dapatkan notif pekerjaan secara real-time melalui channel resmi dari
                  indobuzz, Gabung sekarang juga biar ga kehabisan tiket.
                </p>
                <div>Bergabung Sekarang</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-8">
        <div className="container pl-6 pr-8">
          <div className='row'>
            <div className="col-md-12 d-flex flex-row gap-1">
              <p className="w-66 m-0 mr-2 p-0">Pekerjaan aktif</p>
              <div className="w-32 bg-rose-500 text-white rounded-3 px-2 ml-8 text-right">
                Segera Kerjakan!
              </div>
            </div>
          </div>
          
        </div>
      </section>

      <section className="pt-8">
        <div className='container pr-8 pl-6'>
          <div className="bg-white p-2 rounded-xl shadow-lg work-active py-4">
            <div className='col-md-12 p-0'>
              {/* <div class="d-flex flex-row"> */}
                <div className="d-flex flex-row">
                  <div className='w-20 bg-slate-200 rounded-lg'>
                  
                  </div>
                  <div className='col-md-5 d-flex flex-column pl-2'>
                    <div className='text-slate-400'>
                      <p className='m-0'>Follow Tiktok</p>
                    </div>
                    <div className='text-sky-600'>
                      <p className='m-0'><i></i> Rp. 500</p>
                    </div>
                  </div>
                
                  <div className='col-md-5'>
                    <span className='d-flex justify-content-end'>Progress</span>
                    <div className="progress">
                      <div className="progress-bar " role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>
                </div>
              {/* </div> */}
            </div>
          </div>
        </div>

      </section>
    </div>
  );
}

export default App;
