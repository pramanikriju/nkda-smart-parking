import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import EmojiTransportationIcon from "@material-ui/icons/EmojiTransportation";
import Grid from "@material-ui/core/Grid";
import Badge from "@material-ui/core/Badge";
import { Animated } from "react-animated-css";
import MomentUtils from "@date-io/moment";
import { MuiPickersUtilsProvider, TimePicker } from "@material-ui/pickers";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Expansion from "./expansion";
const useStyles = makeStyles({
  root: {
    //maxWidth: 345,
    flexGrow: 1,
    //marginLeft: "2px",
    //marginRight: "2px",
    //left: "2rem",
    //alignContent: "center",
    zIndex: "1000",
    //minWidth: 345,
    height: "auto",
    //maxWidth: 438
  },
  fab: {
    //marginLeft: "auto !important",
    flexGrow: 1,
    alignContent: "flex-start",
    minWidth: "100%",
  },
  actions: {
    paddingLeft: "16px",
    paddingRight: "16px",
    paddingBottom: "16px",
  },
  content: {
    paddingBottom: "0px !important",
  },
  rounded: {
    backgroundColor: "#3f51b5",
    color: "white",
  },
  formControl: {
    margin: 0,
    minWidth: "100%",
    alignContent: "left",
  },
  left: {
    textAlign: "left",
    minWidth: "100%",
  },
});

function DefaultCard(props) {
  const classes = useStyles();

  const [selectedDate, setSelectedDate] = useState(new Date());

  const [car, setCar] = useState("");

  const handleChangeCar = (event) => {
    //event.preventDefault();
    event.stopPropagation();
    console.log(event.target.value);
    setCar(event.target.value);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <Card className={classes.root}>
      <CardContent className={classes.content}>
        <Grid container spacing={0}>
          <Grid item xs={2}></Grid>
          <Grid item xs={10}>
            <Typography gutterBottom variant="h5" component="h2">
              {props.garage.name}
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={0}>
          <Grid item xs={2}>
            <Badge badgeContent={props.garage.available} color="secondary">
              <Avatar variant="rounded" className={classes.rounded}>
                <EmojiTransportationIcon />
              </Avatar>
            </Badge>
          </Grid>
          <Grid item xs={10}>
            <Typography variant="body2" color="textSecondary" component="p">
              <strong>Bays Available : </strong>
              <span color="secondary">{props.garage.available}</span>
              <br />
              Parking bay near {props.garage.name}. Rates starting from Rs.
              10/HR
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions className={classes.actions}>
        <Grid container>
          <Grid item xs={6}></Grid>
          <Grid item xs={6}>
            {/* <Button
              variant="outlined"
              color="primary"
              className={classes.fab}
              endIcon={<Icon>send</Icon>}
              onClick={showTime}
              //href="/booking"
            >
              Book now
            </Button> */}
          </Grid>
          <Grid item xs={12}>
            <Expansion />
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
}

export default DefaultCard;
