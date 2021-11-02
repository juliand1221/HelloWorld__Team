import React from 'react'

export default function RegVentas() {
    return (
        <div className="cajon">
		    <div className="form__top">
			    <h2>Registro de Ventas</h2>
		    </div>

		    <form className="form__reg" action="">
			    <input className="input" type="text" placeholder="&#128100;  ID Venta" required autofocus/>
                <input className="input" type="text" placeholder="&#128100;  Nombre Comprador" required autofocus/>
                <input className="input" type="text" placeholder="&#128100;  Valor Total" required autofocus/>
                <input className="input" type="text" placeholder="&#128100;  Documento de Identidad" required autofocus/>
                <input className="input" type="email" placeholder="&#9993;  Correo Electronico" required/>
                <input className="input" type="text" placeholder="&#128222;  Telefono" required/>
                <input className="input" type="text" placeholder="&#8962;  Dirección" required/>
                <div className="btn__form">
            	    <input className="btn__submit" type="submit" value="REGISTRAR"/>
            	    <input className="btn__reset" type="reset" value="LIMPIAR"/>	
                </div>
                
		    </form>
	    </div>
    )
}
