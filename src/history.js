import React from "react";
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

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    minHeight: "100vh",
    background: "linear-gradient(to top, #61dafb, #ffffff)",
    padding: "16px",
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
  card: {
    background: "#fff",
    width: "100%",
  },
  content: {
    paddingLeft: "1rem",
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
        justify="space-evenly"
        alignItems="stretch"
        spacing={1}
      >
        <Grid item>
          <Card className={classes.card}>
            <CardContent className={classes}>
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
                      <EmojiTransportationIcon />
                    </Avatar>
                  </Badge>
                </Grid>
                <Grid item xs={10} className={classes.content}>
                  <Typography gutterBottom variant="h5" component="h2">
                    WB AD 0208
                    <Chip
                      className={classes.end}
                      label="Ongoing"
                      color="primary"
                    />
                  </Typography>
                  <Typography>
                    <strong>Booking Date : </strong> May 25 2020
                  </Typography>
                  <Typography>
                    <strong>Booking Time : </strong>03:14 PM
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
