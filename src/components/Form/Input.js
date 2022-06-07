import React from 'react';

export function Input({label, type, name}) {
    return (
        <label className="form__section-label">
            {label}<br/>
            <input className="form__section-input"
                type={type}
                name={name}
            /><br/>
        </label>
    )
}