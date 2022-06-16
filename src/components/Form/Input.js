import React, {useState} from 'react'

export function Input({label, type, name, id, placeholder, value, errorMessage, onChange, min, max}) {
    return (
        <label className='form__field'>
            <div className='form__field-label'>
                <span>{label}</span>
                <span>{errorMessage && <span className='error-message'>({errorMessage})</span>}</span>
            </div>

            <input
                className='form__input'
                id={id}
                type={type}
                placeholder={placeholder}
                name={name}
                value={value}
                onChange={onChange}
                min={min}
                max={max}
            />
        </label>
    )
}