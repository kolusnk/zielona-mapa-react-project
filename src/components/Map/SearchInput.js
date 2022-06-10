import React from 'react';
import ReactLeafletSearch from "react-leaflet-search";
import { Popup } from "react-leaflet";
import {icon} from "leaflet";
import './map.scss'

export const SearchInput = (props) => {
    const myIcon = icon({
        iconUrl: `${process.env.PUBLIC_URL}/images/icons8-location-50.png`,
        iconSize: [32, 32]
    })

    function myPopup(SearchInfo) {
        return(
            <Popup>
                <div>
                    <p>{SearchInfo.info}</p>
                </div>
            </Popup>
        );
    }


    return (
        <ReactLeafletSearch position="topleft" markerIcon={myIcon} popUp={myPopup} className="custom-style"/>
    )
}
