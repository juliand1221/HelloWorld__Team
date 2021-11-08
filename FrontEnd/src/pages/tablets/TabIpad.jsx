import React from 'react'
import {Slideshow, Slide, TextoSlide} from '../../components/SliderTwo'
import 'styles/SliderTwo.css';
import ipad1 from "media/tablets/ipad1.jpg"
import ipad2 from "media/tablets/ipad2.jpg"
import ipad3 from "media/tablets/ipad3.jpg"

export default function TabIpad() {
    let i = 1; 
    let j = 1789900;

    const ContadorMas = ()=>{ 
        i = i + 1;
        j = j + 1789900; 
        let cant = document.getElementById("unidadesipad");
        let sum = document.getElementById("vUnitarioipad");

        cant.value = i;
        sum.value = j;

        if(cant.value === 1){
            i=1;
            j=1789900
            cant.value="1";
            sum.value="1789900"
        }
    } 

    function ContadormEnos(){ 
        if(i>=2){
            i = i - 1;
            j = j - 1789900; 
            let cant = document.getElementById("unidadesipad"); 
            let rest = document.getElementById("vUnitarioipad");

            cant.value = i;
            rest.value = j;

            if(cant.value === 1){
                i=1;
                j=1789900
                cant.value="1";
                rest.value="1789900"
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
					<img src={ipad1} alt="Huawei"/>
				</Slide>
				<Slide>
					<img src={ipad2} alt="Huawei"/>
				</Slide>
				<Slide>
					<img src={ipad3} alt="Huawei"/>
				</Slide>
			</Slideshow>
            </main>
            </div>

      
            <div className="formulario">
                <form>
                    <h1>Ipad 9na Generación 10.2 pulgadas 64GB</h1>

                    <label for="idProducto"> <b>ID del Producto</b> </label><br></br>
                    <input type="text" value="T-04" readonly="true" id="idProducto"/>
                    <br></br>

                    <label for="descProducto"> <b>Descripción del Producto</b> </label><br></br>
                    <ul className="descrip-produ">
                        <li>Procesador: Chip A13 Bionic</li>
                        <li>Núcleos del procesador: Hexa Core</li>
                        <li>Tamaño de la pantalla: 10.2 pulgadas</li>
                        <li>Velocidad del procesador: 2x2.65 GHz</li>
                        <li>Memoria RAM: No aplica</li>
                        <li>Memoria Interna: 64GB</li>
                        
                    </ul>
                    <br></br>

                    <label for="idProducto"> <b>Disponibilidad</b> </label><br></br>
                    <input type="text" value="Disponible" readonly="true" id="idProducto"/>
                    <br></br>

                    <label for="vUnitario"> <b>Valor Unitario del Producto</b> </label><br></br>
                    $<input type="number" value="1789.900" readonly="true" id="vUnitarioipad"/>
                    <br></br>

                    <label for="cantidad"> <b>Unidades</b> </label><br></br>
                    <button for="btn-" type="button" id="btn-" onClick={ContadormEnos}>-</button>
                    <input id="unidadesipad" type="number" value="1" />
                    <button for="btn+" type="button" id="btn+" onClick={ContadorMas}>+</button>
   
                </form>
            </div>
            </div>

        </div>
    )
}
