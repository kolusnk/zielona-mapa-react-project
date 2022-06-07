import {icon} from 'leaflet';
import {Marker} from "react-leaflet";

export const PinMarker = ({position, children}) => {
    const iconImg = icon({
        iconUrl: `${process.env.PUBLIC_URL}/images/marker-icon.png`,
        iconSize: [32,42]
    })
    return (
        <Marker icon={iconImg} position={position} >
            {children}
        </Marker>
    )
}

