import React from 'react';

export function Input({label, type, name, min, max}) {
    return (
        <div className="form__field">
            <label className="form__label" htmlFor="name">{label}</label><br/>
            <input type={type}
                   className="form__input"
                   name={name}
                   id={name}
                   min={min}
                   max={max}
                   required
            />
        </div>
    )
}


