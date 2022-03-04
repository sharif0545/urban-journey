import React from "react";
import { NavLink } from "react-router-dom";
import CityRideLogo from "../../../../images/home/city-ride-logo2.png";

const NavBrand = () => {
  return (
    <NavLink className="responsive-spacing" to="/home">
      {" "}
      <img className="logo-style" src={CityRideLogo} alt="CityRideLogo" />
    </NavLink>
  );
};

export default NavBrand;
