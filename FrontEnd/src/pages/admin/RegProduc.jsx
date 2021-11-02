import React from 'react'

export default function RegProduc() {
    return (
        <div className="cajon">
		    <div className="form__top">
			    <h2>Registro de Productos</h2>
		    </div>

		    <form className="form__reg" action="">
			    <input className="input" type="text" placeholder="&#128100;  ID Producto" required autofocus/>
                <input className="input" type="text" placeholder="&#128100;  Nombre Producto" required autofocus/>
                <input className="input" type="text" placeholder="&#128100;  Descripción Producto" required autofocus/>
                <input className="input" type="text" placeholder="&#128100;  Disponibilidad" required autofocus/>
                <input className="input" type="email" placeholder="&#9993;  Valor Producto" required/>
                <input className="input" type="text" placeholder="&#128222;  Unidades" required/>
                <div className="btn__form">
            	    <input className="btn__submit" type="submit" value="REGISTRAR"/>
            	    <input className="btn__reset" type="reset" value="LIMPIAR"/>	
                </div>
                
		    </form>
	    </div>
    )
}
