import React from 'react'
import {Slideshow, Slide, TextoSlide} from '../../components/SliderTwo'
import 'styles/SliderTwo.css';
import sams1 from "media/tablets/tabsam1.jpg"
import sams2 from "media/tablets/tabsam2.jpg"
import sams3 from "media/tablets/tabsam3.jpg"

export default function TabletSamsung() {
     let i = 1; 
    let j = 2250000;

    const ContadorMas = ()=>{ 
        i = i + 1;
        j = j + 2250000; 
        let cant = document.getElementById("unidadestab");
        let sum = document.getElementById("vUnitariotab");

        cant.value = i;
        sum.value = j;

        if(cant.value === 1){
            i=1;
            j=2250000
            cant.value="1";
            sum.value="2250000"
        }
    } 

    function ContadormEnos(){ 
        if(i>=2){
            i = i - 1;
            j = j - 2250000; 
            let cant = document.getElementById("unidadestab"); 
            let rest = document.getElementById("vUnitariotab");

            cant.value = i;
            rest.value = j;

            if(cant.value === 1){
                i=1;
                j=2250000
                cant.value="1";
                rest.value="2250000"
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
					<img src={sams1} alt="sams"/>
				</Slide>
				<Slide>
					<img src={sams2} alt="sams"/>
				</Slide>
				<Slide>
					<img src={sams3} alt="sams"/>
				</Slide>
			</Slideshow>
            </main>
            </div>

      
            <div className="formulario">
                <form>
                    <h1>Tablet Samsung SM-T733NZKVCOO</h1>

                    <label for="idProducto"> <b>ID del Producto</b> </label><br></br>
                    <input type="text" value="T-02" readonly="true" id="idProducto"/>
                    <br></br>

                    <label for="descProducto"> <b>Descripción del Producto</b> </label><br></br>
                    <ul className="descrip-produ">
                        <li>Pantalla: 12.3" HD</li>
                        <li>Resolución cámara principal: 8 MP - frontal: 5 MP</li>
                        <li>Procesador: Snapdragon Octa-Core</li>
                        <li>Memoria RAM: 6 GB</li>
                        <li>Almacenamiento: 128 GB</li>
                        <li>Sistema operativo: 2.4GHz,1.8GHz</li>
                        <li>Batería: 4100 mAh</li>
                        <li>Conectividad: Wifi - Bluetooth 5.1</li>
                    </ul>
                    <br></br>

                    <label for="idProducto"> <b>Disponibilidad</b> </label><br></br>
                    <input type="text" value="Disponible" readonly="true" id="idProducto"/>
                    <br></br>

                    <label for="vUnitario"> <b>Valor Unitario del Producto</b> </label><br></br>
                    $<input type="number" value="2250.000" readonly="true" id="vUnitariotab"/>
                    <br></br>

                    <label for="cantidad"> <b>Unidades</b> </label><br></br>
                    <button for="btn-" type="button" id="btn-" onClick={ContadormEnos}>-</button>
                    <input id="unidadestab" type="number" value="1" />
                    <button for="btn+" type="button" id="btn+" onClick={ContadorMas}>+</button>
            
                </form>
            </div>
            </div>
        </div>
    )
}
