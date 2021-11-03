import React from 'react';
import {Slideshow, Slide, TextoSlide} from 'components/SliderTwo'
import 'styles/SliderTwo.css';
import Sam1 from "media/celulares/samsung1.jpg"
import Sam2 from "media/celulares/samsung2.jpg"
import Sam3 from "media/celulares/samsung3.jpg"
import xia1 from "media/celulares/xiaomi1.jpg"
import xia2 from "media/celulares/xiaomi2.jpg"
import xia3 from "media/celulares/xiaomi3.jpg"
import iphone1 from "media/celulares/iphone1.jpg"
import iphone2 from "media/celulares/iphone2.jpg"
import iphone3 from "media/celulares/iphone3.jpg"
import moto1 from "media/celulares/moto1.jpg"
import moto2 from "media/celulares/moto2.jpg"
import moto3 from "media/celulares/moto3.jpg"
import vivo1 from "media/celulares/vivo1.jpg"
import vivo2 from "media/celulares/vivo2.jpg"
import vivo3 from "media/celulares/vivo3.jpg"

function PagCelular(){
    let i = 1; 
    let j = 800000;

    const ContadorMas = ()=>{ 
        i = i + 1;
        j = j + 800000; 
        let cant = document.getElementById("unidades");
        let sum = document.getElementById("vUnitario");

        cant.value = i;
        sum.value = j;

        if(cant.value === 1){
            i=1;
            j=800000
            cant.value="1";
            sum.value="800000"
        }
    } 

    function ContadormEnos(){ 
        if(i>=2){
            i = i - 1;
            j = j - 800000; 
            let cant = document.getElementById("unidades"); 
            let rest = document.getElementById("vUnitario");

            cant.value = i;
            rest.value = j;

            if(cant.value === 1){
                i=1;
                j=800000
                cant.value="1";
                rest.value="800000"
            }
        }
            
    }

    return(
        <div>
            <div> 
            <div className="container-productos">
            <div className="produc-aline">
                <main className="main-slider-produc">
			<Slideshow controles={true}>
				<Slide>
					<img src={Sam1} alt="Samsung"/>
				</Slide>
				<Slide>
					<img src={Sam2} alt="Samsung"/>
				</Slide>
				<Slide>
					<img src={Sam3} alt="Samsung"/>
				</Slide>
			</Slideshow>
            </main>
            </div>

      
            <div className="formulario">
                <form>
                    <h1>Celular Samsung A10S</h1>

                    <label for="idProducto"> <b>ID del Producto</b> </label><br></br>
                    <input type="text" value="01" readonly="true" id="idProducto"/>
                    <br></br>

                    <label for="descProducto"> <b>Descripción del Producto</b> </label><br></br>
                    <ul className="descrip-produ">
                        <li>Tamaño de la pantalla: 6.2 "
                        (156.9 mm x 75.8 mm x 7.8 mm</li>
                        <li>Memoria interna: 32 GB</li>
                        <li>Cámara trasera principal: 13 Mpx</li>
                        <li>Cámara frontal principal: 8 Mpx</li>
                        <li>Desbloqueo: Huella dactilar y reconocimiento facial</li>
                    </ul>
                    <br></br>

                    <label for="idProducto"> <b>Disponibilidad</b> </label><br></br>
                    <input type="text" value="Disponible" readonly="true" id="idProducto"/>
                    <br></br>

                    <label for="vUnitario"> <b>Valor Unitario del Producto</b> </label><br></br>
                    $<input type="number" value="620.900" readonly="true" id="vUnitario"/>
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
            {/* Segundo celular */}
            <div className="container-productos">
            <div className="produc-aline">
                <main className="main-slider-produc">
			<Slideshow controles={true}>
				<Slide>
					<img src={xia1} alt="Xiaomi"/>
				</Slide>
				<Slide>
					<img src={xia2} alt="Xiaomi"/>
				</Slide>
				<Slide>
					<img src={xia3} alt="Xiaomi"/>
				</Slide>
			</Slideshow>
            </main>
            </div>

      
            <div className="formulario">
                <form>
                    <h1>Xiaomi</h1>

                    <label for="idProducto"> <b>ID del Producto</b> </label><br></br>
                    <input type="text" value="01" readonly="true" id="idProducto"/>
                    <br></br>

                    <label for="descProducto"> <b>Descripción del Producto</b> </label><br></br>
                    <ul className="descrip-produ">
                        <li>Tamaño de la pantalla: 6.2 "
                        (156.9 mm x 75.8 mm x 7.8 mm</li>
                        <li>Memoria interna: 32 GB</li>
                        <li>Cámara trasera principal: 13 Mpx</li>
                        <li>Cámara frontal principal: 8 Mpx</li>
                        <li>Desbloqueo: Huella dactilar y reconocimiento facial</li>
                    </ul>
                    <br></br>

                    <label for="idProducto"> <b>Disponibilidad</b> </label><br></br>
                    <input type="text" value="Disponible" readonly="true" id="idProducto"/>
                    <br></br>

                    <label for="vUnitario"> <b>Valor Unitario del Producto</b> </label><br></br>
                    $<input type="number" value="800.000" readonly="true" id="vUnitario"/>
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
            {/* Tercer celular */}
            <div className="container-productos">
            <div className="produc-aline">
                <main className="main-slider-produc">
			<Slideshow controles={true}>
				<Slide>
					<img src={iphone1} alt="Iphone"/>
				</Slide>
				<Slide>
					<img src={iphone2} alt="Iphone"/>
				</Slide>
				<Slide>
					<img src={iphone3} alt="Iphone"/>
				</Slide>
			</Slideshow>
            </main>
            </div>

      
            <div className="formulario">
                <form>
                    <h1>Iphone</h1>

                    <label for="idProducto"> <b>ID del Producto</b> </label><br></br>
                    <input type="text" value="01" readonly="true" id="idProducto"/>
                    <br></br>

                    <label for="descProducto"> <b>Descripción del Producto</b> </label><br></br>
                    <ul className="descrip-produ">
                        <li>Tamaño de la pantalla: 6.2 "
                        (156.9 mm x 75.8 mm x 7.8 mm</li>
                        <li>Memoria interna: 32 GB</li>
                        <li>Cámara trasera principal: 13 Mpx</li>
                        <li>Cámara frontal principal: 8 Mpx</li>
                        <li>Desbloqueo: Huella dactilar y reconocimiento facial</li>
                    </ul>
                    <br></br>

                    <label for="idProducto"> <b>Disponibilidad</b> </label><br></br>
                    <input type="text" value="Disponible" readonly="true" id="idProducto"/>
                    <br></br>

                    <label for="vUnitario"> <b>Valor Unitario del Producto</b> </label><br></br>
                    $<input type="number" value="800.000" readonly="true" id="vUnitario"/>
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
            {/* Cuarto celular */}
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
                    <h1>Motorola</h1>

                    <label for="idProducto"> <b>ID del Producto</b> </label><br></br>
                    <input type="text" value="01" readonly="true" id="idProducto"/>
                    <br></br>

                    <label for="descProducto"> <b>Descripción del Producto</b> </label><br></br>
                    <ul className="descrip-produ">
                        <li>Tamaño de la pantalla: 6.2 "
                        (156.9 mm x 75.8 mm x 7.8 mm</li>
                        <li>Memoria interna: 32 GB</li>
                        <li>Cámara trasera principal: 13 Mpx</li>
                        <li>Cámara frontal principal: 8 Mpx</li>
                        <li>Desbloqueo: Huella dactilar y reconocimiento facial</li>
                    </ul>
                    <br></br>

                    <label for="idProducto"> <b>Disponibilidad</b> </label><br></br>
                    <input type="text" value="Disponible" readonly="true" id="idProducto"/>
                    <br></br>

                    <label for="vUnitario"> <b>Valor Unitario del Producto</b> </label><br></br>
                    $<input type="number" value="800.000" readonly="true" id="vUnitario"/>
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
            {/* Quinto celular */}
            <div className="container-productos">
            <div className="produc-aline">
                <main className="main-slider-produc">
			<Slideshow controles={true}>
				<Slide>
					<img src={vivo1} alt="Samsung"/>
				</Slide>
				<Slide>
					<img src={vivo2} alt="Samsung"/>
				</Slide>
				<Slide>
					<img src={vivo3} alt="Samsung"/>
				</Slide>
			</Slideshow>
            </main>
            </div>

      
            <div className="formulario">
                <form>
                    <h1>Vivo</h1>

                    <label for="idProducto"> <b>ID del Producto</b> </label><br></br>
                    <input type="text" value="01" readonly="true" id="idProducto"/>
                    <br></br>

                    <label for="descProducto"> <b>Descripción del Producto</b> </label><br></br>
                    <ul className="descrip-produ">
                        <li>Tamaño de la pantalla: 6.2 "
                        (156.9 mm x 75.8 mm x 7.8 mm</li>
                        <li>Memoria interna: 32 GB</li>
                        <li>Cámara trasera principal: 13 Mpx</li>
                        <li>Cámara frontal principal: 8 Mpx</li>
                        <li>Desbloqueo: Huella dactilar y reconocimiento facial</li>
                    </ul>
                    <br></br>

                    <label for="idProducto"> <b>Disponibilidad</b> </label><br></br>
                    <input type="text" value="Disponible" readonly="true" id="idProducto"/>
                    <br></br>

                    <label for="vUnitario"> <b>Valor Unitario del Producto</b> </label><br></br>
                    $<input type="number" value="800.000" readonly="true" id="vUnitario"/>
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

</div>
        
    )  
}

export default PagCelular;
