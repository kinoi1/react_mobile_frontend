import './App.css';
import './assets/main.css';

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
                        <span className='fa fa-coins'></span>
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
        <div className="container pl-6">
          <div className='row'>
            <div className="col-md-12 d-flex flex-row gap-1">
              <p className="col-md-8 m-0 mr-2 p-0">Pekerjaan aktif</p>
              <div className="col-md-4 bg-rose-500 text-white rounded-lg px-2 ml-8 text-right">
                Segera Kerjakan!
              </div>
            </div>
          </div>
          
        </div>
      </section>

      <section className="pt-8 work-active">
        <div className="bg-white w-11/12 p-4 rounded-xl shadow-lg">
          <div className='w-full'>
            <div class="flex flex-row">
              <div className='bg-slate-200 rounded-lg'>
                
              </div>
              <div className="flex flex-row">
                <div className='flex flex-col'>
                  <div className='text-slate-400'>
                    <p>Follow Tiktok</p>
                  </div>
                  <div className='text-sky-600'>
                    <p><i></i> Rp. 500</p>
                  </div>
                </div>
               
                <div className='flex flex-col'>
                  <span>Progress</span>
                  <div className="bg-blue-600 h-4 rounded-full progress-50">

                  </div>
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
