import React from 'react';
import './footer.scss'

export function Footer() {
    return (
        <footer className="footer">
            <div className="container footer__container">
                <a href='#' className="footer__logo logo">ZielonaMapa.pl</a>
                <div className='footer__contact'>
                    <h4 className="footer__contact-title">Skontaktuj się z nami</h4>
                    <div className="footer__contact-adres">Adres:
                        <p>ZielonaMapa.pl</p>
                        <p>ul. Podleśna 33</p>
                        <p>03-303 Leśniczówka Wielka</p>
                    </div>
                    <p className='footer__contact-email'>e-mail: zielona@mapa.pl</p>
                    <p className='footer__contact-tel'>telefon: 737 373 737</p>
                </div>
            </div>
        </footer>
    )
}