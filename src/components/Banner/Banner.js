import React from 'react';
import './banner.scss'
import {Link} from "react-router-dom";

export function Banner() {
    return (
        <section className='cta'>
            <div className='container cta__container'>
                <h1 className='cta__heading'>Znajdź swoje zielone miejsce do życia!</h1>
                <p className='cta__text'>Na naszej mapie możesz znaleźć informacje dotyczące zieleni miejskiej w Twojej okolicy.
                    Wpisy innych użytkowników powiedzą Ci ile drzew widzą z okien swoich mieszkań,
                    dowiesz się czy w okolicy jest "betonoza", czy o poranku słychać śpiew ptaków oraz
                    czy w mieszkaniu jest dobre nasłonecznienie. Możesz też pomóc nam w rozwoju naszej
                    bazy danych wypełniając krótki formularz.</p>
                <div className='cta__buttons'>
                    <Link className="btn-link" to="/map">
                        <button className='btn btn-primary'>Sprawdź na mapie</button>
                    </Link>
                    <Link className="btn-link" to="/formpage">
                        <button className='btn btn-secondary'>Wypełnij formularz</button>
                    </Link>

                </div>

            </div>
        </section>
    )
}