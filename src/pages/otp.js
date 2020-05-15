import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Icon from "@material-ui/core/Icon";
import Image from "../img/bg.jpg"; // Import using relative path
import Logo from "../img/nkda_logo.jpg";
import InputAdornment from "@material-ui/core/InputAdornment";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import IconButton from "@material-ui/core/IconButton";
import Input from "@material-ui/core/Input";
import { Link } from "react-router-dom";
import { useAuth } from "../auth/AuthProvider";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
import MailOutlineIcon from "@material-ui/icons/MailOutline";

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
    maxWidth: "230px !important",
    minWidth: "230px !important",
  },
  link: {
    marginTop: 15,
  },
}));

const RESEND_OTP_LIMIT = 30;

export default function Otp() {
  const classes = useStyles();
  const { register, error } = useAuth();
  const [values, setValues] = React.useState({
    showPassword: false,
    otp: "",
    seconds: RESEND_OTP_LIMIT,
  });
  const [alert, setAlert] = React.useState({
    open: false,
    message: "none",
  });

  if (error.error) {
    setAlert({
      open: true,
      message: error.message,
    });
  }

  const handleChange = (prop) => (event) => {
    //event.stopPropagation();
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setAlert({
      open: false,
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setValues({
        ...values,
        seconds:
          values.seconds > 1
            ? (values.seconds - 1).toString().padStart(2, 0)
            : false,
      });
    }, 1000);

    return () => clearInterval(interval);
  });

  function handleLogin() {
    console.log(values);
    if (values.otp && values.otp.length === 6) {
      register();
    } else {
      setAlert({
        open: true,
        message: "Enter 6 digit OTP",
      });
    }
  }

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
                      OTP
                    </InputLabel>
                    <Input
                      id="standard-adornment-password"
                      type="number"
                      //value={values.text}
                      onChange={handleChange("otp")}
                      variant="outlined"
                      endAdornment={
                        <InputAdornment
                          position="end"
                          style={{ padding: "12px" }}
                        >
                          <AccountCircle />
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  {values.seconds ? (
                    <Typography
                      variant="button"
                      component="div"
                      color="primary"
                    >
                      Resend OTP : <strong>00:{values.seconds}</strong>
                    </Typography>
                  ) : (
                    <Button
                      variant="outlined"
                      color="primary"
                      //className={classes.link}
                      endIcon={<MailOutlineIcon />}
                      //component={Link}
                      //to="/app"
                      onClick={() =>
                        setValues({
                          ...values,
                          seconds: RESEND_OTP_LIMIT,
                        })
                      }
                    >
                      Resend OTP
                    </Button>
                  )}
                </Grid>

                <Grid item xs={12}>
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.link}
                    endIcon={<Icon>send</Icon>}
                    //component={Link}
                    //to="/app"
                    onClick={handleLogin}
                  >
                    Login
                  </Button>
                </Grid>
                <Grid item xs={12}>
                  <Button
                    size="small"
                    color="secondary"
                    //className={classes.link}
                    component={Link}
                    to="/"
                  >
                    Back To Login
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Snackbar autoHideDuration={3000} open={alert.open} onClose={handleClose}>
        <Alert
          variant="filled"
          elevation={6}
          severity="error"
          onClose={handleClose}
        >
          {alert.message}
        </Alert>
      </Snackbar>
    </div>
  );
}
