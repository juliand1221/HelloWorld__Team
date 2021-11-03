import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "../media/logo_small_icon_only.png"


export default function SideBar() {
    return (
        <div className="body">
            <nav class="menu" tabindex="0">
	            <div class="smartphone-menu-trigger"></div>
                    <header class="avatar">
                      <Link to="/">
		                  <img src={Logo} />
                      </Link>
                        
                    </header>
	                <ul>
                        <li tabindex="0" ><span>Administradores</span></li>
                        <Link to="/users"><li tabindex="0" ><span>Usuarios</span></li></Link>
                        <li tabindex="0" ><span>Vendedores</span></li>
                        <li tabindex="0" ><span>Productos</span></li>
                    </ul>
            </nav>
        </div>
   )
}

{/* <main>
  <div class="helper">
    RESIZE THE WINDOW
		<span>Breakpoints on 900px and 400px</span>
  </div>
</main>
        </div> */}
 
