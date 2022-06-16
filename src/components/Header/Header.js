import React, {useState, useEffect} from 'react';
import './header.scss'

import { Link } from "react-router-dom";


export function Header() {
    const [open, setOpen] = useState('false')
    const handleClick = () => {
        setOpen(!open)
    }

    return (
        <header className="header">
            <div className="container header__container">
               <Link className="header__logo" to="/">ZielonaMapa.pl</Link>
                <nav className="header__nav main-nav">
                    <ul className={!open ? "main-nav__list nav-list-mobile" : "main-nav__list" }>
                        <li className="main-nav__list-element">
                            <Link className="nav-link" to="/">O nas</Link>
                        </li>
                        <li className="main-nav__list-element">
                            <Link className="nav-link" to="/map">Mapa</Link>
                        </li>
                        <li className="main-nav__list-element">
                            <Link className="nav-link" to="/formpage">Formularz</Link>
                        </li>
                    </ul>
                </nav>
                <i className={open ? "fa-solid fa-bars" : "fa-solid fa-xmark"} onClick={handleClick}></i>
            </div>


        </header>
    )
}