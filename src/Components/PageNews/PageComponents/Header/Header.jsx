import React from 'react'
import './Header.css'
import { Search } from '../Search/Search'
import { useNavigate,  } from 'react-router-dom';

export const Header = () => {
const navigate=useNavigate;

const handleSport=()=>{
    navigate('./deporte')
}
const handleEconomia=()=>{
    navigate('./economia')
}
const handleSalud=()=>{
    navigate('./salud')
}
const handleTec=()=>{
    navigate('./tecnologia')
}
    return (
        <header>
            <div className="top-nav">
                <div className="title" >
                    News International
                </div>
                <input id="menu-toggle" type="checkbox" />
                <label class='menu-button-container' for="menu-toggle">
                    <div class='menu-button'></div>
                </label>
                <ul class="menu">
                    <li  ><a href="/politica">Politica</a></li>
                    <li onClick={handleEconomia}><a href="/economia">Economía</a></li>
                    <li onClick={handleTec}><a href="/tecnología">Tecnología</a></li>
                    <li onClick={handleSalud} ><a href="/salud">Salud</a></li>
                    <li onClick={handleSport}><a href="/deporte">Deporte </a></li>
                </ul>
            </div>
            <Search/>
        </header>

    )
}
