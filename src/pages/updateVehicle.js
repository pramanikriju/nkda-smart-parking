import React, { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
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
import CircularProgress from "@material-ui/core/CircularProgress";

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
    minWidth: "333px",
  },
}));

export default function Update(props) {
  const { id } = useParams();
  const classes = useStyles();

  const [type, setType] = useState("");
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [number, setNumber] = useState("");
  const [loading, setLoading] = useState(true);

  const DATA_URL = "https://5eb2c738974fee0016ecce62.mockapi.io/api/cars/";

  const getApiData = useCallback(() => {
    let axios = require("axios");

    axios.get(DATA_URL + id).then(
      (response) => {
        if (response.status === 200) {
          let data = response.data;
          //console.log(data);
          setModel(data.model);
          setMake(data.model);
          setNumber(data.temp + " " + data.type);
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
        {loading ? (
          <Card className={classes.cardItem}>
            <Grid
              container
              direction="column"
              justify="flex-start"
              alignItems="center"
              spacing={2}
            >
              <Grid item xs={12}>
                <CircularProgress />
              </Grid>
            </Grid>
          </Card>
        ) : (
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
                    Update Vehicle
                  </Typography>
                </Grid>
                <Grid item xs={12} className={classes.fullWidth}>
                  <TextField
                    id="standard-basic-1"
                    label="Vehicle Make"
                    className={classes.form}
                    value={make}
                    onChange={(event) => setMake(event.target.value)}
                  />
                </Grid>
                <Grid item xs={12} className={classes.fullWidth}>
                  <TextField
                    id="standard-basic-2"
                    label="Vehicle Model"
                    className={classes.form}
                    value={model}
                    onChange={(event) => setModel(event.target.value)}
                  />
                </Grid>
                <Grid item xs={12} className={classes.fullWidth}>
                  <TextField
                    id="standard-basic-3"
                    label="Registration Number"
                    className={classes.form}
                    value={number}
                    onChange={(event) => setNumber(event.target.value)}
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
                      onChange={handleChange}
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
        )}
      </Grid>
    </div>
  );
}
