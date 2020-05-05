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

const garages = [
  { lat: "22.578564", long: "88.46249", name: "Axis Mall" },
  { lat: "22.578564", long: "88.46249", name: " Mall" },
  { lat: "22.578564", long: "88.46249", name: "Axis Mall" },
];

function Map(props) {
  const classes = useStyles();

  const [active, setActive] = useState(0);
  const [center, setCenter] = useState([garages[0].lat, garages[0].long]);

  function changeCarousel(selectedIndex) {
    console.log("Value", selectedIndex);
    setActive(selectedIndex);
  }

  return (
    <div>
      <LeafletMap
        center={center}
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
      <Card className={classes.root}>
        <Carousel
          value={active}
          onChange={changeCarousel}
          slides={[
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              className={classes.temp}
            >
              Parking Bay 1
            </Typography>,
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              className={classes.temp}
            >
              Parking Bay 2
            </Typography>,
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              className={classes.temp}
            >
              Parking Bay 3
            </Typography>,
          ]}
          //infinite
          //keepDirectionWhenDragging
          arrows
        />
      </Card>
    </div>
  );
}

export default Map;
