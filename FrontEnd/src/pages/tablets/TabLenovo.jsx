import React from 'react'
import {Slideshow, Slide, TextoSlide} from '../../components/SliderTwo'
import 'styles/SliderTwo.css';
import leno1 from "media/tablets/tableno1.jpg"
import leno2 from "media/tablets/tableno2.jpg"
import leno3 from "media/tablets/tableno3.jpg"


export default function TabLenovo() {
    let i = 1; 
    let j = 469900;

    const ContadorMas = ()=>{ 
        i = i + 1;
        j = j + 469900; 
        let cant = document.getElementById("unidadesLen");
        let sum = document.getElementById("vUnitarioLen");

        cant.value = i;
        sum.value = j;

        if(cant.value === 1){
            i=1;
            j=469900
            cant.value="1";
            sum.value="469900"
        }
    } 

    function ContadormEnos(){ 
        if(i>=2){
            i = i - 1;
            j = j - 469900; 
            let cant = document.getElementById("unidadesLen"); 
            let rest = document.getElementById("vUnitarioLen");

            cant.value = i;
            rest.value = j;

            if(cant.value === 1){
                i=1;
                j=469900
                cant.value="1";
                rest.value="469900"
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
					<img src={leno1} alt="Huawei"/>
				</Slide>
				<Slide>
					<img src={leno2} alt="Huawei"/>
				</Slide>
				<Slide>
					<img src={leno3} alt="Huawei"/>
				</Slide>
			</Slideshow>
            </main>
            </div>

      
            <div className="formulario">
                <form>
                    <h1>Tablet Lenovo P11 WiFi 6GB + 128GB</h1>

                    <label for="idProducto"> <b>ID del Producto</b> </label><br></br>
                    <input type="text" value="T-03" readonly="true" id="idProducto"/>
                    <br></br>

                    <label for="descProducto"> <b>Descripción del Producto</b> </label><br></br>
                    <ul className="descrip-produ">
                        <li>Procesador: Qualcomm Snapdragon 662</li>
                        <li>Núcleos del procesador: Octa Core</li>
                        <li>Tamaño de la pantalla: 11 pulgadas</li>
                        <li>Velocidad del procesador: 2.0</li>
                        <li>Memoria RAM: 6GB</li>
                        <li>Memoria Interna: 128GB</li>
                        <li>Batería: 5000 mAh</li>
                        <li>Conectividad: Wifi - Bluetooth 5.1</li>
                    </ul>
                    <br></br>

                    <label for="idProducto"> <b>Disponibilidad</b> </label><br></br>
                    <input type="text" value="Disponible" readonly="true" id="idProducto"/>
                    <br></br>

                    <label for="vUnitario"> <b>Valor Unitario del Producto</b> </label><br></br>
                    $<input type="number" value="1620.000" readonly="true" id="vUnitarioLen"/>
                    <br></br>

                    <label for="cantidad"> <b>Unidades</b> </label><br></br>
                    <button for="btn-" type="button" id="btn-" onClick={ContadormEnos}>-</button>
                    <input id="unidadesLen" type="number" value="1" />
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
