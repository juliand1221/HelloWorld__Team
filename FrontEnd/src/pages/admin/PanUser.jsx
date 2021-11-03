import React from 'react'
import "styles/PanUser.css"

export default function PanUser() {
    return (
        <div className="body">
           <main >
                <div>
                    <table className="tabla-usuarios">
                        <caption>Usuarios</caption>
                        
                        <tr>
                            <th>Usuario</th>
                            <th>Rol</th>
                            <th>Estado</th>
                        </tr>
                        <tr>
                            <td>Julian David Tenorio</td>
                            <td>Administrador</td>
                            <td>Activo</td>
                        </tr>
                        <tr>
                            <td>Maria Lara Rosriguez</td>
                            <td>Usuario</td>
                            <td>Activo</td>
                        </tr>
                        <tr>
                            <td>Laura Peña Usme</td>
                            <td>Vendedor</td>
                            <td>Activo</td>
                        </tr>
                        <tr>
                            <td>Daniela Gil Varela</td>
                            <td>Vendedor</td>
                            <td>Activo</td>
                        </tr>
                    </table>
                </div>
            </main> 
        </div>
    )
}
