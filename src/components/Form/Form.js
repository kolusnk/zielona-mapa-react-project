import React, {useState} from 'react'
import {Input} from "./Input";
import {validate} from "./validate";

export function Form({generalError, onSubmit}) {
    const [values, setValues] = useState({name: '', email: '', trees: ''});
    const [errorMessages, setErrorMessages] = useState(null)

    function handleChange(event) {
        const {name, value} = event.target

        setValues(prevValues => {
            return {
                ...prevValues,
                [name]: value,
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault()

        const errorMessages = validate(values);
        setErrorMessages(errorMessages)

        if (errorMessages) return
        if (typeof onSubmit === 'function') {
            console.log(values)
            onSubmit(values);
        }
    }


    return (
        <form className='form' onSubmit={handleSubmit}>
            <Input
                label='Imię:'
                type='text'
                name='name'
                value={values.name}
                errorMessage={errorMessages?.name}
                onChange={handleChange}
            />
            <Input
                label='Email:'
                type='email'
                name='email'
                value={values.email}
                errorMessage={errorMessages?.email}
                onChange={handleChange}
            />
            <Input
                label='Ilość drzew które widzisz z okna:'
                type='number'
                name='trees'
                value={values.trees}
                min={0}
                max={20}
                errorMessage={errorMessages?.trees}
                onChange={handleChange}
            />
                <input
                    className='btn'
                    type='submit' value='Wyślij!'/>
        </form>
    )
}