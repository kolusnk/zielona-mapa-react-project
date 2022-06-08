import React, {useState} from 'react'

export function Input({label, type, name, value, errorMessage, onChange, min, max}) {
    return (
        <label>
            {label} {errorMessage && <span className='error-message'>({errorMessage})</span>}<br/>
            <input
                className='form__input'
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                min={min}
                max={max}
            />
        </label>
    )
}