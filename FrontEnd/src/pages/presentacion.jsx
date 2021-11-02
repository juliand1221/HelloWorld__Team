import React from 'react'
import "../styles/presentacion.css"
import foto1 from "../media/foto1.jpg"



export default function PresentacionContact() {
    return (
        <div>
            <div class="contacto">
                <div class="presentacion">
                    <div class="card">
                        <img src={foto1} alt="Jane" />
                        <div class="tarjeta">
                            <h2>Jose Manuel Castaño Aristizabal</h2>
                            <br></br>
                            <p class="title-tarjeta">CEO &amp; Founder</p>
                            <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                            <p>jose.castano01@usc.edu.co</p>
                            <p><button class="contact">Contact</button></p>
                        </div>
                    </div>
                </div>

                <div class="presentacion">
                    <div class="card">
                        <img src={foto1} alt="Mike" />
                        <div class="tarjeta">
                            <h2>Raul Esteban Cuervo Sastoque</h2>
                            <br></br>
                            <p class="title-tarjeta">Art Director</p>
                            <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                            <p>raulecuervo@gmail.com</p>
                            <p><button class="contact">Contact</button></p>
                        </div>
                    </div>
                </div>

                <div class="presentacion">
                    <div class="card">
                        <img src={foto1} alt="Mike" />
                        <div class="tarjeta">
                            <h2>Nicolas Narvaez Arturo</h2>
                            <br></br>
                            <p class="title-tarjeta">Art Director</p>
                            <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                            <p>nkxg4130@gmail.com</p>
                            <p><button class="contact">Contact</button></p>
                        </div>
                    </div>
                </div>

                <div class="presentacion">
                    <div class="card">
                        <img src={foto1} alt="Mike" />
                        <div class="tarjeta">
                            <h2>Gina Julieth Tellez Santana</h2>
                            <br></br>
                            <p class="title-tarjeta">Art Director</p>
                            <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                            <p>julittellez@gmail.com</p>
                            <p><button class="contact">Contact</button></p>
                        </div>
                    </div>
                </div>

                <div class="presentacion">
                    <div class="card">
                        <img src={foto1} alt="John" />
                        <div class="tarjeta">
                            <h2>Julian David Tenorio Yotengo</h2>
                            <br></br>
                            <p class="title-tarjeta">Designer</p>
                            <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                            <p>judt1221@hotmail.com</p>
                            <p><button class="contact">Contact</button></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
