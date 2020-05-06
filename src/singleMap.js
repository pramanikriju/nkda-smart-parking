import React, { useState } from "react";
import { Map as LeafletMap, TileLayer, Marker, Popup } from "react-leaflet";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import Typography from "@material-ui/core/Typography";
import { Card } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    maxWidth: 500,
    flexGrow: 1,
    //margin: "1.1rem",
    marginLeft: "1.3rem",
    marginRight: "1.3rem",
    position: "fixed",
    bottom: "1.3rem",
    //left: "2rem",
    //alignContent: "center",
    zIndex: "1000",
    minWidth: 345,
    width: "-webkit-fill-available",
  },
  temp: {
    zIndex: "9999",
  },
});

function SingleMap(props) {
  const classes = useStyles();

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
