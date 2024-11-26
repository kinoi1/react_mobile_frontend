import '../../../assets/settingsComponents.css';
import { Link } from "react-router-dom";


function HeaderSetting(param){
    const baseUrl = process.env.REACT_APP_BASE_URL;

    return (
        <div className="position-fixed z-index-2 w-full header-setting bg-white shadow-small">
            <div className="col-12 pt-12">
                <div>
                    <Link to={`${baseUrl}/settings`}> <i className="fa fa-angle-left"></i>  {param.label} </Link>
                </div>
            </div>
        </div>
    )
}
export default HeaderSetting;