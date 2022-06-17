import React from 'react'
import {Popup} from "react-leaflet";

export function MyPopup({adress, trees, others, floor, noice}) {
    return (
        <Popup>
            <p className='map__popup map__popup-title'>{adress}</p>
            <p className='map__popup'>ilość drzew:
                <span>{trees === 'park' || trees === 'las' ? ` widzę ${trees}` : ` ${trees}`}</span>
            </p>
            <p className='map__popup'>widok z okna: <span>{others}</span></p>
            <p className='map__popup'>piętro: <span>{floor}</span> </p>
            <p className='map__popup'>poziom hałasu: <span>{noice}</span> </p>
        </Popup>

    )
}