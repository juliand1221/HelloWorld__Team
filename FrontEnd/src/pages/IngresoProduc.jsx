import React from 'react'
import "../styles/inproduc.css"

export default function IngresoProduc() {
    return (
        <div className="body-3">
            <div className="Contenedor-3">
                <div className = "Meduimcontainer">
                    <h1 className="h1-css">Ingreso de producto</h1>

                    <div className="IDProduct">
                        <label for="idProducto"> <b>ID del Producto</b> </label>
                        <input className = "Input" type="text" value="0004" readonly="true" id="idProducto"/><br></br>
                    </div> 

                    <div className="SmallContainer">
                        <label>Tipo de Producto</label>
                            <select name="TipodeProducto" id="TipodeProducto">
                                <option value="Tabletas">Tabletas</option>
                                <option value="Portátiles">Portátiles</option>
                                <option value="Celulares">Celulares </option>
                                <option value="Equiposdeescritorio">Equipos de escritorio </option>
                                <option value="Accesorios">Accesorios </option>
                                <option value="Otro">Otro </option>
                            </select> 
                    </div>

                    <div className="SmallContainer">
                        <label for="descProducto"> <b>Descripción del Producto</b> </label><br></br>
                        <textarea name="descProducto" readonly="readonly" id="descProducto" cols="40" rows="4">La mejor consola del mundo</textarea><br></br>
                    </div>

                    <div className="SmallContainer">
                        <label for="vUnitario"> <b>Valor Unitario del Producto</b> </label>
                        <input type="number" value="2000000" readonly="true" id="vUnitario"/><br></br>
                    </div>

                    <div className="opcion">
                        <label for="disponible"> <b>Disponibilidad del Producto</b> </label><br></br>
                        <div className="sideleft">
                            <input type="radio" value="Dispoible" readonly="true" id="dispoible" name="dispo"/>
                            <label for="dispon"> <b>Disponible</b> </label>
                        </div>
                        <div className="sideright">
                            <input type="radio" value="NDispoible" readonly="true" id="Ndispoible" name="dispo"/>
                            <label for="Ndispon"> <b>No Disponible</b> </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}
