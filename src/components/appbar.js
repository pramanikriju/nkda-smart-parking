import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import Drawer from "@material-ui/core/Drawer";
import { Grid } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import DraftsIcon from "@material-ui/icons/Drafts";
import CommuteIcon from "@material-ui/icons/Commute";
import Paper from "@material-ui/core/Paper";
import { Link } from "react-router-dom";
import { useAuth } from "../auth/AuthProvider";

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
  },
  list: {
    width: "15rem",
  },
  fullList: {
    width: "auto",
  },
  large: {
    width: "100%",
    height: "auto",
  },
  avatar: {
    minHeight: 70,
  },
  userBg: {
    background: "#4c4c4c",
    color: "white",
    margin: 10,
  },
  user: {
    margin: 10,
  },
}));

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

export default function Appbar() {
  const classes = useStyles();
  const [drawer, setDrawer] = useState(false);

  const { user, logout } = useAuth();

  const toggleDrawer = () => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawer(!drawer);
  };

  return (
    <div>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            edge="start"
            //className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer()}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" className={classes.typography}>
            NKDA Smart Parking
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" onClose={toggleDrawer()} open={drawer}>
        <Paper elevation={3} className={classes.list}>
          <Grid
            container
            spacing={3}
            alignItems="center"
            justify="flex-start"
            direction="row"
            className={classes.avatar}
          >
            <Grid item xs={2}>
              <Avatar
                alt="Remy Sharp"
                src={user.avatar}
                //className={classes.large}
                className={classes.userBg}
              >
                {user.name
                  .toLowerCase()
                  .split(" ")
                  .map((s) => s.charAt(0).toUpperCase())
                  .join("")}
              </Avatar>
            </Grid>
            <Grid item xs={8} align="center" className={classes.user}>
              <Typography variant="h6" component="h6">
                {user.name}
              </Typography>
            </Grid>
          </Grid>
        </Paper>
        <Grid
          container
          spacing={3}
          align="center"
          justify="center"
          direction="column"
          //className={classes.avatar}
        >
          <Grid item xs={12}>
            <List component="nav" aria-label="main mailbox folders">
              <ListItemLink component={Link} to="/">
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="New Booking" />
              </ListItemLink>
              <ListItemLink component={Link} to="/history">
                <ListItemIcon>
                  <DraftsIcon />
                </ListItemIcon>
                <ListItemText primary="Booking history" />
              </ListItemLink>
              <ListItemLink component={Link} to="/vehicles">
                <ListItemIcon>
                  <CommuteIcon />
                </ListItemIcon>
                <ListItemText primary="Vehicles" />
              </ListItemLink>
            </List>
            <Divider />
            <List component="nav" aria-label="secondary mailbox folders">
              <ListItem button>
                <ListItemText primary="Feedback" />
              </ListItem>
              <ListItemLink onClick={logout}>
                <ListItemText primary="Logout" />
              </ListItemLink>
            </List>
          </Grid>
        </Grid>
      </Drawer>
    </div>
  );
}
