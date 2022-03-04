import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Col, Container, Nav, Navbar, NavLink, Row } from "react-bootstrap";

import { UserContext } from "../../App";
import VehicleData from "../../VehicleData/VehicleData";
import NavBrand from "../AllNav/Navigation/NavBrand/NavBrand";
import NavMenu from "../AllNav/Navigation/NavMenu/NavMenu";
import LogOut from "../LogOut/LogOut";
import MapView from "../MapView/MapView";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserGroup } from "@fortawesome/free-solid-svg-icons";

import "./Search.css";

const Search = () => {
  const [booking, setBooking] = useContext(UserContext);
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const { transportID } = useParams();
  const selectedTransport = VehicleData.find(
    (trans) => trans.vechileId === transportID
  );
  const { vechileCategory, passengerCount, pererKiloCost, vehicleImage } =
    selectedTransport;

  // console.log(transportID);
  return (
    <div>
      <Container>
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
        <hr />
        <Row>
          <Col md={4} sm={12}>
            <div
              className="travel-info"
              style={{
                backgroundColor: "lightgray",
                padding: "10px",
                borderRadius: "5px",
              }}
            >
              <div className="">
                <Col className="border-1 rounded p-3 bg-danger text-white">
                  <h5 className="my-3">Origin : {booking.origin}</h5>
                  <h5 className="my-3">Destination : {booking.destination}</h5>
                  <Row className="">
                    <Col>
                      From : <h6>{booking.from}</h6>{" "}
                    </Col>
                    <Col>
                      To : <h6>{booking.to}</h6>{" "}
                    </Col>
                  </Row>
                </Col>
                <Col className="border-1 rounded p-4 bg-white my-2">
                  <Row className="">
                    <Col md={3}>
                      <img
                        className="selected-img"
                        src={vehicleImage}
                        alt="selectedTransport"
                      />
                    </Col>
                    <Col md={3}>{vechileCategory}</Col>
                    <Col md={3}>
                      <FontAwesomeIcon icon="fa-solid faUserGroup" />
                      {passengerCount}
                    </Col>
                    <Col md={3}>{pererKiloCost}</Col>
                  </Row>
                </Col>
                <Col className="border-1 rounded p-4 bg-white my-2">
                  <Row className="">
                    <Col md={3}>
                      <img
                        className="selected-img"
                        src={vehicleImage}
                        alt="selectedTransport"
                      />
                    </Col>
                    <Col md={3}>{vechileCategory}</Col>
                    <Col md={3}>
                      <FontAwesomeIcon icon="fa-solid faUserGroup" />
                      {passengerCount}
                    </Col>
                    <Col md={3}>{pererKiloCost}</Col>
                  </Row>
                </Col>
                <Col className="border-1 rounded p-4 bg-white my-2">
                  <Row className="">
                    <Col md={3}>
                      <img
                        className="selected-img"
                        src={vehicleImage}
                        alt="selectedTransport"
                      />
                    </Col>
                    <Col md={3}>{vechileCategory}</Col>
                    <Col md={3}>
                      <FontAwesomeIcon icon="fa-solid faUserGroup" />
                      {passengerCount}
                    </Col>
                    <Col md={3}>{pererKiloCost}</Col>
                  </Row>
                </Col>
              </div>
            </div>
          </Col>
          <Col md={8} sm={12} className="map-spacing">
            <MapView />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Search;

// "@fortawesome/fontawesome-svg-core": "^1.3.0",
// "@fortawesome/free-regular-svg-icons": "^6.0.0",
// "@fortawesome/free-solid-svg-icons": "^6.0.0",
// "@fortawesome/react-fontawesome": "^0.1.17",
