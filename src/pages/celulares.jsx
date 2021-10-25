
function PagCelular(){
    let i = 1; 
    let j = 800000;

    const ContadorMas = ()=>{ 
        i = i + 1;
        j = j + 800000; 
        let cant = document.getElementById("unidades");
        let sum = document.getElementById("vUnitario");

        cant.value = i;
        sum.value = j;

        if(cant.value == 1){
            i=1;
            j=800.000
            cant.value="1";
            sum.value="800000"
        }
    } 

    function ContadormEnos(){ 
        if(i>=2){
            i = i - 1;
            j = j - 800000; 
            let cant = document.getElementById("vUnitario"); 
            let sum = document.getElementById("vUnitario");

            cant.value = i;
            sum.value = j;

            if(cant.value == 1){
                i=1;
                j=800000
                cant.value="1";
                sum.value="800000"
            }
        }
            
    }

    return(
        <div className="contenedor">

            <form className="formulario">
            <label for="idProducto"> <b>ID del Producto</b> </label><br></br>
            <input type="text" value="0001" readonly="true" id="idProducto"/>
            <br></br>

            <label for="descProducto"> <b>Descripción del Producto</b> </label><br></br>
            <textarea name="descProducto" readonly="readonly" id="descProducto" cols="40" rows="4">El mejor celular del mundo</textarea>
            <br></br>

            <label for="vUnitario"> <b>Valor Unitario del Producto</b> </label><br></br>
            <input type="number" value="800.000" readonly="true" id="vUnitario"/>
            <br></br>

            <label for="cantidad"> <b>Unidades</b> </label><br></br>
            <button for="btn-" type="button" id="btn-" onClick={ContadormEnos}>-</button>
            <input id="unidades" type="number" value="1" />
            <button for="btn+" type="button" id="btn+" onClick={ContadorMas}>+</button>
            
             




            {/* <select id="cantidad" name="cantidad">
                 <option value="1">1</option> 
                 <option value="1">2</option>
                 <option value="1">3</option>
                 <option value="1">4</option>
                 <option value="1">5</option>
            </select> */}
            
            </form>
        </div>
    )
}

export default PagCelular;
