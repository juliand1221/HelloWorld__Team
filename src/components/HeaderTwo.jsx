import { Link } from "react-router-dom";
import logo from "../media/logo_white_large.png";


const HeaderTwo=() =>{
    return(
        <header className="hola">
            <div className="Nomempre">
                <Link to="/" >
                <img src={logo} />
                </Link>
            </div>
             <div className="HeaderNav">
                 <nav>
                    
                </nav>
            </div>
        </header>
    );
};

export default HeaderTwo;