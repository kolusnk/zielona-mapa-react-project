import React, {useState, useEffect} from 'react';
import {SearchInput} from "./SearchInput"
import {PinMarker} from "./PinMarker";
import './map.scss'
import {Map, Popup, TileLayer} from "react-leaflet";
import 'leaflet/dist/leaflet.css'
import db from '../../firebase/firebase';
import {onSnapshot, collection} from 'firebase/firestore'
import {MyPopup} from "./MyPopup";


export function MapComponent() {
    const [markers, setMarkers] = useState([]);
    console.log(markers)
    useEffect(() => {
        onSnapshot(collection(db, "pinmarkers"), (snapshot) => {
            setMarkers(snapshot.docs.map(doc => ({...doc.data(), id: doc.id})))
        });
    }, [])


    const center = [52.096696599828014, 19.41233664228455]
    return (
        <section className='container map__container'>
            <div className='map'>
                <Map center={center} zoom={6} scrollWheelZoom={true}
                     style={{width: "100%", height: "100%"}}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <SearchInput/>
                    {
                        markers.map(marker => {
                            return <PinMarker key={marker.id} position={[marker.positionX, marker.positionY]}>
                                <MyPopup
                                    adress={marker.adress}
                                    trees={marker.trees}
                                    floor={marker.floor}
                                    noice={marker.noice}
                                />
                            </PinMarker>
                        })
                    }
                </Map>
            </div>
        </section>
    )
}