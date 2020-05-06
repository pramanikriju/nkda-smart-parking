import React, { useState, useEffect, useCallback } from "react";
import {
  Map as LeafletMap,
  TileLayer,
  Marker,
  Popup,
  FeatureGroup,
} from "react-leaflet";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { makeStyles } from "@material-ui/core/styles";
import DefaultCard from "./card";
import CircularProgress from "@material-ui/core/CircularProgress";
import { date } from "date-fns/locale";
import Grid from "@material-ui/core/Grid";

const DATA_URL = "https://5eb2c738974fee0016ecce62.mockapi.io/api/garages";

const useStyles = makeStyles({
  root: {
    maxWidth: 550,
    flexGrow: 1,
    //margin: "1.1rem",
    marginLeft: "1.3rem",
    marginRight: "1.3rem",
    position: "fixed",
    bottom: "1.3rem",
    //left: "2rem",
    //alignContent: "center",
    zIndex: "1000",
    minWidth: 300,
    width: "-webkit-fill-available",
  },
  loading: {
    flexGrow: 1,
    marginTop: "50%",
  },
});

// const garages = [
//   {
//     id: 1,
//     lat: "22.578564",
//     long: "88.46249",
//     name: "Axis Mall",
//     available: Math.floor(Math.random() * 10),
//   },
//   {
//     id: 2,
//     lat: "22.583260",
//     long: "88.461419",
//     name: "Action Area I",
//     available: Math.floor(Math.random() * 10),
//   },
//   {
//     id: 3,
//     lat: "22.582965",
//     long: "88.453372",
//     name: "AD Block",
//     available: Math.floor(Math.random() * 10),
//   },
// ];

function Map() {
  const classes = useStyles();

  const [active, setActive] = useState(0);
  const [center, setCenter] = useState([22.580147, 88.459431]);

  //Loading and Garage Set functions

  const [loading, setLoading] = useState(true);
  const [garages, setGarages] = useState([]);

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

  //Get API data
  const getApiData = useCallback(() => {
    let axios = require("axios");

    axios.get(DATA_URL).then(
      (response) => {
        if (response.status === 200) {
          let data = response.data;
          console.log(data);
          setGarages(data);
          setLoading(false);
        }
      },
      (error) => console.log(error)
    );
  });

  useEffect(() => {
    getApiData();
  }, []);

  if (loading) {
    return (
      <Grid container direction="column" justify="center" alignItems="center">
        <Grid item className={classes.loading}>
          <CircularProgress />
        </Grid>
      </Grid>
    );
  } else {
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
          //ref={mapRef}
        >
          <TileLayer
            url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
            //attribution="Distronix 2020"
          />
          <FeatureGroup>
            {garages.map((item, key) => (
              <Marker
                position={[item.lat, item.long]}
                onClick={() => changeCenter(key)}
                key={item.id}
              >
                <Popup>{item.name}</Popup>
              </Marker>
            ))}
          </FeatureGroup>
        </LeafletMap>
        <div className={classes.root}>
          <Carousel
            value={active}
            onChange={changeCarousel}
            //offset={2}
            minDraggableOffset={9999}
            slides={[
              <DefaultCard garage={garages[0]} />,
              <DefaultCard garage={garages[1]} />,
              <DefaultCard garage={garages[2]} />,
            ]}
            //infinite
            //keepDirectionWhenDragging
            //arrows
          />
        </div>
      </div>
    );
  }
}

export default Map;
