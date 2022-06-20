import React, { useState, useEffect } from "react";
import { SearchInput } from "./SearchInput";
import "./map.scss";
import { Map, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import db from "../../firebase/firebase";
import { onSnapshot, collection } from "firebase/firestore";
import { AllMarkers } from "./AllMarkers";

export function MapComponent() {
  const [markers, setMarkers] = useState([]);
  useEffect(() => {
    onSnapshot(collection(db, "pinmarkers"), (snapshot) => {
      setMarkers(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
  }, []);

  const center = [52.096696599828014, 19.41233664228455];
  return (
    <section className="container map__container">
      <div className="map">
        <Map center={center} zoom={6} scrollWheelZoom={true} style={{ width: "100%", height: "100%" }}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <SearchInput />
          <AllMarkers markers={markers} />
        </Map>
      </div>
    </section>
  );
}
