import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Appbar from "../components/appbar";
import Typography from "@material-ui/core/Typography";

import CardActions from "@material-ui/core/CardActions";

import Image from "../img/bg.jpg"; // Import using relative path
import Receipt from "../img/receipt.png"; // Import using relative path

import GetAppIcon from "@material-ui/icons/GetApp";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { Link } from "react-router-dom";
import Logo from "../img/nkda_logo.jpg";
import QR from "../img/qr.png";

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
    background: "#fff",
    //width: "100%",
    maxWidth: "438px",
    //margin: "10px",
    padding: "1.3rem",
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
    right: "1rem",
  },
  form: {
    width: "-webkit-fill-available%",
    minWidth: "333px",
  },
  img: {
    width: "100%",
    height: "auto",
  },
  para: {
    margin: 0,
  },
}));

export default function Create() {
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
        <Card className={classes.cardItem}>
          <CardContent>
            <Grid
              container
              direction="row"
              justify="flex-start"
              alignItems="flex-start"
              spacing={2}
            >
              <Grid item xs={3}>
                <img src={Logo} alt="receipt" className={classes.img} />
              </Grid>
              <Grid item xs={9} style={{ textAlign: "right" }}>
                <h3>Thank You!</h3>
              </Grid>
              <Grid item xs={12} spacing={0}>
                <Typography variant="h5" component="div">
                  Parking Receipt
                </Typography>
                <hr></hr>
              </Grid>
              <Grid item xs={6}>
                <p className={classes.para}>
                  <strong>Date :</strong>{" "}
                  {new Date().toDateString().slice(4, 22)}
                </p>
                <p className={classes.para}>
                  <strong> ID : </strong>
                  {Math.random().toString(36).slice(2).toUpperCase()}
                </p>
                <p className={classes.para}>
                  <strong>Customer ID :</strong> {parseInt(Math.random() * 100)}
                </p>
              </Grid>
              <Grid item xs={5}>
                <p className={classes.para}>
                  <strong>Billed At :</strong>
                </p>
                <p className={classes.para}>Parking Bay 1</p>
                <p className={classes.para}>Axis Mall</p>
              </Grid>
              <Grid item xs={12}>
                <hr />
              </Grid>
              <Grid item xs={6}>
                <strong>Description</strong>
                <p> General Parking </p>
              </Grid>
              <Grid item xs={2}>
                <strong>Rate</strong>
                <p> 25/HR </p>
              </Grid>
              <Grid item xs={2}>
                <strong>Hours</strong>
                <p> 3 </p>
              </Grid>
              <Grid item xs={2}>
                <strong>Total</strong>
                <p> ₹ 75 </p>
              </Grid>
              <Grid item xs={12}>
                <hr />
                To get more details or a permalink, scan the QR code below.
              </Grid>
              <Grid item xs={12} style={{ textAlign: "center" }}>
                <img src={QR} alt="receipt" />
              </Grid>
              <Grid item xs={12}>
                <hr />
                Please retain this receipt for future reference.
                <br />
                For any questions regarding your order, please contact the
                parking assistant.
              </Grid>
            </Grid>
          </CardContent>
          <CardActions className={classes.end}>
            <Button
              variant="outlined"
              color="primary"
              className={classes.button}
              to="/history"
              component={Link}
              startIcon={<ArrowBackIcon />}
            >
              Back
            </Button>
            <Button
              //href="/vehicles"
              variant="contained"
              color="primary"
              className={classes.button}
              startIcon={<GetAppIcon />}
            >
              Download as PDF
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </div>
  );
}
