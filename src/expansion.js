import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
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

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  select: {
    minWidth: "300px",
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
});

export default function Expansion() {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [car, setCar] = useState("");

  function expand() {
    setExpanded(!expanded);
  }

  const handleChangeCar = (event) => {
    //event.preventDefault();
    //event.stopPropagation();
    console.log(event.target.value);
    //setCar(event.target.value);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className={classes.root}>
      <ExpansionPanel className={classes.expansionPanelSummary}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-label="Expand"
          aria-controls="additional-actions1-content"
          id="additional-actions1-header"
          classes={{ root: classes.expandedRoot }}
        >
          <Button
            //size="small"
            color="primary"
            //marginleft={100}
            aria-label="Acknowledge"
            //endIcon={<Icon>send</Icon>}
            //onClick={(event) => event.stopPropagation()}
            //onFocus={(event) => event.stopPropagation()}
          >
            Book Now
          </Button>
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
                    maxTime={new moment().add(15, "minutes")}
                    fullWidth
                  />
                </FormControl>
                <FormControl className={classes.select} margin="dense">
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
                aria-label="Acknowledge"
                //endIcon={<Icon>send</Icon>}
                //onClick={(event) => event.stopPropagation()}
                //onFocus={(event) => event.stopPropagation()}
              >
                Navigate
              </Button>
            </Grid>
            <Grid item xs={6} className={classes.ctaButtons}>
              <Button
                variant="outlined"
                color="primary"
                className={classes.fab}
                endIcon={<Icon>send</Icon>}
                //onClick={showTime}
                //href="/booking"
              >
                Book now
              </Button>
            </Grid>
          </Grid>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      {/* <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success">
            This is a success message!
            </Alert>
        </Snackbar> */}
    </div>
  );
}
