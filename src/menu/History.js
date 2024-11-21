import BottomBar from "../bottom_bar";


function History() {
    const baseUrl = process.env.REACT_APP_BASE_URL;

    return(
        <div>
        <section>
            <div className="container pt-4 pb-16 bg-image">
                <div className="row">
                    <div className="col-md-12 d-flex flex-row">
                        <div className="d-flex flex-column">
                            <span className="text-white opacity-40">Saldo Tersedia</span>
                            <span className="text-white">Rp. 150.000</span>
                        </div>
                        <div className="d-flex align-items-end">
                            <img className='w-2-r' alt='tes' src={`${baseUrl}/img/Saldo-icon(white).svg`}></img>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <div className='card-fixed-d z-index-2'>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 card position-fixed">
                        <div className="d-flex flex-row">
                            <div className="d-flex flex-column">
                                <soan>1351</soan>
                            </div>
                            <div className="d-flex flex-column">
                                <span>Rp. 500k</span>
                            </div>
                            <button className="btn bg-main text-white"> ambil saldo</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className='card-fixed-d z-index-2'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <div className="bg-white card p-4 rounded-xl position-fixed z-index-2  shadow-lg card-fixed">
                            <div className="h-full-work d-flex flex-row justify-space-between">
                                <div className='d-flex gap-5'>
                                    <div className="h-full-work">
                                        <div className="col-md-12 bg-slate-200 rounded-xl h-full-work n-work">
                                            <p className="text-lg h-full-work text-blue font-medium flex justify-content-center align-items-center m-0 d-flex px-2">1351</p>
                                        </div>
                                        <div className='text-grey text-xs'>Pekerjaan</div>
                                    </div>
                                    <div className="h-full-work">
                                        <div className="h-full-work col-md-12 bg-slate-200 rounded-xl d-flex px-2-5 n-work">
                                            <p className="text-lg h-full-work d-flex text-blue flex align-items-center m-0">Rp 500k</p>
                                        </div>
                                        <div className='text-grey text-xs p-penarikan'>Penarikan</div>
                            
                                    </div>
                                </div>
                            </div>
                            
                            <div className='d-flex gap-4 n-detail'>
                                <div className="d-flex flex-column justify-content-end">
                                    <button className="btn bg-main text-white"> Tarik saldo</button>
                                </div>
                            </div>
                        </div>
                    </div>
            
                </div>
            </div>
        </div>

        <BottomBar />
        </div>
    )

}

export default History;
