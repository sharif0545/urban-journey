import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";

const LogOut = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const handleLogOut = () => {
    setLoggedInUser({});
  };
  return (
    <Link className="btn btn-warning" to="/" onClick={handleLogOut}>
      Logout
    </Link>
  );
};

export default LogOut;
