import React from 'react'

export default function CelSamsung() {
    let i = 1; 
    let j = 800000;

    const ContadorMas = ()=>{ 
        i = i + 1;
        j = j + 800000; 
        let cant = document.getElementById("unidades");
        let sum = document.getElementById("vUnitario");

        cant.value = i;
        sum.value = j;

        if(cant.value === 1){
            i=1;
            j=800000
            cant.value="1";
            sum.value="800000"
        }
    } 

    function ContadormEnos(){ 
        if(i>=2){
            i = i - 1;
            j = j - 800000; 
            let cant = document.getElementById("unidades"); 
            let rest = document.getElementById("vUnitario");

            cant.value = i;
            rest.value = j;

            if(cant.value === 1){
                i=1;
                j=800000
                cant.value="1";
                rest.value="800000"
            }
        }
            
    }

    return (
        <div>
            <div> 
            <div className="container-productos">
            <div className="produc-aline">
                <main className="main-slider-produc">
			<Slideshow controles={true}>
				<Slide>
					<img src={Sam1} alt="Samsung"/>
				</Slide>
				<Slide>
					<img src={Sam2} alt="Samsung"/>
				</Slide>
				<Slide>
					<img src={Sam3} alt="Samsung"/>
				</Slide>
			</Slideshow>
            </main>
            </div>

      
            <div className="formulario">
                <form>
                    <h1>Celular Samsung A10S</h1>

                    <label for="idProducto"> <b>ID del Producto</b> </label><br></br>
                    <input type="text" value="01" readonly="true" id="idProducto"/>
                    <br></br>

                    <label for="descProducto"> <b>Descripción del Producto</b> </label><br></br>
                    <ul className="descrip-produ">
                        <li>Tamaño de la pantalla: 6.2 "
                        (156.9 mm x 75.8 mm x 7.8 mm</li>
                        <li>Memoria interna: 32 GB</li>
                        <li>Cámara trasera principal: 13 Mpx</li>
                        <li>Cámara frontal principal: 8 Mpx</li>
                        <li>Desbloqueo: Huella dactilar y reconocimiento facial</li>
                    </ul>
                    <br></br>

                    <label for="idProducto"> <b>Disponibilidad</b> </label><br></br>
                    <input type="text" value="Disponible" readonly="true" id="idProducto"/>
                    <br></br>

                    <label for="vUnitario"> <b>Valor Unitario del Producto</b> </label><br></br>
                    $<input type="number" value="620.900" readonly="true" id="vUnitario"/>
                    <br></br>

                    <label for="cantidad"> <b>Unidades</b> </label><br></br>
                    <button for="btn-" type="button" id="btn-" onClick={ContadormEnos}>-</button>
                    <input id="unidades" type="number" value="1" />
                    <button for="btn+" type="button" id="btn+" onClick={ContadorMas}>+</button>
            
                    <div className="boton-pro">
                        <button for="compra" type="button" id="comprar">Comprar ahora</button>
                        <button for="carrito" type="button" id="agregar">Agregar a carrito</button>
                    </div>
                </form>
            </div>
            </div>
            </div>
        </div>
    )
}
