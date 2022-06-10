import React from 'react';
import '../components/Map/map.scss'
import 'leaflet/dist/leaflet.css'
import {MapContainer, TileLayer, useMap, Marker, Popup} from 'react-leaflet'
import {PinMarker} from "../components/Map/PinMarker";
import {Template} from "../components/Template/Template";
import {Map} from "../components/Map/Map";

export const MapPage = () => {
    return (
        <Template>
            <Map/>
        </Template>

    )
}