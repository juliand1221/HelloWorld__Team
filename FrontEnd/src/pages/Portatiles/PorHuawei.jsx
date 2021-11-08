import React from 'react'
import {Slideshow, Slide, TextoSlide} from '../../components/SliderTwo'
import 'styles/SliderTwo.css';
import huawei1 from "media/portatiles/huawei1.jpg"
import huawei2 from "media/portatiles/huawei2.jpg"
import huawei3 from "media/portatiles/huawei3.jpg"

export default function PorHuawei() {
    let i = 1; 
    let j = 3698000;

    const ContadorMas = ()=>{ 
        i = i + 1;
        j = j + 3698000; 
        let cant = document.getElementById("unidadeshua");
        let sum = document.getElementById("vUnitariohua");

        cant.value = i;
        sum.value = j;

        if(cant.value === 1){
            i=1;
            j=3698000
            cant.value="1";
            sum.value="3698000"
        }
    } 

    function ContadormEnos(){ 
        if(i>=2){
            i = i - 1;
            j = j - 3698000; 
            let cant = document.getElementById("unidadeshua"); 
            let rest = document.getElementById("vUnitariohua");

            cant.value = i;
            rest.value = j;

            if(cant.value === 1){
                i=1;
                j=3698000
                cant.value="1";
                rest.value="3698000"
            }
        }
            
    }
    return (
        <div>
            <div className="container-productos">
            <div className="produc-aline">
                <main className="main-slider-produc-portatil">
			<Slideshow controles={true}>
				<Slide>
					<img src={huawei1} alt="Huawei"/>
				</Slide>
				<Slide>
					<img src={huawei2} alt="Huawei"/>
				</Slide>
				<Slide>
					<img src={huawei3} alt="Huawei"/>
				</Slide>
			</Slideshow>
            </main>
            </div>

      
            <div className="formulario">
                <form>
                    <h1>Portátil Huawei Matebook D15</h1>

                    <label for="idProducto"> <b>ID del Producto</b> </label><br></br>
                    <input type="text" value="P-05" readonly="true" id="idProducto"/>
                    <br></br>

                    <label for="descProducto"> <b>Descripción del Producto</b> </label><br></br>
                    <ul className="descrip-produ">
                        <li>Procesador: Intel Core i5</li>
                        <li>Memoria RAM: 16GB</li>
                        <li>Tamaño de la pantalla: 15.6 pulgadas</li>
                        <li>Unidad de estado sólido SSD: 512GB</li>
                        <li>2 USB 3.2 de 1.a generación</li>
                        <li>1 conector combinado de auriculares / micrófono (3,5 mm)</li>
                    </ul>
                    <br></br>

                    <label for="idProducto"> <b>Disponibilidad</b> </label><br></br>
                    <input type="text" value="Disponible" readonly="true" id="idProducto"/>
                    <br></br>

                    <label for="vUnitario"> <b>Valor Unitario del Producto</b> </label><br></br>
                    $<input type="number" value="3698.000" readonly="true" id="vUnitariohua"/>
                    <br></br>

                    <label for="cantidad"> <b>Unidades</b> </label><br></br>
                    <button for="btn-" type="button" id="btn-" onClick={ContadormEnos}>-</button>
                    <input id="unidadeshua" type="number" value="1" />
                    <button for="btn+" type="button" id="btn+" onClick={ContadorMas}>+</button>
            
                </form>
            </div>
        </div>
        </div>
    )
}
