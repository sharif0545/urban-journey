import React, { useContext } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  Nav,
  Navbar,
  NavLink,
  Row,
} from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../../App";
import NavBrand from "../AllNav/Navigation/NavBrand/NavBrand";
import NavMenu from "../AllNav/Navigation/NavMenu/NavMenu";
import LogOut from "../LogOut/LogOut";
import MapView from "../MapView/MapView";

import "./Booking.css";

const Booking = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [vehicles, setVehicles] = useContext(UserContext);
  const [booking, setBooking] = useContext(UserContext);

  const navigate = useNavigate();
  const { transportID } = useParams();
  // console.log(transportID);

  // console.log(vehicles);

  const handleBooking = (e) => {
    navigate("/search/" + transportID);
    e.preventDefault();
  };

  const handleBlur = (e) => {
    let isFieldValid = true;
    if (e.target.name === "origin") {
      isFieldValid = e.target.value;
    }
    if (e.target.name === "destination") {
      isFieldValid = e.target.value;
    }

    if (e.target.name === "from") {
      isFieldValid = e.target.value;
    }
    if (e.target.name === "to") {
      isFieldValid = e.target.value;
    }
    if (isFieldValid) {
      const newBookingInfo = { ...booking };
      newBookingInfo[e.target.name] = e.target.value;
      setBooking(newBookingInfo);
    }
    e.preventDefault();
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
            <Form
              onSubmit={handleBooking}
              style={{
                backgroundColor: "lightgray",
                padding: "10px",
                borderRadius: "5px",
              }}
            >
              <Form.Group controlId="validationCustom01">
                <Form.Label>Pick from </Form.Label>
                <Form.Control
                  className="text-muted"
                  type="text"
                  name="origin"
                  placeholder="Origin"
                  // id="origin"
                  // required
                  onBlur={handleBlur}
                />
              </Form.Group>
              <Form.Group controlId="validationCustom01">
                <Form.Label>Pick to </Form.Label>
                <Form.Control
                  style={{ width: "100%" }}
                  className="text-muted"
                  type="text"
                  name="destination"
                  placeholder="Destination"
                  // id="destination"
                  // required
                  onBlur={handleBlur}
                />
              </Form.Group>
              <Row>
                <Form.Group as={Col} md="6">
                  <Form.Label>From </Form.Label>
                  <Form.Control
                    className="text-muted"
                    type="date"
                    name="from"
                    // placeholder="from"
                    // id="from"
                    // required
                    onBlur={handleBlur}
                  />
                </Form.Group>
                <Form.Group as={Col} md="6">
                  <Form.Label>To</Form.Label>
                  <Form.Control
                    className="text-muted"
                    type="date"
                    name="to"
                    // placeholder="to"
                    id="to"
                    // required
                    onBlur={handleBlur}
                  />
                </Form.Group>
              </Row>
              <div className="mt-3 d-grid">
                <Button variant="warning" type="submit">
                  Book now
                </Button>
              </div>
            </Form>
          </Col>
          <Col md={8} className="map-spacing" sm={12}>
            <MapView />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Booking;
