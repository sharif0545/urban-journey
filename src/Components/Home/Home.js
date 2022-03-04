import React, { useContext, useEffect } from "react";
import { Container, Nav, Navbar, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../App";
import LogOut from "../LogOut/LogOut";
import NavBrand from "../AllNav/Navigation/NavBrand/NavBrand";
import NavMenu from "../AllNav/Navigation/NavMenu/NavMenu";
import VehicleData from "../../VehicleData/VehicleData";
import Transport from "../Transport/Transport";
import "./Home.css";

const Home = () => {
  const [vehicles, setVehicles] = useContext(UserContext);
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  useEffect(() => {
    setVehicles(VehicleData);
  }, []);
  // console.log(vehicles);
  return (
    <div className="home-bg">
      <Container fluid>
        <Navbar collapseOnSelect expand="lg">
          <NavBrand />
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <NavMenu />
            <Nav className="mr-auto">
              {loggedInUser.email ? (
                <LogOut></LogOut>
              ) : (
                <NavLink
                  className="navLinkStyle btn btn-warning"
                  eventKey={2}
                  to="/login"
                >
                  Login
                </NavLink>
              )}
            </Nav>
          </Navbar.Collapse>

          {loggedInUser.email && (
            <span
              style={{
                color: "tomato",
                fontWeight: "bold",
                marginLeft: "1rem",
              }}
            >
              {" "}
              {loggedInUser.name}
            </span>
          )}
        </Navbar>

        <div className="vehicle-container">
          <Row className="row-spacing">
            {vehicles.map((trans, id) => (
              <Transport trans={trans} key={id}></Transport>
            ))}
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Home;
