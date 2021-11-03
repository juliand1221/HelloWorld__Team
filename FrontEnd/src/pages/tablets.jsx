import React from 'react';
import {Slideshow, Slide, TextoSlide} from '../components/SliderTwo'
import '../styles/SliderTwo.css';
import tab1 from "../media/tablets/table1.jpg"
import tab2 from "../media/tablets/table2.jpg"
import tab3 from "../media/tablets/table3.jpg"
import sams1 from "../media/tablets/tabsam1.jpg"
import sams2 from "../media/tablets/tabsam2.jpg"
import sams3 from "../media/tablets/tabsam3.jpg"
import leno1 from "../media/tablets/tableno1.jpg"
import leno2 from "../media/tablets/tableno2.jpg"
import leno3 from "../media/tablets/tableno3.jpg"
import ipad1 from "../media/tablets/ipad1.jpg"
import ipad2 from "../media/tablets/ipad2.jpg"
import ipad3 from "../media/tablets/ipad3.jpg"

function pagTablet(){
    let i = 1; 
    let j = 469900;

    const ContadorMas = ()=>{ 
        i = i + 1;
        j = j + 469900; 
        let cant = document.getElementById("unidades");
        let sum = document.getElementById("vUnitario");

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
            let cant = document.getElementById("unidades"); 
            let rest = document.getElementById("vUnitario");

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



    return(
         <div>
            {/* Producto primero */}
            <div className="container-productos">
            <div className="produc-aline">
                <main className="main-slider-produc-tablet">
			<Slideshow controles={true}>
				<Slide>
					<img src={tab1} alt="Huawei"/>
				</Slide>
				<Slide>
					<img src={tab2} alt="Huawei"/>
				</Slide>
				<Slide>
					<img src={tab3} alt="Huawei"/>
				</Slide>
			</Slideshow>
            </main>
            </div>

      
            <div className="formulario">
                <form>
                    <h1>TABLET HUAWEI MATEPAD</h1>

                    <label for="idProducto"> <b>ID del Producto</b> </label><br></br>
                    <input type="text" value="02" readonly="true" id="idProducto"/>
                    <br></br>

                    <label for="descProducto"> <b>Descripción del Producto</b> </label><br></br>
                    <ul className="descrip-produ">
                        <li>Pantalla: 9.7" HD</li>
                        <li>Resolución cámara principal: 5 MP - frontal: 2 MP</li>
                        <li>Procesador: Kirin 710 Octa-Core</li>
                        <li>Memoria RAM: 2 GB</li>
                        <li>Almacenamiento: 32 GB</li>
                        <li>Sistema operativo: Android 10 / emui 10.1</li>
                        <li>Batería: 5100 mAh</li>
                        <li>Conectividad: Wifi - Bluetooth 5.1</li>
                    </ul>
                    <br></br>

                    <label for="idProducto"> <b>Disponibilidad</b> </label><br></br>
                    <input type="text" value="Disponible" readonly="true" id="idProducto"/>
                    <br></br>

                    <label for="vUnitario"> <b>Valor Unitario del Producto</b> </label><br></br>
                    $<input type="number" value="469.900" readonly="true" id="vUnitario"/>
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
            {/* Producto Segundo */}
            <div className="container-productos">
            <div className="produc-aline">
                <main className="main-slider-produc-tablet">
			<Slideshow controles={true}>
				<Slide>
					<img src={sams1} alt="sams"/>
				</Slide>
				<Slide>
					<img src={sams2} alt="sams"/>
				</Slide>
				<Slide>
					<img src={sams3} alt="sams"/>
				</Slide>
			</Slideshow>
            </main>
            </div>

      
            <div className="formulario">
                <form>
                    <h1>TABLET HUAWEI MATEPAD</h1>

                    <label for="idProducto"> <b>ID del Producto</b> </label><br></br>
                    <input type="text" value="02" readonly="true" id="idProducto"/>
                    <br></br>

                    <label for="descProducto"> <b>Descripción del Producto</b> </label><br></br>
                    <ul className="descrip-produ">
                        <li>Pantalla: 9.7" HD</li>
                        <li>Resolución cámara principal: 5 MP - frontal: 2 MP</li>
                        <li>Procesador: Kirin 710 Octa-Core</li>
                        <li>Memoria RAM: 2 GB</li>
                        <li>Almacenamiento: 32 GB</li>
                        <li>Sistema operativo: Android 10 / emui 10.1</li>
                        <li>Batería: 5100 mAh</li>
                        <li>Conectividad: Wifi - Bluetooth 5.1</li>
                    </ul>
                    <br></br>

                    <label for="idProducto"> <b>Disponibilidad</b> </label><br></br>
                    <input type="text" value="Disponible" readonly="true" id="idProducto"/>
                    <br></br>

                    <label for="vUnitario"> <b>Valor Unitario del Producto</b> </label><br></br>
                    $<input type="number" value="469.900" readonly="true" id="vUnitario"/>
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
            {/* Producto Tercero */}
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
                    <h1>TABLET HUAWEI MATEPAD</h1>

                    <label for="idProducto"> <b>ID del Producto</b> </label><br></br>
                    <input type="text" value="02" readonly="true" id="idProducto"/>
                    <br></br>

                    <label for="descProducto"> <b>Descripción del Producto</b> </label><br></br>
                    <ul className="descrip-produ">
                        <li>Pantalla: 9.7" HD</li>
                        <li>Resolución cámara principal: 5 MP - frontal: 2 MP</li>
                        <li>Procesador: Kirin 710 Octa-Core</li>
                        <li>Memoria RAM: 2 GB</li>
                        <li>Almacenamiento: 32 GB</li>
                        <li>Sistema operativo: Android 10 / emui 10.1</li>
                        <li>Batería: 5100 mAh</li>
                        <li>Conectividad: Wifi - Bluetooth 5.1</li>
                    </ul>
                    <br></br>

                    <label for="idProducto"> <b>Disponibilidad</b> </label><br></br>
                    <input type="text" value="Disponible" readonly="true" id="idProducto"/>
                    <br></br>

                    <label for="vUnitario"> <b>Valor Unitario del Producto</b> </label><br></br>
                    $<input type="number" value="469.900" readonly="true" id="vUnitario"/>
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
            {/* Producto Cuarto */}
            <div className="container-productos">
            <div className="produc-aline">
                <main className="main-slider-produc-tablet">
			<Slideshow controles={true}>
				<Slide>
					<img src={ipad1} alt="Huawei"/>
				</Slide>
				<Slide>
					<img src={ipad2} alt="Huawei"/>
				</Slide>
				<Slide>
					<img src={ipad3} alt="Huawei"/>
				</Slide>
			</Slideshow>
            </main>
            </div>

      
            <div className="formulario">
                <form>
                    <h1>TABLET HUAWEI MATEPAD</h1>

                    <label for="idProducto"> <b>ID del Producto</b> </label><br></br>
                    <input type="text" value="02" readonly="true" id="idProducto"/>
                    <br></br>

                    <label for="descProducto"> <b>Descripción del Producto</b> </label><br></br>
                    <ul className="descrip-produ">
                        <li>Pantalla: 9.7" HD</li>
                        <li>Resolución cámara principal: 5 MP - frontal: 2 MP</li>
                        <li>Procesador: Kirin 710 Octa-Core</li>
                        <li>Memoria RAM: 2 GB</li>
                        <li>Almacenamiento: 32 GB</li>
                        <li>Sistema operativo: Android 10 / emui 10.1</li>
                        <li>Batería: 5100 mAh</li>
                        <li>Conectividad: Wifi - Bluetooth 5.1</li>
                    </ul>
                    <br></br>

                    <label for="idProducto"> <b>Disponibilidad</b> </label><br></br>
                    <input type="text" value="Disponible" readonly="true" id="idProducto"/>
                    <br></br>

                    <label for="vUnitario"> <b>Valor Unitario del Producto</b> </label><br></br>
                    $<input type="number" value="469.900" readonly="true" id="vUnitario"/>
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

export default pagTablet;