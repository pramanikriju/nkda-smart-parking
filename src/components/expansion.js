import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import Grid from "@material-ui/core/Grid";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import MomentUtils from "@date-io/moment";
import { MuiPickersUtilsProvider, TimePicker } from "@material-ui/pickers";
import FormControl from "@material-ui/core/FormControl";
import moment from "moment";
import ClearIcon from "@material-ui/icons/Clear";
import NavigationIcon from "@material-ui/icons/Navigation";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  select: {
    minWidth: "100%",
    //marginTop: 0,
  },
  left: {
    textAlign: "left",
    minWidth: "100%",
  },
  ctaButtons: {
    marginTop: "1rem",
  },
  marginZero: {
    margin: 0,
  },
  expansionPanelDetails: {
    padding: "0 16px 16px",
  },
  expansionPanelSummary: {
    padding: "0",
  },
  expandedRoot: {
    maxHeight: "1rem",
  },
  right: {
    float: "right",
  },
});

const alertPosition = { vertical: "bottom", horizontal: "center" };

export default function Expansion() {
  const history = useHistory();
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const [carError, setcarError] = useState(false);
  const [selectedDate, setSelectedDate] = useState(
    new moment().add(15, "minutes")
  );
  const [car, setCar] = useState("");
  const [alert, setAlert] = useState({
    open: false,
    message: "none",
  });

  function expand() {
    setExpanded(!expanded);
  }

  const handleChangeCar = (event) => {
    //event.preventDefault();
    //event.stopPropagation();
    console.log(event.target.value);
    setCar(event.target.value);
  };

  const handleDateChange = (date) => {
    let now = new moment();
    if (date.isBetween(now, now.add(15, "minutes"))) {
      setSelectedDate(date);
    }
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setAlert({
      open: false,
    });
  };

  function onSubmit() {
    if (selectedDate && car) {
      history.push("/details/1");
    } else {
      setcarError(true);
      setAlert({
        open: true,
        message: "Car not selected",
      });
    }
  }

  return (
    <div className={classes.root}>
      <ExpansionPanel
        expanded={expanded}
        className={classes.expansionPanelSummary}
      >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon onClick={expand} />}
          aria-label="Expand"
          aria-controls="additional-actions1-content"
          id="additional-actions1-header"
          classes={{ root: classes.expandedRoot }}
        >
          <Grid
            justify="space-between" // Add it here :)
            container
            spacing={2}
          >
            <Button
              //size="small"
              color="secondary"
              //marginleft={100}
              aria-label="Acknowledge"
              startIcon={<NavigationIcon />}
              onClick={(event) => event.stopPropagation()}
              onFocus={(event) => event.stopPropagation()}
              href="https://www.google.com/maps/dir/?api=1&destination=22.580147,88.459431&travelmode=driving&dir_action=navigate"
              target="_blank"
            >
              Navigate
            </Button>
            <Button
              //size="small"
              color="primary"
              //marginleft={100}
              className={classes.right}
              aria-label="Acknowledge"
              //endIcon={<Icon>send</Icon>}
              onClick={expand}
              //onClick={(event) => event.stopPropagation()}
              //onFocus={(event) => event.stopPropagation()}
            >
              Book Now
            </Button>
          </Grid>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.expansionPanelDetails}>
          <Grid container className={classes.marginZero}>
            <Grid item xs={12}>
              <MuiPickersUtilsProvider utils={MomentUtils}>
                <FormControl className={classes.select} margin="dense">
                  <TimePicker
                    margin="none"
                    id="time-picker"
                    label="Select booking time"
                    value={selectedDate}
                    onChange={handleDateChange}
                    //maxTime={new moment().add(15, "minutes")}
                    autoOk={true}
                    fullWidth
                  />
                </FormControl>
                <FormControl
                  className={classes.select}
                  margin="dense"
                  error={carError}
                >
                  <InputLabel
                    id="demo-simple-select-label"
                    //className={classes.left}
                  >
                    Select Car
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    aria-label="select-car"
                    value={car}
                    onChange={handleChangeCar}
                    className={classes.left}
                  >
                    <MenuItem value={10}>WB 23 AD 1354</MenuItem>
                    <MenuItem value={20}>WB 56 DE 1312</MenuItem>
                    <MenuItem value={30}>WB 46 DN 0208</MenuItem>
                  </Select>
                </FormControl>
              </MuiPickersUtilsProvider>
            </Grid>
            <Grid item xs={6} className={classes.ctaButtons}>
              <Button
                //size="small"
                color="secondary"
                //marginleft={100}
                aria-label="cancel"
                //endIcon={<Icon>send</Icon>}
                onClick={expand}
                endIcon={<ClearIcon />}
                variant="outlined"
                //onFocus={(event) => event.stopPropagation()}
              >
                Cancel
              </Button>
            </Grid>
            <Grid item xs={6} className={classes.ctaButtons}>
              <Button
                variant="outlined"
                color="primary"
                className={classes.fab}
                endIcon={<Icon>send</Icon>}
                onClick={onSubmit}
                //component={Link}
                //to="/history"
              >
                Confirm
              </Button>
            </Grid>
          </Grid>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <Snackbar
        autoHideDuration={13000}
        open={alert.open}
        onClose={handleClose}
        anchorOrigin={alertPosition}
      >
        <Alert
          variant="filled"
          elevation={24}
          severity="error"
          onClose={handleClose}
        >
          {alert.message}
        </Alert>
      </Snackbar>
    </div>
  );
}
