import React from 'react'
import {Slideshow, Slide, TextoSlide} from '../../components/SliderTwo'
import 'styles/SliderTwo.css';
import play1 from "media/consolas/play1.jpg"
import play2 from "media/consolas/play2.jpg"
import play3 from "media/consolas/play3.jpg"

export default function ConsoPlay() {
    let i = 1; 
    let j = 3790000;

    const ContadorMas = ()=>{ 
        i = i + 1;
        j = j + 3790000; 
        let cant = document.getElementById("unidadesplay");
        let sum = document.getElementById("vUnitarioplay");

        cant.value = i;
        sum.value = j;

        if(cant.value === 1){
            i=1;
            j=3790000
            cant.value="1";
            sum.value="3790000"
        }
    } 

    function ContadormEnos(){ 
        if(i>=2){
            i = i - 1;
            j = j - 3790000; 
            let cant = document.getElementById("unidadesplay"); 
            let rest = document.getElementById("vUnitarioplay");

            cant.value = i;
            rest.value = j;

            if(cant.value === 1){
                i=1;
                j=3790000
                cant.value="1";
                rest.value="3790000"
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
					<img src={play1} alt="playstation 5"/>
				</Slide>
				
				<Slide>
					<img src={play3} alt="playstation 5"/>
				</Slide>
			</Slideshow>
            </main>
            </div>

      
            <div className="formulario">
                <form>
                    <h1>PlayStation 5</h1>

                    <label for="idProducto"> <b>ID del Producto</b> </label><br></br>
                    <input type="text" value="N-02" readonly="true" id="idProducto"/>
                    <br></br>

                    <label for="descProducto"> <b>Descripción del Producto</b> </label><br></br>
                    <ul className="descrip-produ">
                        <li>Procesador de 8 núcleos a hasta 3,5 GHz</li>
                        <li>Procesador gráfico personalizado hasta 2,23 GHz</li>
                        <li>MEMORIA: 16 GB GDDR6 con bus de 256 bits</li>
                        <li>ANCHO DE BANDA DE LA MEMORIA: 16 GB a 448 GB/s</li>
                        <li>UNIDAD ÓPTICA: Lector de Blu-ray 4K</li>
                        <li>CONECTIVIDAD INALÁMBRICA: WiFi 6 Bluetooth 5.1</li>
                    </ul>
                    <br></br>

                    <label for="idProducto"> <b>Disponibilidad</b> </label><br></br>
                    <input type="text" value="Disponible" readonly="true" id="idProducto"/>
                    <br></br>

                    <label for="vUnitario"> <b>Valor Unitario del Producto</b> </label><br></br>
                    $<input type="number" value="3769.000" readonly="true" id="vUnitarioplay"/>
                    <br></br>

                    <label for="cantidad"> <b>Unidades</b> </label><br></br>
                    <button for="btn-" type="button" id="btn-" onClick={ContadormEnos}>-</button>
                    <input id="unidadesplay" type="number" value="1" />
                    <button for="btn+" type="button" id="btn+" onClick={ContadorMas}>+</button>
            
                </form>
            </div>
            </div> 
        </div>
    )
}
