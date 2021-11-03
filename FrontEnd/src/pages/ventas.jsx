import React from 'react'
import "styles/ventas.css"

export default function VentaTotal() {
    return (
        <div className="body-venta">
           <main >
                <div>
                    <table className="tabla-usuarios">
                        <caption>Tabla de Ventas</caption>
                        
                        <tr>
                            <th>ID Venta</th>
                            <th>Nombre Comprador</th>
                            <th>Valor Total</th>
                            <th>Documento Identidad</th>
                            <th>Correo Electronico</th>
                            <th>Telefono</th>
                            <th>Dirección</th>
                        </tr>
                        <tr>
                            <td>112123</td>
                            <td>Julian David Tenorio</td>
                            <td>1200000</td>
                            <td>123456789</td>
                            <td>judt1221@hotmail.com</td>
                            <td>3217219328</td>
                            <td>CLL 12 No. 123-456</td>
                        </tr>
                        
                        
                    </table>
                </div>
            </main> 
        </div>
    )
}
