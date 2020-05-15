import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Appbar from "../components/appbar";
import Avatar from "@material-ui/core/Avatar";
import CardActions from "@material-ui/core/CardActions";
import DriveEtaIcon from "@material-ui/icons/DriveEta";
import Image from "../img/bg.jpg"; // Import using relative path
import CheckIcon from "@material-ui/icons/Check";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import { Link } from "react-router-dom";
import carData from "../data/car-models.json";

const useStyles = makeStyles((theme) => ({
  root: {
    //flexGrow: 1,
    minHeight: "100vh",
    //background: "linear-gradient(to top, #61dafb, #ffffff)",
    //background: "#f9f9f9",
    // backgroundImage: `url(${Image})`,
    // backgroundSize: "cover",
    // backgroundPosition: "center",
    padding: "16px",
    backgroundImage: `url(${Image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
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
    background: "rgb(255,255,255,0.8)",
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
    minWidth: "300px",
  },
}));

const makes = carData.map((a) => a.brand);

let models = [];

export default function Create() {
  const classes = useStyles();
  const [type, setType] = useState("");
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  //let models = [];

  const handleTypeChange = (event) => {
    setType(event.target.value);
  };

  const handleMakeChange = (event) => {
    setMake(event.target.value);
    models = carData.find((o) => o.id === event.target.value).models;
    //console.log(models);
  };

  return (
    <div className={classes.root}>
      <Appbar id="appbar" />

      <Grid
        className={classes.container}
        container
        direction="row"
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
                <FormControl>
                  <InputLabel id="make">Select Vehicle Make</InputLabel>
                  <Select
                    labelId="make"
                    //label="Select Vehicle Type"
                    id="make"
                    value={make}
                    onChange={handleMakeChange}
                    className={classes.form}
                    required
                  >
                    {carData.map((value, key) => (
                      <MenuItem key={key} value={value.id}>
                        {value.brand}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} className={classes.fullWidth}>
                <FormControl>
                  <InputLabel id="model">Select Vehicle Model</InputLabel>
                  <Select
                    labelId="model"
                    //label="Select Vehicle Type"
                    id="model"
                    value={model}
                    onChange={(event) => setModel(event.target.value)}
                    className={classes.form}
                    required
                  >
                    {models.map((value, key) => (
                      <MenuItem key={key} value={key}>
                        {value}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} className={classes.fullWidth}>
                <TextField
                  id="standard-basic-3"
                  label="Registration Number"
                  helperText="Ex. WB 12 XY 3456"
                  className={classes.form}
                />
              </Grid>
              <Grid item xs={12} className={classes.fullWidth}>
                <FormControl>
                  <InputLabel id="demo-simple-select-label">
                    Select Vehicle Type
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    //label="Select Vehicle Type"
                    id="demo-simple-select"
                    value={type}
                    onChange={handleTypeChange}
                    className={classes.form}
                  >
                    <MenuItem value="" disabled>
                      Select Vehicle Type
                    </MenuItem>
                    <MenuItem value={10}>Car</MenuItem>
                    <MenuItem value={20}>Bike</MenuItem>
                    <MenuItem value={30}>Taxi</MenuItem>
                    <MenuItem value={40}>Others</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </CardContent>
          <CardActions className={classes.end}>
            <Button
              variant="outlined"
              color="primary"
              className={classes.button}
              to="/vehicles"
              startIcon={<ArrowBackIcon />}
              component={Link}
            >
              Back
            </Button>
            <Button
              to="/vehicles"
              variant="contained"
              color="primary"
              className={classes.button}
              startIcon={<CheckIcon />}
              component={Link}
            >
              Confirm
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </div>
  );
}
