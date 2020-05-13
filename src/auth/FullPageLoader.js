import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export default function FullPageLoder() {
  const classes = useStyles();

  return (
    <Grid
      container
      align="center"
      justify="center"
      direction="column"
      style={{ minHeight: "100vh" }}
      //className={classes.root}
    >
      <Grid item>
        <CircularProgress />
      </Grid>
    </Grid>
  );
}
