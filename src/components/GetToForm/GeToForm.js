import React from 'react';
import './gettoform.scss'
import {Link} from "react-router-dom";

export function GetToForm () {
    return (
        <section className="get-to-form">
            <div className="container get-to-form__container">
                <h2 className='get-to-form__title'>Jeśli chcesz wspomóc i zwiększyć naszą bazę danych wypełnij nasz formularz</h2>
                <p className='get-to-form__text'>Nasza baza danych polega na informacjach przekazanych od użytkowników takich jak Ty. Wszyscy
                którym zależy na dbaniu o zieleń miejscą i przestrzeń w której wspólnie mieszkamy mogą wypełnić ankietę
                w której prosimy o odpowiedź na kilka istotnych pytań, które są podstawą do analizy tego jak bardzo
                zielono jest w okół nas. Wypełnienie formularza nie zajmie długo, odpowiesz w nim na kilka prostych i przyjemnych
                pytań, a dzięki temu pomożesz innym zobaczyć jak zielono jest w Twojej okolicy! Prawda, że brzmi fajnie?</p>
                <div className='get-to-form__buttons'>
                    <Link className="btn-link" to="/formpage">
                        <button className='btn btn-primary btn-green'>Wypełnij formularz</button>
                    </Link>
                    <Link className="btn-link" to="/map">
                        <button className='btn btn-secondary'>Sprawdź na mapie</button>
                    </Link>
                </div>
            </div>
        </section>
    )
}