import React, {useState, useEffect} from 'react';
import {MapContainer, Popup, TileLayer} from "react-leaflet";
import {PinMarker} from "./PinMarker";
import './map.scss'
import 'leaflet/dist/leaflet.css'
import db from '../../firebase/firebase';
import {onSnapshot, collection} from 'firebase/firestore'


export function Map() {
    const [markers, setMarkers] = useState([]);
    console.log(markers)
    useEffect(() => {
        onSnapshot(collection(db, "pinmarkers"), (snapshot) => {
            setMarkers(snapshot.docs.map(doc => ({...doc.data(), id: doc.id})))
        });
    }, [])

    const center = [52.33043861355005, 21.010922836222367]
    return (
        <section className='container map__container'>
            <div id='map'>
                <MapContainer center={center} zoom={7} scrollWheelZoom={true}
                              style={{width: "100%", height: "100%"}}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />

                    {
                        markers.map(marker => {
                            return <PinMarker key={marker.id} position={[marker.positionX, marker.positionY]}>
                                <Popup>
                                    {marker.positionX} {marker.positionY}
                                </Popup>
                            </PinMarker>
                        })
                    }
                </MapContainer>
            </div>
        </section>
    )
}