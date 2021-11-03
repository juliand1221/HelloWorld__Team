import celular from '../media/celulares.png';
import tablet from '../media/tablet_teclado.png';
import portatil from '../media/portatil.png';
import consola from '../media/consola_adobespark.png';
import smartwatch from '../media/smartwatch.png';
import bafle from '../media/parlante.png';
import { Link } from 'react-router-dom';

function ProducVario() {
    return(
        <div>
            <div className="row">
                
                <div className="column">
                    <Link to="/celulares">
                    <img className="demo cursor" src={celular}  alt="Celulares"/>
                    <span className="Title">Celulares</span>
                    </Link>
                </div>
                
                <br></br>
                
                <div className="column">
                    <Link to="/tablet">
                    <img className="demo cursor" src={tablet} alt="Tablets"/>
                    <span className="Title">Tablet</span>
                    </Link>
                </div>
                
                <br></br>
                
                <div className="column">
                    <Link to="/portatil">
                    <img className="demo cursor" src={portatil}  alt="Portatil"/>
                    <span className="Title">Portátil</span>
                    </Link>
                </div>
                
                <br></br>
                
                <div className="column">
                    <Link to="/consola">
                    <img className="demo cursor" src={consola}  alt="Consolas"/>
                    <span className="Title">Consolas</span>
                    </Link>
                </div>
                
                <br></br>
                
                <div className="column">
                    <Link to="/smartwatch">
                    <img className="demo cursor" src={smartwatch} alt="Smartwatch"/>
                    <span className="Title">Smartwatch</span>
                    </Link>
                </div>
                
                <br></br>
                
                <div className="column">
                    <Link to="/parlante">
                    <img className="demo cursor" src={bafle} alt="Bafles Inalambricos"/>
                    <span className="Title">Parlantes</span>
                    </Link>
                </div>
                
            </div>
        </div>
    )
    
}
export default ProducVario;;