import React from "react";
import "./App.css";
import Map from "./map";
import Search from "./search";
import Appbar from "./appbar";
import Grid from "@material-ui/core/Grid";
import DefaultCard from "./card";

function App() {
  return (
    <div className="App">
      <Appbar id="appbar" />

      <Map />

      <Grid container direction="row" justify="center" alignItems="center">
        <DefaultCard className="cardDefault" />
        <Search className="search" />
      </Grid>
    </div>
  );
}

export default App;
