import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
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
import VehicleIcon from "./vehicleIcon";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    //minHeight: "100vh",
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

  card: {
    maxWidth: 345,
    //left: "2rem",
    zIndex: "1000",
    minWidth: 300,
    background: "rgb(255,255,255,0.8)",
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
}));

export default function BookingCardLoading(props) {
  const classes = useStyles();

  return (
    <Card className={classes.cardItem}>
      <CardContent className={classes.cardContent}>
        <Grid
          container
          spacing={0}
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Grid item xs={2}>
            <VehicleIcon data={props.data} />
          </Grid>
          <Grid item xs={10} className={classes.content}>
            <Typography variant="h5" component="h2">
              WB AD 0208
              <Chip
                className={classes.end}
                label={props.data.ongoing ? "Ongoing" : "Finished"}
                color={props.data.ongoing ? "primary" : "none"}
                variant="outlined"
              />
            </Typography>
            <Typography gutterBottom variant="caption" component="div">
              Maruti Swift Dzire
            </Typography>

            <Typography>
              <strong>Booking Date : </strong> May 25 2020
            </Typography>
            <Typography>
              <strong>Booking Time : </strong>03:14 PM
            </Typography>
            <Typography>
              <strong>OTP : </strong>
              <Typography component="span" color="secondary">
                5963
              </Typography>
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions className={classes.endAction}>
        {/* <IconButton aria-label="add to favorites">
        <PrintDisabledIcon />
      </IconButton> */}
        <Button
          component={Link}
          to="/details"
          variant="contained"
          color="primary"
          className={classes.button}
          startIcon={<InfoIcon />}
        >
          View Details
        </Button>
      </CardActions>
    </Card>
  );
}
