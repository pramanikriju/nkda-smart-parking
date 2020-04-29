import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Icon from "@material-ui/core/Icon";
import Avatar from "@material-ui/core/Avatar";
import EmojiTransportationIcon from "@material-ui/icons/EmojiTransportation";
import Badge from "@material-ui/core/Badge";
import Image from "./img/bg.jpg"; // Import using relative path
import Logo from "./img/nkda_logo.jpg";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import IconButton from "@material-ui/core/IconButton";
import Input from "@material-ui/core/Input";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: "100vh",
    backgroundImage: `url(${Image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  container: {
    height: "100vh",
  },
  card: {
    maxWidth: 345,
    //left: "2rem",
    zIndex: "1000",
    minWidth: 345,
    background: "rgb(255,255,255,0.8)",
  },
  password: {
    minWidth: "230px !important",
  },
  link: {
    marginTop: 15,
  },
}));

export default function Login() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className={classes.root}>
      <Grid
        className={classes.container}
        container
        direction="column"
        justify="center"
        alignItems="center"
      >
        <Grid item>
          <Card className={classes.card}>
            <CardActionArea>
              <CardContent>
                <Grid
                  container
                  direction="column"
                  justify="center"
                  alignItems="center"
                  spacing={1}
                >
                  <Grid item xs={12}>
                    <img src={Logo} alt="logo" />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="h5" component="h2">
                      NKDA Smart Parking
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <FormControl
                      className={classes.password}
                      // className={clsx(classes.margin, classes.textField)}
                    >
                      <InputLabel htmlFor="standard-adornment-password">
                        Username
                      </InputLabel>
                      <Input
                        id="standard-adornment-password"
                        type="text"
                        //value={values.text}
                        onChange={handleChange("password")}
                        variant="outlined"
                        endAdornment={
                          <InputAdornment position="end">
                            <AccountCircle />
                          </InputAdornment>
                        }
                      />
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                    <FormControl
                      className={classes.password}
                      // className={clsx(classes.margin, classes.textField)}
                    >
                      <InputLabel htmlFor="standard-adornment-password">
                        Password
                      </InputLabel>
                      <Input
                        //id="standard-adornment-password"
                        type={values.showPassword ? "text" : "password"}
                        //value={values.password}
                        onChange={handleChange("password")}
                        variant="outlined"
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                            >
                              {values.showPassword ? (
                                <Visibility />
                              ) : (
                                <VisibilityOff />
                              )}
                            </IconButton>
                          </InputAdornment>
                        }
                      />
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      variant="contained"
                      color="primary"
                      className={classes.link}
                      endIcon={<Icon>send</Icon>}
                      href="/app"
                    >
                      Login
                    </Button>
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      size="small"
                      color="secondary"
                      //className={classes.link}
                    >
                      Don't have an account? Register here
                    </Button>
                  </Grid>
                </Grid>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
