import {Slideshow, Slide, TextoSlide} from '../../components/SliderTwo'
import 'styles/SliderTwo.css';
import React from 'react'
import hp1 from "media/portatiles/hp1.jpg"
import hp2 from "media/portatiles/hp2.jpg"
import hp3 from "media/portatiles/hp3.jpg"

export default function PorHp() {
    let i = 1; 
    let j = 2890000;

    const ContadorMas = ()=>{ 
        i = i + 1;
        j = j + 2890000; 
        let cant = document.getElementById("unidadesHp");
        let sum = document.getElementById("vUnitarioHp");

        cant.value = i;
        sum.value = j;

        if(cant.value === 1){
            i=1;
            j=2890000
            cant.value="1";
            sum.value="2890000"
        }
    } 

    function ContadormEnos(){ 
        if(i>=2){
            i = i - 1;
            j = j - 2890000; 
            let cant = document.getElementById("unidadesHp"); 
            let rest = document.getElementById("vUnitarioHp");

            cant.value = i;
            rest.value = j;

            if(cant.value === 1){
                i=1;
                j=2890000
                cant.value="1";
                rest.value="2890000"
            }
        }
            
    }
    return (
        <div>
            <div className="container-productos">
            <div className="produc-aline">
                <main className="main-slider-produc-portatil">
			<Slideshow controles={true}>
				<Slide>
					<img src={hp1} alt="hp"/>
				</Slide>
				<Slide>
					<img src={hp2} alt="hp"/>
				</Slide>
				<Slide>
					<img src={hp3} alt="hp"/>
				</Slide>
			</Slideshow>
            </main>
            </div>

      
            <div className="formulario">
                <form>
                    <h1>Portátil HP 13.3 Pulgadas Intel Core i5 8GB 256GB</h1>

                    <label for="idProducto"> <b>ID del Producto</b> </label><br></br>
                    <input type="text" value="P-02" readonly="true" id="idProducto"/>
                    <br></br>

                    <label for="descProducto"> <b>Descripción del Producto</b> </label><br></br>
                    <ul className="descrip-produ">
                        <li>Procesador: Intel Core i5</li>
                        <li>Memoria RAM: 8GB</li>
                        <li>Tamaño de la pantalla: 13.3 pulgadas</li>
                        <li>Unidad de estado sólido SSD: 256GB</li>
                        <li>Velocidad máxima del procesador: 4.2 GHz</li>
                        <li>1 conector combinado de auriculares / micrófono (3,5 mm)</li>
                    </ul>
                    <br></br>

                    <label for="idProducto"> <b>Disponibilidad</b> </label><br></br>
                    <input type="text" value="Disponible" readonly="true" id="idProducto"/>
                    <br></br>

                    <label for="vUnitario"> <b>Valor Unitario del Producto</b> </label><br></br>
                    $<input type="number" value="2890.000" readonly="true" id="vUnitarioHp"/>
                    <br></br>

                    <label for="cantidad"> <b>Unidades</b> </label><br></br>
                    <button for="btn-" type="button" id="btn-" onClick={ContadormEnos}>-</button>
                    <input id="unidadesHp" type="number" value="1" />
                    <button for="btn+" type="button" id="btn+" onClick={ContadorMas}>+</button>
        
                </form>
            </div>
        </div>
        </div>
    )
}
