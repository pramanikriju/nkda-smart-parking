import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import CardActions from "@material-ui/core/CardActions";
import PrintIcon from "@material-ui/icons/Print";
import InfoIcon from "@material-ui/icons/Info";
import Image from "../img/bg.jpg"; // Import using relative path
import { Link } from "react-router-dom";
import VehicleIcon from "./vehicleIcon";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

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
              {props.data.vehicle_number + " " + props.data.vehicle_type}
              <Chip
                className={classes.end}
                label={props.data.ongoing ? "Ongoing" : "Finished"}
                color={props.data.ongoing ? "primary" : "black"}
                variant="outlined"
              />
            </Typography>
            <Typography gutterBottom variant="caption" component="div">
              {props.data.vehicle_make}
            </Typography>

            <Typography>
              <strong>Date : </strong>
              {new Date(props.data.createdAt).toDateString()}
            </Typography>
            <Typography>
              <strong>Time : </strong>
              {new Date(props.data.createdAt).toTimeString().slice(0, 8)}
            </Typography>
            {props.data.ongoing ? (
              <Typography>
                <strong>OTP : </strong>
                <Typography component="span" color="secondary">
                  {props.data.otp}
                </Typography>
              </Typography>
            ) : (
              <div>
                <Typography>
                  <strong>Exit Time : </strong>
                  {new Date(props.data.exit_time).toTimeString().slice(0, 8)}
                </Typography>
                <Typography>
                  <strong> Amount : </strong>₹ {props.data.amount}
                </Typography>
              </div>
            )}
          </Grid>
        </Grid>
      </CardContent>
      <CardActions className={classes.endAction}>
        {!props.data.ongoing ? (
          <Button
            variant="outlined"
            color="primary"
            className={classes.button}
            startIcon={<PrintIcon />}
            to="/receipt"
            component={Link}
          >
            Receipt
          </Button>
        ) : null}

        {props.back ? (
          <Button
            variant="outlined"
            color="primary"
            className={classes.button}
            startIcon={<ArrowBackIcon />}
            to="/history"
            component={Link}
          >
            Go back
          </Button>
        ) : (
          <Button
            component={Link}
            to={"/details/" + props.data.id}
            variant="contained"
            color="primary"
            className={classes.button}
            startIcon={<InfoIcon />}
          >
            View Details
          </Button>
        )}
      </CardActions>
    </Card>
  );
}
