import React from 'react';

export function StepOne() {
    return (
        <div className="how-it-works__step step-one">
            <div className='how-it-works__text-box'>
                <span className="text-box__number">01</span>
                <h3 className="text-box__title">Wyszukaj na mapie interesującą Cię lokalizację</h3>
                <p className="text-box__text">Możesz wpisać dokładny adres ręcznie, lub przeglądać mapę by
                    znaleźć określoną okolicę.</p>
            </div>
            <div className='how-it-works__img-box'>
                <i className="fa-solid fa-map"></i>
            </div>
        </div>
    )
}
