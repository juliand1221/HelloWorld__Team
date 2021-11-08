import React, { useEffect, useState } from 'react';
import { getProducts,deleteProduct } from '../../utils/api/products';

export default function ProductosInve() {

    const [productos, setProductos] = useState([]) //contiene toda la lista de los productos de la base de datos
    const [ejecutarConsulta, setEjecutarConsulta] = useState(true);//para actualizar la tabla
    const [editarProducto, setEditarProducto] = useState(false); //estado para saber si se esta editando un producto

    //LISTADO PRODUCTOS
    useEffect(() => {
      const fetchProductos = async () => {
        await getProducts(
          (response) => {
            setProductos(response.data);
            setEjecutarConsulta(false);
          },
          (error) => {
            console.error("Error: ", error);
          }
        );
      };
      if (ejecutarConsulta) {
        fetchProductos();
      }
    }, [ejecutarConsulta]);


    const eliminarProducto = async (idpro) => {
        await deleteProduct(
          idpro,
          (response) => {
            console.log('Producto eliminado con éxito');
            setEjecutarConsulta(true);
          },
          (error) => {
            console.error(error);
          }
        );
      };
    
    const actualizarProducto = async (idpro, infoNuevoProducto) => {
        // //enviar la info al backend
        // await updateProduct(
        //     idpro,
        //     {
        //         nombre: nombre.toUpperCase(),
        //         precio: precio,
        //         unidades: unidades,
        //         estado: nuevoProducto.estado,
        //     },
        //     (response) => {
        //         console.log('Producto modificado con éxito');
        //         setEjecutarConsulta(true);
        //     },
        //     (error) => {
        //         console.error(error);
        //     }
        // );
    };

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
                            <th colSpan={2}></th>
                            
                        </tr>
                        {productos.map((pro) => {
                            return (
                                <tr>
                                    <td>{pro._id}</td>
                                    <td>{pro.nombre}</td>
                                    <td>{pro.estado}</td>
                                    <td>{pro.precio}</td>
                                    <td>{pro.unidades}</td>
                                    <td>
                                        <button type="button" onClick={() => eliminarProducto(pro._id)}>
                                            Eliminar
                                        </button>
                                    </td>
                                    <td>    
                                        <button type="button" title='Editar Producto' onClick={() => console.log("editar")}>
                                            Editar
                                        </button>
                                    </td>
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
