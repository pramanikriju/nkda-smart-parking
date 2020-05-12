import React, { useState, useEffect, useCallback } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Appbar from "../components/appbar";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Image from "../img/bg.jpg"; // Import using relative path
import { Link } from "react-router-dom";
import BookingCardLoading from "../components/bookingCardLoading";
import VehicleCard from "../components/VehicleCard";

const useStyles = makeStyles((theme) => ({
  root: {
    //flexGrow: 1,
    minHeight: "100vh",
    //background: "linear-gradient(to top, #61dafb, #ffffff)",
    //background: "#f9f9f9",
    backgroundImage: `url(${Image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    padding: "16px",
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
    width: "100%",
    maxWidth: "438px",
    marginBottom: "1.3rem",
  },
  content: {
    paddingLeft: "1rem",
    float: "left",
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
    padding: "16px",
  },
  fab: {
    position: "fixed",
    bottom: "1.3rem",
    right: "1.3rem",
  },
  cardContent: {
    paddingBottom: "0",
  },
}));

const DATA_URL = "https://5eb2c738974fee0016ecce62.mockapi.io/api/cars";

export default function Vehicles() {
  const classes = useStyles();

  const [vehicles, setvehicles] = useState([]);
  const [loading, setLoading] = useState(true);

  const getApiData = useCallback(() => {
    let axios = require("axios");

    axios.get(DATA_URL).then(
      (response) => {
        if (response.status === 200) {
          let data = response.data;
          //console.log(data);
          setvehicles(data);
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
    <div className={classes.root}>
      <Appbar id="appbar" />

      <Grid
        className={classes.container}
        container
        direction="row"
        justify="space-between"
        alignItems="stretch"
        spacing={2}
        //spacing={0}
      >
        {loading ? (
          <Grid item xs={12}>
            <BookingCardLoading />
          </Grid>
        ) : (
          vehicles.map((item, key) => <VehicleCard key={item.id} data={item} />)
        )}
      </Grid>
      <Fab
        color="primary"
        aria-label="add"
        className={classes.fab}
        to="/create"
        component={Link}
      >
        <AddIcon />
      </Fab>
    </div>
  );
}
