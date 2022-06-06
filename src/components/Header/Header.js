import React from 'react';
import './header.scss'

export function Header() {
    return (
        <header className="header">
            <div className="container header-container">
                <a href='#'>Zielona Mapa</a>
                <nav className="main-nav">
                    <ul className="main-nav-list">
                        <li className="main-nav-list__element"><a href='#'>O nas</a></li>
                        <li className="main-nav-list__element"><a href='#'>Mapa</a></li>
                        <li className="main-nav-list__element"><a href='#'>Formularz</a></li>
                    </ul>
                </nav>
            </div>


        </header>
    )
}