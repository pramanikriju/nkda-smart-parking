import React from "react";
import "../css/App.css";
import Login from "../pages/login";
import Register from "../pages/register";
import Otp from "../pages/otp";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useAuth } from "../auth/AuthProvider";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/otp">
          <Otp />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
