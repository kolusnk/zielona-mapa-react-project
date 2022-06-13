import React from 'react'
import PlacesAutocomplete from "react-places-autocomplete";

export function GoogleMapSearch({label,value, errorMessage, onChange, onSelect}) {
    return (
        <PlacesAutocomplete
            value={value}
            onChange={onChange}
            onSelect={onSelect}
        >
            {({getInputProps, suggestions, getSuggestionItemProps, loading}) => (
                <div style={{width: '100%'}}>
                    {label} {errorMessage && <span className='error-message'>({errorMessage})</span>}<br/>
                    <input {...getInputProps({placeholder: "wyszukaj adres"})}
                           className='form__input'
                    />

                    <div>
                        {loading ? <div>...loading</div> : null}

                        {suggestions.map(suggestion => {
                            const style = {
                                backgroundColor: suggestion.active ? "#55dfb4" : "#fff"
                            };

                            return (
                                <div {...getSuggestionItemProps(suggestion, {style})} key={suggestion.description}>
                                    {suggestion.description}
                                </div>
                            );
                        })}
                    </div>
                </div>
            )}
        </PlacesAutocomplete>
    )
}