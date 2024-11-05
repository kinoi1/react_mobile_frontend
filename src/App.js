import './App.css';
import './assets/main.css';

function App() {
  return (
    <div>
      <section className="bg-main pt-11 pb-14">
        <div className="container">
          <div className="row">
            <div className="flex flex-col px-4">
              <div className="text-white">
                <span>Halo, Jeni</span>
              </div>
              <div>
                <span>apa kabar</span>
              </div>
              <div className="bg-white w-11/12 p-4 rounded-xl absolute top-28 shadow-lg">
                <div className="flex flex-row gap-4">
                  <div className="flex flex-col">
                    <div className="text-slate-400">Saldo Tersedia</div>
                    <div className="text-sky-600">Rp. 150.000</div>
                  </div>
                  <div className="flex flex-col">
                    <div className="bg-slate-200 rounded-lg">
                      <p className="text-sky-600 flex justify-center">1351</p>
                    </div>
                    <div className="text-slate-400">Pekerjaan</div>
                  </div>
                  <div className="flex flex-col">
                    <div className="bg-slate-200 rounded-lg">
                      <p className="text-sky-600 flex justify-center">Rp 500k</p>
                    </div>
                    <div className="text-slate-400">Penarikan</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-16">
        <div className="container ml-4">
          <div className="w-11/12 bg-sky-600 rounded-lg">
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
        <div className="container mx-4">
          <div className="w-11/12 flex flex-row gap-1">
            <p className="w-6/12 mr-2">Pekerjaan aktif</p>
            <div className="bg-rose-500 text-white rounded-lg px-2 ml-8">
              Segera Kerjakan!
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
