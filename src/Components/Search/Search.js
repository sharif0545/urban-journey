import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Col, Container, Nav, Navbar, NavLink, Row } from "react-bootstrap";

import { UserContext } from "../../App";

import VehicleData from "../VehicleData/VehicleData";
import NavBrand from "../AllNav/Navigation/NavBrand/NavBrand";
import NavMenu from "../AllNav/Navigation/NavMenu/NavMenu";
import LogOut from "../LogOut/LogOut";
import MapView from "../MapView/MapView";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faUserFriends } from "@fortawesome/free-solid-svg-icons";

import "./Search.css";

const Search = () => {
  const [booking, setBooking] = useContext(UserContext);
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const navigate = useNavigate();
  const { transportID } = useParams();
  const selectedTransport = VehicleData.find(
    (trans) => trans.vechileId === transportID
  );
  const { vechileCategory, passengerCount, perKiloCost, vehicleImage } =
    selectedTransport;
  const goToLogin = () => {
    navigate("/login");
  };
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
                <button
                  className="navLinkStyle btn btn-warning"
                  eventKey={2}
                  // to="/login"
                  onClick={goToLogin}
                >
                  Login
                </button>
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
            <div className="travel-info">
              <div className="">
                <Col
                  className="border-1 rounded p-3 text-white "
                  style={{ backgroundColor: "#d8929270" }}
                >
                  <h5 className="my-3">
                    Origin :{" "}
                    <span className="text-success">{booking.origin}</span>{" "}
                  </h5>
                  <h5 className="my-3">
                    Destination :{" "}
                    <span className="text-success"> {booking.destination}</span>
                  </h5>
                  <Row className="">
                    <Col>
                      From :{" "}
                      <h6>
                        {" "}
                        <span className="text-primary">{booking.from}</span>
                      </h6>{" "}
                    </Col>
                    <Col>
                      To :{" "}
                      <h6>
                        {" "}
                        <span className="text-primary">{booking.to}</span>
                      </h6>{" "}
                    </Col>
                  </Row>
                </Col>
                <Col className="border-1 rounded transport-des bg-white">
                  <Row className="">
                    <Col md={3} sm={12}>
                      <img
                        className="selected-img"
                        src={vehicleImage}
                        alt="selectedTransport"
                      />
                    </Col>
                    <Col md={3} sm={12} className="transport-category">
                      {vechileCategory}
                    </Col>
                    <Col md={3} sm={12} className="passenger-count">
                      <FontAwesomeIcon icon={faUserFriends} /> {passengerCount}
                    </Col>
                    <Col md={3} sm={12} className="perkilo-cost">
                      {perKiloCost}
                    </Col>
                  </Row>
                </Col>
                <Col className="border-1 rounded transport-des bg-white">
                  <Row className="">
                    <Col md={3} sm={12}>
                      <img
                        className="selected-img"
                        src={vehicleImage}
                        alt="selectedTransport"
                      />
                    </Col>
                    <Col md={3} sm={12} className="transport-category">
                      {vechileCategory}
                    </Col>
                    <Col md={3} sm={12} className="passenger-count">
                      <FontAwesomeIcon icon={faUserFriends} /> {passengerCount}
                    </Col>
                    <Col md={3} sm={12} className="perkilo-cost">
                      {perKiloCost}
                    </Col>
                  </Row>
                </Col>
                <Col className="border-1 rounded transport-des bg-white">
                  <Row className="">
                    <Col md={3} sm={12}>
                      <img
                        className="selected-img"
                        src={vehicleImage}
                        alt="selectedTransport"
                      />
                    </Col>
                    <Col md={3} sm={12} className="transport-category">
                      {vechileCategory}
                    </Col>
                    <Col md={3} sm={12} className="passenger-count">
                      <FontAwesomeIcon icon={faUserFriends} /> {passengerCount}
                    </Col>
                    <Col md={3} sm={12} className="perkilo-cost">
                      {perKiloCost}
                    </Col>
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

// "@fortawesome/fontawesome-svg-core": "^1.3.0",
// "@fortawesome/free-brands-svg-icons": "^5.15.4",
// "@fortawesome/free-regular-svg-icons": "^5.15.4",
// "@fortawesome/free-solid-svg-icons": "^5.15.4",
// "@fortawesome/react-fontawesome": "^0.1.17",
