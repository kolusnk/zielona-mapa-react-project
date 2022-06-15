import React from 'react';

export function Select({label, name, options, value, onChange, errorMessage}) {
    return (
        <label className='form__field'>
            {label} {errorMessage && <span className='error-message'>({errorMessage})</span>}<br/>
            <select className="form__input" name={name} id={name} value={value} onChange={onChange}>
                <option></option>
                {options.map(option => {
                    return <option key={option}>{option}</option>
                })}

            </select>
        </label>

    )
}