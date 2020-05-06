import React from "react";
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
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Image from "./img/bg.jpg"; // Import using relative path

const useStyles = makeStyles((theme) => ({
  root: {
    //flexGrow: 1,
    minHeight: "100vh",
    //background: "linear-gradient(to top, #61dafb, #ffffff)",
    background: "#f9f9f9",
    // backgroundImage: `url(${Image})`,
    // backgroundSize: "cover",
    // backgroundPosition: "center",
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
  fab: {
    position: "fixed",
    bottom: "1.3rem",
    right: "1.3rem",
  },
}));

export default function Vehicles() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Appbar id="appbar" />

      <Grid
        className={classes.container}
        container
        direction="column"
        justify="flex-start"
        alignItems="stretch"
        spacing={0}
      >
        <Grid item>
          <Card className={classes.cardItem}>
            <CardContent>
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
                      <LocalTaxiIcon />
                    </Avatar>
                  </Badge>
                </Grid>
                <Grid item xs={10} className={classes.content}>
                  <Typography gutterBottom variant="h5" component="h2">
                    WB AD 0208
                    <Chip
                      label="Car"
                      className={classes.end}
                      variant="outlined"
                    />
                  </Typography>
                  <Typography>
                    <strong>Make : </strong> Honda
                  </Typography>
                  <Typography>
                    <strong>Model : </strong>Civic
                  </Typography>
                  <Typography>
                    <strong>Registration Date : </strong> 02 Feb 2020
                  </Typography>
                  {/* <Typography>
                    <strong>Booking Amount : </strong>₹ 500
                  </Typography> */}
                </Grid>
              </Grid>
            </CardContent>
            <CardActions className={classes.end}>
              <Button
                variant="outlined"
                color="primary"
                className={classes.button}
                startIcon={<EditIcon />}
              >
                Edit
              </Button>
              <Button
                href="/details"
                variant="contained"
                color="secondary"
                className={classes.button}
                startIcon={<DeleteIcon />}
              >
                Delete
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item>
          <Card className={classes.cardItem}>
            <CardContent>
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
                      <MotorcycleIcon />
                    </Avatar>
                  </Badge>
                </Grid>
                <Grid item xs={10} className={classes.content}>
                  <Typography gutterBottom variant="h5" component="h2">
                    WB BE 1512
                    <Chip
                      label="Bike"
                      className={classes.end}
                      variant="outlined"
                    />
                  </Typography>
                  <Typography>
                    <strong>Make : </strong> Bajaj
                  </Typography>
                  <Typography>
                    <strong>Model : </strong> Pulsar
                  </Typography>
                  <Typography>
                    <strong>Registration Date : </strong> 9 Mar 2020
                  </Typography>
                  {/* <Typography>
                    <strong>Booking Amount : </strong>₹ 500
                  </Typography> */}
                </Grid>
              </Grid>
            </CardContent>
            <CardActions className={classes.end}>
              <Button
                variant="outlined"
                color="primary"
                className={classes.button}
                startIcon={<EditIcon />}
              >
                Edit
              </Button>
              <Button
                href="/details"
                variant="contained"
                color="secondary"
                className={classes.button}
                startIcon={<DeleteIcon />}
              >
                Delete
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Fab
          color="primary"
          aria-label="add"
          className={classes.fab}
          href="/create"
        >
          <AddIcon />
        </Fab>
      </Grid>
    </div>
  );
}
