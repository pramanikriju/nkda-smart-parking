import React, { useState, useRef, useEffect } from "react";
import {
  Map as LeafletMap,
  TileLayer,
  Marker,
  Popup,
  FeatureGroup,
} from "react-leaflet";
import L from "leaflet";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { makeStyles } from "@material-ui/core/styles";
import DefaultCard from "./card";
import CircularProgress from "@material-ui/core/CircularProgress";
import Grid from "@material-ui/core/Grid";
import redMarker from "../img/red-marker.svg";
import greenMarker from "../img/green-marker.svg";
import orangeMarker from "../img/orange-marker.svg";

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
  BrainhubCarouselItem: {
    alignItems: "flex-end !important",
  },
});

const iconAnchor = [15, 55];
const popupAnchor = [5, -57];
const iconSize = [45, 45];

export const redIcon = new L.Icon({
  iconUrl: redMarker,
  iconRetinaUrl: redMarker,
  iconAnchor: iconAnchor,
  popupAnchor: popupAnchor,
  iconSize: iconSize,
});
export const greenIcon = new L.Icon({
  iconUrl: greenMarker,
  iconRetinaUrl: greenMarker,
  iconAnchor: iconAnchor,
  popupAnchor: popupAnchor,
  iconSize: iconSize,
});
export const orangeIcon = new L.Icon({
  iconUrl: orangeMarker,
  iconRetinaUrl: orangeMarker,
  iconAnchor: iconAnchor,
  popupAnchor: popupAnchor,
  iconSize: iconSize,
});

function renderSwitch(param) {
  switch (param) {
    case "1":
      return greenIcon;
    case "2":
      return redIcon;
    case "3":
      return orangeIcon;
    default:
      return greenIcon;
  }
}

function Map(props) {
  const classes = useStyles();

  const [active, setActive] = useState(0);
  const [center, setCenter] = useState([22.580147, 88.459431]);

  const garages = props.garages;

  function changeCarousel(selectedIndex) {
    //console.log("Value", selectedIndex);
    setActive(selectedIndex);
    setCenter([garages[selectedIndex].lat, garages[selectedIndex].long]);
  }

  function changeCenter(key) {
    setActive(key);
    setCenter([garages[key].lat, garages[key].long]);
  }
  const getLatLngBounds = () => {
    const latLngs = garages.map((position) => {
      return L.latLng(position.lat, position.long);
    });
    const bounds = L.latLngBounds(latLngs);
    return bounds;
  };

  return (
    <div>
      <LeafletMap
        center={center}
        zoom={15}
        //maxZoom={10}
        bounds={getLatLngBounds()}
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
          attribution={"Distronix " + new Date().getFullYear()}
        />
        <FeatureGroup>
          {garages.map((item, key) => (
            <Marker
              position={[item.lat, item.long]}
              onClick={() => changeCenter(key)}
              key={item.id}
              icon={renderSwitch(item.id)}
              //icon={redIcon}
            >
              <Popup>
                {item.name} - <br />
                <strong>Bays Available : </strong> {item.available}
              </Popup>
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
          slides={garages.map((item, key) => (
            <DefaultCard className={classes.item} garage={item} />
          ))}
          //infinite
          //keepDirectionWhenDragging
          //arrows
        />
      </div>
    </div>
  );
}

export default Map;
