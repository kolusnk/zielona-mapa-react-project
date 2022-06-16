import React from 'react';
import {PinMarker} from "./PinMarker";
import {MyPopup} from "./MyPopup";

export function AllMarkers ({markers}) {
    return (
        markers.map(marker => {
            return (
            <PinMarker key={marker.id} position={[marker.positionX, marker.positionY]}>
                <MyPopup adress={marker.adress} trees={marker.trees} floor={marker.floor} noice={marker.noice}/>
            </PinMarker>
                )
        })

    )
}