import React from 'react';
import {Form} from "./Form";
import {FormText} from "./FormText";
import './form.scss'

export function FormMain() {
    function handleSubmit() {
    }

    return (
        <section className="form__section">
            <div className="container">
                <div className="form__section-container">
                    <FormText/>
                    <Form/>
                </div>
            </div>

        </section>
    )
}