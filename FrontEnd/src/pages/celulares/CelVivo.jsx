import React from 'react'
import {Slideshow, Slide, TextoSlide} from 'components/SliderTwo'
import 'styles/SliderTwo.css';
import vivo1 from "media/celulares/vivo1.jpg"
import vivo2 from "media/celulares/vivo2.jpg"
import vivo3 from "media/celulares/vivo3.jpg"

export default function CelVivo() {
    let i = 1; 
    let j = 759900;

    const ContadorMas = ()=>{ 
        i = i + 1;
        j = j + 759900; 
        let cant = document.getElementById("unidadesvi");
        let sum = document.getElementById("vUnitariovi");

        cant.value = i;
        sum.value = j;

        if(cant.value === 1){
            i=1;
            j=759900
            cant.value="1";
            sum.value="759900"
        }
    } 

    function ContadormEnos(){ 
        if(i>=2){
            i = i - 1;
            j = j - 759900; 
            let cant = document.getElementById("unidadesvi"); 
            let rest = document.getElementById("vUnitariovi");

            cant.value = i;
            rest.value = j;

            if(cant.value === 1){
                i=1;
                j=759900
                cant.value="1";
                rest.value="759900"
            }
        }
            
    }
    return (
        <div>
            <div className="container-productos">
            <div className="produc-aline">
                <main className="main-slider-produc">
			<Slideshow controles={true}>
				<Slide>
					<img src={vivo1} alt="Celular Vivo"/>
				</Slide>
				<Slide>
					<img src={vivo2} alt="Celular Vivo"/>
				</Slide>
				<Slide>
					<img src={vivo3} alt="Celular Vivo"/>
				</Slide>
			</Slideshow>
            </main>
            </div>

      
            <div className="formulario">
                <form>
                    <h1>Celular vivo Y50 128GB</h1>

                    <label for="idProducto"> <b>ID del Producto</b> </label><br></br>
                    <input type="text" value="C-05" readonly="true" id="idProducto"/>
                    <br></br>

                    <label for="descProducto"> <b>Descripción del Producto</b> </label><br></br>
                    <ul className="descrip-produ">
                        <li>Tamaño de la pantalla: 6.5 pulgadas</li>
                        <li>Cámara posterior: 13MP</li>
                        <li>Cámara frontal: 16MP</li>
                        <li>Memoria interna: 128GB</li>
                        <li>Capacidad de la batería (mAh): 5000 mAh</li>
                    </ul>
                    <br></br>

                    <label for="idProducto"> <b>Disponibilidad</b> </label><br></br>
                    <input type="text" value="Disponible" readonly="true" id="idProducto"/>
                    <br></br>

                    <label for="vUnitario"> <b>Valor Unitario del Producto</b> </label><br></br>
                    $<input type="number" value="759.900" readonly="true" id="vUnitariovi"/>
                    <br></br>

                    <label for="cantidad"> <b>Unidades</b> </label><br></br>
                    <button for="btn-" type="button" id="btn-" onClick={ContadormEnos}>-</button>
                    <input id="unidadesvi" type="number" value="1" />
                    <button for="btn+" type="button" id="btn+" onClick={ContadorMas}>+</button>
                </form>
            </div>
            </div>
        </div>
    )
}
