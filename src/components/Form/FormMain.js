import React from 'react';
import {Form} from "./Form";
import './form.scss'

export function FormMain() {
    return (
        <section className="form__section">
            <div className="container form__section-container">
                <Form/>
            </div>

        </section>
    )
}