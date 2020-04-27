import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import Search from "./search";

const useStyles = makeStyles((theme) => ({
  centered: {
    justifyContent: "center",
  },
  distance: {
    marginTop: "2rem",
    zIndex: "9999",
  },
  typography: {
    flexGrow: 1,
    align: "justify",
    marginRight: "1.5rem",
    // marginLeft: "auto",
    // marginRight: "auto",
  },
}));

export default function Appbar() {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            edge="start"
            //className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" className={classes.typography}>
            NKDA Smart Parking
          </Typography>
        </Toolbar>
      </AppBar>
      {/* <Search className={classes.distance} /> */}
    </div>
  );
}
