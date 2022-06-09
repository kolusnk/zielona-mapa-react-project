import React from 'react';

export function StepTwo() {
    return (
        <div className="how-it-works__step step-two grid">
            <div className='how-it-works__img-box'>
                <i className="fa-solid fa-location-dot"></i>
            </div>
            <div className='how-it-works__text-box'>
                <span className="text-box__number">02</span>
                <h3 className="text-box__title">Teraz wybierz pinezkę i kliknij ją</h3>
                <p className="text-box__text">Możesz przejrzeć listę wyników dla lokalizacji - jeśli jest więcej niż jeden wynik,
                    otrzymasz całe zestawienie.</p>
            </div>
        </div>
    )
}
