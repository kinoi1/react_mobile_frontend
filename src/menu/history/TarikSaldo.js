
import { Link } from "react-router-dom";

function TarikSaldo(){
    const baseUrl = process.env.REACT_APP_BASE_URL;

    return (

        <div>
            <div className="position-fixed z-index-2 w-full header-setting bg-white shadow-small">
                <div className="col-12 pt-12">
                    <div>
                        <Link to={`${baseUrl}/history`}> 
                        <i className="fa fa-angle-left"></i> 
                        <span className="text-black pl-2">Payout otomatis</span> </Link>
                    </div>
                </div>
            </div>
            <div className="bg-white d-flex flex-column container pt-24">
                <div>
                <span className="text-placeholder opacity-50 text-xs font-normal">Saldo Tersedia</span>
                <span className="text-blue text-lg font-semibold d-flex flex-row align-items-center">Rp. 150.000 <i className="icon-saldo ml-2 bg-saldo-white opacity-50"></i></span>
                </div>
            </div>
        </div>
    );
}

export default TarikSaldo;