import React, { useCallback, useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Appbar from "../components/appbar";
import Image from "../img/bg.jpg"; // Import using relative path
import SearchIcon from "@material-ui/icons/Search";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import HistoryIcon from "@material-ui/icons/History";
import ClearIcon from "@material-ui/icons/Clear";
import BookingCardLoading from "../components/bookingCardLoading";
import BookingCard from "../components/bookingCard";

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
    paddingTop: "3.5rem",
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
    marginTop: "1.3rem",
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
    //marginBottom: "1.3rem",
  },
  cssOutlinedInput: {
    background: "rgb(255,255,255,0.8)",
  },
  limitWidth: {
    maxWidth: "-webkit-fill-available",
  },
}));

const DATA_URL = "https://5eb2c738974fee0016ecce62.mockapi.io/api/bookings";

export default function History() {
  const classes = useStyles();

  const [loading, setLoading] = useState(true);
  const [resetIcon, setresetIcon] = useState("hidden");
  const [bookings, setBookings] = useState([]);
  const [filteredBookings, setFilteredBookings] = useState([]);

  const [search, setSearch] = useState("");

  function searchChange(event) {
    let param = event.target.value;
    setSearch(param);
    //console.log("seraching for", param);

    if (param !== "") {
      setresetIcon("visible");
      let filtered = bookings.filter((item) => {
        // console.log(typeof(item))
        const lc = JSON.stringify(item).toLowerCase();
        const uc = JSON.stringify(item).toUpperCase();
        const filter = param;
        return lc.includes(filter) || uc.includes(filter);
      });
      //setBookings(filtered);
      setFilteredBookings(filtered);
    } else {
      resetFilters();
    }
  }

  function filterBookings(param) {
    //console.log(param);
    let filtered = bookings.filter((item) => {
      return item.ongoing === param;
    });
    setFilteredBookings(filtered);
  }

  function resetFilters() {
    setSearch("");
    setresetIcon("hidden");
    setLoading(true);
    getApiData();
  }

  const getApiData = useCallback(() => {
    let axios = require("axios");

    axios.get(DATA_URL).then(
      (response) => {
        if (response.status === 200) {
          let data = response.data.sort((a, b) =>
            a.createdAt > b.createdAt ? 1 : -1
          );
          //console.log(data);
          setBookings(data);
          setFilteredBookings(data);
          setLoading(false);
        } else {
          //Handle API Error
        }
      },
      (error) => console.log(error)
    );
  });

  useEffect(() => {
    getApiData();
  }, []);

  if (loading) {
    return (
      <div className={classes.root}>
        <Appbar id="appbar" />

        <Grid
          className={classes.container}
          container
          direction="row"
          justify="space-between"
          alignItems="stretch"
          spacing={2}
        >
          <Grid item xs={12}>
            <TextField
              className={classes.search}
              id="input-with-icon-textfield"
              //label="TextField"
              variant="outlined"
              placeholder="Search Bookings"
              margin="none"
              //fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
                // endAdornment: (
                //   <InputAdornment position="end">
                //     <ClearIcon />
                //   </InputAdornment>
                // ),
                classes: {
                  root: classes.cssOutlinedInput,
                },
              }}
            />
          </Grid>
          <Grid item xs={12} className={classes.limitWidth}>
            <ButtonGroup
              //size="large"
              variant="contained"
              color="primary"
              fullWidth
              aria-label="large outlined primary button group"
              className={classes.search}
            >
              <Button startIcon={<AccessTimeIcon />}>Current</Button>
              <Button startIcon={<HistoryIcon />}>Past</Button>
              <Button startIcon={<ClearIcon />}>Reset</Button>
            </ButtonGroup>
          </Grid>
          <Grid item xs={12}>
            <BookingCardLoading />
          </Grid>
          <Grid item xs={12}>
            <BookingCardLoading />
          </Grid>
          {/* <Grid item className={classes.link}>
            <BookingCardLoading />
          </Grid> */}
        </Grid>
      </div>
    );
  } else {
    return (
      <div className={classes.root}>
        <Appbar id="appbar" />

        <Grid
          className={classes.container}
          container
          direction="row"
          justify="space-between"
          alignItems="stretch"
          spacing={2}
        >
          <Grid item xs={12}>
            <TextField
              className={classes.search}
              id="input-with-icon-textfield"
              //label="TextField"
              variant="outlined"
              placeholder="Search Bookings"
              margin="none"
              //fullWidth
              value={search}
              onChange={searchChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <ClearIcon visibility={resetIcon} onClick={resetFilters} />
                  </InputAdornment>
                ),
                classes: {
                  root: classes.cssOutlinedInput,
                },
              }}
            />
          </Grid>
          <Grid item xs={12} className={classes.limitWidth}>
            <ButtonGroup
              //size="large"
              variant="contained"
              color="primary"
              fullWidth
              aria-label="large outlined primary button group"
              className={classes.search}
            >
              <Button
                startIcon={<AccessTimeIcon />}
                onClick={() => filterBookings(true)}
              >
                Current
              </Button>
              <Button
                startIcon={<HistoryIcon />}
                onClick={() => filterBookings(false)}
              >
                Past
              </Button>
              <Button startIcon={<ClearIcon />} onClick={resetFilters}>
                Reset
              </Button>
            </ButtonGroup>
          </Grid>
          {filteredBookings.map((item, key) => (
            <Grid xs={12} item key={item.id}>
              <BookingCard data={item} />
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }
}
