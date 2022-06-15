import React from 'react';

export function Select({label, name, options, value, onChange}) {
    return (
        <label className='form__field'>
            {label}
            <select className="form__input" name={name} id={name} value={value} onChange={onChange}>
                <option></option>
                {options.map(option => {
                    return <option key={option}>{option}</option>
                })}

            </select>
        </label>

    )
}