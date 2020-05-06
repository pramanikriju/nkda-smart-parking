import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Login from "./login";
import Booking from "./booking";
import History from "./history";
import Vehicles from "./vehicles";
import Create from "./create";
import Receipt from "./receipt";
import BookingDetails from "./BookingDetails";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/booking">
          <Booking />
        </Route>
        <Route path="/app">
          <App />
        </Route>
        <Route path="/history">
          <History />
        </Route>
        <Route exact path="/details">
          <BookingDetails />
        </Route>
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/vehicles">
          <Vehicles />
        </Route>
        <Route exact path="/create">
          <Create />
        </Route>
        <Route exact path="/receipt">
          <Receipt />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
