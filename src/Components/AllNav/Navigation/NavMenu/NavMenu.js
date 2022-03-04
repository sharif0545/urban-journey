import React from "react";
import { NavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";

const NavMenu = () => {
  return (
    <Nav className="navStyle">
      <NavLink className="navLinkStyle" to="/home">
        Home
      </NavLink>
      <NavLink className="navLinkStyle" to="/destination">
        Destination
      </NavLink>
      <NavLink className="navLinkStyle" to="/blog">
        Blog
      </NavLink>
      <NavLink className="navLinkStyle" to="/contact">
        Contact
      </NavLink>{" "}
    </Nav>
  );
};

export default NavMenu;
