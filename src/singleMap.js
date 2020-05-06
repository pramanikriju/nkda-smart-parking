import React from "react";
import { Map as LeafletMap, TileLayer, Marker, Popup } from "react-leaflet";
import "@brainhubeu/react-carousel/lib/style.css";

function SingleMap(props) {
  return (
    <div>
      <LeafletMap
        center={props.center}
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
        <Marker position={props.center}>
          <Popup>Parking location</Popup>
        </Marker>
      </LeafletMap>
    </div>
  );
}

export default SingleMap;
