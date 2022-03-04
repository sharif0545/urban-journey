import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../App";

const LogOut = () => {
  const navigate = useNavigate();
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const handleLogOut = () => {
    setLoggedInUser({});
    navigate("/");
  };
  return (
    // <NavLink className="btn btn-warning" to="/" onClick={handleLogOut}>
    //   Logout
    // </NavLink>

    <button className="btn btn-warning" onClick={handleLogOut}>
      Logout
    </button>
  );
};

export default LogOut;
