import React, { useState, useEffect, useCallback, createRef } from "react";
import { useAuth } from "../auth/AuthProvider";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Appbar from "../components/appbar";
import Avatar from "@material-ui/core/Avatar";
import CardActions from "@material-ui/core/CardActions";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Image from "../img/bg.jpg"; // Import using relative path
import CheckIcon from "@material-ui/icons/Check";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import { Link } from "react-router-dom";
import Badge from "@material-ui/core/Badge";
import EditIcon from "@material-ui/icons/Edit";

const useStyles = makeStyles((theme) => ({
  root: {
    //flexGrow: 1,
    minHeight: "100vh",
    //background: "linear-gradient(to top, #61dafb, #ffffff)",
    //background: "#f9f9f9",
    // backgroundImage: `url(${Image})`,
    // backgroundSize: "cover",
    // backgroundPosition: "center",
    padding: "16px",
    backgroundImage: `url(${Image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  container: {
    marginTop: "3.5rem",
    //minHeight: "auto",
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
  cardItem: {
    background: "rgb(255,255,255,1)",
    width: "100%",
    maxWidth: "438px",
  },
  content: {
    // paddingLeft: "1rem",
    // float: "left",
    justifyContent: "center",
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
    padding: "16px",
  },
  fab: {
    position: "fixed",
    bottom: "1.3rem",
    right: "1.3rem",
  },
  form: {
    width: "-webkit-fill-available%",
    minWidth: "333px",
  },
  userBg: {
    width: "4.5rem",
    height: "4.5rem",
  },
}));

export default function UpdateProfile() {
  const classes = useStyles();

  const { user } = useAuth();

  const upload = createRef();

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);

  const [password, setPassword] = useState("123456789");
  const [confirmPassword, setconfirmPassword] = useState("123456789");

  const [avatar, setAvatar] = useState(user.avatar ?? null);

  const [uploadImage, setUploadImage] = useState("");

  function handleUpload(event) {
    event.stopPropagation();
    event.preventDefault();
    var file = event.target.files[0];
    setAvatar(URL.createObjectURL(file));
    setUploadImage(file);
  }

  return (
    <div className={classes.root}>
      <Appbar id="appbar" />8
      <Grid
        className={classes.container}
        container
        direction="row"
        justify="flex-start"
        alignItems="stretch"
        spacing={0}
      >
        <Card className={classes.cardItem}>
          <CardContent>
            <Grid
              container
              direction="column"
              justify="flex-start"
              alignItems="center"
              spacing={2}
            >
              <Grid item xs={12}>
                <input
                  id="myInput"
                  type="file"
                  ref={upload}
                  style={{ display: "none" }}
                  onChange={handleUpload}
                  accept="image/jpg, image/jpeg, image/png"
                />
                <Badge
                  color="secondary"
                  badgeContent="+"
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                  }}
                  overlap="circle"
                  onClick={() => {
                    upload.current.click();
                  }}
                >
                  <Avatar
                    alt={user.name}
                    src={avatar}
                    //className={classes.large}
                    className={classes.userBg}
                  >
                    {user.name
                      .toLowerCase()
                      .split(" ")
                      .map((s) => s.charAt(0).toUpperCase())
                      .join("")
                      .slice(0, 2)}
                  </Avatar>
                </Badge>
              </Grid>
              <Grid item xs={12}>
                <Typography gutterBottom variant="h5" component="h2">
                  Update Profile
                </Typography>
              </Grid>
              <Grid item xs={12} className={classes.fullWidth}>
                <TextField
                  id="standard-basic-1"
                  label="Name"
                  className={classes.form}
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
              </Grid>
              <Grid item xs={12} className={classes.fullWidth}>
                <TextField
                  id="standard-basic-2"
                  label="Email"
                  className={classes.form}
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </Grid>
              <Grid item xs={12} className={classes.fullWidth}>
                <TextField
                  id="standard-basic-1"
                  label="Phone"
                  disabled
                  className={classes.form}
                  value={parseInt(Math.random() * 10000000000)}
                  //onChange={(event) => setName(event.target.value)}
                />
              </Grid>

              <Grid item xs={12} className={classes.fullWidth}>
                <TextField
                  id="standard-basic-3"
                  label="Password"
                  type="password"
                  className={classes.form}
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </Grid>
              <Grid item xs={12} className={classes.fullWidth}>
                <TextField
                  id="standard-basic-3"
                  className={classes.form}
                  type="password"
                  label="Password Confirmation"
                  value={confirmPassword}
                  onChange={(event) => setconfirmPassword(event.target.value)}
                />
              </Grid>
            </Grid>
          </CardContent>
          <CardActions className={classes.end}>
            <Button
              variant="outlined"
              color="primary"
              className={classes.button}
              to="/vehicles"
              startIcon={<ArrowBackIcon />}
              component={Link}
            >
              Back
            </Button>
            <Button
              to="/vehicles"
              variant="contained"
              color="primary"
              className={classes.button}
              startIcon={<CheckIcon />}
              component={Link}
            >
              Confirm
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </div>
  );
}
