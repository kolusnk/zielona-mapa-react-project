import React from "react";
import './howitworks.scss'
import {StepOne} from "../Steps/StepOne";
import {StepTwo} from "../Steps/StepTwo";
import {StepThree} from "../Steps/StepThree";

export function HowItWorks() {
    return (
        <section className='how-it-works'>
            <div className="container how-it-works__container">
                <span className="how-it-works__subtitle">JAK TO DZIAŁA? </span>
                <h2 className='how-it-works__title'>Sprawdź jak szybko i wygodnie korzysta się z naszej zielonej mapy</h2>
                <StepOne/>
                <StepTwo/>
                <StepThree/>
            </div>

        </section>
    )
}