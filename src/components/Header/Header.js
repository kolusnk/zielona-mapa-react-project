import React from 'react';
import './header.scss'

export function Header() {
    return (
        <header className="header">
            <div className="container header__container">
                <a href='#' className='header__logo logo'>ZielonaMapa.pl</a>
                <nav className="header__nav main-nav">
                    <ul className="main-nav__list">
                        <li className="main-nav-list__element"><a href='#'>O nas</a></li>
                        <li className="main-nav-list__element"><a href='#'>Mapa</a></li>
                        <li className="main-nav-list__element"><a href='#'>Formularz</a></li>
                    </ul>
                </nav>
            </div>


        </header>
    )
}