import React, { useEffect, useState, useCallback } from "react";
import FullPageLoader from "./FullPageLoader";
import { createBrowserHistory } from "history";

const AuthContext = React.createContext();

const DATA_URL = "https://5eb2c738974fee0016ecce62.mockapi.io/user/1";

function AuthProvider(props) {
  // code for pre-loading the user's information if we have their token in
  // localStorage goes here
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState("");
  const [error, setError] = useState({
    error: false,
    message: "",
  });
  const history = createBrowserHistory();

  // 🚨 this is the important bit.
  // Normally your provider components render the context provider with a value.
  // But we post-pone rendering any of the children until after we've determined
  // whether or not we have a user token and if we do, then we render a spinner
  // while we go retrieve that user's information.

  const getLogin = useCallback(() => {
    let axios = require("axios");

    axios.get(DATA_URL).then(
      (response) => {
        if (response.status === 200) {
          let data = response.data;
          console.log(data);
          setUser(data);
          setToken(data.token);
          localStorage.setItem("token", data.token);
          setLoading(false);
        } else {
          setError({ error: true, message: "Invalid Credentials" });
        }
      },
      (error) => {
        //setError({ error: true, message: "Error reaching server" });
        console.log("error reaching");
      }
    );
  });

  // make a login request
  const login = (username, password) => {
    //console.log("username ", username);
    //setUser("some data here");
    getLogin();
  };
  const register = () => {}; // register the user

  // clear the token in localStorage and the user data
  // note, I'm not bothering to optimize this `value` with React.useMemo here
  // because this is the top-most component rendered in our app and it will very
  // rarely re-render/cause a performance problem.
  const logout = () => {
    history.push("/");
    setUser("");
    setToken("");
    localStorage.removeItem("token");
  };

  useEffect(() => {
    //if token exists, get user data
    if (token) {
      //API call to get user
      console.log("fetching user from server");
      getLogin();
    }
  }, []);

  if (loading) {
    return <FullPageLoader />;
  }

  return (
    <AuthContext.Provider
      value={{ user, login, logout, register, token, error }}
      {...props}
    />
  );
}
const useAuth = () => React.useContext(AuthContext);
export { AuthProvider, useAuth };
// the UserProvider in user-context.js is basically:
// const UserProvider = props => (
//   <UserContext.Provider value={useAuth().data.user} {...props} />
// )
// and the useUser hook is basically this:
// const useUser = () => React.useContext(UserContext)
