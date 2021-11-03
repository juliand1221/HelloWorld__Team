import React from 'react'
import {Slideshow, Slide, TextoSlide} from '../../components/SliderTwo'
import 'styles/SliderTwo.css';
import parla1 from "media/bafles/parla1.jpg"
import parla2 from "media/bafles/parla2.jpg"
import parla3 from "media/bafles/parla3.jpg"

export default function ParBeat() {
    let i = 1; 
    let j = 49900;

    const ContadorMas = ()=>{ 
        i = i + 1;
        j = j + 49900; 
        let cant = document.getElementById("unidadesbeat");
        let sum = document.getElementById("vUnitariobeat");

        cant.value = i;
        sum.value = j;

        if(cant.value === 1){
            i=1;
            j=49900
            cant.value="1";
            sum.value="49900"
        }
    } 

    function ContadormEnos(){ 
        if(i>=2){
            i = i - 1;
            j = j - 49900; 
            let cant = document.getElementById("unidadesbeat"); 
            let rest = document.getElementById("vUnitariobeat");

            cant.value = i;
            rest.value = j;

            if(cant.value === 1){
                i=1;
                j=49900
                cant.value="1";
                rest.value="49900"
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
					<img src={parla1} alt="parlante"/>
				</Slide>
				<Slide>
					<img src={parla2} alt="parlante"/>
				</Slide>
				<Slide>
					<img src={parla3} alt="parlante"/>
				</Slide>
			</Slideshow>
            </main>
            </div>

      
            <div className="formulario">
                <form>
                    <h1>Parlante Bluetooth Black Beat</h1>

                    <label for="idProducto"> <b>ID del Producto</b> </label><br></br>
                    <input type="text" value="B-02" readonly="true" id="idProducto"/>
                    <br></br>

                    <label for="descProducto"> <b>Descripción del Producto</b> </label><br></br>
                    <ul className="descrip-produ">
                        <li>Suena mejor que nunca</li>
                        <li>12 horas de reproducción</li>
                        <li>Diseño resistente al agua conforme a la norma IPX7</li>
                        <li>Versión Bluetooth: 4.2</li>
                        <li>Respuesta de frecuencia dinámica: 65 Hz - 20k Hz</li>
                    </ul>
                    <br></br>

                    <label for="idProducto"> <b>Disponibilidad</b> </label><br></br>
                    <input type="text" value="Disponible" readonly="true" id="idProducto"/>
                    <br></br>

                    <label for="vUnitario"> <b>Valor Unitario del Producto</b> </label><br></br>
                    $<input type="number" value="49.900" readonly="true" id="vUnitariobeat"/>
                    <br></br>

                    <label for="cantidad"> <b>Unidades</b> </label><br></br>
                    <button for="btn-" type="button" id="btn-" onClick={ContadormEnos}>-</button>
                    <input id="unidadesbeat" type="number" value="1" />
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
