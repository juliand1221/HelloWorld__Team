import React from 'react';
import {Slideshow, Slide, TextoSlide} from '../components/SliderTwo'
import '../styles/SliderTwo.css';
import bafle1 from "../media/bafles/bafle1.jpg"
import bafle2 from "../media/bafles/bafle2.jpg"
import bafle3 from "../media/bafles/bafle3.jpg"
import parla1 from "../media/bafles/parla1.jpg"
import parla2 from "../media/bafles/parla2.jpg"
import parla3 from "../media/bafles/parla3.jpg"
import bar1 from "../media/bafles/bar1.jpg"
import bar2 from "../media/bafles/bar2.jpg"
import bar3 from "../media/bafles/bar3.jpg"
import blue1 from "../media/bafles/blue1.jpg"
import blue2 from "../media/bafles/blue2.jpg"
import blue3 from "../media/bafles/blue3.jpg"

function ProBafle(){
   let i = 1; 
    let j = 458915;

    const ContadorMas = ()=>{ 
        i = i + 1;
        j = j + 458915; 
        let cant = document.getElementById("unidades");
        let sum = document.getElementById("vUnitario");

        cant.value = i;
        sum.value = j;

        if(cant.value === 1){
            i=1;
            j=458915
            cant.value="1";
            sum.value="458915"
        }
    } 

    function ContadormEnos(){ 
        if(i>=2){
            i = i - 1;
            j = j - 458915; 
            let cant = document.getElementById("unidades"); 
            let rest = document.getElementById("vUnitario");

            cant.value = i;
            rest.value = j;

            if(cant.value === 1){
                i=1;
                j=458915
                cant.value="1";
                rest.value="458915"
            }
        }
            
    }

    return(
        <div>
            {/* Primer bafle */}
            <div className="container-productos">
            <div className="produc-aline">
                <main className="main-slider-produc-tablet">
			<Slideshow controles={true}>
				<Slide>
					<img src={bafle1} alt="parlante"/>
				</Slide>
				<Slide>
					<img src={bafle2} alt="parlante"/>
				</Slide>
				<Slide>
					<img src={bafle3} alt="parlante"/>
				</Slide>
			</Slideshow>
            </main>
            </div>

      
            <div className="formulario">
                <form>
                    <h1>JBL FLIP 5</h1>

                    <label for="idProducto"> <b>ID del Producto</b> </label><br></br>
                    <input type="text" value="06" readonly="true" id="idProducto"/>
                    <br></br>

                    <label for="descProducto"> <b>Descripción del Producto</b> </label><br></br>
                    <ul className="descrip-produ">
                        <li>Suena mejor que nunca</li>
                        <li>12 horas de reproducción</li>
                        <li>Diseño resistente al agua conforme a la norma IPX7</li>
                        <li>Versión Bluetooth: 4.2</li>
                        <li>Respuesta de frecuencia dinámica: 65 Hz - 20k Hz</li>
                    </ul>
                    <br></br>

                    <label for="idProducto"> <b>Disponibilidad</b> </label><br></br>
                    <input type="text" value="Disponible" readonly="true" id="idProducto"/>
                    <br></br>

                    <label for="vUnitario"> <b>Valor Unitario del Producto</b> </label><br></br>
                    $<input type="number" value="458.915" readonly="true" id="vUnitario"/>
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
             {/* Segundo bafle */}
            <div className="container-productos">
            <div className="produc-aline">
                <main className="main-slider-produc-tablet">
			<Slideshow controles={true}>
				<Slide>
					<img src={parla1} alt="parlante"/>
				</Slide>
				<Slide>
					<img src={parla2} alt="parlante"/>
				</Slide>
				<Slide>
					<img src={parla3} alt="parlante"/>
				</Slide>
			</Slideshow>
            </main>
            </div>

      
            <div className="formulario">
                <form>
                    <h1>JBL FLIP 5</h1>

                    <label for="idProducto"> <b>ID del Producto</b> </label><br></br>
                    <input type="text" value="06" readonly="true" id="idProducto"/>
                    <br></br>

                    <label for="descProducto"> <b>Descripción del Producto</b> </label><br></br>
                    <ul className="descrip-produ">
                        <li>Suena mejor que nunca</li>
                        <li>12 horas de reproducción</li>
                        <li>Diseño resistente al agua conforme a la norma IPX7</li>
                        <li>Versión Bluetooth: 4.2</li>
                        <li>Respuesta de frecuencia dinámica: 65 Hz - 20k Hz</li>
                    </ul>
                    <br></br>

                    <label for="idProducto"> <b>Disponibilidad</b> </label><br></br>
                    <input type="text" value="Disponible" readonly="true" id="idProducto"/>
                    <br></br>

                    <label for="vUnitario"> <b>Valor Unitario del Producto</b> </label><br></br>
                    $<input type="number" value="458.915" readonly="true" id="vUnitario"/>
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
             {/* Tercer bafle */}
            <div className="container-productos">
            <div className="produc-aline">
                <main className="main-slider-produc-tablet">
			<Slideshow controles={true}>
				<Slide>
					<img src={bar1} alt="parlante"/>
				</Slide>
				<Slide>
					<img src={bar2} alt="parlante"/>
				</Slide>
				<Slide>
					<img src={bar3} alt="parlante"/>
				</Slide>
			</Slideshow>
            </main>
            </div>

      
            <div className="formulario">
                <form>
                    <h1>JBL FLIP 5</h1>

                    <label for="idProducto"> <b>ID del Producto</b> </label><br></br>
                    <input type="text" value="06" readonly="true" id="idProducto"/>
                    <br></br>

                    <label for="descProducto"> <b>Descripción del Producto</b> </label><br></br>
                    <ul className="descrip-produ">
                        <li>Suena mejor que nunca</li>
                        <li>12 horas de reproducción</li>
                        <li>Diseño resistente al agua conforme a la norma IPX7</li>
                        <li>Versión Bluetooth: 4.2</li>
                        <li>Respuesta de frecuencia dinámica: 65 Hz - 20k Hz</li>
                    </ul>
                    <br></br>

                    <label for="idProducto"> <b>Disponibilidad</b> </label><br></br>
                    <input type="text" value="Disponible" readonly="true" id="idProducto"/>
                    <br></br>

                    <label for="vUnitario"> <b>Valor Unitario del Producto</b> </label><br></br>
                    $<input type="number" value="458.915" readonly="true" id="vUnitario"/>
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
             {/* cuarto bafle */}
            <div className="container-productos">
            <div className="produc-aline">
                <main className="main-slider-produc-tablet">
			<Slideshow controles={true}>
				<Slide>
					<img src={blue1} alt="parlante"/>
				</Slide>
				<Slide>
					<img src={blue2} alt="parlante"/>
				</Slide>
				<Slide>
					<img src={blue3} alt="parlante"/>
				</Slide>
			</Slideshow>
            </main>
            </div>

      
            <div className="formulario">
                <form>
                    <h1>JBL FLIP 5</h1>

                    <label for="idProducto"> <b>ID del Producto</b> </label><br></br>
                    <input type="text" value="06" readonly="true" id="idProducto"/>
                    <br></br>

                    <label for="descProducto"> <b>Descripción del Producto</b> </label><br></br>
                    <ul className="descrip-produ">
                        <li>Suena mejor que nunca</li>
                        <li>12 horas de reproducción</li>
                        <li>Diseño resistente al agua conforme a la norma IPX7</li>
                        <li>Versión Bluetooth: 4.2</li>
                        <li>Respuesta de frecuencia dinámica: 65 Hz - 20k Hz</li>
                    </ul>
                    <br></br>

                    <label for="idProducto"> <b>Disponibilidad</b> </label><br></br>
                    <input type="text" value="Disponible" readonly="true" id="idProducto"/>
                    <br></br>

                    <label for="vUnitario"> <b>Valor Unitario del Producto</b> </label><br></br>
                    $<input type="number" value="458.915" readonly="true" id="vUnitario"/>
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

export default ProBafle;