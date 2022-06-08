import React from 'react';
import {Input} from "./Input";
import {Select} from "./Select";

export function Form() {
    return (
        <form className="form">
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
            <Input
                label='ilość drzew:'
                type='number'
                name='trees'
                min='0'
                max='20'
            />
            <Select
                label='śpiew ptaków:'
                name='trees'
                options={['tak', 'nie']}
            />
        </form>
    )
}