import React, {useRef} from 'react'
import { createProduct } from '../../utils/api/products';

export default function RegProduc() {
    const form = useRef(null);
    const submitForm = async (e) => {
        e.preventDefault();
        const fd = new FormData(form.current);
    
        const nuevoProducto = {};
        fd.forEach((value, key) => {
          nuevoProducto[key] = value;
        });
        console.log("envio formulario")
    
        await createProduct(
          {
            nombre: nuevoProducto.nombre.toUpperCase(),
            descripcion: nuevoProducto.descripcion.toLowerCase(),
            precio: nuevoProducto.precio,
            unidades: nuevoProducto.unidades,
            estado: nuevoProducto.estado,
          },
          (response) => {
            console.log("Producto agregado con exito")
            document.getElementById("create-course-form").reset();
            
          },
          (error) => {
            console.error(error);
          }
        );
    
      };
    return (
        <div className="cajon">
		    <div className="form__top">
			    <h2>Registro de Productos</h2>
		    </div>

		    <form className="form__reg" ref={form} onSubmit={submitForm} id="create-course-form">
                <input name="nombre" className="input" type="text" placeholder="&#128100;  Nombre Producto" required autofocus/>
                <textarea name="descripcion"  className="input" rows="10" placeholder="&#128100;  Descripción Producto" required autofocus></textarea>
                <select name='estado' className='input' defaultValue={0} required autofocus>
                    <option disabled value={0}>Seleccione una opción</option>
                    <option value="Disponible">Disponible</option>
                    <option value="No disponible">No disponible</option>
                </select>
                <input name="precio" className="input" type="number" placeholder="&#9993;  Valor Producto" required/>
                <input name ="unidades" className="input" type="number" placeholder="&#128222;  Unidades" required/>
                <div className="btn__form">
            	    <input className="btn__submit" type="submit" value="REGISTRAR"/>
            	    <input className="btn__reset" type="reset" value="LIMPIAR"/>	
                </div>
                
		    </form>
	    </div>
    )
}
