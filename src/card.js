import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Icon from "@material-ui/core/Icon";
import Avatar from "@material-ui/core/Avatar";
import EmojiTransportationIcon from "@material-ui/icons/EmojiTransportation";
import Grid from "@material-ui/core/Grid";
import Badge from "@material-ui/core/Badge";
import MomentUtils from "@date-io/moment";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
} from "@material-ui/pickers";

const useStyles = makeStyles({
  root: {
    //maxWidth: 345,
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
  },
  fab: {
    //marginLeft: "auto !important",
    flexGrow: 1,
    alignContent: "flex-end",
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
});

export default function DefaultCard() {
  const classes = useStyles();

  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent className={classes.content}>
          <Typography gutterBottom variant="h5" component="h2">
            Parking Bay 1
          </Typography>
          <Grid container spacing={0}>
            <Grid item xs={2}>
              <Badge badgeContent={4} color="secondary">
                <Avatar variant="rounded" className={classes.rounded}>
                  <EmojiTransportationIcon />
                </Avatar>
              </Badge>
            </Grid>
            <Grid item xs={10}>
              <Typography variant="body2" color="textSecondary" component="p">
                <strong>Bays Available : </strong>{" "}
                <span color="secondary">4</span>
                <br />
                Parking bay near Axis Mall. Rates starting from Rs. 10/HR
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <MuiPickersUtilsProvider utils={MomentUtils}>
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
              </MuiPickersUtilsProvider>
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.actions}>
        <Button size="small" color="secondary" marginleft={100}>
          Navigate
        </Button>
        {/* <Fab color="primary" aria-label="add" className={classes.fab}>
          <AddIcon />
        </Fab> */}
        <Button
          variant="outlined"
          color="primary"
          className={classes.fab}
          endIcon={<Icon>send</Icon>}
          //href="/booking"
        >
          Book now
        </Button>
      </CardActions>
    </Card>
  );
}
