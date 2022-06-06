import React from 'react';
import './banner.scss'

export function Banner() {
    return (
        <section className='cta'>
            <div className='container cta-container'>
                    <h1  className='cta-heading'>Znajdź swoje zielone miejsce do życia!</h1>
                    <p>Na naszej mapie możesz znaleźć informacje dotyczące zieleni miejskiej w Twojej okolicy.
                        Sprawdź ile drzew jest w miejcu w któtym chcesz zamieszkać.</p>
                    <div className='cta-buttons'>
                        <button>Spawdź na mapie</button>
                        <button>Uzupełnij dane</button>
                    </div>

            </div>
        </section>
    )
}