import React from 'react'
import {Slideshow, Slide, TextoSlide} from 'components/SliderTwo'
import 'styles/SliderTwo.css';
import iphone1 from "media/celulares/iphone1.jpg"
import iphone2 from "media/celulares/iphone2.jpg"
import iphone3 from "media/celulares/iphone3.jpg"

export default function CelIphone() {
    let i = 1; 
    let j = 5320000;

    const ContadorMas = ()=>{ 
        i = i + 1;
        j = j + 5320000; 
        let cant = document.getElementById("unidadesIp");
        let sum = document.getElementById("vUnitarioIp");

        cant.value = i;
        sum.value = j;

        if(cant.value === 1){
            i=1;
            j=5320000
            cant.value="1";
            sum.value="5320000"
        }
    } 

    function ContadormEnos(){ 
        if(i>=2){
            i = i - 1;
            j = j - 5320000; 
            let cant = document.getElementById("unidadesIp"); 
            let rest = document.getElementById("vUnitarioIp");

            cant.value = i;
            rest.value = j;

            if(cant.value === 1){
                i=1;
                j=5320000
                cant.value="1";
                rest.value="5320000"
            }
        }
            
    }
    return (
        <div>
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
                    <h1>iPhone 13 mini 512GB Azul Medianoche</h1>

                    <label for="idProducto"> <b>ID del Producto</b> </label><br></br>
                    <input type="text" value="C-03" readonly="true" id="idProducto"/>
                    <br></br>

                    <label for="descProducto"> <b>Descripción del Producto</b> </label><br></br>
                    <ul className="descrip-produ">
                        <li>A15, Un chip superrápido 
                            que deja atrás a la competencia</li>
                        <li>Pantalla Super Retina XDR 5.4"</li>
                        <li>Modo Cine: Te permite editar profundidad luego de la toma</li>
                        <li>Almacenamiento, capacidad mínima del iPhone 13 - 128GB</li>
                        <li>Ceramic Shield: el vidrio más resistente de un smartphone</li>
                    </ul>
                    <br></br>

                    <label for="idProducto"> <b>Disponibilidad</b> </label><br></br>
                    <input type="text" value="Disponible" readonly="true" id="idProducto"/>
                    <br></br>

                    <label for="vUnitario"> <b>Valor Unitario del Producto</b> </label><br></br>
                    $<input type="number" value="5320.000" readonly="true" id="vUnitarioIp"/>
                    <br></br>

                    <label for="cantidad"> <b>Unidades</b> </label><br></br>
                    <button for="btn-" type="button" id="btn-" onClick={ContadormEnos}>-</button>
                    <input id="unidadesIp" type="number" value="1" />
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
