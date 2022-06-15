import React from 'react'
import {Popup} from "react-leaflet";

export function MyPopup({adress, trees, floor, noice}) {
    return (
        <Popup>
            <p className='map__popup map__popup-title'>{adress}</p>
            <p className='map__popup'>ilość drzew: <span>{trees}</span> </p>
            <p className='map__popup'>piętro: <span>{floor}</span> </p>
            <p className='map__popup'>poziom hałasu: <span>{noice}</span> </p>
        </Popup>

    )
}