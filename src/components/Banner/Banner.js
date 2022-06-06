import React from 'react';
import './banner.scss'

export function Banner() {
    return (
        <section className='cta'>
            <div className='container cta-container'>
                    <h1  className='cta-heading'>Znajdź swoje zielone miejsce do życia!</h1>
                    <p>Na naszej mapie możesz znaleźć informacje dotyczące zieleni miejskiej w Twojej okolicy.
                        Wpisy innych użytkowników powiedzą Ci ile drzew widzą z okien swoich mieszkań, dowiesz się czy w okolicy jest "betonoza", czy o poranku słychać śpiew ptaków oraz czy w mieszkaniu jest dobre nasłonecznienie.</p>
                    <div className='cta-buttons'>
                        <button className='btn btn-primary'>Sprawdź na mapie</button>
                        <button className='btn btn-secondary'>Uzupełnij dane</button>
                    </div>

            </div>
        </section>
    )
}