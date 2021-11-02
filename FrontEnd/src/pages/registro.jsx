import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/registro.css"


export default function RegistroDatos() {
    return (
        <div className="cajon">
		    <div className="form__top">
			    <h2>Crea tu cuenta</h2>
		    </div>

		    <form className="form__reg" action="">
			    <input className="input" type="text" placeholder="&#128100;  Nombre Completo" required autofocus/>
                <input className="input" type="email" placeholder="&#9993;  Correo Electronico" required/>
                <input className="input" type="password" placeholder="&#9913;  Contraseña" required/>
                <input className="input" type="tel" placeholder="&#128222;  Telefono" required/>
                <input className="input" type="text" placeholder="&#8962;  Dirección" required/>
                <select className="input" required>
                    <option value="comprador">Comprador</option>
                    <option value="vendedor">Vendedor</option>
                </select>

                <div className="btn__form">
            	    <input className="btn__submit" type="submit" value="REGISTRAR"/>
            	    <input className="btn__reset" type="reset" value="LIMPIAR"/>	
                </div>
                <div className="cuenta">
                    <p>¿Ya tienes una cuenta?</p>
                    <Link to="/login">
                    <input className="btn__cuenta" type="submit" value="INGRESAR"/>
                    </Link>
                </div>
                
		    </form>
	    </div>
    )
}
