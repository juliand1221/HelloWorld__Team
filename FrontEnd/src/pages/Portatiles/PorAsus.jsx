import React from 'react'
import {Slideshow, Slide, TextoSlide} from '../../components/SliderTwo'
import 'styles/SliderTwo.css';
import asus1 from "media/portatiles/asus1.jpg"
import asus2 from "media/portatiles/asus2.jpg"
import asus3 from "media/portatiles/asus3.jpg"

export default function PorAsus() {
    let i = 1; 
    let j = 3490000;

    const ContadorMas = ()=>{ 
        i = i + 1;
        j = j + 3490000; 
        let cant = document.getElementById("unidadesAsus");
        let sum = document.getElementById("vUnitarioAsus");

        cant.value = i;
        sum.value = j;

        if(cant.value === 1){
            i=1;
            j=3490000
            cant.value="1";
            sum.value="3490000"
        }
    } 

    function ContadormEnos(){ 
        if(i>=2){
            i = i - 1;
            j = j - 3490000; 
            let cant = document.getElementById("unidadesAsus"); 
            let rest = document.getElementById("vUnitarioAsus");

            cant.value = i;
            rest.value = j;

            if(cant.value === 1){
                i=1;
                j=3490000
                cant.value="1";
                rest.value="3490000"
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
					<img src={asus1} alt="Asus"/>
				</Slide>
				<Slide>
					<img src={asus2} alt="Asus"/>
				</Slide>
				<Slide>
					<img src={asus3} alt="Asus"/>
				</Slide>
			</Slideshow>
            </main>
            </div>

      
            <div className="formulario">
                <form>
                    <h1>Portátil Asus</h1>

                    <label for="idProducto"> <b>ID del Producto</b> </label><br></br>
                    <input type="text" value="P-03" readonly="true" id="idProducto"/>
                    <br></br>

                    <label for="descProducto"> <b>Descripción del Producto</b> </label><br></br>
                    <ul className="descrip-produ">
                        <li>Procesador: Intel Core i5</li>
                        <li>Memoria RAM: 8GB</li>
                        <li>Tamaño de la pantalla: 13.3 pulgadas</li>
                        <li>Unidad de estado sólido SSD: 512GB</li>
                        <li>Resolución de la pantalla: Full HD (1920x1080)</li>
                        <li>1 conector combinado de auriculares / micrófono (3,5 mm)</li>
                    </ul>
                    <br></br>

                    <label for="idProducto"> <b>Disponibilidad</b> </label><br></br>
                    <input type="text" value="Disponible" readonly="true" id="idProducto"/>
                    <br></br>

                    <label for="vUnitario"> <b>Valor Unitario del Producto</b> </label><br></br>
                    $<input type="number" value="3490.000" readonly="true" id="vUnitarioAsus"/>
                    <br></br>

                    <label for="cantidad"> <b>Unidades</b> </label><br></br>
                    <button for="btn-" type="button" id="btn-" onClick={ContadormEnos}>-</button>
                    <input id="unidadesAsus" type="number" value="1" />
                    <button for="btn+" type="button" id="btn+" onClick={ContadorMas}>+</button>
         
                </form>
            </div>
        </div> 
        </div>
    )
}
