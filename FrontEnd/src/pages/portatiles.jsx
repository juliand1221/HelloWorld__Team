import React from 'react';
import {Slideshow, Slide, TextoSlide} from '../components/SliderTwo'
import '../styles/SliderTwo.css';
import port1 from "../media/portatiles/porta1.jpg"
import port2 from "../media/portatiles/porta2.jpg"
import port3 from "../media/portatiles/porta3.jpg"
import hp1 from "../media/portatiles/hp1.jpg"
import hp2 from "../media/portatiles/hp2.jpg"
import hp3 from "../media/portatiles/hp3.jpg"
import asus1 from "../media/portatiles/asus1.jpg"
import asus2 from "../media/portatiles/asus2.jpg"
import asus3 from "../media/portatiles/asus3.jpg"
import acer1 from "../media/portatiles/acer1.jpg"
import acer2 from "../media/portatiles/acer2.jpg"
import acer3 from "../media/portatiles/acer3.jpg"
import huawei1 from "../media/portatiles/huawei1.jpg"
import huawei2 from "../media/portatiles/huawei2.jpg"
import huawei3 from "../media/portatiles/huawei3.jpg"

function ProPorta(){
    let i = 1; 
    let j = 1469900;

    const ContadorMas = ()=>{ 
        i = i + 1;
        j = j + 1469900; 
        let cant = document.getElementById("unidades");
        let sum = document.getElementById("vUnitario");

        cant.value = i;
        sum.value = j;

        if(cant.value === 1){
            i=1;
            j=1469900
            cant.value="1";
            sum.value="1469900"
        }
    } 

    function ContadormEnos(){ 
        if(i>=2){
            i = i - 1;
            j = j - 1469900; 
            let cant = document.getElementById("unidades"); 
            let rest = document.getElementById("vUnitario");

            cant.value = i;
            rest.value = j;

            if(cant.value === 1){
                i=1;
                j=1469900
                cant.value="1";
                rest.value="1469900"
            }
        }
            
    }
    return(
        <div>
            {/* Portatiles Uno */}
            <div className="container-productos">
            <div className="produc-aline">
                <main className="main-slider-produc-tablet">
			<Slideshow controles={true}>
				<Slide>
					<img src={port1} alt="Lenovo"/>
				</Slide>
				<Slide>
					<img src={port2} alt="Lenovo"/>
				</Slide>
				<Slide>
					<img src={port3} alt="Lenovo"/>
				</Slide>
			</Slideshow>
            </main>
            </div>

      
            <div className="formulario">
                <form>
                    <h1>Portátil Lenovo IdeaPad 3 14IIL05</h1>

                    <label for="idProducto"> <b>ID del Producto</b> </label><br></br>
                    <input type="text" value="03" readonly="true" id="idProducto"/>
                    <br></br>

                    <label for="descProducto"> <b>Descripción del Producto</b> </label><br></br>
                    <ul className="descrip-produ">
                        <li>Procesador Intel Core i3-1005G1</li>
                        <li>Memoria RAM de 4 GB DDR4-2666 soldada</li>
                        <li>Pantalla 14 «FHD (1920 x 1080) IPS 250 nits Antirreflejo</li>
                        <li>Disco duro de 1 TB 5400 rpm 2,5</li>
                        <li>2 USB 3.2 de 1.a generación</li>
                        <li>1 conector combinado de auriculares / micrófono (3,5 mm)</li>
                    </ul>
                    <br></br>

                    <label for="idProducto"> <b>Disponibilidad</b> </label><br></br>
                    <input type="text" value="Disponible" readonly="true" id="idProducto"/>
                    <br></br>

                    <label for="vUnitario"> <b>Valor Unitario del Producto</b> </label><br></br>
                    $<input type="number" value="1469900" readonly="true" id="vUnitario"/>
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
        {/* Portatiles Dos */}
            <div className="container-productos">
            <div className="produc-aline">
                <main className="main-slider-produc-portatil">
			<Slideshow controles={true}>
				<Slide>
					<img src={hp1} alt="hp"/>
				</Slide>
				<Slide>
					<img src={hp2} alt="hp"/>
				</Slide>
				<Slide>
					<img src={hp3} alt="hp"/>
				</Slide>
			</Slideshow>
            </main>
            </div>

      
            <div className="formulario">
                <form>
                    <h1>Portátil HP</h1>

                    <label for="idProducto"> <b>ID del Producto</b> </label><br></br>
                    <input type="text" value="03" readonly="true" id="idProducto"/>
                    <br></br>

                    <label for="descProducto"> <b>Descripción del Producto</b> </label><br></br>
                    <ul className="descrip-produ">
                        <li>Procesador Intel Core i3-1005G1</li>
                        <li>Memoria RAM de 4 GB DDR4-2666 soldada</li>
                        <li>Pantalla 14 «FHD (1920 x 1080) IPS 250 nits Antirreflejo</li>
                        <li>Disco duro de 1 TB 5400 rpm 2,5</li>
                        <li>2 USB 3.2 de 1.a generación</li>
                        <li>1 conector combinado de auriculares / micrófono (3,5 mm)</li>
                    </ul>
                    <br></br>

                    <label for="idProducto"> <b>Disponibilidad</b> </label><br></br>
                    <input type="text" value="Disponible" readonly="true" id="idProducto"/>
                    <br></br>

                    <label for="vUnitario"> <b>Valor Unitario del Producto</b> </label><br></br>
                    $<input type="number" value="1469900" readonly="true" id="vUnitario"/>
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
        {/* Portatiles Tres */}
            <div className="container-productos">
            <div className="produc-aline">
                <main className="main-slider-produc-portatil">
			<Slideshow controles={true}>
				<Slide>
					<img src={asus1} alt="Asus"/>
				</Slide>
				<Slide>
					<img src={asus2} alt="Asus"/>
				</Slide>
				<Slide>
					<img src={asus3} alt="Asus"/>
				</Slide>
			</Slideshow>
            </main>
            </div>

      
            <div className="formulario">
                <form>
                    <h1>Portátil Asus</h1>

                    <label for="idProducto"> <b>ID del Producto</b> </label><br></br>
                    <input type="text" value="03" readonly="true" id="idProducto"/>
                    <br></br>

                    <label for="descProducto"> <b>Descripción del Producto</b> </label><br></br>
                    <ul className="descrip-produ">
                        <li>Procesador Intel Core i3-1005G1</li>
                        <li>Memoria RAM de 4 GB DDR4-2666 soldada</li>
                        <li>Pantalla 14 «FHD (1920 x 1080) IPS 250 nits Antirreflejo</li>
                        <li>Disco duro de 1 TB 5400 rpm 2,5</li>
                        <li>2 USB 3.2 de 1.a generación</li>
                        <li>1 conector combinado de auriculares / micrófono (3,5 mm)</li>
                    </ul>
                    <br></br>

                    <label for="idProducto"> <b>Disponibilidad</b> </label><br></br>
                    <input type="text" value="Disponible" readonly="true" id="idProducto"/>
                    <br></br>

                    <label for="vUnitario"> <b>Valor Unitario del Producto</b> </label><br></br>
                    $<input type="number" value="1469900" readonly="true" id="vUnitario"/>
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
        {/* Portatiles Cuarto */}
            <div className="container-productos">
            <div className="produc-aline">
                <main className="main-slider-produc-portatil">
			<Slideshow controles={true}>
				<Slide>
					<img src={acer1} alt="acer"/>
				</Slide>
				<Slide>
					<img src={acer2} alt="acer"/>
				</Slide>
				<Slide>
					<img src={acer3} alt="acer"/>
				</Slide>
			</Slideshow>
            </main>
            </div>

      
            <div className="formulario">
                <form>
                    <h1>Portátil ACER</h1>

                    <label for="idProducto"> <b>ID del Producto</b> </label><br></br>
                    <input type="text" value="03" readonly="true" id="idProducto"/>
                    <br></br>

                    <label for="descProducto"> <b>Descripción del Producto</b> </label><br></br>
                    <ul className="descrip-produ">
                        <li>Procesador Intel Core i3-1005G1</li>
                        <li>Memoria RAM de 4 GB DDR4-2666 soldada</li>
                        <li>Pantalla 14 «FHD (1920 x 1080) IPS 250 nits Antirreflejo</li>
                        <li>Disco duro de 1 TB 5400 rpm 2,5</li>
                        <li>2 USB 3.2 de 1.a generación</li>
                        <li>1 conector combinado de auriculares / micrófono (3,5 mm)</li>
                    </ul>
                    <br></br>

                    <label for="idProducto"> <b>Disponibilidad</b> </label><br></br>
                    <input type="text" value="Disponible" readonly="true" id="idProducto"/>
                    <br></br>

                    <label for="vUnitario"> <b>Valor Unitario del Producto</b> </label><br></br>
                    $<input type="number" value="1469900" readonly="true" id="vUnitario"/>
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
        {/* Portatiles Cinco */}
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
                    <h1>Portátil Huawei</h1>

                    <label for="idProducto"> <b>ID del Producto</b> </label><br></br>
                    <input type="text" value="03" readonly="true" id="idProducto"/>
                    <br></br>

                    <label for="descProducto"> <b>Descripción del Producto</b> </label><br></br>
                    <ul className="descrip-produ">
                        <li>Procesador Intel Core i3-1005G1</li>
                        <li>Memoria RAM de 4 GB DDR4-2666 soldada</li>
                        <li>Pantalla 14 «FHD (1920 x 1080) IPS 250 nits Antirreflejo</li>
                        <li>Disco duro de 1 TB 5400 rpm 2,5</li>
                        <li>2 USB 3.2 de 1.a generación</li>
                        <li>1 conector combinado de auriculares / micrófono (3,5 mm)</li>
                    </ul>
                    <br></br>

                    <label for="idProducto"> <b>Disponibilidad</b> </label><br></br>
                    <input type="text" value="Disponible" readonly="true" id="idProducto"/>
                    <br></br>

                    <label for="vUnitario"> <b>Valor Unitario del Producto</b> </label><br></br>
                    $<input type="number" value="1469900" readonly="true" id="vUnitario"/>
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
export default ProPorta;