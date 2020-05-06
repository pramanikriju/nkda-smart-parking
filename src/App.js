import React from "react";
import "./App.css";
import Map from "./map";
import Search from "./search";
import Appbar from "./appbar";
import Grid from "@material-ui/core/Grid";

const markers = [[22.578564, 88.46249], []];

function App() {
  return (
    <div className="App">
      <Appbar id="appbar" />

      <Map center={markers[0]} />

      <Grid container direction="row" justify="flex-start" alignItems="stretch">
        <Grid item>
          <Search className="search" />
        </Grid>
        <Grid item></Grid>
      </Grid>
    </div>
  );
}

export default App;
