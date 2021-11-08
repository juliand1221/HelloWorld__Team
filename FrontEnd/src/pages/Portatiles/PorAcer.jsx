import React from 'react'
import {Slideshow, Slide, TextoSlide} from '../../components/SliderTwo'
import 'styles/SliderTwo.css';
import acer1 from "media/portatiles/acer1.jpg"
import acer2 from "media/portatiles/acer2.jpg"
import acer3 from "media/portatiles/acer3.jpg"

export default function PorAcer() {
    let i = 1; 
    let j = 3290000;

    const ContadorMas = ()=>{ 
        i = i + 1;
        j = j + 3290000; 
        let cant = document.getElementById("unidadesacer");
        let sum = document.getElementById("vUnitarioacer");

        cant.value = i;
        sum.value = j;

        if(cant.value === 1){
            i=1;
            j=3290000
            cant.value="1";
            sum.value="3290000"
        }
    } 

    function ContadormEnos(){ 
        if(i>=2){
            i = i - 1;
            j = j - 3290000; 
            let cant = document.getElementById("unidadesacer"); 
            let rest = document.getElementById("vUnitarioacer");

            cant.value = i;
            rest.value = j;

            if(cant.value === 1){
                i=1;
                j=3290000
                cant.value="1";
                rest.value="3290000"
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
					<img src={acer1} alt="acer"/>
				</Slide>
				<Slide>
					<img src={acer2} alt="acer"/>
				</Slide>
				<Slide>
					<img src={acer3} alt="acer"/>
				</Slide>
			</Slideshow>
            </main>
            </div>

      
            <div className="formulario">
                <form>
                    <h1>Portátil Acer Swif 3 13.5</h1>

                    <label for="idProducto"> <b>ID del Producto</b> </label><br></br>
                    <input type="text" value="P-04" readonly="true" id="idProducto"/>
                    <br></br>

                    <label for="descProducto"> <b>Descripción del Producto</b> </label><br></br>
                    <ul className="descrip-produ">
                        <li>Procesador: Intel Core i5 1135G7</li>
                        <li>Memoria RAM: 8GB</li>
                        <li>Tamaño de la pantalla: 13.5 pulgadas</li>
                        <li>Unidad de estado sólido SSD: 512GB</li>
                        <li>3 USB 3.2 de 1.a generación</li>
                        <li>1 conector combinado de auriculares / micrófono (3,5 mm)</li>
                    </ul>
                    <br></br>

                    <label for="idProducto"> <b>Disponibilidad</b> </label><br></br>
                    <input type="text" value="Disponible" readonly="true" id="idProducto"/>
                    <br></br>

                    <label for="vUnitario"> <b>Valor Unitario del Producto</b> </label><br></br>
                    $<input type="number" value="3290.000" readonly="true" id="vUnitarioacer"/>
                    <br></br>

                    <label for="cantidad"> <b>Unidades</b> </label><br></br>
                    <button for="btn-" type="button" id="btn-" onClick={ContadormEnos}>-</button>
                    <input id="unidadesacer" type="number" value="1" />
                    <button for="btn+" type="button" id="btn+" onClick={ContadorMas}>+</button>

                </form>
            </div>
        </div> 
        </div>
    )
}
