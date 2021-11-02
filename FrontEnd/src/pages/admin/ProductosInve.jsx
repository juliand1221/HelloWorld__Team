import React from 'react'

export default function ProductosInve() {
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
                        <tr>
                            <td>112123</td>
                            <td>Celular Samsung A10s</td>
                            <td>Dispoible</td>
                            <td>759500</td>
                            <td>4</td>
                            
                        </tr>
                        
                    </table>
                </div>
            </main> 
        </div>
    )
}
