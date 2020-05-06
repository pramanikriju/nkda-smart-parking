import React from "react";
import SingleMap from "././singleMap";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Appbar from "./appbar";
import Avatar from "@material-ui/core/Avatar";
import EmojiTransportationIcon from "@material-ui/icons/EmojiTransportation";
import Chip from "@material-ui/core/Chip";
import Badge from "@material-ui/core/Badge";
import CardActions from "@material-ui/core/CardActions";
import DriveEtaIcon from "@material-ui/icons/DriveEta";
import AirportShuttleIcon from "@material-ui/icons/AirportShuttle";
import LocalTaxiIcon from "@material-ui/icons/LocalTaxi";
import MotorcycleIcon from "@material-ui/icons/Motorcycle";
import PrintIcon from "@material-ui/icons/Print";
import InfoIcon from "@material-ui/icons/Info";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

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
}));

function BookingDetails() {
  const classes = useStyles();

  return (
    <div className="App">
      <Appbar id="appbar" />

      <SingleMap center={[22.578564, 88.46249]} />

      <Card className={classes.cardItem}>
        <CardContent className={classes}>
          <Grid
            container
            spacing={0}
            direction="row"
            justify="center"
            alignItems="center"
          >
            <Grid item xs={2}>
              <Badge
                className={classes.online}
                color="secondary"
                variant="none"
              >
                <Avatar variant="rounded" className={classes.rounded}>
                  <AirportShuttleIcon />
                </Avatar>
              </Badge>
            </Grid>
            <Grid item xs={10} className={classes.content}>
              <Typography gutterBottom variant="h5" component="h2">
                WB AD 0208
                <Chip
                  label="Finished"
                  className={classes.end}
                  variant="outlined"
                />
              </Typography>
              <Typography>
                <strong>Booking Date : </strong> May 25 2020
              </Typography>
              <Typography>
                <strong>Booking Time : </strong>03:14 PM - 4:00PM
              </Typography>
              <Typography>
                <strong>Booking Amount : </strong>₹ 500
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
        <CardActions className={classes.end}>
          <Button
            variant="outlined"
            color="primary"
            className={classes.button}
            href="/history"
            startIcon={<ArrowBackIcon />}
          >
            Back
          </Button>
          <Button
            variant="outlined"
            color="primary"
            className={classes.button}
            startIcon={<PrintIcon />}
            href="/receipt"
          >
            Receipt
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default BookingDetails;
