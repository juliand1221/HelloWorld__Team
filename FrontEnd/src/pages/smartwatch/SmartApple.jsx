import React from 'react'
import {Slideshow, Slide, TextoSlide} from '../../components/SliderTwo'
import 'styles/SliderTwo.css';
import apple1 from "media/smartwatch/apple1.jpg"
import apple2 from "media/smartwatch/apple2.jpg"
import apple3 from "media/smartwatch/apple3.jpg"

export default function SmartApple() {
    let i = 1; 
    let j = 2046000;

    const ContadorMas = ()=>{ 
        i = i + 1;
        j = j + 2046000; 
        let cant = document.getElementById("unidadesappwatch");
        let sum = document.getElementById("vUnitarioappwatch");

        cant.value = i;
        sum.value = j;

        if(cant.value === 1){
            i=1;
            j=2046000
            cant.value="1";
            sum.value="2046000"
        }
    } 

    function ContadormEnos(){ 
        if(i>=2){
            i = i - 1;
            j = j - 2046000; 
            let cant = document.getElementById("unidadesappwatch"); 
            let rest = document.getElementById("vUnitarioappwatch");

            cant.value = i;
            rest.value = j;

            if(cant.value === 1){
                i=1;
                j=2046000
                cant.value="1";
                rest.value="2046000"
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
                    <h1>Apple Watch Series 6 (GPS) 44 mm</h1>

                    <label for="idProducto"> <b>ID del Producto</b> </label><br></br>
                    <input type="text" value="S-02" readonly="true" id="idProducto"/>
                    <br></br>

                    <label for="descProducto"> <b>Descripción del Producto</b> </label><br></br>
                    <ul className="descrip-produ">
                        <li>Tipo de pantalla: Digital</li>
                        <li>Tamaño de la pantalla: 1.7 pulgadas</li>
                        <li>Batería	Hasta 18 Horas</li>
                        <li>Memoria interna: 32GB</li>
                        <li>Sistema operativo: Watch OS</li>
                        <li>Sistema operativo compatible: IOS</li>
                        <li>Marca	Apple: Modelo	M00D3BE/A</li>
                    </ul>
                    <br></br>

                    <label for="idProducto"> <b>Disponibilidad</b> </label><br></br>
                    <input type="text" value="Disponible" readonly="true" id="idProducto"/>
                    <br></br>

                    <label for="vUnitario"> <b>Valor Unitario del Producto</b> </label><br></br>
                    $<input type="number" value="2046.000" readonly="true" id="vUnitarioappwatch"/>
                    <br></br>

                    <label for="cantidad"> <b>Unidades</b> </label><br></br>
                    <button for="btn-" type="button" id="btn-" onClick={ContadormEnos}>-</button>
                    <input id="unidadesappwatch" type="number" value="1" />
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
