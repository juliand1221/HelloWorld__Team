import React from 'react';
import {Slideshow, Slide, TextoSlide} from '../components/SliderTwo'
import '../styles/SliderTwo.css';
import smart1 from "../media/smartwatch/smar1.jpg"
import smart2 from "../media/smartwatch/smar2.jpg"
import smart3 from "../media/smartwatch/smar3.jpg"
import apple1 from "../media/smartwatch/apple1.jpg"
import apple2 from "../media/smartwatch/apple2.jpg"
import apple3 from "../media/smartwatch/apple3.jpg"
import smhua1 from "../media/smartwatch/smart11.jpg"
import smhua2 from "../media/smartwatch/smart2.jpg"
import smhua3 from "../media/smartwatch/smart3.jpg"
import smsam1 from "../media/smartwatch/samsung1.jpg"
import smsam2 from "../media/smartwatch/samsung2.jpg"
import smsam3 from "../media/smartwatch/samsung3.jpg"


function ProSmart (){
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

    return(
        <div>
            {/* Smartwatch primnero */}
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
                    <input type="text" value="05" readonly="true" id="idProducto"/>
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
            
                    <div className="boton-pro">
                        <button for="compra" type="button" id="comprar">Comprar ahora</button>
                        <button for="carrito" type="button" id="agregar">Agregar a carrito</button>
                    </div>
                </form>
            </div>
            </div>
            {/* Smartwatch Segundo */}
            <div className="cpntainer-productos">
            <div className="produc-aline">
                <main className="main-slider-produc-tablet">
			<Slideshow controles={true}>
				<Slide>
					<img src={apple1} alt="Applewatch"/>
				</Slide>
				<Slide>
					<img src={apple2} alt="Applewatch"/>
				</Slide>
				<Slide>
					<img src={apple3} alt="Applewatch"/>
				</Slide>
			</Slideshow>
            </main>
            </div>

      
            <div className="formulario">
                <form>
                    <h1>Apple Watch</h1>

                    <label for="idProducto"> <b>ID del Producto</b> </label><br></br>
                    <input type="text" value="05" readonly="true" id="idProducto"/>
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
            
                    <div className="boton-pro">
                        <button for="compra" type="button" id="comprar">Comprar ahora</button>
                        <button for="carrito" type="button" id="agregar">Agregar a carrito</button>
                    </div>
                </form>
            </div>
            </div>
            {/* Smartwatch Tercero */}
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
                    <h1>SmartWatch Huawei</h1>

                    <label for="idProducto"> <b>ID del Producto</b> </label><br></br>
                    <input type="text" value="05" readonly="true" id="idProducto"/>
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
            
                    <div className="boton-pro">
                        <button for="compra" type="button" id="comprar">Comprar ahora</button>
                        <button for="carrito" type="button" id="agregar">Agregar a carrito</button>
                    </div>
                </form>
            </div>
            </div>
            {/* Smartwatch Cuarto */}
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
                    <h1>Samsung</h1>

                    <label for="idProducto"> <b>ID del Producto</b> </label><br></br>
                    <input type="text" value="05" readonly="true" id="idProducto"/>
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
            
                    <div className="boton-pro">
                        <button for="compra" type="button" id="comprar">Comprar ahora</button>
                        <button for="carrito" type="button" id="agregar">Agregar a carrito</button>
                    </div>
                </form>
            </div>
            </div>


        </div>
    )  
}

export default ProSmart;