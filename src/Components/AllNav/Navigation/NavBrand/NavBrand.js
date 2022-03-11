import React from "react";
import { Link } from "react-router-dom";
import CityRideLogo from "../../../images/home/city-ride-logo2.png";

const NavBrand = () => {
  return (
    <Link className="responsive-spacing" to="/home">
      {" "}
      <img className="logo-style" src={CityRideLogo} alt="CityRideLogo" />
    </Link>
  );
};

export default NavBrand;
