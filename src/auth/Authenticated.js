import React from "react";
import "../css/App.css";
import Booking from "../pages/booking";
import History from "../pages/history";
import Vehicles from "../pages/vehicles";
import Create from "../pages/create";
import Receipt from "../pages/receipt";
import BookingDetails from "../pages/BookingDetails";
import Update from "../pages/updateVehicle";
import Dashboard from "../pages/dashboard";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Dashboard />
        </Route>
        <Route path="/booking" component={Booking} />

        <Route path="/history">
          <History />
        </Route>
        <Route exact path="/details/:id">
          <BookingDetails />
        </Route>
        <Route exact path="/vehicles">
          <Vehicles />
        </Route>
        <Route exact path="/create">
          <Create />
        </Route>
        <Route exact path="/update/:id">
          <Update />
        </Route>
        <Route exact path="/receipt">
          <Receipt />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
