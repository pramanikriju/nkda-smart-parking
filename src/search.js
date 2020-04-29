import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
    position: "fixed",
    top: "4rem",
    zIndex: "1000",
    background: "rgb(255,255,255,0.8)",
  },
}));

export default function Search() {
  const classes = useStyles();

  return (
    <TextField
      className={classes.root}
      id="input-with-icon-textfield"
      //label="TextField"
      variant="outlined"
      placeholder="Search Garages"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  );
}
