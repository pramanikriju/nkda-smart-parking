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
  { id: 1, lat: "22.578564", long: "88.46249", name: "Axis Mall" },
  { id: 2, lat: "22.583260", long: "88.461419", name: "Action Area I" },
  { id: 3, lat: "22.582965", long: "88.453372", name: "AD Block" },
];

function Map(props) {
  const classes = useStyles();

  const [active, setActive] = useState(0);
  const [center, setCenter] = useState([garages[0].lat, garages[0].long]);

  function changeCarousel(selectedIndex) {
    //console.log("Value", selectedIndex);
    setActive(selectedIndex);
    setCenter([garages[selectedIndex].lat, garages[selectedIndex].long]);
  }

  function changeCenter(key) {
    console.log("Value", key);
    setActive(key);
    setCenter([garages[key].lat, garages[key].long]);
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
        {garages.map((item, key) => (
          <Marker
            position={[item.lat, item.long]}
            onClick={() => changeCenter(key)}
            key={item.id}
          >
            <Popup>{item.name}</Popup>
          </Marker>
        ))}
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
          //arrows
        />
      </Card>
    </div>
  );
}

export default Map;
