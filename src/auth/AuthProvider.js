import React, { useEffect, useState } from "react";
import FullPageLoader from "./FullPageLoader";

const AuthContext = React.createContext();

const DATA_URL = "https://5eb2c738974fee0016ecce62.mockapi.io/user/1";

function AuthProvider(props) {
  // code for pre-loading the user's information if we have their token in
  // localStorage goes here
  const [user, setUser] = useState(localStorage.getItem("token") || "");
  const [loading, setLoading] = useState(false);
  // 🚨 this is the important bit.
  // Normally your provider components render the context provider with a value.
  // But we post-pone rendering any of the children until after we've determined
  // whether or not we have a user token and if we do, then we render a spinner
  // while we go retrieve that user's information.

  if (loading) {
    return <FullPageLoader />;
  }

  const login = (username, password) => {
    console.log("username ", username);
    setUser("some data here");
  }; // make a login request
  const register = () => {}; // register the user
  const logout = () => {
    setUser("");
  }; // clear the token in localStorage and the user data
  // note, I'm not bothering to optimize this `value` with React.useMemo here
  // because this is the top-most component rendered in our app and it will very
  // rarely re-render/cause a performance problem.
  return (
    <AuthContext.Provider
      value={{ user, login, logout, register }}
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
