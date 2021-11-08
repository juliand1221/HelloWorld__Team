import React from 'react'
import {Slideshow, Slide, TextoSlide} from '../../components/SliderTwo'
import 'styles/SliderTwo.css';
import smart1 from "media/smartwatch/smar1.jpg"
import smart2 from "media/smartwatch/smar2.jpg"
import smart3 from "media/smartwatch/smar3.jpg"

export default function SmartHylou() {
    let i = 1; 
    let j = 219900;

    const ContadorMas = ()=>{ 
        i = i + 1;
        j = j + 219900; 
        let cant = document.getElementById("unidades");
        let sum = document.getElementById("vUnitario");

        cant.value = i;
        sum.value = j;

        if(cant.value === 1){
            i=1;
            j=219900
            cant.value="1";
            sum.value="219900"
        }
    } 

    function ContadormEnos(){ 
        if(i>=2){
            i = i - 1;
            j = j - 219900; 
            let cant = document.getElementById("unidades"); 
            let rest = document.getElementById("vUnitario");

            cant.value = i;
            rest.value = j;

            if(cant.value === 1){
                i=1;
                j=219900
                cant.value="1";
                rest.value="219900"
            }
        }
            
    }
    return (
        <div>
            <div className="cpntainer-productos">
            <div className="produc-aline">
                <main className="main-slider-produc-tablet">
			<Slideshow controles={true}>
				<Slide>
					<img src={smart1} alt="smartwatch"/>
				</Slide>
				<Slide>
					<img src={smart2} alt="smartwatch"/>
				</Slide>
				<Slide>
					<img src={smart3} alt="smartwatch"/>
				</Slide>
			</Slideshow>
            </main>
            </div>

      
            <div className="formulario">
                <form>
                    <h1>Reloj Inteligente Haylou Ls02</h1>

                    <label for="idProducto"> <b>ID del Producto</b> </label><br></br>
                    <input type="text" value="S-01" readonly="true" id="idProducto"/>
                    <br></br>

                    <label for="descProducto"> <b>Descripción del Producto</b> </label><br></br>
                    <ul className="descrip-produ">
                        <li>Tamaño pantalla: 1.4 pulgadas</li>
                        <li>Tipo de pantalla: TFT LCD</li>
                        <li>Táctil: Si</li>
                        <li>Bluetooth: 5.0</li>
                        <li>Tipo de carga: MicroUSB</li>
                        <li>Batería: 260 mAh</li>
                        <li>Compatibilidad: Android 4.4 o superior / iOS 8.0 o superior</li>
                    </ul>
                    <br></br>

                    <label for="idProducto"> <b>Disponibilidad</b> </label><br></br>
                    <input type="text" value="Disponible" readonly="true" id="idProducto"/>
                    <br></br>

                    <label for="vUnitario"> <b>Valor Unitario del Producto</b> </label><br></br>
                    $<input type="number" value="219.900" readonly="true" id="vUnitario"/>
                    <br></br>

                    <label for="cantidad"> <b>Unidades</b> </label><br></br>
                    <button for="btn-" type="button" id="btn-" onClick={ContadormEnos}>-</button>
                    <input id="unidades" type="number" value="1" />
                    <button for="btn+" type="button" id="btn+" onClick={ContadorMas}>+</button>
  
                </form>
            </div>
            </div>
        </div>
    )
}
