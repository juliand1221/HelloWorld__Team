
function pagTablet(){
    return(
        <div className="contenedor">
            <div className="formulario">
                <label for="idProducto"> <b>ID del Producto</b> </label><br></br>
                <input type="text" value="0002" readonly="true" id="idProducto"/>
                <br></br>
                <label for="descProducto"> <b>Descripción del Producto</b> </label><br></br>
                <textarea name="descProducto" readonly="readonly" id="descProducto" cols="40" rows="4">La mejor tablet del mundo</textarea>
                <br></br>
                <label for="vUnitario"> <b>Valor Unitario del Producto</b> </label><br></br>
                <input type="number" value="650000" readonly="true" id="vUnitario"/>
            </div>
        </div>
    )
}

export default pagTablet;