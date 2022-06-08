import React from 'react';

export function Select({label, name, options}) {
    return (
        <div className="form__field">
            <label className="form__label" htmlFor="name">{label}</label><br/>
            <select className="form__input" name={name} id={name}>
                <option></option>
                {options.map(option => {
                    return <option key={option}>{option}</option>
                })}

            </select>
        </div>
    )
}


