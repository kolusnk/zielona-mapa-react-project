import React from 'react';
import {Input} from "./Input";

export function Form() {
    return (
        <form className="form__section-form">
                <Input
                    label='Imię:'
                    type='text'
                    name='name'
                         />
                <Input
                    label='Email:'
                    type='email'
                    name='email'
                />
        </form>
    )
}