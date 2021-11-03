import React, { useState, useEffect } from 'react'
import { getProductos } from 'utilities/productos';


export default function ProductosInve() {
    const [productos, setProductos] = useState([])
    const [ejecutarConsulta, setEjecutarConsulta] = useState(true)
    useEffect(() => {
        const extraerProductos = async () => {
        await getProductos(
            (response) => {
            setProductos(response.data);
            setEjecutarConsulta(false);
            console.log(response.data);
            },
            (error) => {
            console.error("Error: ", error);
            }
        );
        };
        if (ejecutarConsulta) {
            extraerProductos();
        }
    }, [ejecutarConsulta]);
    return (
        <div className="body">
            <main >
                <div>
                    <table className="tabla-usuarios">
                        <caption>Inventario de Productos</caption>
                        
                        <tr>
                            <th>ID Producto</th>
                            <th>Nombre Producto</th>
                            <th>Disponibilidad</th>
                            <th>Valor del Producto</th>
                            <th>Unidades</th>
                            
                        </tr>
                        {productos.map((pro) => {
                            return (
                        <tr>
                            <td>{pro._id}</td>
                            <td>{pro.nombre}</td>
                            <td>{pro.estado}</td>
                            <td>{pro.precio}</td>
                            <td>{pro.unidades}</td>
                        </tr>
                            );
                        })
                        }
                    </table>
                </div>
            </main> 
        </div>
    )
}
