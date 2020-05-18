import React, { useState, useEffect, useCallback } from "react";
import "../css/App.css";
import Map from "../components/map";
import Search from "../components/search";
import Appbar from "../components/appbar";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";

const DATA_URL = "https://5eb2c738974fee0016ecce62.mockapi.io/api/garages";

function Dashboard() {
  const [searchParam, setSearchParam] = useState("");
  const [loading, setLoading] = useState(true);
  const [garages, setGarages] = useState([]);
  const [filteredGarages, setfilteredGarages] = useState([]);

  function searchGarages(event) {
    const filter = event.target.value;
    //console.log(filter);
    setSearchParam(filter);
    let filtered = garages.filter((item) => {
      const lc = JSON.stringify(item).toLowerCase();
      const uc = JSON.stringify(item).toUpperCase();
      return lc.includes(filter) || uc.includes(filter);
    });
    console.log(filtered);
    setfilteredGarages(filtered);
  }

  //Get API data
  const getApiData = useCallback(() => {
    let axios = require("axios");

    axios.get(DATA_URL).then(
      (response) => {
        if (response.status === 200) {
          let data = response.data;
          //console.log(data);
          setGarages(data);
          setfilteredGarages(data);
          setLoading(false);
        }
      },
      (error) => console.log(error)
    );
  });

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <div className="App">
      <Appbar id="appbar" />

      {loading ? (
        <Grid container direction="column" justify="center" alignItems="center">
          <Grid item style={{ marginTop: "50%" }}>
            <CircularProgress />
          </Grid>
        </Grid>
      ) : (
        <Map filter={searchParam} garages={filteredGarages} />
      )}

      <Grid container direction="row" justify="flex-start" alignItems="stretch">
        <Grid item>
          <Search
            className="search"
            value={searchParam}
            onChangeValue={searchGarages}
          />
        </Grid>
        <Grid item></Grid>
      </Grid>
    </div>
  );
}

export default Dashboard;
