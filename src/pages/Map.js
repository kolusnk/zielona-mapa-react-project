import React from 'react';
import './map.scss'
import 'leaflet/dist/leaflet.css'

import {MapContainer, TileLayer, useMap, Marker, Popup} from 'react-leaflet'
import {PinMarker} from "../components/Map/PinMarker";

export const Map = () => {
    const center = [52.23043861355005, 21.010922836222367]
    return (
        <div className='container map'>
            <section className='map__container'>
                <div id='map'>
                    <MapContainer center={[52.23, 21.01]} zoom={10} scrollWheelZoom={true}
                                  style={{width: "100%", height: "100%"}}>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <PinMarker position={[52.23043861355005, 21.010922836222367]}>
                            <Popup>
                                A pretty CSS3 popup. <br /> Easily customizable.
                            </Popup>
                        </PinMarker>
                    </MapContainer>
                </div>
            </section>
        </div>

    )
}