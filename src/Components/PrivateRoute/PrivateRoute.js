import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { UserContext } from "../../App";
const PrivateRoute = ({ children }) => {
  let location = useLocation();
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  return loggedInUser.email ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );
};

export default PrivateRoute;
