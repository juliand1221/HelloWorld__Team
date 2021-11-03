import React from 'react'
import {Slideshow, Slide, TextoSlide} from '../../components/SliderTwo'
import 'styles/SliderTwo.css';
import xbox1 from "media/consolas/xbox1.jpg"
import xbox2 from "media/consolas/xbox2.jpg"
import xbox3 from "media/consolas/xbox3.jpg"

export default function ConsoXbox() {
    let i = 1; 
    let j = 3750000;

    const ContadorMas = ()=>{ 
        i = i + 1;
        j = j + 3750000; 
        let cant = document.getElementById("unidadesxbox");
        let sum = document.getElementById("vUnitarioxbox");

        cant.value = i;
        sum.value = j;

        if(cant.value === 1){
            i=1;
            j=3750000
            cant.value="1";
            sum.value="3750000"
        }
    } 

    function ContadormEnos(){ 
        if(i>=2){
            i = i - 1;
            j = j - 3750000; 
            let cant = document.getElementById("unidadesxbox"); 
            let rest = document.getElementById("vUnitarioxbox");

            cant.value = i;
            rest.value = j;

            if(cant.value === 1){
                i=1;
                j=3750000
                cant.value="1";
                rest.value="3750000"
            }
        }
            
    }
    return (
        <div>
            <div className="container-productos">
            <div className="produc-aline">
                <main className="main-slider-produc-tablet">
			<Slideshow controles={true}>
				<Slide>
					<img src={xbox1} alt="Xbox"/>
				</Slide>
				<Slide>
					<img src={xbox2} alt="Xbox"/>
				</Slide>
				<Slide>
					<img src={xbox3} alt="Xbox"/>
				</Slide>
			</Slideshow>
            </main>
            </div>

      
            <div className="formulario">
                <form>
                    <h1>Consola Xbox Series X 1Tb Microsoft</h1>

                    <label for="idProducto"> <b>ID del Producto</b> </label><br></br>
                    <input type="text" value="N-03" readonly="true" id="idProducto"/>
                    <br></br>

                    <label for="descProducto"> <b>Descripción del Producto</b> </label><br></br>
                    <ul className="descrip-produ">
                        <li>Capacidad de almacenamiento 1TB</li>
                        <li>Modelo: Xbox One Series X</li>
                        <li>Procesador	CPU AMD Zen 2 de ocho núcleos a 3.8GHz</li>
                        <li>Unidad óptica	4K UHD Blu-Ray</li>
                        <li>Tarjeta gráfica	AMD RDNA 2 </li>
                    </ul>
                    <br></br>

                    <label for="idProducto"> <b>Disponibilidad</b> </label><br></br>
                    <input type="text" value="Disponible" readonly="true" id="idProducto"/>
                    <br></br>

                    <label for="vUnitario"> <b>Valor Unitario del Producto</b> </label><br></br>
                    $<input type="number" value="3750.000" readonly="true" id="vUnitarioxbox"/>
                    <br></br>

                    <label for="cantidad"> <b>Unidades</b> </label><br></br>
                    <button for="btn-" type="button" id="btn-" onClick={ContadormEnos}>-</button>
                    <input id="unidadesxbox" type="number" value="1" />
                    <button for="btn+" type="button" id="btn+" onClick={ContadorMas}>+</button>
            
                    <div className="boton-pro">
                        <button for="compra" type="button" id="comprar">Comprar ahora</button>
                    </div>
                </form>
            </div>
            </div>
 
        </div>
    )
}
