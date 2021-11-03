import React from 'react';
import {Slideshow, Slide, TextoSlide} from '../components/SliderTwo'
import '../styles/SliderTwo.css';
import conso1 from "../media/consolas/ninte1.jpg"
import conso2 from "../media/consolas/ninte2.jpg"
import conso3 from "../media/consolas/ninte3.jpg"
import play1 from "../media/consolas/play1.jpg"
import play2 from "../media/consolas/play2.jpg"
import play3 from "../media/consolas/play3.jpg"
import xbox1 from "../media/consolas/xbox1.jpg"
import xbox2 from "../media/consolas/xbox2.jpg"
import xbox3 from "../media/consolas/xbox3.jpg"

function ProConsol(){
    let i = 1; 
    let j = 1449900;

    const ContadorMas = ()=>{ 
        i = i + 1;
        j = j + 1449900; 
        let cant = document.getElementById("unidades");
        let sum = document.getElementById("vUnitario");

        cant.value = i;
        sum.value = j;

        if(cant.value === 1){
            i=1;
            j=1449900
            cant.value="1";
            sum.value="1449900"
        }
    } 

    function ContadormEnos(){ 
        if(i>=2){
            i = i - 1;
            j = j - 1449900; 
            let cant = document.getElementById("unidades"); 
            let rest = document.getElementById("vUnitario");

            cant.value = i;
            rest.value = j;

            if(cant.value === 1){
                i=1;
                j=1449900
                cant.value="1";
                rest.value="1449900"
            }
        }
            
    }

    return(
        <div>
            {/* consola uno */}
            <div className="container-productos">
            <div className="produc-aline">
                <main className="main-slider-produc-tablet">
			<Slideshow controles={true}>
				<Slide>
					<img src={conso1} alt="Nintendo"/>
				</Slide>
				<Slide>
					<img src={conso2} alt="Nintendo"/>
				</Slide>
				<Slide>
					<img src={conso3} alt="Nintendo"/>
				</Slide>
			</Slideshow>
            </main>
            </div>

      
            <div className="formulario">
                <form>
                    <h1>Nintendo Switch with Neon Blue and Neon Red</h1>

                    <label for="idProducto"> <b>ID del Producto</b> </label><br></br>
                    <input type="text" value="04" readonly="true" id="idProducto"/>
                    <br></br>

                    <label for="descProducto"> <b>Descripción del Producto</b> </label><br></br>
                    <ul className="descrip-produ">
                        <li>Reproducción: modo TV, modo de mesa, modo de mano</li>
                        <li>Pantalla táctil capacitiva multitáctil de 6.2 pulgadas</li>
                        <li>Se conecta a través de Wi-Fi para juegos multijugador</li>
                        <li>Hasta 8 consolas para multijugador inalámbrico local</li>
                        <li>4.5 – 9 horas de duración de la batería</li>
                    </ul>
                    <br></br>

                    <label for="idProducto"> <b>Disponibilidad</b> </label><br></br>
                    <input type="text" value="Disponible" readonly="true" id="idProducto"/>
                    <br></br>

                    <label for="vUnitario"> <b>Valor Unitario del Producto</b> </label><br></br>
                    $<input type="number" value="1449900" readonly="true" id="vUnitario"/>
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
            {/* consola dos */}
            <div className="container-productos">
            <div className="produc-aline">
                <main className="main-slider-produc-tablet">
			<Slideshow controles={true}>
				<Slide>
					<img src={play1} alt="playstation 5"/>
				</Slide>
				<Slide>
					<img src={play2} alt="playstation 5"/>
				</Slide>
				<Slide>
					<img src={play3} alt="playstation 5"/>
				</Slide>
			</Slideshow>
            </main>
            </div>

      
            <div className="formulario">
                <form>
                    <h1>Nintendo Switch with Neon Blue and Neon Red</h1>

                    <label for="idProducto"> <b>ID del Producto</b> </label><br></br>
                    <input type="text" value="04" readonly="true" id="idProducto"/>
                    <br></br>

                    <label for="descProducto"> <b>Descripción del Producto</b> </label><br></br>
                    <ul className="descrip-produ">
                        <li>Reproducción: modo TV, modo de mesa, modo de mano</li>
                        <li>Pantalla táctil capacitiva multitáctil de 6.2 pulgadas</li>
                        <li>Se conecta a través de Wi-Fi para juegos multijugador</li>
                        <li>Hasta 8 consolas para multijugador inalámbrico local</li>
                        <li>4.5 – 9 horas de duración de la batería</li>
                    </ul>
                    <br></br>

                    <label for="idProducto"> <b>Disponibilidad</b> </label><br></br>
                    <input type="text" value="Disponible" readonly="true" id="idProducto"/>
                    <br></br>

                    <label for="vUnitario"> <b>Valor Unitario del Producto</b> </label><br></br>
                    $<input type="number" value="1449900" readonly="true" id="vUnitario"/>
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
            {/* consola tres */}
            <div className="container-productos">
            <div className="produc-aline">
                <main className="main-slider-produc-tablet">
			<Slideshow controles={true}>
				<Slide>
					<img src={xbox1} alt="Xbox"/>
				</Slide>
				<Slide>
					<img src={xbox2} alt="Xbox"/>
				</Slide>
				<Slide>
					<img src={xbox3} alt="Xbox"/>
				</Slide>
			</Slideshow>
            </main>
            </div>

      
            <div className="formulario">
                <form>
                    <h1>Nintendo Switch with Neon Blue and Neon Red</h1>

                    <label for="idProducto"> <b>ID del Producto</b> </label><br></br>
                    <input type="text" value="04" readonly="true" id="idProducto"/>
                    <br></br>

                    <label for="descProducto"> <b>Descripción del Producto</b> </label><br></br>
                    <ul className="descrip-produ">
                        <li>Reproducción: modo TV, modo de mesa, modo de mano</li>
                        <li>Pantalla táctil capacitiva multitáctil de 6.2 pulgadas</li>
                        <li>Se conecta a través de Wi-Fi para juegos multijugador</li>
                        <li>Hasta 8 consolas para multijugador inalámbrico local</li>
                        <li>4.5 – 9 horas de duración de la batería</li>
                    </ul>
                    <br></br>

                    <label for="idProducto"> <b>Disponibilidad</b> </label><br></br>
                    <input type="text" value="Disponible" readonly="true" id="idProducto"/>
                    <br></br>

                    <label for="vUnitario"> <b>Valor Unitario del Producto</b> </label><br></br>
                    $<input type="number" value="1449900" readonly="true" id="vUnitario"/>
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

export default ProConsol;