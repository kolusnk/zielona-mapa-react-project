import React from 'react'
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng
} from "react-places-autocomplete";

export function GoogleMapSearch({value, onChange, onSelect, adressError}) {
    return (
        <PlacesAutocomplete
            value={value}
            onChange={onChange}
            onSelect={onSelect}
        >
            {({getInputProps, suggestions, getSuggestionItemProps, loading}) => (
                <div style={{width: '100%'}}>
                    <span>Adres:</span> {adressError && <span className='error-message'>({adressError})</span>}
                    <input {...getInputProps({placeholder: "wyszukaj adres"})}
                           className='form__input'
                    />


                    <div className={suggestions.length > 0 ? 'form__input-results': 'dn'}>
                        {loading ? <div>...szukam</div> : null}

                        {suggestions.map(suggestion => {
                            const style = {
                                backgroundColor: suggestion.active ? "#55dfb4" : "#fff",
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