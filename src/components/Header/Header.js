import React from 'react';
import './header.scss'
import { Link } from "react-router-dom";


export function Header() {
    return (
        <header className="header">
            <div className="container header__container">
                <Link to="/">ZielonaMapa.pl</Link>
                <nav className="header__nav main-nav">
                    <ul className="main-nav__list">
                        <li className="main-nav-list__element"><Link to="/">O nas</Link></li>
                        <li className="main-nav-list__element"><Link to="/map">Mapa</Link></li>
                        <li className="main-nav-list__element"><Link to="/formpage">Formularz</Link></li>
                    </ul>
                </nav>
            </div>


        </header>
    )
}