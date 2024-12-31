import '../../../assets/settingsComponents.css';
import { Link } from "react-router-dom";


function HeaderSetting(param){
    const baseUrl = process.env.REACT_APP_BASE_URL;

    return (
        <div className="position-fixed z-index-2 w-full header-setting bg-white shadow-small d-flex align-items-center"
        style={{boxShadow: '0px -5px 20px 0px rgba(0,0,0,0.05)',
            WebkitBoxShadow: '0px -5px 20px 0px rgba(0,0,0,0.05)',
            MozBoxShadow: '0px -5px 20px 0px rgba(0,0,0,0.05)'}}
        >
            <div className="col-12">
                <div>
                    <Link to={`${baseUrl}/settings`} className='no-hover-underline text-black'> <i className="fa fa-angle-left text-blue"></i>  {param.label} </Link>
                </div>
            </div>

        </div>
    )
}
export default HeaderSetting;