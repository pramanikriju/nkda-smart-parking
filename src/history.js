import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Appbar from "./appbar";
import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";
import Badge from "@material-ui/core/Badge";
import CardActions from "@material-ui/core/CardActions";
import DriveEtaIcon from "@material-ui/icons/DriveEta";
import AirportShuttleIcon from "@material-ui/icons/AirportShuttle";
import LocalTaxiIcon from "@material-ui/icons/LocalTaxi";
import MotorcycleIcon from "@material-ui/icons/Motorcycle";
import PrintIcon from "@material-ui/icons/Print";
import InfoIcon from "@material-ui/icons/Info";
import Image from "./img/bg.jpg"; // Import using relative path
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import HistoryIcon from "@material-ui/icons/History";
import ClearIcon from "@material-ui/icons/Clear";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    minHeight: "100vh",
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
  container: {
    paddingTop: "50px",
    //minHeight: "auto",
  },
  card: {
    maxWidth: 345,
    //left: "2rem",
    zIndex: "1000",
    minWidth: 300,
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
  endAction: {
    float: "right",
    paddingBottom: "16px",
  },
  searchItem: {
    background: "none",
  },
  search: {
    flexGrow: 1,
    //background: "rgb(255,255,255,0.8)",
    //marginLeft: "1.3rem",
    //marginRight: "1.3rem",
    //minWidth: "300px",
    maxWidth: "-webkit-fill-available",
    width: "-webkit-fill-available",
    marginBottom: "1.3rem",
  },
  cssOutlinedInput: {
    background: "rgb(255,255,255,0.8)",
  },
  limitWidth: {
    maxWidth: "-webkit-fill-available",
  },
}));

export default function History() {
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
          <TextField
            className={classes.search}
            id="input-with-icon-textfield"
            //label="TextField"
            variant="outlined"
            placeholder="Search Bookings"
            margin="normal"
            //fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
              classes: {
                root: classes.cssOutlinedInput,
              },
            }}
          />
        </Grid>
        <Grid item className={classes.limitWidth}>
          <ButtonGroup
            //size="large"
            variant="contained"
            color="primary"
            fullWidth
            aria-label="large outlined primary button group"
            className={classes.search}
          >
            <Button startIcon={<AccessTimeIcon />}>Ongoing</Button>
            <Button startIcon={<HistoryIcon />}>Historical</Button>
            <Button startIcon={<ClearIcon />}>Reset</Button>
          </ButtonGroup>
        </Grid>
        <Grid item>
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
                  <Badge
                    className={classes.online}
                    color="secondary"
                    variant="dot"
                  >
                    <Avatar variant="rounded" className={classes.rounded}>
                      <DriveEtaIcon />
                    </Avatar>
                  </Badge>
                </Grid>
                <Grid item xs={10} className={classes.content}>
                  <Typography variant="h5" component="h2">
                    WB AD 0208
                    <Chip
                      className={classes.end}
                      label="Ongoing"
                      color="primary"
                      variant="outlined"
                    />
                  </Typography>
                  <Typography gutterBottom variant="caption" component="div">
                    Maruti Swift Dzire
                  </Typography>

                  <Typography>
                    <strong>Booking Date : </strong> May 25 2020
                  </Typography>
                  <Typography>
                    <strong>Booking Time : </strong>03:14 PM
                  </Typography>
                  <Typography>
                    <strong>OTP : </strong>
                    <Typography component="span" color="secondary">
                      5963
                    </Typography>
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
            <CardActions className={classes.endAction}>
              {/* <IconButton aria-label="add to favorites">
                <PrintDisabledIcon />
              </IconButton> */}
              <Button
                component={Link}
                to="/details"
                variant="contained"
                color="primary"
                className={classes.button}
                startIcon={<InfoIcon />}
              >
                View Details
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item>
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
                  <Badge
                    className={classes.online}
                    color="secondary"
                    variant="dot"
                  >
                    <Avatar variant="rounded" className={classes.rounded}>
                      <MotorcycleIcon />
                    </Avatar>
                  </Badge>
                </Grid>
                <Grid item xs={10} className={classes.content}>
                  <Typography variant="h5" component="h2">
                    WB AD 0208
                    <Chip
                      className={classes.end}
                      label="Ongoing"
                      color="primary"
                      variant="outlined"
                    />
                  </Typography>
                  <Typography gutterBottom variant="caption" component="div">
                    Bajaj Pulsar
                  </Typography>
                  <Typography>
                    <strong>Booking Date : </strong> May 25 2020
                  </Typography>
                  <Typography>
                    <strong>Booking Time : </strong>03:14 PM
                  </Typography>
                  <Typography>
                    <strong>OTP : </strong>
                    <Typography component="span" color="secondary">
                      6356
                    </Typography>
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
            <CardActions className={classes.endAction}>
              {/* <IconButton aria-label="add to favorites">
                <PrintDisabledIcon />
              </IconButton> */}
              <Button
                to="/details"
                component={Link}
                variant="contained"
                color="primary"
                className={classes.button}
                startIcon={<InfoIcon />}
              >
                View Details
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item>
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
                  {/* <Badge
                    className={classes.online}
                    color="secondary"
                    variant="none"
                  > */}
                  <Avatar variant="rounded" className={classes.rounded}>
                    <LocalTaxiIcon />
                  </Avatar>
                  {/* </Badge> */}
                </Grid>
                <Grid item xs={10} className={classes.content}>
                  <Typography variant="h5" component="h2">
                    WB AD 0208
                    <Chip
                      label="Finished"
                      className={classes.end}
                      variant="outlined"
                    />
                  </Typography>
                  <Typography gutterBottom variant="caption" component="div">
                    Honda City
                  </Typography>
                  <Typography>
                    <strong>Booking Date : </strong> May 25 2020
                  </Typography>
                  <Typography>
                    <strong>Booking Time : </strong>03:14 PM
                  </Typography>
                  <Typography>
                    <strong>Exit Time : </strong>04:14 PM
                  </Typography>
                  <Typography>
                    <strong>Booking Amount : </strong>₹ 500
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
            <CardActions className={classes.endAction}>
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
              <Button
                to="/details"
                component={Link}
                variant="contained"
                color="primary"
                className={classes.button}
                startIcon={<InfoIcon />}
              >
                View Details
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item>
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
                  {/* <Badge
                    className={classes.online}
                    color="secondary"
                    variant="none"
                  > */}
                  <Avatar variant="rounded" className={classes.rounded}>
                    <AirportShuttleIcon />
                  </Avatar>
                  {/* </Badge> */}
                </Grid>
                <Grid item xs={10} className={classes.content}>
                  <Typography variant="h5" component="h2">
                    WB AD 0208
                    <Chip
                      label="Finished"
                      className={classes.end}
                      variant="outlined"
                    />
                  </Typography>
                  <Typography gutterBottom variant="caption" component="div">
                    Hyundai i10
                  </Typography>
                  <Typography>
                    <strong>Booking Date : </strong> May 25 2020
                  </Typography>
                  <Typography>
                    <strong>Booking Time : </strong>03:14 PM
                  </Typography>
                  <Typography>
                    <strong>Exit Time : </strong>04:14 PM
                  </Typography>
                  <Typography>
                    <strong>Booking Amount : </strong>₹ 500
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
            <CardActions className={classes.endAction}>
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
              <Button
                to="/details"
                component={Link}
                variant="contained"
                color="primary"
                className={classes.button}
                startIcon={<InfoIcon />}
              >
                View Details
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
