import React from 'react'
import "../styles/SiderBarTwo.css"
import perfil from "../media/logo_small_icon_only.png"
import { Link } from 'react-router-dom'


export default function SidebarTwo() {
    return (
        <div className="body-sidebar">
            <div className="wrapper">
  
        <div className="sidebar">
            <div className="profile">
                <Link to="/">
                <img src={perfil} alt="profile_picture" />
                </Link>
                <h3>Buy and Sell</h3>
                <p>Sistema de Ventas </p>
            </div>
            <ul>
                <li>
                    <a href="admin" >
                        <span className="icon"><i className="fas fa-home"></i></span>
                        <span className="item">Home</span>
                    </a>
                </li>
                <li>
                    <a href="/users">
                        <span className="icon"><i className="fas fa-desktop"></i></span>
                        <span className="item">Usuarios</span>
                    </a>
                </li>
                <li>
                    <a href="/regventas">
                        <span className="icon"><i className="fas fa-user-friends"></i></span>
                        <span className="item">Registro ventas</span>
                    </a>
                </li>
                <li>
                    <a href="/ventatotal">
                        <span className="icon"><i className="fas fa-tachometer-alt"></i></span>
                        <span className="item">Ventas</span>
                    </a>
                </li>
                <li>
                    <a href="/regproductos">
                        <span className="icon"><i className="fas fa-database"></i></span>
                        <span className="item">Registro Productos</span>
                    </a>
                </li>
                <li>
                    <a href="/productosinventario">
                        <span className="icon"><i className="fas fa-chart-line"></i></span>
                        <span className="item">Productos</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span className="icon"><i className="fas fa-user-shield"></i></span>
                        <span className="item">Admin</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span className="icon"><i className="fas fa-cog"></i></span>
                        <span className="item">Settings</span>
                    </a>
                </li>
            </ul>
        </div>
        
    </div>
        </div>
    )
}
