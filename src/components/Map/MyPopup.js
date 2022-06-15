import React from 'react'
import {Popup} from "react-leaflet";

export function MyPopup({adress, trees, floor, noice}) {
    return (
        <Popup>
            adres: {adress}<br/>
            ilość drzew: {trees}<br/>
            piętro: {floor}<br/>
            poziom hałasu: {noice}
        </Popup>

    )
}