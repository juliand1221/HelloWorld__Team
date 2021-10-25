import { Link } from "react-router-dom";
import logo from "../media/logo_white_large.png";

const Header=() =>{
    return(
        <header className="hola">
            <div className="Nomempre">
                <Link to="/" >
                <img src={logo} />
                </Link>
            </div>
             <div className="HeaderNav">
                 <nav>
                    <ul>
                        <li class="current"><a href="/articulos">Productos</a></li>
                        <li class="current"><a href="services.html">Servicios</a></li>
                        <li class="current"><a href="about.html">¿Quienes Somos?</a></li>

                        <li class="current"><a href="/registro">Crea tu Cuenta</a></li>
                        <li class="current"><a href="/login">Ingresa</a></li>
                        <li class="current"><a href="compras.html">Mis Compras</a></li>
                    
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;