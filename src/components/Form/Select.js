import React from 'react';

export function Select({label, name, options, value, onChange, errorMessage}) {
    return (
        <label className='form__field'>
            <div className='form__field-label'>
                <span>{label}</span>
                <span>{errorMessage && <span className='error-message'>({errorMessage})</span>}</span>
            </div>
            <select className="form__input" name={name} id={name} value={value} onChange={onChange}>
                <option></option>
                {options.map(option => {
                    return <option key={option}>{option}</option>
                })}

            </select>
        </label>

    )
}