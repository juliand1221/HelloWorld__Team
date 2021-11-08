import React from 'react'
import {Slideshow, Slide, TextoSlide} from '../../components/SliderTwo'
import 'styles/SliderTwo.css';
import smhua1 from "media/smartwatch/smart11.jpg"
import smhua2 from "media/smartwatch/smart2.jpg"
import smhua3 from "media/smartwatch/smart3.jpg"

export default function SmartHuawei() {
     let i = 1; 
    let j = 949900;

    const ContadorMas = ()=>{ 
        i = i + 1;
        j = j + 949900; 
        let cant = document.getElementById("unidadessmarthua");
        let sum = document.getElementById("vUnitariosmarthua");

        cant.value = i;
        sum.value = j;

        if(cant.value === 1){
            i=1;
            j=949900
            cant.value="1";
            sum.value="949900"
        }
    } 

    function ContadormEnos(){ 
        if(i>=2){
            i = i - 1;
            j = j - 949900; 
            let cant = document.getElementById("unidadessmarthua"); 
            let rest = document.getElementById("vUnitariosmarthua");

            cant.value = i;
            rest.value = j;

            if(cant.value === 1){
                i=1;
                j=949900
                cant.value="1";
                rest.value="949900"
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
					<img src={smhua1} alt="Smart Huawei"/>
				</Slide>
				<Slide>
					<img src={smhua2} alt="Smart Huawei"/>
				</Slide>
				<Slide>
					<img src={smhua3} alt="Smart Huawei"/>
				</Slide>
			</Slideshow>
            </main>
            </div>

      
            <div className="formulario">
                <form>
                    <h1>Smartwatch Huawei Watch GT2 Pro Negro</h1>

                    <label for="idProducto"> <b>ID del Producto</b> </label><br></br>
                    <input type="text" value="S-03" readonly="true" id="idProducto"/>
                    <br></br>

                    <label for="descProducto"> <b>Descripción del Producto</b> </label><br></br>
                    <ul className="descrip-produ">
                        <li>Tamaño de la pantalla: 1.39 pulgadas</li>
                        <li>Tipo de pantalla: Digital</li>
                        <li>GPS integrado: Sí</li>
                        <li>Bluetooth: 5.0</li>
                        <li>Tipo de carga: MicroUSB</li>
                        <li>Batería	455 mAh</li>
                        <li>Compatibilidad: Android 4.4 o superior / iOS 8.0 o superior</li>
                    </ul>
                    <br></br>

                    <label for="idProducto"> <b>Disponibilidad</b> </label><br></br>
                    <input type="text" value="Disponible" readonly="true" id="idProducto"/>
                    <br></br>

                    <label for="vUnitario"> <b>Valor Unitario del Producto</b> </label><br></br>
                    $<input type="number" value="949.900" readonly="true" id="vUnitariosmarthua"/>
                    <br></br>

                    <label for="cantidad"> <b>Unidades</b> </label><br></br>
                    <button for="btn-" type="button" id="btn-" onClick={ContadormEnos}>-</button>
                    <input id="unidadessmarthua" type="number" value="1" />
                    <button for="btn+" type="button" id="btn+" onClick={ContadorMas}>+</button>

                </form>
            </div>
            </div>
        </div>
    )
}
