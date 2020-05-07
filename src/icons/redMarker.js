import L from "leaflet";
import Marker from "../img/red-marker.svg";

const redMarker = new L.Icon({
  iconUrl: Marker,
  iconRetinaUrl: Marker,
  iconAnchor: null,
  popupAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: new L.Point(60, 75),
  className: "leaflet-div-icon",
});

export default { redMarker };
