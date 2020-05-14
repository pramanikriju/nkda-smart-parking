import React from "react";
import { Map as LeafletMap, TileLayer, Marker, Popup } from "react-leaflet";
import "@brainhubeu/react-carousel/lib/style.css";
import greenMarker from "../img/green-marker.svg";
import L from "leaflet";

const iconAnchor = [15, 55];
const popupAnchor = [5, -57];
const iconSize = [45, 45];

export const greenIcon = new L.Icon({
  iconUrl: greenMarker,
  iconRetinaUrl: greenMarker,
  iconAnchor: iconAnchor,
  popupAnchor: popupAnchor,
  iconSize: iconSize,
});

function SingleMap(props) {
  return (
    <div>
      <LeafletMap
        center={props.center}
        zoom={15}
        //maxZoom={10}
        attributionControl={true}
        zoomControl={false}
        doubleClickZoom={true}
        scrollWheelZoom={true}
        dragging={true}
        animate={true}
        easeLinearity={0.35}
      >
        <TileLayer
          url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
          attribution="Distronix 2020"
        />
        <Marker position={props.center} icon={greenIcon}>
          <Popup>Parking location</Popup>
        </Marker>
      </LeafletMap>
    </div>
  );
}

export default SingleMap;
