import React from 'react';
import './footer.scss'
import {Link} from "react-router-dom";

export function Footer() {
    return (
        <footer className="footer">
            <div className="container footer__container">
                <Link className="footer__logo" to="/">ZielonaMapa.pl</Link>
                <div className='footer__contact'>
                    <h4 className="footer__contact-title">Skontaktuj się z nami</h4>
                    <div className="contact">
                        <div className="contact__adres">
                            <p>ZielonaMapa.pl</p>
                            <p>ul. Podleśna 33</p>
                            <p>03-303 Leśniczówka Wielka</p>
                        </div>
                        <div className="contact__details">
                            <p className='contact__details-email'>e-mail: zielona@mapa.pl</p>
                            <p className='contact__details-tel'>telefon: 721 446 137</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}