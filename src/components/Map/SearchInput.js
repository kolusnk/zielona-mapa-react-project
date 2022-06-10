import React from 'react';
import ReactLeafletSearch from "react-leaflet-search";
import { Popup } from "react-leaflet";

import {icon} from "leaflet";

export const SearchInput = (props) => {
    const myIcon = icon({
        iconUrl: `${process.env.PUBLIC_URL}/images/marker-icon.png`,
        iconSize: [32, 42]
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
        <ReactLeafletSearch position="topleft" markerIcon={myIcon} popUp={myPopup}/>
    )
}
