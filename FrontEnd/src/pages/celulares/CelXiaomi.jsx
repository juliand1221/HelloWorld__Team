import React from 'react'
import {Slideshow, Slide, TextoSlide} from 'components/SliderTwo'
import 'styles/SliderTwo.css';
import xia1 from "media/celulares/xiaomi1.jpg"
import xia2 from "media/celulares/xiaomi2.jpg"
import xia3 from "media/celulares/xiaomi3.jpg"

export default function CelXiaomi() {
    let i = 1; 
    let j = 1850000;

    const ContadorMas = ()=>{ 
        i = i + 1;
        j = j + 1850000; 
        let cant = document.getElementById("Unidades");
        let sum = document.getElementById("valorUnitario");

        cant.value = i;
        sum.value = j;

        if(cant.value === 1){
            i=1;
            j=1850000
            cant.value="1";
            sum.value="1850000"
        }
    } 

    function ContadormEnos(){ 
        if(i>=2){
            i = i - 1;
            j = j - 1850000; 
            let cant = document.getElementById("Unidades"); 
            let rest = document.getElementById("valorUnitario");

            cant.value = i;
            rest.value = j;

            if(cant.value === 1){
                i=1;
                j=1850000
                cant.value="1";
                rest.value="1850000"
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
                    <h1>Celular XIAOMI Mi 11 Lite 128GB Negro</h1>

                    <label for="idProducto"> <b>ID del Producto</b> </label><br></br>
                    <input type="text" value="C-02" readonly="true" id="idProducto"/>
                    <br></br>

                    <label for="descProducto"> <b>Descripción del Producto</b> </label><br></br>
                    <ul className="descrip-produ">
                        <li>Panel Amoled de 6,55" imágenes claras y vibrantes</li>
                        <li>Triple cámara de 64Mpx, captura tus mejores momentos</li>
                        <li>Enfriamiento liquido, trabaja sin pausa</li>
                        <li>Peso ligero de 157g, práctico y portátil</li>
                        <li>Graba video en 4K, colores nítidos a un solo clic</li>
                    </ul>
                    <br></br>

                    <label for="idProducto"> <b>Disponibilidad</b> </label><br></br>
                    <input type="text" value="Disponible" readonly="true" id="idProducto"/>
                    <br></br>

                    <label for="valorUnitario"> <b>Valor Unitario del Producto</b> </label><br></br>
                    $<input type="number" value="1850.000" readonly="true" id="valorUnitario"/>
                    <br></br>

                    <label for="cantidad"> <b>Unidades</b> </label><br></br>
                    <button for="btn-" type="button" id="btn-" onClick={ContadormEnos}>-</button>
                    <input id="Unidades" type="number" value="1" />
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
