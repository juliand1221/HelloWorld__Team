import React from 'react'
import "../styles/login.css"
import Google from "../media/google_logo.png"
import { Link } from 'react-router-dom'

export default function Login() {
    return (
        <div>
            <div className="contenedorLogin">
                <h2>Login</h2>
                <form id="forma" name="forma" method="POST">
                <div className="elemento">
                    <label for="usuario">Correo Electronico:</label>
                    <input type="text" id="usuario" name="usuario" required="true"/>
                </div>
                <div className="elemento">
                    <label for="password">Contraseña</label>
                    <input type="password" id="password" name="password" required="true"/>
                </div>

                 <div className="olvidaste">
                    <p><a href="#">¿Olvidaste tu Contraseña?</a></p>
                </div>
                

                <div className="elemento">
                    <Link to="/principal">
                    <input type="submit" value="Ingresar"/>
                    </Link>
                </div>

                <div className="olvidaste">
                    <p>¿Eres Nuevo?</p>
                </div>

                
                <div className="elemento">
                    <input type="submit" value="Crear cuenta"/>
                </div>

              





               </form>

            </div>
        </div>
    )
}
