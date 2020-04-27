import React from "react";
import { Map as LeafletMap, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

export const pointerIcon = new L.Icon({
  iconUrl: require("../src/img/garage.svg"),
  iconRetinaUrl: require("../src/img/garage.svg"),
  iconAnchor: null,
  popupAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: new L.Point(60, 75),
  className: "leaflet-div-icon",
});

class Map extends React.Component {
  render() {
    return (
      <LeafletMap
        center={[22.578564, 88.46249]}
        zoom={15}
        //maxZoom={10}
        attributionControl={true}
        zoomControl={true}
        doubleClickZoom={true}
        scrollWheelZoom={true}
        dragging={true}
        animate={true}
        easeLinearity={0.35}
      >
        <TileLayer
          url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
          //attribution="Distronix 2020"
        />
        <Marker position={[22.578564, 88.46249]}>
          <Popup>Popup for any custom information.</Popup>
        </Marker>
      </LeafletMap>
    );
  }
}

export default Map;
