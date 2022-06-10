import React from 'react';
import '../components/Map/map.scss'
import 'leaflet/dist/leaflet.css'
import {Template} from "../components/Template/Template";
import {MapComponent} from "../components/Map/MapComponent";

export const MapPage = () => {
    return (
        <Template>
            <MapComponent/>
        </Template>

    )
}