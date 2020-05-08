import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Icon from "@material-ui/core/Icon";
import Appbar from "../components/appbar";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MomentUtils from "@date-io/moment";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
} from "@material-ui/pickers";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: "100vh",
    background: "linear-gradient(to top, #61dafb, #ffffff)",
    //backgroundImage: `url(${Image})`,
    // backgroundSize: "cover",
    // backgroundPosition: "center",
  },
  container: {
    height: "100vh",
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
}));

export default function Booking() {
  const classes = useStyles();
  const [car, setCar] = React.useState("");
  const [garage, setGarage] = React.useState("");
  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2014-08-18T21:11:54")
  );

  const handleChangeCar = (event) => {
    setCar(event.target.value);
  };
  const handleChangeGarage = (event) => {
    setGarage(event.target.value);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className={classes.root}>
      <Appbar id="appbar" />

      <Grid
        className={classes.container}
        container
        direction="column"
        justify="center"
        alignItems="center"
      >
        <Grid item>
          <MuiPickersUtilsProvider utils={MomentUtils}>
            <Card className={classes.card}>
              <CardContent>
                <Grid
                  container
                  direction="column"
                  justify="center"
                  alignItems="center"
                  spacing={1}
                >
                  {/* <Grid item xs={12}>
                    <img src={Logo} alt="logo" />
                  </Grid> */}
                  <Grid item xs={12}>
                    <Typography variant="h5" component="h2">
                      New Booking
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <FormControl className={classes.formControl}>
                      <InputLabel id="demo-simple-select-label">
                        Select Car
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={car}
                        onChange={handleChangeCar}
                      >
                        <MenuItem value={10}>WB 23 AD 1354</MenuItem>
                        <MenuItem value={20}>WB 56 DE 1312</MenuItem>
                        <MenuItem value={30}>WB 46 DN 0208</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                    <FormControl className={classes.formControl}>
                      <InputLabel id="demo-simple-select-label">
                        Select Garage
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select1"
                        value={garage}
                        onChange={handleChangeGarage}
                      >
                        <MenuItem value={10}>Axis Mall</MenuItem>
                        <MenuItem value={20}>Newtown Area II</MenuItem>
                        <MenuItem value={30}>Parking Lot 3</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>

                  <Grid item xs={12}>
                    <KeyboardTimePicker
                      margin="normal"
                      id="time-picker"
                      label="Time picker"
                      value={selectedDate}
                      onChange={handleDateChange}
                      KeyboardButtonProps={{
                        "aria-label": "change time",
                      }}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Button
                      variant="contained"
                      color="primary"
                      className={classes.link}
                      endIcon={<Icon>send</Icon>}
                      href="/app"
                    >
                      Confirm Booking
                    </Button>
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      size="small"
                      color="secondary"
                      href="/app"
                      //className={classes.link}
                    >
                      Go back
                    </Button>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </MuiPickersUtilsProvider>
        </Grid>
      </Grid>
    </div>
  );
}
