import React from 'react'
import {Slideshow, Slide, TextoSlide} from '../../components/SliderTwo'
import 'styles/SliderTwo.css';
import smsam1 from "media/smartwatch/samsung1.jpg"
import smsam2 from "media/smartwatch/samsung2.jpg"
import smsam3 from "media/smartwatch/samsung3.jpg"

export default function SmartSamsung() {
     let i = 1; 
    let j = 1449000;

    const ContadorMas = ()=>{ 
        i = i + 1;
        j = j + 1449000; 
        let cant = document.getElementById("unidadessmartsam");
        let sum = document.getElementById("vUnitariosmartsam");

        cant.value = i;
        sum.value = j;

        if(cant.value === 1){
            i=1;
            j=1449000
            cant.value="1";
            sum.value="1449000"
        }
    } 

    function ContadormEnos(){ 
        if(i>=2){
            i = i - 1;
            j = j - 1449000; 
            let cant = document.getElementById("unidadessmartsam"); 
            let rest = document.getElementById("vUnitariosmartsam");

            cant.value = i;
            rest.value = j;

            if(cant.value === 1){
                i=1;
                j=1449000
                cant.value="1";
                rest.value="1449000"
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
					<img src={smsam1} alt="Smartwatch Samsung"/>
				</Slide>
				<Slide>
					<img src={smsam2} alt="Smartwatch Samsung"/>
				</Slide>
				<Slide>
					<img src={smsam3} alt="Smartwatch Samsung"/>
				</Slide>
			</Slideshow>
            </main>
            </div>

      
            <div className="formulario">
                <form>
                    <h1>Smartwatch Samsung Galaxy Watch Active</h1>

                    <label for="idProducto"> <b>ID del Producto</b> </label><br></br>
                    <input type="text" value="S-04" readonly="true" id="idProducto"/>
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
                    $<input type="number" value="1449.000" readonly="true" id="vUnitariosmartsam"/>
                    <br></br>

                    <label for="cantidad"> <b>Unidades</b> </label><br></br>
                    <button for="btn-" type="button" id="btn-" onClick={ContadormEnos}>-</button>
                    <input id="unidadessmartsam" type="number" value="1" />
                    <button for="btn+" type="button" id="btn+" onClick={ContadorMas}>+</button>
   
                </form>
            </div>
            </div>

        </div>
    )
}
