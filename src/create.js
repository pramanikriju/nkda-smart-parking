import React, { useState } from "react";
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
import CheckIcon from "@material-ui/icons/Check";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";

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
    // paddingLeft: "1rem",
    // float: "left",
    justifyContent: "center",
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
  form: {
    width: "-webkit-fill-available%",
    minWidth: "333px",
  },
}));

export default function Create() {
  const classes = useStyles();
  const [type, setType] = useState("");

  const handleChange = (event) => {
    setType(event.target.value);
  };

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
        <Card className={classes.cardItem}>
          <CardContent>
            <Grid
              container
              direction="column"
              justify="flex-start"
              alignItems="center"
              spacing={2}
            >
              <Grid item xs={12}>
                <Avatar variant="rounded" className={classes.rounded}>
                  <DriveEtaIcon />
                </Avatar>
              </Grid>
              <Grid item xs={12}>
                <Typography gutterBottom variant="h5" component="h2">
                  Add New Vehicle
                </Typography>
              </Grid>
              <Grid item xs={12} className={classes.fullWidth}>
                <TextField
                  id="standard-basic"
                  label="Vehicle Make"
                  className={classes.form}
                />
              </Grid>
              <Grid item xs={12} className={classes.fullWidth}>
                <TextField
                  id="standard-basic"
                  label="Vehicle Model"
                  className={classes.form}
                />
              </Grid>
              <Grid item xs={12} className={classes.fullWidth}>
                <TextField
                  id="standard-basic"
                  label="Registration Number"
                  className={classes.form}
                />
              </Grid>
              <Grid item xs={12} className={classes.fullWidth}>
                <InputLabel
                  id="demo-simple-select-label"
                  className={classes.form}
                >
                  Type
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={type}
                  onChange={handleChange}
                  className={classes.form}
                >
                  <MenuItem value={10}>Car</MenuItem>
                  <MenuItem value={20}>Bike</MenuItem>
                  <MenuItem value={30}>Taxi</MenuItem>
                  <MenuItem value={30}>Others</MenuItem>
                </Select>
              </Grid>
            </Grid>
          </CardContent>
          <CardActions className={classes.end}>
            <Button
              variant="outlined"
              color="primary"
              className={classes.button}
              startIcon={<ArrowBackIcon />}
            >
              Back
            </Button>
            <Button
              href="/details"
              variant="contained"
              color="primary"
              className={classes.button}
              startIcon={<CheckIcon />}
            >
              Confirm
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </div>
  );
}