import React, { useCallback, useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Appbar from "../components/appbar";
import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";
import Badge from "@material-ui/core/Badge";
import CardActions from "@material-ui/core/CardActions";
import DriveEtaIcon from "@material-ui/icons/DriveEta";
import AirportShuttleIcon from "@material-ui/icons/AirportShuttle";
import LocalTaxiIcon from "@material-ui/icons/LocalTaxi";
import MotorcycleIcon from "@material-ui/icons/Motorcycle";
import PrintIcon from "@material-ui/icons/Print";
import InfoIcon from "@material-ui/icons/Info";
import Image from "../img/bg.jpg"; // Import using relative path
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import HistoryIcon from "@material-ui/icons/History";
import ClearIcon from "@material-ui/icons/Clear";
import BookingCardLoading from "../components/bookingCardLoading";
import BookingCard from "../components/bookingCard";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    minHeight: "100vh",
    //background: "linear-gradient(to top, #61dafb, #ffffff)",
    //background: "#f9f9f9",
    padding: "16px",
    //paddin
    backgroundImage: `url(${Image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  cardContent: {
    paddingBottom: 0,
  },
  container: {
    paddingTop: "50px",
    //minHeight: "auto",
  },
  card: {
    maxWidth: 345,
    //left: "2rem",
    zIndex: "1000",
    minWidth: 300,
    background: "rgb(255,255,255,0.8)",
  },
  password: {
    maxWidth: "230px !important",
    minWidth: "230px !important",
  },
  link: {
    marginTop: "1.3rem",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 240,
  },
  cardItem: {
    background: "#fff",
    width: "100%",
    maxWidth: "438px",
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
  },
  endAction: {
    float: "right",
    paddingBottom: "16px",
  },
  searchItem: {
    background: "none",
  },
  search: {
    flexGrow: 1,
    //background: "rgb(255,255,255,0.8)",
    //marginLeft: "1.3rem",
    //marginRight: "1.3rem",
    //minWidth: "300px",
    maxWidth: "-webkit-fill-available",
    width: "-webkit-fill-available",
    //marginBottom: "1.3rem",
  },
  cssOutlinedInput: {
    background: "rgb(255,255,255,0.8)",
  },
  limitWidth: {
    maxWidth: "-webkit-fill-available",
  },
}));

const DATA_URL = "https://5eb2c738974fee0016ecce62.mockapi.io/api/bookings";

export default function History() {
  const classes = useStyles();

  const [loading, setLoading] = useState(true);
  const [bookings, setBookings] = useState([]);

  const getApiData = useCallback(() => {
    let axios = require("axios");

    axios.get(DATA_URL).then(
      (response) => {
        if (response.status === 200) {
          let data = response.data;
          //console.log(data);
          setBookings(data);
          setLoading(false);
        } else {
          //Handle API Error
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
      <div className={classes.root}>
        <Appbar id="appbar" />

        <Grid
          className={classes.container}
          container
          direction="column"
          justify="space-between"
          alignItems="stretch"
          spacing={0}
        >
          <Grid item>
            <TextField
              className={classes.search}
              id="input-with-icon-textfield"
              //label="TextField"
              variant="outlined"
              placeholder="Search Bookings"
              margin="none"
              //fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
                classes: {
                  root: classes.cssOutlinedInput,
                },
              }}
            />
          </Grid>
          <Grid item className={classes.limitWidth}>
            <ButtonGroup
              //size="large"
              variant="contained"
              color="primary"
              fullWidth
              aria-label="large outlined primary button group"
              className={classes.search}
            >
              <Button startIcon={<AccessTimeIcon />}>Current</Button>
              <Button startIcon={<HistoryIcon />}>Past</Button>
              <Button startIcon={<ClearIcon />}>Reset</Button>
            </ButtonGroup>
          </Grid>
          <Grid item>
            <BookingCardLoading />
          </Grid>
          <Grid item className={classes.link}>
            <BookingCardLoading />
          </Grid>
          {/* <Grid item className={classes.link}>
            <BookingCardLoading />
          </Grid> */}
        </Grid>
      </div>
    );
  } else {
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
        >
          <Grid item xs={12}>
            <TextField
              className={classes.search}
              id="input-with-icon-textfield"
              //label="TextField"
              variant="outlined"
              placeholder="Search Bookings"
              margin="normal"
              //fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
                classes: {
                  root: classes.cssOutlinedInput,
                },
              }}
            />
          </Grid>
          <Grid item xs={12} className={classes.limitWidth}>
            <ButtonGroup
              //size="large"
              variant="contained"
              color="primary"
              fullWidth
              aria-label="large outlined primary button group"
              className={classes.search}
            >
              <Button startIcon={<AccessTimeIcon />}>Current</Button>
              <Button startIcon={<HistoryIcon />}>Past</Button>
              <Button startIcon={<ClearIcon />}>Reset</Button>
            </ButtonGroup>
          </Grid>
          {bookings.map((item, key) => (
            <Grid xs={12} item key={item.id}>
              <BookingCard data={item} />
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }
}
