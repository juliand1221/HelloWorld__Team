import React from 'react'
import {Slideshow, Slide, TextoSlide} from 'components/SliderTwo'
import 'styles/SliderTwo.css';
import moto1 from "media/celulares/moto1.jpg"
import moto2 from "media/celulares/moto2.jpg"
import moto3 from "media/celulares/moto3.jpg"

export default function CelMoto() {
    let i = 1; 
    let j = 619900;

    const ContadorMas = ()=>{ 
        i = i + 1;
        j = j + 619900; 
        let cant = document.getElementById("unidadesmoto");
        let sum = document.getElementById("vUnitariomoto");

        cant.value = i;
        sum.value = j;

        if(cant.value === 1){
            i=1;
            j=619900
            cant.value="1";
            sum.value="619900"
        }
    } 

    function ContadormEnos(){ 
        if(i>=2){
            i = i - 1;
            j = j - 619900; 
            let cant = document.getElementById("unidadesmoto"); 
            let rest = document.getElementById("vUnitariomoto");

            cant.value = i;
            rest.value = j;

            if(cant.value === 1){
                i=1;
                j=619900
                cant.value="1";
                rest.value="619900"
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
					<img src={moto1} alt="Samsung"/>
				</Slide>
				<Slide>
					<img src={moto2} alt="Samsung"/>
				</Slide>
				<Slide>
					<img src={moto3} alt="Samsung"/>
				</Slide>
			</Slideshow>
            </main>
            </div>

      
            <div className="formulario">
                <form>
                    <h1>Celular MOTOROLA G20 64GB Rosado</h1>

                    <label for="idProducto"> <b>ID del Producto</b> </label><br></br>
                    <input type="text" value="C-04" readonly="true" id="idProducto"/>
                    <br></br>

                    <label for="descProducto"> <b>Descripción del Producto</b> </label><br></br>
                    <ul className="descrip-produ">
                        <li>Sistema de 4 cámaras con 48 MP</li>
                        <li>Pantalla fluida de 90 Hz con 6.5</li>
                        <li>Hasta 2 días de batería</li>
                        <li>Lector de Huella </li>
                        <li>Reconocimiento Facial </li>
                    </ul>
                    <br></br>

                    <label for="idProducto"> <b>Disponibilidad</b> </label><br></br>
                    <input type="text" value="Disponible" readonly="true" id="idProducto"/>
                    <br></br>

                    <label for="vUnitariomoto"> <b>Valor Unitario del Producto</b> </label><br></br>
                    $<input type="number" value="619.900" readonly="true" id="vUnitariomoto"/>
                    <br></br>

                    <label for="cantidad"> <b>Unidades</b> </label><br></br>
                    <button for="btn-" type="button" id="btn-" onClick={ContadormEnos}>-</button>
                    <input id="unidadesmoto" type="number" value="1" />
                    <button for="btn+" type="button" id="btn+" onClick={ContadorMas}>+</button>
            
                </form>
            </div>
            </div> 
        </div>
    )
}
