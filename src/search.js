import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position: "fixed",
    top: "3.8rem",
    zIndex: "1000",
    background: "rgb(255,255,255,0.8)",
    marginLeft: "1.3rem",
    marginRight: "1.3rem",
    minWidth: "300px",
    maxWidth: "512px",
    width: "-webkit-fill-available",
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
      margin="normal"
      //fullWidth
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
