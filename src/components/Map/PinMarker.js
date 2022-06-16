import {icon} from 'leaflet';
import {Marker} from "react-leaflet";

export const PinMarker = ({position, children}) => {
    const iconImg = icon({
        iconUrl: `${process.env.PUBLIC_URL}/images/pin-marker.png`,
        iconSize: [32,32]
    })

    return (
        <Marker icon={iconImg} position={position} >
            {children}
        </Marker>
    )
}

