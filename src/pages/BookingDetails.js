import React, { useState, useEffect, useCallback } from "react";
import SingleMap from "../singleMap";
import { makeStyles } from "@material-ui/core/styles";
import Appbar from "../components/appbar";
import { useParams } from "react-router-dom";
import BookingCardLoading from "../components/bookingCardLoading";
import BookingCard from "../components/bookingCard";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    //margin: "1.1rem",
    marginLeft: "1.3rem",
    marginRight: "1.3rem",
    position: "fixed",
    bottom: "1.3rem",
    //left: "2rem",
    //alignContent: "center",
    zIndex: "1000",
    //minWidth: 345,
    height: "auto",
    //backgroundImage: `url(${Image})`,
    // backgroundSize: "cover",
    // backgroundPosition: "center",
  },
  container: {
    marginTop: "60px",
    //minHeight: "auto",
  },
  card: {
    maxWidth: 345,
    //left: "2rem",
    zIndex: "1000",
    minWidth: 345,
    background: "rgb(255,255,255,0.8)",
  },
  password: {
    maxWidth: "230px !important",
    minWidth: "230px !important",
  },
  link: {
    marginTop: 15,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 240,
  },
  cardItem: {
    background: "#fff",
    width: "-webkit-fill-available",
    marginLeft: "1.3rem",
    marginRight: "1.3rem",
    position: "fixed",
    zIndex: "1000",
    bottom: "1.3rem",
  },
  content: {
    paddingLeft: "1rem",
    textAlign: "left",
  },
  online: {
    background: "#7FFF00",
  },
  rounded: {
    backgroundColor: "#3f51b5",
    color: "white",
  },
  end: {
    float: "right",
  },
  endAction: {
    float: "right",
    paddingBottom: "16px",
  },
  cardContent: {
    paddingBottom: 0,
  },
}));

const DATA_URL = "https://5eb2c738974fee0016ecce62.mockapi.io/api/bookings/";

function BookingDetails() {
  const { id } = useParams();
  //console.log(id);
  const classes = useStyles();

  const [loading, setLoading] = useState(true);
  const [booking, setBooking] = useState();
  //const [center, setCenter] = useState([22.578564, 88.46249]);

  const getApiData = useCallback(() => {
    let axios = require("axios");

    axios.get(DATA_URL + id).then(
      (response) => {
        if (response.status === 200) {
          let data = response.data;
          console.log(data);
          setBooking(data);
          //setCenter([data.lat, data.long]);
          setLoading(false);
        } else {
          //Handle API Error
        }
      },
      (error) => console.log(error)
    );
  }, []);

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <div className="App">
      <Appbar id="appbar" />

      <SingleMap center={[22.578564, 88.46249]} />

      <div className={classes.cardItem}>
        {loading ? (
          <BookingCardLoading />
        ) : (
          <BookingCard
            back={true}
            className={classes.cardItem}
            data={booking}
          />
        )}
      </div>
    </div>
  );
}

export default BookingDetails;
