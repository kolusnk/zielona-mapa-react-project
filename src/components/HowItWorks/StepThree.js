import React from 'react';

export function StepThree() {
    return (
        <div className="how-it-works__step step-three grid">
            <div className='how-it-works__text-box'>
                <span className="text-box__number">03</span>
                <h3 className="text-box__title">Zdecyduj czy lokalizacja jest dla Ciebie atrakcyjna</h3>
                <p className="text-box__text">Mamy nadzieję, że przedstawione dane pomogą Ci dowiedzieć się jak "zielono"
                    jest w okolicy i zdecydować czy jest to miejsce dla Ciebie.</p>
            </div>
            <div className='how-it-works__img-box'>
                <i className="fa-solid fa-tree-city"></i>
            </div>
        </div>
    )
}
