
function ProBafle(){
    return(
        <div className="contenedor">
            <div class="formulario">

                <label for="idProducto"> <b>ID del Producto</b> </label><br></br>
                <input type="text" value="0006" readonly="true" id="idProducto"/>
                <br></br>
                <label for="descProducto"> <b>Descripción del Producto</b> </label><br></br>
                <textarea name="descProducto" readonly="readonly" id="descProducto" cols="40" rows="4">Los mejores parlantes del mundo</textarea>
                <br></br>
                <label for="vUnitario"> <b>Valor Unitario del Producto</b> </label><br></br>
                <input type="number" value="450000" readonly="true" id="vUnitario"/>
            </div>
        </div>
    )
}
export default ProBafle;